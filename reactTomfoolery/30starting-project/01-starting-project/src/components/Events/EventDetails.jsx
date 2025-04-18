import { Link, Outlet, useNavigate, useParams,  } from 'react-router-dom';

import Header from '../Header.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteEvent } from '../../util/http.js';
import { queryClient, fetchEvent } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import { useState } from 'react';
import Modal from '../UI/Modal.jsx';

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const {mutate, isPending: isPendingDeletion, isError: isErrorDeleting, error: deleteError} = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none"
      });
      navigate("/events");
     },
  });

  const {data, isPending, isError, error} = useQuery({
    queryFn: ({signal}) => fetchEvent({id,signal }),
    queryKey: ["events", id],
  });
  function handleStartDelete() {
    setIsDeleting(true);
  }
  function handleStopDelete() {
    setIsDeleting(false);
  }

  function handleDelete () {
      mutate({id});
  }


  return (
    <>
      {isDeleting && <Modal onClose={handleStopDelete}>
        <h2>Are you sure?</h2>
        <p>Do you really want to delete this devent? This action can't be undone.
        </p>
        <div className='form-actions'>
          {isPendingDeletion && <p>Deleting, please wait...</p>}
          {!isPendingDeletion && <>
            <button onClick={handleStopDelete} className='button-text'>Cancel</button>
            <button onClick={handleDelete} className='button'>Delete</button>
          </>}
        </div>
        {isErrorDeleting && <ErrorBlock title="Failed to delete event" message={deleteError.info?.message || "Failed to delete event."}/>}
      </Modal>}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {data  && <article id="event-details">
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={handleStartDelete}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={"http://localhost:3000/" + data.image} alt="" />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>{data.date} @ {data.time}</time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
      </article>}
      {isError  && <ErrorBlock title="An error has occured while getting the event details" message={error.info?.message || "Something went wrong"} />}
      {isPending  && <LoadingIndicator />}
    </>
  );
}
