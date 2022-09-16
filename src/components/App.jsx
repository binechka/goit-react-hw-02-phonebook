// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
import React from "react"
class App extends React.Component {

  state = {
  contacts: [],
    name: '',
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
  }
  render() {
    return  <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <form onSubmit = {this.handleSubmit}> <label htmlFor="">Name <input
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
      <div>
        <h2>Contacts</h2>
        <ul>
          <li>{this.state.name} {this.state.number}</li>
        </ul>
      </div>
  
    </div>
  }

}


export default App



