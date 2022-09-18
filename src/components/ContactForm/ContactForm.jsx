import React from 'react'
import f from "./ContactForm.module.css"

class ContactForm extends React.Component {
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
    this.props.onSubmit(this.state.number, this.state.name)

      this.reset()
    }
    
    reset = () => {
        this.setState({name: '',
        number: ''})
    }
    render() {
      return <form className={f.form} onSubmit={this.handleSubmit}> <label className={f.label}><span className={f.labelTxt}> Name</span> <input
          className={f.input}
  type="text"
        name="name"
        value={this.state.name}
        onChange={this.handleChange}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      /></label> 
        <label className={f.label} > <span className={f.labelTxt}>Phone</span> 
            <input
              className={f.input}
  type="tel"
          name="number"
          value={this.state.number}
        onChange={this.handleChange}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
          />
          </label>
        <button className={f.btn} type="submit">Add contact</button></form>
    }
    
}

export default ContactForm