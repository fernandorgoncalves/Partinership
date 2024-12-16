import React, { useState } from 'react';
import './Dashpanel.css';

const consultants = [
  { id: 1, name: 'Consultor A' },
  { id: 2, name: 'Consultor B' },
  { id: 3, name: 'Consultor C' },
  { id: 4, name: 'Consultor D' },
];

const Dashboard = () => {
  const [points, setPoints] = useState({});

  const handleSendPoints = (id) => {
    alert(`Pontos enviados para o ${consultants.find(c => c.id === id).name}: ${points[id] || 0}`);
    // Aqui é configurado a lógica para enviar os pontos para o backend
  };

  const handleChangePoints = (id, value) => {
    setPoints((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="dashboard-container">
      <h1>Envio de Pontuação para Consultores</h1>
      <div className="dashboard-grid">
        {consultants.map((consultant) => (
          <div key={consultant.id} className="dashboard-card">
            <h2>{consultant.name}</h2>
            <input
              type="number"
              placeholder="Digite a pontuação"
              value={points[consultant.id] || ''}
              onChange={(e) => handleChangePoints(consultant.id, e.target.value)}
            />
            <button onClick={() => handleSendPoints(consultant.id)}>
              Enviar Pontos
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
