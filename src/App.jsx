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
    total: -20,
  },
];

function App() {
  const [friends, setFriends] = useState(fakeFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const updateFriendTotal = (id, amount) => {
    setFriends((prevFriends) =>
      prevFriends.map((friend) =>
        friend.id === id ? { ...friend, total: friend.total + amount } : friend
      )
    );
    setSelectedFriend(null);
  };

  return (
    <>
      <div className="min-h-screen bg-slate-100">
        <div className="container mx-auto p-4 font-poppins">
          <h1 className="text-5xl font-bold text-center my-4 font-abril">
            Split Da Bill
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
            <div className="md:col-span-1">
              <FriendList
                friends={friends}
                setFriends={setFriends}
                selectedFriend={selectedFriend}
                setSelectedFriend={setSelectedFriend}
              />
            </div>
            <div className="md:col-span-1 lg:col-span-2">
              {selectedFriend && friends.length > 0 && (
                <BillForm
                  selectedFriend={selectedFriend}
                  updateFriendTotal={updateFriendTotal}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
