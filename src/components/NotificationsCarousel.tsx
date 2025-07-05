import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const NotificationsCarousel: React.FC = () => {
  const items = [
    'Bienvenido al portal!',
    'No olvides revisar las novedades.',
    'Actualiza tu perfil para recibir más notificaciones.',
  ];

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={5000}
    >
      {items.map((text, index) => (
        <Paper key={index} sx={{ p: 2 }}>
          <Typography>{text}</Typography>
        </Paper>
      ))}
    </Carousel>
  );
};

export default NotificationsCarousel;
