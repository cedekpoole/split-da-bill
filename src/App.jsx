import { useState } from "react";
import FriendList from "./components/FriendList";
import BillForm from "./components/BillForm";

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
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          <div className="md:col-span-1">
            <FriendList friends={friends} setFriends={setFriends} />
          </div>
          <div className="md:col-span-1 large:col-span-2">
            <BillForm friends={friends} setFriends={setFriends} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
