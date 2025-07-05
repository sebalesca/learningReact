import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside
      style={{
        width: '200px',
        backgroundColor: '#f5f5f5',
        padding: '1rem',
        borderRight: '1px solid #ddd',
        height: '100vh',
        boxSizing: 'border-box',
      }}
    >
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>Inicio</li>
          <li>Perfil</li>
          <li>Configuración</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
