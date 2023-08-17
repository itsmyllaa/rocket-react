import React, { useState, useEffect } from 'react';
//O useState e o useEffect são exemplos de hooks
//Os hooks são funções que permitem ligar e 
//conectar os recursos de estados e ciclos de vida 
//do react a partir de componentes 100% funcionais.
//exemplo de hook { useNomeDoHook }
import './styles.css';

import { Card } from '../../components/Card';

export function Home() {
  const [studentName, setStudentName] = useState();
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name:'', avatar:''});

function handleAddStudent(){
  const newStudent = {
    name: studentName,
    time: new Date().toLocaleTimeString("pt-br", {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',

    })
  };
  setStudents(prevState => [...prevState, newStudent]);
}

useEffect(() => {
  // corpo do useEffect
  //o useEffect é executado assim que a nossa interface é renderizada
async function fetchData() { 
const response = await fetch('https://api.github.com/users/itsmyllaa')
const data = await response.json();

 setUser({
  name: data.name,
  avatar: data.avatar_url,
});
}

fetchData();

},[]);

  return (
    <div className='container'>
      <header>
      <h1>Lista de presença</h1>
      <div>
        <strong>{user.name}</strong>
        <img src={user.avatar} alt="Foto de perfil" />
      </div>
      </header>
      <input 
      type="text" 
      placeholder="Digite um nome"
      onChange={e => setStudentName(e.target.value)}
      />

      <button 
      type="button"
      onClick={handleAddStudent}
      >
      Adicionar
      </button>
      
      {
      students.map(student => (
      <Card 
      key={student.time}
      name={student.name} 
      time={student.time}
      />
      ))
      }
    </div>
  )
}
