import { useState } from 'react';
import { useLocalStorageState } from './hooks/useLocalStorageState'; 
import ItemList from './components/ItemList';
import './App.css';

const seedItems = [
  { 
    id: 1, 
    title: 'React Components', 
    tags: ['react'],
    favorite: false 
  },
  { 
    id: 2, 
    title: 'JavaScript Logic', 
    tags: ['js'],
    favorite: true
  },
  { 
    id: 3, 
    title: 'CSS Layouts', 
    tags: ['css'],
    favorite: false 
  },
  { 
    id: 4, 
    title: 'UI Design Principles', 
    tags: ['design'],
    favorite: false 
  },
  { 
    id: 5, 
    title: 'Vite & Build Tools', 
    tags: ['frontend'],
    favorite: false 
  }
];

function App() {
  const [items, setItems] = useLocalStorageState('mini-hub-items', seedItems);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [editingId, setEditingId] = useState(null);

  const allTags = [...new Set(items.flatMap(item => item.tags || []))].sort();

  const filteredItems = items.filter(item => {
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === '' || 
      item.tags?.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };
  
  const handleToggleFavorite = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, favorite: !item.favorite } : item
    ));
  };

  const handleUpdateItem = (id, updatedData) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, ...updatedData } : item
    ));
    setEditingId(null);
  };

  return (
    <div className="app">
      <h1>React Mini Hub</h1>
      <main className="app-main">
        <section className="filter-section">
          <input
            type="text"
            className="search-input"
            placeholder="Suchen..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="tag-filter">
            <button 
              onClick={() => setSelectedTag('')} 
              className={selectedTag === '' ? 'active' : ''}
            >
              Alle
            </button>
            {allTags.map(tag => (
              <button 
                key={tag} 
                onClick={() => setSelectedTag(tag)} 
                className={selectedTag === tag ? 'active' : ''}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        <section className="app-content">
          <ItemList 
            items={filteredItems} 
            onDelete={handleDeleteItem}
            onToggleFavorite={handleToggleFavorite}
            editingId={editingId}
            onStartEdit={setEditingId}
            onCancelEdit={() => setEditingId(null)}
            onUpdateItem={handleUpdateItem}
          />
        </section>
      </main>
    </div>
  );
}

export default App;