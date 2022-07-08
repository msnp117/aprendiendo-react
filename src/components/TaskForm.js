import React, {Component} from "react";

export default class TaskForms extends Component {

    state = {
        title: '',
        description: ''
    }

// al usar funcion flecha no tenemos que usar un metodo bind despues

    onSubmit = e => {
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault(); // evita que la pagina se refresque
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value            
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    name="title"
                    placeholder="Write a task" 
                    onChange={this.onChange} 
                    value={this.state.title}/>
                <br/>
                <br/>
                <textarea 
                    name="description"
                    placeholder="Write a description" 
                    onChange={this.onChange} 
                    value={this.state.description}>
                </textarea>
                <input type="submit"/>
            </form>
        )
    }

}
