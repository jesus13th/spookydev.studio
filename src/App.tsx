import React from 'react';
import logo from './logo.svg';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout';
import Home from './pages/HomePage';
import Contact from './pages/ContactPage';
import NotFound from './pages/NotFoundPage';
import Projects from './pages/ProjectsPage';
import Blog from './pages/BlogsPage';
import { ProjectTemplate } from './pages/ProjectTemplatePage';
import { BlogTemplate } from './pages/BlogTemplatePage';
import { Admin } from './pages/AdminPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='projects' element={<Projects/>}></Route>
          <Route path='projects/:id' element={<ProjectTemplate/>}></Route>
          <Route path='blogs' element={<Blog/>}></Route>
          <Route path='blogs/:id' element={<BlogTemplate/>}></Route>
          <Route path='contact' element={<Contact/>}></Route>
          <Route path='admin' element={<Admin/>}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
