import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import NotificationsCarousel from '../../components/NotificationsCarousel';

const Home: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar mobileOpen={mobileOpen} onClose={handleDrawerToggle} />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Header onMenuClick={handleDrawerToggle} />
        <Box sx={{ p: 2 }}>
          <NotificationsCarousel />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
