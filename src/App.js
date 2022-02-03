// import { nanoid } from "nanoid";
import { Component } from "react";
import "./App.scss";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  addContact = (contact) => {
    this.setState((prev) => ({ contacts: [...prev.contacts, contact] }));
  };

  render() {
    const { contacts, filter, name, number } = this.state;
    return (
      <div className="App">
        <header className="AppHeader">
          <h2>Phonebook</h2>
        </header>
        <main className="main">
          <label>
            Name
            <input
              className="name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              className="number"
              type="tel"
              name="number"
              placeholder="XXX-XX-XX"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
          <h2>Contacts</h2>
          <ul className="list">
            {contacts.map((el) => {
              return (
                <li className="item">
                  {el.name}: {el.number}
                </li>
              );
            })}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
