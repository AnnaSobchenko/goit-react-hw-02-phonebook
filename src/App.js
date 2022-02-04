// import { nanoid } from "nanoid";
import { nanoid } from "nanoid";
import { Component } from "react";
import "./App.scss";
import Filter from "./components/Filter/filter";
import Form from "./components/Form/Form";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  formSubmitHandler = (contact) => {
    console.log(contact);
    this.addContact(contact)
  };

  addContact = (newContact) => {
    this.setState((prev) => ({
      contacts: [...prev.contacts, { ...newContact, id: nanoid() }],
    }));
  };

  filterInput=(e)=>{    
    const {value}= e.target
    console.log(value);    
    this.setState({ filter: value });    
  }

  render() {
    const { contacts, filter} = this.state;
    return (
      <div className="App">
        <header className="AppHeader">
          <h2>Phonebook</h2>
        </header>
        <main className="main">
         <Form onSubmit={this.formSubmitHandler} />
          <h2>Contacts</h2>
          <input
            className="filter"
            type="text"
            name="filter"
            value={filter}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="&#x1f50d; Search..."
            onChange={this.filterInput}
          />
          <ul className="list" >
           {/* {filter&& <Filter contacts={contacts} filter={filter} />} */}
            {(contacts.map((el) => {
              return (
                <li key={el.id} className="item">
                  {el.name}: {el.number}
                </li>
              );
            }))}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;

// const res= contacts.filter(contact =>  
//    contact.name.toLowerCase().includes(filter.toLowerCase())
//    );
//  return res;