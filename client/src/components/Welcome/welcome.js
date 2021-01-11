import '../../styles/styles.css'
import '../../styles/welcome.css'
import {Navbar} from "../Navbar/Navbar";


export function Welcome() {
    return (
        <div>
            <Navbar/>
            <div className="row Welcome justify-content-center py-5">
                <div className="col-4">
                    <h1 className="h1"> WELCOME TO PARADISE </h1>
                </div>
            </div>
        </div>
    )
}