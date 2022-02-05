import { Component } from "react";

class Filter extends Component {
  state = {};
  render() {
    const { contacts, filter } = this.props;
    const filterNameArr = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
    return filterNameArr.map((el) => {
      return (
        <li key={el.id} className="item">
          {el.name}: {el.number}
        </li>
      );
    });
  }
}
export default Filter;
