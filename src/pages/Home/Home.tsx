import React from 'react';
import Box from '@mui/material/Box';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import NotificationsCarousel from '../../components/NotificationsCarousel';

const Home: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Header />
        <Box sx={{ p: 2 }}>
          <NotificationsCarousel />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
