import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import ChooseTrip from '../pages/ChooseTrip';
import TravelHistory from '../pages/TravelHistory';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/driver" element={<ChooseTrip />} />
      <Route path="/TravelHistory" element={<TravelHistory />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
