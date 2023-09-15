import { useState } from "react";
import "./edit.css";

export default function EditFriend({ data, images, update }) {
  const [image, setImage] = useState(data.image);
  const [name, setName] = useState(data.name);
  const [balance, setBalance] = useState(data.balance);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image || !name) return;
    const id = data.id;
    const editedValue = {
      id: id,
      name: name,
      balance: balance,
      image: image
    };
    update(editedValue);
  };

  return (
    <div className="edit">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <section>
          <label>Edit Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </section>
        <section>
          <label>Edit Balance</label>
          <input
            type="text"
            id="balance"
            name="balance"
            value={Math.abs(balance) >= 0 ? Math.abs(balance) : 0}
            onChange={(e) => setBalance(Number(e.target.value))}
          />
        </section>
        <section className="edit-image">
          <img className="image" src={image} alt={data.name} />
          <select onChange={(e) => setImage(e.target.value)} value={image}>
            {images.map((img) => (
              <option value={img}>{img}</option>
            ))}
          </select>
        </section>
        <button className="btn">Edit Friend</button>
      </form>
    </div>
  );
}
