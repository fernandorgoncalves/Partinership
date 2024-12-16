import React, { useState } from 'react';

// Simula os dados de pontuação armazenados
const pointsData = {
  1: 120, // Pontos do Consultor A
  2: 95,  // Pontos do Consultor B
  3: 150, // Pontos do Consultor C
  4: 80,  // Pontos do Consultor D
};

const consultants = [
  { id: 1, name: 'Consultor A' },
  { id: 2, name: 'Consultor B' },
  { id: 3, name: 'Consultor C' },
  { id: 4, name: 'Consultor D' },
];

const ConsultantScorePage = () => {
  const [consultantId, setConsultantId] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentConsultant, setCurrentConsultant] = useState(null);

  const handleLogin = () => {
    const consultant = consultants.find((c) => c.id === Number(consultantId));
    if (consultant) {
      setCurrentConsultant(consultant);
      setIsLoggedIn(true);
    } else {
      alert('ID de consultor inválido. Tente novamente.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentConsultant(null);
    setConsultantId('');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {!isLoggedIn ? (
        <div>
          <h1>Consulta de Pontuação</h1>
          <p>Insira o seu ID para acessar sua pontuação.</p>
          <input
            type="number"
            placeholder="Digite seu ID"
            value={consultantId}
            onChange={(e) => setConsultantId(e.target.value)}
            style={{
              padding: '8px',
              width: '200px',
              marginBottom: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
          <br />
          <button
            onClick={handleLogin}
            style={{
              backgroundColor: '#4caf50',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              cursor: 'pointer',
              borderRadius: '4px',
              transition: 'background-color 0.3s ease',
            }}
          >
            Entrar
          </button>
        </div>
      ) : (
        <div>
          <h1>Bem-vindo, {currentConsultant.name}!</h1>
          <p>Sua pontuação é:</p>
          <div
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              margin: '20px auto',
              padding: '20px',
              width: '200px',
              border: '2px solid #4caf50',
              borderRadius: '8px',
              backgroundColor: '#f7f7f7',
            }}
          >
            {pointsData[currentConsultant.id]} pontos
          </div>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              cursor: 'pointer',
              borderRadius: '4px',
              transition: 'background-color 0.3s ease',
            }}
          >
            Sair
          </button>
        </div>
      )}
    </div>
  );
};

export default ConsultantScorePage;
