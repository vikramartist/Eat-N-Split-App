import { useEffect, useState } from "react";
import ListFriends from "./components/ListFriends";

import "./styles.css";
import { v4 as uuid } from "uuid";
import SplitBill from "./components/SplitBill";

const initialData = [
  {
    id: uuid(),
    name: "John Doe",
    image:
      "https://res.cloudinary.com/dba8hnojy/image/upload/v1694522427/Eat-N-Split-App/9440461_bthihn.jpg",
    balance: 1000.25,
  },
  {
    id: uuid(),
    name: "Jane Smith",
    image:
      "https://res.cloudinary.com/dba8hnojy/image/upload/v1694522427/Eat-N-Split-App/9439843_gwfbdw.jpg",
    balance: -2500.75,
  },
  {
    id: uuid(),
    name: "Bob Johnson",
    image:
      "https://res.cloudinary.com/dba8hnojy/image/upload/v1694522426/Eat-N-Split-App/9439685_utpfyf.jpg",
    balance: 500.0,
  },
];

const getData = () => {
  const data = JSON.parse(localStorage.getItem("datas"));
  if (!data) return [];
  return data;
};

export default function App() {
  const [displayMessage, setDisplayMessage] = useState(false);
  const [datas, setDatas] = useState(getData);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [editedFriend, setEditedFriend] = useState(null);

  useEffect(() => {
    localStorage.setItem("datas", JSON.stringify(datas));
  }, [datas]);

  const handleAddFriend = (friend) => {
    setDatas((datas) => [...datas, friend]);
    setDisplayMessage(false);
  };

  const handleSelection = (friend) => {
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    setDisplayMessage(false);
  };

  const handleSplitBill = (value) => {
    setDatas((data) =>
      data.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };

  const handleDeleteFriend = (id) => {
    setDatas((data) => data.filter((friend) => friend.id !== id));
  };

  const handleEdit = (friend) => {
    setEditedFriend((curr) => (curr?.id === friend.id ? null : friend));
  };

  const editFriend = (value) => {
    setDatas((data) =>
      data.map((friend) =>
        friend.id === editedFriend.id
          ? {
              ...friend,
              name: value.name,
              balance: value.balance,
              image: value.image,
            }
          : friend
      )
    );
    setEditedFriend(null);
  };

  return (
    <div className="App">
      <Heading />
      <div className="card">
        <ListFriends
          setDisplay={displayMessage}
          onDisplay={setDisplayMessage}
          data={datas}
          addFriend={handleAddFriend}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
          deleteFriend={handleDeleteFriend}
          OnEdit={handleEdit}
          editFriend={editedFriend}
          update={editFriend}
        />
        {selectedFriend && (
          <SplitBill data={selectedFriend} onSplitBill={handleSplitBill} />
        )}
      </div>
    </div>
  );
}

function Heading() {
  return <h1 className="title">Eat-N-Split</h1>;
}
