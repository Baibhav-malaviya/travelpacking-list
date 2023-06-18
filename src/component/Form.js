import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description,
      id: Date.now(),
      packed: false,
      quantity,
    };
    onAddItem(newItem);

    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for Your ❤️ trip</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {[...Array(20).keys()].map(
          //Creating an Array of length:20 before using map with value 0-19
          (num) => (
            <option key={num}>{num + 1}</option>
          )
        )}
      </select>
      <input
        type="text"
        placeholder="items..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
