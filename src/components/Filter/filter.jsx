import { Component } from "react";
import PropTypes from "prop-types";

class Filter extends Component {
  state = {};
  render() {
    const { contacts, filter, removeContact } = this.props;
    const filterNameArr = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
    return filterNameArr.map((el) => {
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
};
Filter.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  filter: PropTypes.string,
  contacts: PropTypes.array,
};
export default Filter;
