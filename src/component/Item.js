export default function Item({ item, onDeleteItem, onUpdateItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.checked}
        onChange={() => onUpdateItem(item.id)}
      />
      <span>{item.quantity}</span>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </span>
      <button
        onClick={() => {
          onDeleteItem(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
