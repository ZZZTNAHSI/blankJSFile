import { Link, redirect, useNavigate, useParams, useSubmit, useNavigation } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { fetchEvent, updateEvent, queryClient} from '../../util/http.js';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
// import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EditEvent() {
  const navigate = useNavigate();
  const {state} = useNavigation();
  const params = useParams();
  const submit = useSubmit();
  const id = params.id;



  const {data, isError, error} = useQuery({
    queryFn: ({signal}) => fetchEvent({signal, id}),
    queryKey: ["events", id],
    staleTime : 10000
  });

  const {mutate} = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      const newEvent = data.event;
      await queryClient.cancelQueries({queryKey: ["events", id]});
      const previousEvent = queryClient.getQueryData(["events", id]);

      queryClient.setQueryData(["events", id], newEvent);

      return {
        previousEvent 
      };
    },
    onError: (error, data, context) => {
      queryClient.setQueryData(["events", id], context.previousEvent);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["events", id]);
    }
  });


  function handleSubmit(formData) {
    submit(formData, {
      method: "PUT"
    });
  }

  function handleClose() {
    navigate('../');
  }

  let content;

  if (isError) {
    content = <><ErrorBlock title="Failed to load event" message={error.info?.message || "Failed to load event. Please check your inputs and try again."}/><div className='form-actions'><Link to="../" className='button'>Okay</Link></div></>
  }
  if (data) {
    content =       
    <EventForm inputData={data} onSubmit={handleSubmit}>
      {state === "submitting" ? <p>Sending data...</p> : <>
        <Link to="../" className="button-text">
      Cancel
      </Link>
      <button type="submit" className="button">
        Update
      </button>
      </> }

  </EventForm>
  }

  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}

export function loader({params}) {
  return queryClient.fetchQuery({
    queryFn: ({signal}) => fetchEvent({signal, id: params.id}),
    queryKey: ["events", params.id]
  });
} 

export async function action({params, request}) {
  const formData = await request.formData();
  const updatedEventData = Object.fromEntries(formData);
  await updateEvent({id: params.id, event: updatedEventData});
  await queryClient.invalidateQueries(["events"]);
  return redirect("../");
}