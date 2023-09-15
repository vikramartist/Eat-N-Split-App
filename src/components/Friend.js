import EditFriend from "./EditFriend";
import "./friend.css";

export default function Friend({
  data,
  onclick,
  selectedFriend,
  deleteFriend,
  images,
  OnEdit,
  editFriend,
  update
}) {
  const isSelected = selectedFriend?.id === data.id;
  const isEdited = editFriend?.id === data.id;

  return (
    <div className={isSelected || isEdited ? "friend selected" : "friend"}>
      <img className="image" src={data.image} alt={data.id} />
      <section className="content">
        <p>{data.name}</p>
        <span className={data.balance < 0 ? "red" : "green"}>
          {data.balance > 0
            ? `${data.name} owes you Rs.${data.balance}`
            : data.balance < 0
            ? `You owe ${data.name} Rs.${Math.abs(data.balance)}`
            : `You and ${data.name} are even.`}
        </span>
      </section>
      <section className="buttons">
        <button className="btn" onClick={() => onclick(data)}>
          {isSelected ? "Close" : "Select"}
        </button>
        <button className="btn" onClick={() => OnEdit(data)}>
          {isEdited ? "Close" : "Edit"}
        </button>
        <button className="btn" onClick={() => deleteFriend(data.id)}>
          Delete
        </button>
      </section>
      {isEdited && (
        <EditFriend
          key={data.id}
          update={update}
          data={editFriend}
          images={images}
        />
      )}
    </div>
  );
}
