import { useHistory } from "react-router";
import { connect } from "react-redux";
import "./Home.css"


function Home ({person}) {

    const history = useHistory()

    const clickHandler = ()=>{
        history.push(`/person/${person.id}`)
    }
    return (
        <div className="home">
            <button onClick={clickHandler}>Abrir</button>
        </div>
        
    )
}

const mapStateToProps = state =>{
    return {
        person: state.tree[0]
    }
}

export default connect(mapStateToProps,{})(Home)