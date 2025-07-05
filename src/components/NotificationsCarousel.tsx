import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
        <div key={index}>
          <p>{text}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default NotificationsCarousel;
