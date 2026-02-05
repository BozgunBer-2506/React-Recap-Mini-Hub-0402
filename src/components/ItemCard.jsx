import { useState, useEffect } from 'react';
import './ItemCard.css';

function ItemCard({ 
  item, 
  isEditing, 
  onDelete, 
  onToggleFavorite, 
  onStartEdit, 
  onCancelEdit, 
  onUpdateItem 
}) {
  const [title, setTitle] = useState(item.title);
  const [url, setUrl] = useState(item.url || '');
  const [tags, setTags] = useState(item.tags?.join(', ') || '');

  useEffect(() => {
    if (isEditing) {
      setTitle(item.title);
      setUrl(item.url || '');
      setTags(item.tags?.join(', ') || '');
    }
  }, [item, isEditing]);

  const tagColors = {
    react: '#61dafb',
    js: '#f7df1e',
    javascript: '#f7df1e',
    css: '#264de4',
    design: '#ff0055',
    frontend: '#00d8ff'
  };

  const handleSave = () => {
    const trimmedTitle = title.trim();
    
    if (trimmedTitle === '') {
      alert('Titel darf nicht leer sein!');
      return;
    }

    const parsedTags = tags
      .split(',')
      .map(tag => tag.trim().toLowerCase())
      .filter(tag => tag !== '');

    onUpdateItem(item.id, {
      title: trimmedTitle,
      url: url.trim(),
      tags: parsedTags
    });
  };

  if (isEditing) {
    return (
      <div className="item-card editing">
        <div className="edit-form">
          <input 
            type="text"
            className="edit-input"
            placeholder="Titel"
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            autoFocus
          />
          <input 
            type="url"
            className="edit-input"
            placeholder="URL (optional)"
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
          />
          <input 
            type="text"
            className="edit-input"
            placeholder="Tags (kommagetrennt)"
            value={tags} 
            onChange={(e) => setTags(e.target.value)} 
          />
          <div className="edit-actions">
            <button onClick={onCancelEdit}>Abbrechen</button>
            <button onClick={handleSave}>Speichern</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`item-card ${item.favorite ? 'favorite' : ''}`}>
      <div className="card-header">
        <h3>{item.title}</h3>
        <button 
          className={`btn-favorite ${item.favorite ? 'active' : ''}`}
          onClick={() => onToggleFavorite(item.id)}
        >
          {item.favorite ? '★' : '☆'}
        </button>
      </div>

      {item.url && (
        <a 
          href={item.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="item-url"
        >
          {item.url}
        </a>
      )}
      
      {item.tags && item.tags.length > 0 && (
        <div className="tags">
          {item.tags.map((tag, index) => {
            const bgColor = tagColors[tag.toLowerCase()] || '#444';
            
            return (
              <span 
                key={`${tag}-${index}`}
                className="tag" 
                style={{ 
                  backgroundColor: bgColor,
                  color: bgColor === '#f7df1e' ? '#000' : '#fff',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  marginRight: '6px'
                }}
              >
                {tag}
              </span>
            );
          })}
        </div>
      )}

      <div className="actions">
        <button onClick={() => onToggleFavorite(item.id)}>
          {item.favorite ? '★' : '☆'}
        </button>
        <button onClick={() => onStartEdit(item.id)}>Edit</button>
        <button onClick={() => onDelete(item.id)}>Delete</button>
      </div>
    </div>
  );
}

export default ItemCard;