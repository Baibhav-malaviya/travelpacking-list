import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 1, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
  { id: 4, description: "Bottles", quantity: 7, packed: false },
  // { id: 5, description: "Books", quantity: 9, packed: false },
  // { id: 6, description: "Perfume", quantity: 3, packed: false },
  // { id: 7, description: "Shirts", quantity: 13, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  function handleUpdateItem(id) {
    // setItems(items.map((item) => console.log(item)));
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const comfirmed = window.confirm("Are you sure you want to clear the list");

    if (comfirmed) setItems([]);
  }
  return (
    <>
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
        onClearLIst={handleClearList}
      />
      <Stats items={items} />
    </>
  );
}
