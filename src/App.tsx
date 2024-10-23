import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MenuCreationPage from './pages/MenuCreationPage';
import CustomizeTemplatePage from './pages/CustomizeTemplatePage';
import UploadMenuPage from './pages/UploadMenuPage';
import ViewMenuPage from './pages/ViewMenuPage';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<MenuCreationPage />} />
          <Route path="/customize-template" element={<CustomizeTemplatePage />} />
          <Route path="/upload-menu" element={<UploadMenuPage />} />
          <Route path="/menu/:menuId" element={<ViewMenuPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;