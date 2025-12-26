import { Routes, Route, Navigate } from 'react-router-dom'; 
import LoginPage from '../pages/account/LoginPage'
import SignupPage from '../pages/account/SignupPage'


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />    
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />

        </Routes>
    );
};

export default AppRoutes;