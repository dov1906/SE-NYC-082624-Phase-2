
import pets from "../data/petsDat";

function Petlist(){
    return (
        <ul className="pet-list">

        { pets.map((element) => (
            <li className="pet"> 
            <h4>{element.name}</h4>
            <img src={element.image} alt={element.name} key={element.id}></img>
            </li>
  
        ))}

        </ul>

    )};


export default Petlist;