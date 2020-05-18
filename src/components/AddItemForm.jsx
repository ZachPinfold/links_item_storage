import React from 'react';


class AddItemForm extends React.Component   {

    state = {
        name: '',
        type: '',
        image: '',
        date: '',
        counter: 1,
    }

    handleSubmit = (props) => {
        props.preventDefault()
        this.props.addItems({ 
            name: this.state.name,
            type: this.state.type,
            image: this.state.image,
            date: new Date(),
            counter: this.state.counter,
        })
        this.setState({name: '', type: '', image: '', date: ''})
    }

    handleNameChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render()    {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>Add name:</label>
                <input name="name" type="text" onChange={this.handleNameChange} value={this.state.name}/>
                <select name="type" id="typeSelector" onChange={this.handleNameChange} value={this.state.type}>
                    <option value="Weapon">Weapon</option>
                    <option value="Shield">Shield</option>
                    <option value="Bow & arrow">Bow & arrow</option>
                    <option value="Armour">Armour</option>
                </select>
                <label>Add type:</label>
                <input name="type" type="text" onChange={this.handleNameChange} value={this.state.type}/>
                <label>Add image:</label>
                <input name="image" type="text" onChange={this.handleNameChange} value={this.state.image}/>
                <button>Add item</button>
                </form>
            </div>
        )
    }

}

export default AddItemForm