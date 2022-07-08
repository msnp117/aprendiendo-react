// componente como funcion flecha :
// const App = () => <div>Mi primer componente: <HelloWorld/></div>

// componente definido como una clase: (tiene que heredar de )
/* class App extends React.Component {
  render() { 
    return <div>Mi primer componente: <HelloWorld/></div>
  }
} */
// (no se puede llamar a return asi nomas)

// PROPS:
/* function Nombre(props){
  return (
      <div>
        {props.prop1}
        {props.prop2}
       </div>
  )
} */

// para usar props (se puede usar cualquier cantidad)
// <Nombre prop1="valor" prop2 = "valor" />

/* function Helloworld(props) {
  return (
    <div id='hello'>
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div>
  );
} */

/* 
class Helloworld extends React.Component {

  state = {
    show: true
  }

  cambiarEstado = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    if (this.state.show) {
      return (
        <div id='hello'>
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={this.cambiarEstado}>Cambiar estado</button>
        </div>
      )
    } else {
      return <h1>
        No hay elementos
        <button onClick={this.cambiarEstado}>Cambiar estado</button>
        </h1>
    }
  }
} */

/* function App() {
  return (
    <div>
      Mi primer componente: 
      <Helloworld mytext="Hello Fazt" subtitle="lorem ipsum"/> 
      <Helloworld mytext="Hola mundo" subtitle="subtitulo2"/>
      <Helloworld mytext="hello" subtitle="no se"/>
    </div>
  );
} */

import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; //enrutador de react para navegador

import './App.css';

import tasks from './sample/tasks.json';

// components
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts'

class App extends Component {

  state = {
    tasks: tasks   
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState ({
      tasks: [...this.state.tasks, newTask] //los puntos suspensivos son para agregar un nuevo elemento que es el que sigue despues de la coma
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: newTasks})
  }

  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      } 
      return task;
    });
    this.setState({tasks: newTasks})
  }

  render() {
    return <div>
      <Router>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/posts">Posts</Link>
          <Routes>
              <Route path="/" element={
                <div>
                    <TaskForm addTask={this.addTask}/>
                    <Tasks 
                      tasks={this.state.tasks} 
                      deleteTask={this.deleteTask}
                      checkDone={this.checkDone}
                    />
                </div>
              }>
              </Route>
              <Route path='/posts' element={<Posts/>}/>
          </Routes>
      </Router>
    </div>
  }
}

export default App;
