import { connect } from "react-redux"
import React from "react"
import { useParams } from "react-router"
import "./Person.css"
import Child from "./Child"
import Parent from "./Parent.js"


const Person = ({tree}) => {
    const params = useParams()
    console.log(params)
    const person = tree.find(per => per.id === params.id)
    console.log(person)

    return (
        <div className="tree-div">
            <div>
                <h3>Padres</h3>
                <div className="parents-div">
                {person.parents.map(parent => (
                    <Parent parentName={parent} key={parent}/>
                ))} 
                </div>
            </div>
            <div className="person">
                <img src={person.image} alt="person"/>
                <h2>{person.name}</h2>
            </div>
            <div className="children-div">
                <h3>Hijos </h3>
                <div className="children-list">
                    {person.children.map(child => (
                        <Child childName={child} key={child}/>
                    ))}
                </div>  
            </div>  
        </div>
    )
}

const mapStateToProps = state => {
    return {
        tree: state.tree
    }
}

export default connect(mapStateToProps,{})(Person)