import { useHistory, useParams } from "react-router";
import { connect } from "react-redux";
import "./BioPage.css"
import {Link} from "react-router-dom"

function BioPage ({tree}) {

    const history = useHistory()
    const params = useParams()
    const person = tree.find(someone => someone.id === params.id)
    console.log(person)
    const clickHandler = ()=>{
        history.push(`/person/${person.id}`)
    }
    return (
        <div className="bio">
            <div onClick={clickHandler}>
                <img src={person.image}alt="person"/> 
            </div>
            
            <h2>{person.name}</h2>
            <h3>{person.dob}</h3>
            <h3>{person.pob}</h3>
            <p><strong>{person.bio}</strong></p>
            <h3>{person.generation}</h3>
            <div className="buttons">
                <button onClick={clickHandler}>Ver</button>
                <Link to="/">Inicio</Link>
            </div>
            
        </div>   
    )
}

const mapStateToprops =state => {
    return {
        tree: state.tree
    }
}

export default connect(mapStateToprops,{})(BioPage)