import { Component } from "react";

class ContactList extends Component {
  state = {};
  render() {
    const { contacts, removeContact } = this.props;
    return contacts.map((el) => {
      return (
        <li key={el.id} className="item">
          <p>{el.name}: {el.number}</p>
          <button className="btn" onClick={(e) => removeContact(el.id)}>Del</button>
        </li>
      );
    });
  }
}

export default ContactList;
