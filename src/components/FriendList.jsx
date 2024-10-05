import { useState } from "react";
import FriendCard from "./FriendCard";
import FriendForm from "./FriendForm";

export default function FriendList({ friends, setFriends }) {
  const [addFriend, setAddFriend] = useState(false);

  const removeFriend = (id) => {
    const updatedFriends = friends.filter((friend) => friend.id !== id);
    setFriends(updatedFriends);
  };

  return (
    <>
      <div className="flex flex-col gap-4 mb-4">
        <h2 className="text-2xl ">Friends List</h2>
        {friends.length === 0 && (
          <p className="text-center text-lg mt-4 shadow-md p-4">
            No friends to display 😢 Add a friend to get started!
          </p>
        )}
        {friends.map((friend) => (
          <FriendCard
            key={friend.id}
            friend={friend}
            removeFriend={removeFriend}
          />
        ))}
      </div>
      {addFriend ? (
        <FriendForm
          friends={friends}
          setFriends={setFriends}
          addFriend={addFriend}
          setAddFriend={setAddFriend}
        />
      ) : (
        <div className="py-2 flex justify-end">
          <button
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-36"
            onClick={() => setAddFriend(!addFriend)}
          >
            Add Friend
          </button>
        </div>
      )}
    </>
  );
}
