import {  redirect, useRouteLoaderData} from "react-router-dom"
import EventItem from "../components/EventItem";

export default function EventDetail() {
    const data = useRouteLoaderData("event-detail");
    return (<>
        <EventItem event={data.event}/>
    </>)
}

export async function loader({request, params}) {
    const id = params.id;
    const response = await fetch("http://localhost:8080/events/" + id);
    if (!response.ok) {
        throw new Response(JSON.stringify({
            message: "Could not get details for seelcted event."
        }, {status : 500}));
    } else {
        return response;
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