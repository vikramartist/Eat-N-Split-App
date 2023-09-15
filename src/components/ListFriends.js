import FormAddFriend from "./FormAddFriend";
import Friend from "./Friend";
import "./listfriends.css";

const images = [
  "https://res.cloudinary.com/dba8hnojy/image/upload/v1694522427/Eat-N-Split-App/9440461_bthihn.jpg",
  "https://res.cloudinary.com/dba8hnojy/image/upload/v1694522427/Eat-N-Split-App/9439843_gwfbdw.jpg",
  "https://res.cloudinary.com/dba8hnojy/image/upload/v1694522426/Eat-N-Split-App/9439685_utpfyf.jpg",
  "https://res.cloudinary.com/dba8hnojy/image/upload/v1694522426/Eat-N-Split-App/7309670_iyubxc.jpg",
  "https://res.cloudinary.com/dba8hnojy/image/upload/v1694522426/Eat-N-Split-App/view-3d-man-holding-soda-can_ffjhji.jpg",
  "https://res.cloudinary.com/dba8hnojy/image/upload/v1694522426/Eat-N-Split-App/9434937_hxcefu.jpg",
];

export default function ListFriends({
  data,
  setDisplay,
  onDisplay,
  addFriend,
  onSelection,
  selectedFriend,
  deleteFriend,
  OnEdit,
  editFriend,
  update,
}) {
  return (
    <div className="list-friends">
      {data.map((friend) => (
        <Friend
          key={friend.id}
          data={friend}
          selectedFriend={selectedFriend}
          onclick={onSelection}
          deleteFriend={deleteFriend}
          images={images}
          OnEdit={OnEdit}
          editFriend={editFriend}
          update={update}
        />
      ))}

      {setDisplay && <FormAddFriend handleNewFriend={addFriend} />}
      <button className="add-btn" onClick={() => onDisplay(!setDisplay)}>
        {setDisplay ? "Close" : "Add Friend"}
      </button>
    </div>
  );
}
