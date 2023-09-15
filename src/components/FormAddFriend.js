import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./addFriend.css";

const images = [
  "https://res.cloudinary.com/dba8hnojy/image/upload/v1694522427/Eat-N-Split-App/9440461_bthihn.jpg",
  "https://res.cloudinary.com/dba8hnojy/image/upload/v1694522427/Eat-N-Split-App/9439843_gwfbdw.jpg",
  "https://res.cloudinary.com/dba8hnojy/image/upload/v1694522426/Eat-N-Split-App/9439685_utpfyf.jpg",
  "https://res.cloudinary.com/dba8hnojy/image/upload/v1694522426/Eat-N-Split-App/7309670_iyubxc.jpg",
  "https://res.cloudinary.com/dba8hnojy/image/upload/v1694522426/Eat-N-Split-App/view-3d-man-holding-soda-can_ffjhji.jpg",
  "https://res.cloudinary.com/dba8hnojy/image/upload/v1694522426/Eat-N-Split-App/9434937_hxcefu.jpg",
];

export default function FormAddFriend({ handleNewFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !image) return;
    const newFriend = {
      id: uuid(),
      name: name,
      image: image,
      balance: 0.0,
    };
    handleNewFriend(newFriend);
    setName("");
    setImage("");
  };
  return (
    <div className="add-friend">
      <form className="form" onSubmit={handleSubmit}>
        <section className="form-input">
          <label htmlFor="name">Friend Name</label>
          <input
            type="text"
            className="input"
            id="name"
            name="friend-form"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </section>
        <section className="form-input">
          <label htmlFor="imageUrl">Image URL</label>
          <img className="image" src={image} alt={name} />
          <select onChange={(e) => setImage(e.target.value)}>
            {images.map((img, idx) => (
              <option key={idx} value={images[idx]}>
                {images[idx]}
              </option>
            ))}
          </select>
        </section>
        <button className="form-btn">Add</button>
      </form>
    </div>
  );
}
