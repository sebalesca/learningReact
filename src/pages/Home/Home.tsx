import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import NotificationsCarousel from '../../components/NotificationsCarousel';

const Home: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <div style={{ padding: '1rem' }}>
          <NotificationsCarousel />
        </div>
      </div>
    </div>
  );
};

export default Home;
