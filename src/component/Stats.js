export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start packing for your upcoming trip</em>
      </footer>
    );
  }

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percents = Math.round((packedItems / totalItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percents === 0
          ? `Start packing `
          : percents === 100
          ? `Packing ${percents}% complete. Get Ready to go to the trip 🧳`
          : `You have ${totalItems} items on your list, and you already packed ${packedItems} (${percents}%)`}
      </em>
    </footer>
  );
}
