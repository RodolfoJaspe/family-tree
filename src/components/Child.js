import React from "react"
import { connect } from "react-redux"
import { useHistory } from "react-router"
import "./Child.css"

function Child ({childName, tree}){

    const child = tree.find(person => person.name == childName)
    console.log(child)
    const history = useHistory()
    const clickHandler = () => {
        history.push(`/biopage/${child.id}`)  
    }

    return (
        <div className="child">
            <div className="child-img"
            onClick={clickHandler}>
               <img src={child.image}/> 
            </div>
            
            <a onClick={clickHandler}>{childName}</a>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        tree: state.tree
    }
}

export default connect(mapStateToProps,{})(Child)