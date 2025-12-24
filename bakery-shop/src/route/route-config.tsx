import { Routes, Route, Navigate } from 'react-router-dom'; 
import LoginPage from '../pages/account/LoginPage'


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />    
            <Route path="/login" element={<LoginPage />} />

        </Routes>
    );
};

export default AppRoutes;