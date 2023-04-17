import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetings() {
  const history = useNavigate();
  function addMettupHandler(meetingData) {
    console.log(meetingData);
    fetch(
      "https://react-exp-demo-default-rtdb.asia-southeast1.firebasedatabase.app/meetup.json",
      {
        method: "POST",
        body: JSON.stringify(meetingData),
        headers: {
          "Content-Type": "Application/json",
        },
      }
    ).then(() => {
      history("/");
    });
  }
  return (
    <div>
      <h1>Add New Meetings</h1>
      <NewMeetupForm onAddition={addMettupHandler}></NewMeetupForm>
    </div>
  );
}

export default NewMeetings;
