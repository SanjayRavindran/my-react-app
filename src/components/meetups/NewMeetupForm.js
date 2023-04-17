import { useRef } from "react";
import Card from "../ui/Card";
import styles from "./NewMettupForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const newTitle = titleInputRef.current.value;
    const newImageUrl = imageInputRef.current.value;
    const newAddress = addressInputRef.current.value;
    const newDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: newTitle,
      image: newImageUrl,
      address: newAddress,
      description: newDescription,
    };
    props.onAddition(meetupData);
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            required
            rows="5"
            id="description"
            ref={descriptionInputRef}
          />
        </div>
        <div className={styles.actions}>
          <button>Add Meetings</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
