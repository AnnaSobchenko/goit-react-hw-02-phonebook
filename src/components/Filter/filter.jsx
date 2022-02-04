const Filter = ({contacts, filter}) => {
    const filterNameArr=contacts.filter(contact=> contact.name.toLowerCase().includes(filter.toLocaleLowerCase));   
        
        filterNameArr((el)=>{
             return (
    <li key={el.id} className="item">
      {el.name}: {el.number}
    </li>);})} 

 
export default Filter;