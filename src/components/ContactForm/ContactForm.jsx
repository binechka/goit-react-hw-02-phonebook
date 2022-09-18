import React from 'react'

class Form extends React.Component {
    state = { name: '',
        number: ''
    }
      handleChange = event => {
const {name, value} = event.currentTarget
    this.setState({ [name]: value
  })
  };

  handleSubmit = e => {
    e.preventDefault()
      console.log(this.state);
      this.props.onSubmit(this.state)
      this.reset()
    }
    
    reset = () => {
        this.setState({name: '',
        number: ''})
    }
    render() {
        return <form onSubmit = {this.handleSubmit}> <label htmlFor="">Name <input
  type="text"
        name="name"
        value={this.state.name}
        onChange={this.handleChange}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      /></label> 
        <label> Phone
        <input
  type="tel"
          name="number"
          value={this.state.number}
        onChange={this.handleChange}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
          />
          </label>
        <button type="submit">Add contact</button></form>
    }
    
}

export default Form