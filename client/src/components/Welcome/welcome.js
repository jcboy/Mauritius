import '../../styles/styles.css'
import '../../styles/welcome.css'
import {Navbar} from "../Navbar/Navbar";
import {Component} from "react/cjs/react.production.min";

import img from '../../assets/images/Le-morne-Unesco-ile-maurice.jpg';

export class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'WELCOME TO PARADISE'
        }
        this.route = props.param;
        this.backgroundStyle = this.backgroundStyle.bind(this);
        this.welcomeContent = [
            {
                path: '/',
                background: 'url(' + img + ')',
                title: 'WELCOME TO PARADISE'
            }
        ]

    }

    backgroundStyle(route) {
        const welcomeContentToDisplay = this.welcomeContent.find((content) => {
            return content.path === route.path;
        });
        return {
            backgroundImage: welcomeContentToDisplay.background,
            backgroundSize: 'cover',
            width: '100vw',
            height: '100vh'
        }
    }

    render() {
        return (
            <div className="container-fluid"
                 style={this.backgroundStyle(this.route)}>
                <Navbar/>
                <div className="row py-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="col-5 py-5">
                        <h1 className="h1 text-center"> WELCOME TO PARADISE </h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome;