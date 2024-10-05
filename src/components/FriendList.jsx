import { useState } from "react";
import FriendCard from "./FriendCard";
import FriendForm from "./FriendForm";

export default function FriendList({ friends, setFriends }) {
  const [addFriend, setAddFriend] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-4 mb-4">
        {friends.length === 0 && (
          <p className="text-center text-lg font-semibold mt-4 max-w-xs border shadow-md">
            No friends to display
          </p>
        )}
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
      {addFriend ? (
        <FriendForm friends={friends} setFriends={setFriends} />
      ) : (
        <div className="py-2 flex justify-end max-w-xs">
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
