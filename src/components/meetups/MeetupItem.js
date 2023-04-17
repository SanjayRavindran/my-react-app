import { useContext } from "react";

import styles from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavContext from "../../store/fav-context";

function MeetupItem(props) {
  const favCtx = useContext(FavContext);
  
  const itemIsFav = favCtx.itemIsFav(props.id);

  function toggleFavStatusHandler() {
    if (itemIsFav) {
      favCtx.removeFav(props.id);
    } else {
      favCtx.addFav({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={styles.content}>
          <h3> {props.title} </h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavStatusHandler}>
            {itemIsFav ? "Remove from Favs" : "To Favs"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
