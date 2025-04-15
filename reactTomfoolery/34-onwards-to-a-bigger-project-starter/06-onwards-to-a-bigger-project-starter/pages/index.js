import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const dummy_meetups = [
    {
        id: 'm1',
        title: 'A first meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Cat_poster_1.jpg/640px-Cat_poster_1.jpg',
        address: 'Some address 5, Some City',
        description: 'This is a first meetup'
    },
    {
        id: 'm2',
        title: 'A second meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Cat_poster_1.jpg/640px-Cat_poster_1.jpg',
        address: 'Some address 5, Some City',
        description: 'This is a second meetup'
    }
];
export default function HomePage() {
    const [loadedMeetups, setLoadedMeetups] = useState([]);
    useEffect(() => {
        setLoadedMeetups(dummy_meetups);
    }, []);
    return (
        <MeetupList meetups={loadedMeetups} />

    );
}

export async function getStaticProps() {
    return {
        props: {
            meetups: dummy_meetups
        },
        revalidate: 10,
        
    };
} 