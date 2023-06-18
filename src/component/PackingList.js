import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onUpdateItem,
  onClearLIst,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }
  if (sortBy === "description") {
    sortedItems = items.sort((a, b) => a.description > b.description);
  }
  if (sortBy === "packed") {
    sortedItems = items.sort((a, b) => Number(a.packed) > Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onUpdateItem={onUpdateItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearLIst}>Clear List</button>
      </div>
    </div>
  );
}
