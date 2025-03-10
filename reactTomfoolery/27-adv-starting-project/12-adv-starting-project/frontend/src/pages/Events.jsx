import { Suspense } from 'react';
import EventsList from '../components/EventsList';

import { useLoaderData,  Await} from 'react-router-dom';

function EventsPage() {
    const {events} = useLoaderData();

    return (
    <Suspense fallback={<p style={{textAlign: "center"}}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>)

  // return (
  //   <>
  //     {<EventsList events={data.events} />}
  //   </>
  // );
}

export default EventsPage;

async function loadEvents() {
  const data = await fetch('http://localhost:8080/events');
  if (!data.ok) {
      // return {
      //     isError: true, message: "Could not fetch events."
      // }
      throw new Response(JSON.stringify({
          message: "Could not fetch events"
      }, {
          status: 500
      }));
  } else {
      const newData = await data.json();
      return newData.events;
  }
}

export function loader()  {
  return {
    events: loadEvents()
  }
}