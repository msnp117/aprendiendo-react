import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Task extends Component {
// al dar estilos mediante una funcion se pueden aplicar condicionales
    StyleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'blue' : 'green',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render() {

        const {task} = this.props;

        return <p style={this.StyleCompleted()}>
            {task.title} -
            {task.description} - 
            {task.done} - 
            {task.id} 
            <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)} />
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>
                x
            </button>
        </p>
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

const btnDelete = {
    fontSize: "18px",
    background: "#ea2027",
    color:"#fff",
    border:"none",
    padding:"10px 15px",
    borderRadius: "50%",
    cursor: "pointer"
}

export default Task;