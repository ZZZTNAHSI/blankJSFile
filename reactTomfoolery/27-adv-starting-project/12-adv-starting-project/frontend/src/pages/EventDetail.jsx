import {  redirect, useRouteLoaderData, Await} from "react-router-dom"
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

export default function EventDetail() {
    const {event, events} = useRouteLoaderData("event-detail");
    return (<>
    <Suspense fallback={<p style={{textAlign: "center"}}>Loading...</p>}>
        <Await resolve={event}>
            {(loadedEvent) => <EventItem event={loadedEvent}/>}
        </Await>
    </Suspense>
    <Suspense fallback={<p style={{textAlign: "center"}}>Loading...</p>}>
        <Await resolve={events}>
            {(loadedEvents) => <EventsList events={loadedEvents}/>}
        </Await>
    </Suspense>

    </>)
}
async function loadEvent(id){
    console.log(id)
    const response = await fetch("http://localhost:8080/events/" + id);
    if (!response.ok) {
        throw new Response(JSON.stringify({
            message: "Could not get details for seelcted event."
        }, {status : 500}));
    } else {
        const newRes = await response.json();
        console.log(newRes.event)
        return newRes.event;
    }
}

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
        console.log(newData.events)
        return newData.events;
    }
  }

export async function loader({request, params}) {
    const id = params.eventId;
    return {
        event: await loadEvent(id),
        events: loadEvents()
    }

}

export async function action({params, request}) {
    const id = params.id;
    const response = await fetch("http://localhost:8080/events/" + id, {
        method: request.method,

    });
    if (!response.ok) {
        throw new Response(JSON.stringify({
            message: "Could not delete event."
        }, {status : 500}));
    }
    return redirect("/events");
  }