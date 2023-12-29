import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { BrowserRouter, Route, Navigate, Routes, useLocation } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import LoginPage from "./pages/LoginPage";
import Mainpage from "./pages/MainPage";
import SignupPage from "./pages/SignupPage";
import DashBoardPage from './pages/DashBoardPage';
import Header from './components/Header';
import MenuBar from './components/MeunBar';
import DataSetPage from './pages/DataSetPage';
import ProjectPage from './pages/ProjectPage';
import DataSetMapPage from './pages/DataSetMapPage';
import SystemPage from './pages/SystemPage';

// 새로운 컴포넌트를 정의합니다.
function RouteHandler() {
  const location = useLocation();
  const excludeHeaderPaths = ['/login', '/signup'];

  // 현재 경로가 excludeHeaderPaths에 포함되지 않는 경우에만 Header를 렌더링합니다.
  return !excludeHeaderPaths.includes(location.pathname) ? (<><Header /> <MenuBar/></>) : null;
}

// 이제 App 컴포넌트에서 RouteHandler를 사용합니다.
function App() {
  const isLoggedIn = useSelector((state) => state.auth && state.auth.isLoggedIn);

  return (
    <BrowserRouter>
    <GlobalStyles/>
      <RouteHandler />
      <Routes>
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <LoginPage />} />
        <Route path="/signup" element={isLoggedIn ? <Navigate to="/" /> : <SignupPage />} />
        <Route path="/" element={isLoggedIn ? <Mainpage /> : <Navigate to="/login" />} />
        
           <Route path="/home" element={<Mainpage/>} />
           <Route path='/project' element={<ProjectPage/>} />
           <Route path="/dashboard" element={<DashBoardPage/>} />
           <Route path="/dataset" element={<DataSetPage/>} />
           <Route path="/dataset/map" element={<DataSetMapPage/>} />
           <Route path="/system" element={<SystemPage/>} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;

