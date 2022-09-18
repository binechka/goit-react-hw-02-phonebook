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
import Form from "./ContactForm/ContactForm"
class App extends React.Component {

  state = {
  contacts: [],
    name: '',
  number: ''
  }
  
  formSubmitHandler = data => {
    console.log(data);
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
      <Form onSubmit={ this.formSubmitHandler} />
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



