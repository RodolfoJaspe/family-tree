import { useHistory, useParams } from "react-router";
import { connect } from "react-redux";
import "./BioPage.css"


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
            <p>{person.bio}</p>
            <button onClick={clickHandler}>Abrir</button>
        </div>   
    )
}

const mapStateToprops =state => {
    return {
        tree: state.tree
    }
}

export default connect(mapStateToprops,{})(BioPage)