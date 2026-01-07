import { Routes, Route, Navigate } from 'react-router-dom'; 
import LoginPage from '../pages/account/LoginPage'
import SignupPage from '../pages/account/SignupPage'
import AboutPage from '../pages/AboutPage'
import ProfilePage from '../pages/account/ProfilePage'


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />    
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/profile" element={<ProfilePage />} />

            <Route path="/about" element={<AboutPage />} />


        </Routes>
    );
};

export default AppRoutes;