import defaultAvatar from "../assets/no-profile-picture-15257.png";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function FriendForm({
  addFriend,
  setAddFriend,
  friends,
  setFriends,
}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFriend = {
      id: uuidv4(),
      name,
      image: image || defaultAvatar,
      total: 0,
    };

    setFriends([...friends, newFriend]);
    setAddFriend(false);

    setName("");
    setImage("");
  };

  return (
    <div className="bg-[#f1f1f1] shadow-md rounded-lg max-w-xs flex flex-col">
      <div
        className="text-end text-2xl mr-3 cursor-pointer"
        onClick={() => setAddFriend(!addFriend)}
      >
        x
      </div>
      <form className="flex flex-col space-y-4 p-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="text-lg font-semibold mr-4">
            Name:
          </label>
          <input
            name="name"
            type="text"
            className="border rounded px-4 py-2"
            placeholder="Enter friend's name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="image" className="text-lg font-semibold mr-4">
            Image:
          </label>
          <input
            name="image"
            type="url"
            className="border rounded px-4 py-2"
            placeholder="Enter image url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-36"
          >
            Add New Friend
          </button>
        </div>
      </form>
    </div>
  );
}
