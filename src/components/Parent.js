import React from "react"
import { connect } from "react-redux"
import { useHistory } from "react-router"
import "./Parent.css"

function Parent ({parentName, tree}){

    const parent = tree.find(person => person.name == parentName)
    console.log(parent)
    const history = useHistory()
    const clickHandler = () => {
        history.push(`/biopage/${parent.id}`)
    }

    return (
        <div className="parent">
            <img src={parent.image} onClick={clickHandler}/>
            <a onClick={clickHandler}>{parentName}</a>

        </div>         
    )
}

const mapStateToProps = state =>{
    return {
        tree: state.tree
    }
}

export default connect(mapStateToProps,{})(Parent)