import ItemCard from './ItemCard';

function ItemList({ 
  items, 
  onDelete, 
  onToggleFavorite, 
  editingId, 
  onStartEdit, 
  onCancelEdit, 
  onUpdateItem 
}) {
  if (items.length === 0) {
    return (
      <div className="empty-state">
        <h3>Keine Items gefunden</h3>
        <p>Versuche einen anderen Suchbegriff oder Filter</p>
      </div>
    );
  }

  return (
    <div className="item-list">
      {items.map(item => (
        <ItemCard
          key={item.id}
          item={item}
          isEditing={editingId === item.id}
          onDelete={onDelete}
          onToggleFavorite={onToggleFavorite}
          onStartEdit={onStartEdit}
          onCancelEdit={onCancelEdit}
          onUpdateItem={onUpdateItem}
        />
      ))}
    </div>
  );
}

export default ItemList;