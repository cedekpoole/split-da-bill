import { useState } from "react";
import FriendForm from "./components/FriendForm";

const fakeFriends = [
  {
    id: 1,
    name: "John Doe",
    image: "https://randomuser.me/api",
  },
  {
    id: 2,
    name: "Jane Doe",
    image: "https://randomuser.me/api",
  },
  {
    id: 3,
    name: "John Smith",
    image: "https://randomuser.me/api",
  },
  {
    id: 4,
    name: "Jane Smith",
    image: "https://randomuser.me/api",
  },
];

function App() {
  const [friends, setFriends] = useState(fakeFriends);

  return (
    <>
      <h1 className="text-2xl font-bold text-center my-4">Split Da Bill</h1>
      <FriendForm friends={friends} setFriends={setFriends} />
    </>
  );
}

export default App;
