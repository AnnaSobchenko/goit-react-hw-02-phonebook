import { Component } from "react";

class ContactList extends Component {
    state = {  } 
    render() { 
        const {contacts}=this.props;
        return (contacts.map((el) => {
            return (
              <li key={el.id} className="item">
                {el.name}: {el.number}
              </li>);}));}
}
 
export default ContactList;