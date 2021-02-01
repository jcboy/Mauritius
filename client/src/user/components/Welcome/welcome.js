import '../../styles/styles.css'
import {Navbar} from "../Navbar/Navbar";
import {Component} from "react/cjs/react.production.min";

import mainHeaderBackground from '../../assets/images/Le-morne-Unesco-ile-maurice.jpg';
import subHeaderBackground from '../../assets/images/2048px-Île_aux_Cerfs__île_Maurice.jpg'

const welcomeContent = [
    {
        path: '/',
        background: 'url(' + mainHeaderBackground + ')',
        title: 'WELCOME TO PARADISE'
    },
    {
        path: '/activities',
        background: 'url(' + mainHeaderBackground + ')',
        title: 'QUE FAIRE ?'
    },
    {
        path: '/news',
        background: 'url(' + mainHeaderBackground + ')',
        title: 'ACTUALITÉS'
    },
    {
        path: '/activity',
        background: 'url(' + subHeaderBackground + ')',
        title: 'TITLE ACTIVITY'
    },
    {
        path: '/article',
        background: 'url(' + subHeaderBackground + ')',
        title: 'TITLE ACTUALITY'
    }
]


export class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = welcomeContent.find((header) => {
            return header.path === props.param.path;
        })
        this.backgroundStyle = this.backgroundStyle.bind(this);

    }

    backgroundStyle() {
        return {
            backgroundImage: this.state.background,
            backgroundPositionX: 'center',
            backgroundSize: '120%'
        }
    }

    headerSize(route) {
        const mainHeaderSize = {marginTop: '10.3em', marginBottom: '10.3em'};
        const subHeaderSize = {marginTop: '4.8em', marginBottom: '4.8em'};
        return route === '/' ? mainHeaderSize : subHeaderSize;
    }

    render() {
        return (
            <div
                style={this.backgroundStyle()}>
                <div className="container-fluid">
                    <Navbar/>
                    <div className="row justify-content-center">
                        <div className="col-7" style={this.headerSize(this.state.path)}>
                            <h1 className="h1 text-center" style={{color: 'white'}}> {this.state.title} </h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome;
