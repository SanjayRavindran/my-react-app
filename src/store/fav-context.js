import { createContext, useState } from "react";

const FavContext = createContext({
  fav: [],
  totalFav: 0,
  addFav: (FavMeetup) => {},
  removeFav: (meetupId) => {},
  itemIsFav: (meetupId) => {},
});

export function FavContextProvider(props) {
  const [userFavs, setUserFavs] = useState([]);

  function addFavHandler(FavMeetup) {
    setUserFavs((prevUserFavs) => {
      return prevUserFavs.concat(FavMeetup);
    });
  }

  function removeFavHandler(meetupId) {
    setUserFavs((prevUserFavs) => {
      return prevUserFavs.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavHandler(meetupId) {
    return userFavs.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    fav: userFavs,
    totalFav: userFavs.length,
    addFav: addFavHandler,
    removeFav: removeFavHandler,
    itemIsFav: itemIsFavHandler,
  };

  return (
    <FavContext.Provider value={context}>{props.children}</FavContext.Provider>
  );
}

export default FavContextProvider;