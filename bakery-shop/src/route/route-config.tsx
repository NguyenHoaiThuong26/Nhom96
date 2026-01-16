import { Routes, Route, Navigate } from 'react-router-dom'; 
import LoginPage from '../pages/account/LoginPage'
import SignupPage from '../pages/account/SignupPage'
import AboutPage from '../pages/AboutPage'
import ProfilePage from '../pages/account/ProfilePage'
import ProtectedRoute from "../route/ProtectedRoute"
import HomePage from '../pages/HomePage'


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} /> 

            {/* Public */}   
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/home" element={<HomePage />} />

            {/* Protected */}
            <Route path="/profile" 
            element={
                <ProtectedRoute>
                    <ProfilePage />
                </ProtectedRoute>
            } />


        </Routes>
    );
};

export default AppRoutes;