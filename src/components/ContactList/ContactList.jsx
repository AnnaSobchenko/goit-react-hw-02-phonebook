import { Component } from "react";
import PropTypes from "prop-types";

class ContactList extends Component {
  state = {};
  render() {
    const { contacts, removeContact } = this.props;
    return contacts.map((el) => {
      return (
        <li key={el.id} className="item">
          <p>
            {el.name}: {el.number}
          </p>
          <button className="btn" onClick={(e) => removeContact(el.id)}>
            Del
          </button>
        </li>
      );
    });
  }
}
ContactList.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  contacts: PropTypes.array,
};

export default ContactList;
