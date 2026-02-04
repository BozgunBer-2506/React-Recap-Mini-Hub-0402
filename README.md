# React Mini Hub 🚀

A modern, feature-rich React application for managing and organizing your learning resources with tags, favorites, and search functionality.

![React](https://img.shields.io/badge/React-18.x-61dafb?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.x-646cff?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

- 🔍 **Real-time Search** - Filter items by title instantly
- 🏷️ **Tag-based Filtering** - Organize and filter items by tags (react, js, css, design, frontend)
- ⭐ **Favorites** - Mark important items with a star
- ✏️ **Inline Editing** - Edit item details without leaving the page
- 💾 **Persistent Storage** - All changes saved to localStorage
- 🎨 **Modern UI** - Dark theme with smooth animations and hover effects
- 📱 **Responsive Design** - Works perfectly on mobile, tablet, and desktop

## 🎯 Demo

[🚀 Live Demo](https://react-recap-mini-hub-0402.vercel.app/)

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/BozgunBer-2506/React-Recap-Mini-Hub-0402.git

# Navigate to project directory
cd React-Recap-Mini-Hub-0402

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173`

## 📦 Project Structure

```
src/
├── components/
│   ├── ItemCard.jsx       # Individual item card component
│   ├── ItemCard.css       # Card-specific styles
│   └── ItemList.jsx       # List container component
├── hooks/
│   └── useLocalStorageState.js  # Custom hook for localStorage sync
├── App.jsx                # Main application component
├── App.css                # Global application styles
└── main.jsx               # Application entry point
```

## 🛠️ Built With

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Modern styling with Grid and Flexbox
- **localStorage API** - Data persistence

## 💡 Key Concepts Demonstrated

### 1. Custom Hooks
```javascript
// useLocalStorageState - Syncs state with localStorage
const [items, setItems] = useLocalStorageState('mini-hub-items', seedItems);
```

### 2. Derived State
```javascript
// Filtered items computed from items and filters
const filteredItems = items.filter(item => {
  const matchesSearch = /* ... */;
  const matchesTag = /* ... */;
  return matchesSearch && matchesTag;
});
```

### 3. Conditional Rendering
```javascript
// Different UI for edit mode vs normal mode
if (isEditing) {
  return <EditForm />;
}
return <NormalView />;
```

### 4. Component Composition
```javascript
<ItemList>
  <ItemCard />
  <ItemCard />
  <ItemCard />
</ItemList>
```

## 🎨 Features Breakdown

### Search & Filter
- Live search by item title
- Tag-based filtering with visual feedback
- Combined search + tag filtering (AND logic)
- Clear visual indication of active filters

### Item Management
- **Create**: Add new items (planned feature)
- **Read**: View items in card layout
- **Update**: Edit title, URL, and tags inline
- **Delete**: Remove items with confirmation

### Favorites System
- Toggle favorite status with star icon
- Visual distinction for favorite items (golden border)
- Persisted across sessions

### Edit Mode
- Inline editing without page navigation
- Real-time validation
- Keyboard support (ESC to cancel)
- Auto-focus on title field

## 🔧 Configuration

### Customizing Tags
Edit the `tagColors` object in `ItemCard.jsx`:

```javascript
const tagColors = {
  react: '#61dafb',
  js: '#f7df1e',
  css: '#264de4',
  design: '#ff0055',
  frontend: '#00d8ff',
  // Add your own tags here
};
```

### Seed Data
Modify `seedItems` in `App.jsx` to start with different default items.

## 📱 Responsive Breakpoints

- **Desktop**: > 768px - Grid layout with 2-4 columns
- **Tablet**: 481px - 768px - Grid layout with 1-2 columns
- **Mobile**: ≤ 480px - Single column layout

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**The_Bozgun**

- GitHub: [@BozgunBer-2506](https://github.com/BozgunBer-2506)
- Repository: [React-Recap-Mini-Hub-0402](https://github.com/BozgunBer-2506/React-Recap-Mini-Hub-0402)

## 🙏 Acknowledgments

- Built as part of a React learning exercise
- Inspired by modern task management apps
- Special thanks to the React community

## 🐛 Known Issues

- None at the moment! 🎉

## 🔮 Future Enhancements

- [ ] Add new item form
- [ ] Export/Import data as JSON
- [ ] Dark/Light theme toggle
- [ ] Drag and drop reordering
- [ ] Category grouping
- [ ] Multiple tag filtering (OR logic)
- [ ] Item statistics dashboard
- [ ] PWA support for offline usage

---

**Star ⭐ this repository if you found it helpful!**