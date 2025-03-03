import { useParams, useLoaderData} from "react-router-dom"
import EventItem from "../components/EventItem";

export default function EventDetail() {
    const data = useLoaderData();
    return (<>
        <EventItem event={data.event}/>
    </>)
}

export async function loader({request, params}) {
    const id = params.id
    const response = await fetch("http://localhost:8080/events/" + id);
    if (!response.ok) {
        throw new Response(JSON.stringify({
            message: "Could not get details for seelcted event."
        }, {status : 500}));
    } else {
        return response;
    }
}