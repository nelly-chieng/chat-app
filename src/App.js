import React from 'react';
import logo from './logo.svg';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div >
      <Contact {...elmer} online/>
      <Contact {...lillian} />
      <Contact {...chris} online/>
    </div>
  );
}

const elmer = {
  avatar :"https://randomuser.me/api/portraits/men/87.jpg",
  name :"Elmer Woods",
  
}

const  lillian = {
  avatar :"https://randomuser.me/api/portraits/women/39.jpg",
  name :"Lillian Porter",
  
  
}
const chris = {
  avatar :"https://randomuser.me/api/portraits/men/45.jpg",
  name :"Chris sims",
}
export default App;
