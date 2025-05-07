import React, { useState, useMemo } from 'react';
import './App.css';  

const UserSearch = () => {
  const [users, setUsers] = useState([
    {
      name: 'Leonardo Mejía',
      description: 'Me desvele viendo a la Frieren, por eso el tema',
    },
    { name: 'Frieren', description: 'Una elfa maga' },
    { name: 'Fern', description: 'Aprendiz de Frieren' },
    { name: 'Stark', description: 'Guerrero valiente'},
    { name: 'Heiter', description: 'Sacerdote bolo' },
    { name: 'Aura', description: 'demonio'},
    { name: 'Kraft', description: 'Guerrero'}
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [newUser, setNewUser] = useState({ name: '', description: '' });

  const filteredUsers = useMemo(() => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(lowerSearchTerm) ||
        user.description.toLowerCase().includes(lowerSearchTerm)
    );
  }, [searchTerm, users]);
  
  const handleAddUser = () => {
    if (newUser.name.trim() && newUser.description.trim()) {
      setUsers([...users, newUser]);
      setNewUser({ name: '', description: '' });
    }
  };

  return (
    <div className="container">
      <h2 className="title">Filtro de Usuarios de la Frieren</h2>

      <input
        type="text"
        placeholder="Buscar por nombre o descripción..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="searchInput"
      />

      <h3 className="subTitle">Agregar nuevo usuario</h3>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Nombre"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          className="input"
        />
        <input
          type="text"
          placeholder="Descripción"
          value={newUser.description}
          onChange={(e) =>
            setNewUser({ ...newUser, description: e.target.value })
          }
          className="input"
        />
        <button onClick={handleAddUser} className="button">
          Agregar
        </button>
      </div>

      <h3 className="subTitle">Usuarios Filtrados</h3>
      <ul className="userList">
        {filteredUsers.map((user, index) => (
          <li key={index} className="userItem">
            <strong>{user.name}</strong>: {user.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserSearch;
