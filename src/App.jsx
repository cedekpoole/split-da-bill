import { useState } from "react";
import FriendList from "./components/FriendList";

const fakeFriends = [
  {
    id: 1,
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    total: 0,
  },
  {
    id: 2,
    name: "Jane Doe",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    total: 10,
  },
  {
    id: 3,
    name: "John Smith",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    total: 20,
  },
];

function App() {
  const [friends, setFriends] = useState(fakeFriends);

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center my-4">Split Da Bill</h1>
        <FriendList friends={friends} setFriends={setFriends} />
      </div>
    </>
  );
}

export default App;
