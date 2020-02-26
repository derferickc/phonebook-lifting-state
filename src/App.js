import React, { Component } from 'react';

function PhoneInput (props) {
  const { firstName, lastName, number, handleChange, handleSubmit } = props

  return (
    <div>
      <form
        onSubmit={handleSubmit}
      >
        <label>First name:</label>
        <br />
        <input 
          className='userFirstname'
          name='userFirstName'
          type='text'
          value={firstName}
          onChange={handleChange}
        />
        <br/>
        <label>Last name:</label>
        <br />
        <input 
          className='userLastname'
          name='userLastName' 
          type='text' 
          value={lastName}
          onChange={handleChange}
        />
        <br />
        <label>Phone:</label>
        <br />
        <input
          className='userPhone' 
          name='userPhone' 
          type='text'
          value={number}
          onChange={handleChange}
        />
        <br/>
        <input
          className='submitButton'
          type='submit' 
          value='Add User' 
        />
      </form>
    </div>
  )
}

function PhoneList (props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
        { props.contacts.map((contact, index) => (
          <tr key={index}>
            <td>{contact.firstName}</td>
            <td>{contact.lastName}</td>
            <td>{contact.number}</td>
          </tr>
        ))}
        </tbody>

      </table>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userFirstName: '',
      userLastName: '',
      userPhone: '',
      contacts: [
        {
          firstName: "fred",
          lastName: "choe",
          number: "425829945"
        },
        {
          firstName: "grace",
          lastName: "kim",
          number: "253948831"
        }
      ]
    }

    this.inputUpdate = this.inputUpdate.bind(this)
    this.addEntryToPhoneBook = this.addEntryToPhoneBook.bind(this)
  }

  inputUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addEntryToPhoneBook(event) {
    event.preventDefault()

    this.setState((currentState) => {
      return {
        contacts: currentState.contacts.concat([{
          firstName: currentState.userFirstName,
          lastName: currentState.userLastName,
          number: currentState.userPhone
        }]),
        userFirstName: '',
        userLastName: '',
        userPhone: '',
      }
    })
  }

  render() {
    return (
      <div className="App">
        <PhoneInput
          firstName={this.state.userFirstName}
          lastName={this.state.userLastName}
          number={this.state.userPhone}
          handleChange={this.inputUpdate}
          handleSubmit={this.addEntryToPhoneBook}
        />
        <PhoneList contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;