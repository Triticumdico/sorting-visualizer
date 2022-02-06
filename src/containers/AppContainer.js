import React from 'react';
import '../styles/App.css';
import SortingVisualizer from '../components/SortingVisualizer';
import NavbarSort from '../components/NavbarComponent';

export default function App() {
  return (
    <div className="App">
      <NavbarSort/>
      <SortingVisualizer> </SortingVisualizer>
    </div>
  );
}
