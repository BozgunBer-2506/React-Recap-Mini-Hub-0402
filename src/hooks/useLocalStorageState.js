import { useState, useEffect } from 'react';

// # Custom Hook fuer LocalStorage
export function useLocalStorageState(key, initialValue) {
  // # Initialisierung: Daten aus LocalStorage laden oder Startwert nutzen
  const [state, setState] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  // # Effect: Bei jeder Aenderung im LocalStorage speichern
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}