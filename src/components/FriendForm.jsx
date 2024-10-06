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
    <div className="bg-slate-200 shadow-md rounded-lg flex flex-col">
      <div className="text-end mr-4 mt-2">
        <span
          className="text-2xl cursor-pointer"
          onClick={() => setAddFriend(!addFriend)}
        >
          x
        </span>
      </div>
      <form className="flex flex-col space-y-3 p-4" onSubmit={handleSubmit}>
        <div className="flex justify-start items-center">
          <label htmlFor="name" className="text-md font-semibold mr-3">
            Name:
          </label>
          <input
            name="name"
            type="text"
            className="border rounded px-4 py-1"
            placeholder="Enter friend's name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-start items-center">
          <label htmlFor="image" className="text-md font-semibold mr-3">
            Image:
          </label>
          <input
            name="image"
            type="url"
            className="border rounded px-4 py-1"
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
