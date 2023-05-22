import React from 'react'
import { useQuery } from 'react-query';
import './events.css';
// Define the type for the event object
type Event1 = {
    id: number;
    category: string;
    title: string;
    location: string;
    date: string;
    time: string;
    petsAllowed: string;
    organizer: string;
};

const fetchEvents = async (): Promise<Event1[]> => {
    const response = await fetch('https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events');
    const data = await response.json();
    return data;
};


const Events = () => {

    const { isLoading, error, data } = useQuery<Event1[]>('events', fetchEvents);



    if (isLoading) {
        return <div>Loading...</div>;
    }

    //   if (error) {
    //     return <div>Error: {error.message}</div>;
    //   }

    return (
        <div className="events-container">
            <h1 className="events-heading">Events</h1>
            {data && data.length > 0 ? (
                <ul>
                    {data.map(event => (
                        <li key={event.id} className="event-item">
                            <div className="event-title">{event.title}</div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>No events found.</div>
            )}
        </div>
    )
}

export default Events