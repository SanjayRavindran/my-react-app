import { Routes, Route } from "react-router-dom";
import AllMeetings from "./pages/All";
import FavMeetings from "./pages/Fav";
import NewMeetings from "./pages/New";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetings />} />
        <Route path="/new-meetup" element={<NewMeetings />} />
        <Route path="/favorites" element={<FavMeetings />} />
      </Routes>
    </Layout>
  );
}

export default App;
