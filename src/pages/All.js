import MeetupList from "../components/meetups/MeetupLists";
import { useState, useEffect } from "react";

function AllMeetings() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetings, setLoadedMeetings] = useState([]);
  const url =
    "https://react-exp-demo-default-rtdb.asia-southeast1.firebasedatabase.app/meetup.json";

  useEffect(() => {
    setIsLoading(true);

    fetch(url)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetings(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading......</p>
      </section>
    );
  }
  return (
    <div>
      <section>
        <h1>All Meetings</h1>
        <MeetupList meetups={loadedMeetings} />
      </section>
    </div>
  );
}

export default AllMeetings;
