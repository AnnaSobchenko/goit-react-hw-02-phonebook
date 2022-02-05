import { Component } from "react";

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
           <p>{el.name}: {el.number}</p>
          <button className="btn" onClick={(e) => removeContact(el.id)}>Del</button>
          {/* {el.name}: {el.number} */}
        </li>
      );
    });
  }
}
export default Filter;
