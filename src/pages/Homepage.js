import "../styles/styles.css";
import "../styles/home.css";
import bicep from "../assets/imgs/bicep.png";

export default function Homepage(){
    return(
        <div className="container" >
            <div id="homepage">
                <h1>FITNESS FINDER</h1>
                <img src={bicep}/>
                <h2>Start Now!</h2>
            </div>
        </div>
    )
}