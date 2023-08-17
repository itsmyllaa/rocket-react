import './styles.css';

import { Card } from '../../components/Card';

export function Home() {
  return (
    <div className='container'>
      <h1>Lista de presença</h1>
      <input type="text" placeholder="Digite um nome"/>
      <button type="button">Adicionar</button>
      
      <Card name="Camila Gabriela" time=" 10:55:00"/>
      <Card name="Thays Virginia" time=" 15:30:22"/>
      <Card name="Natália Júlia" time=" 18:40:57"/>
      <Card name="Raquel Lopes" time=" 21:20:10"/>
      <Card name="Rhany Gomes" time=" 21:20:10"/>

    </div>
  )
}
