import '../styles/styles.css'
import {Navbar} from "./Navbar";

const Welcome = (props) => {

    const headerSize = (type) => {
        const mainHeaderSize = {
            backgroundImage: props.params.background,
            backgroundPositionX: 'center',
            backgroundSize: '120%',
        };
        const subHeaderSize = {
            marginBottom: '4.8em',
            backgroundImage: props.params.background,
            backgroundPosition: 'center',
            backgroundSize: "cover",
        };
        if (type === 'article') {
            subHeaderSize.backgroundPositionY = "center";
        }
        return type === "main" ? mainHeaderSize : subHeaderSize;
    }

    return (
        <div style={headerSize(props.params.type)} className="welcome">
            <div className="container-fluid">
                <Navbar/>
                <div className="row justify-content-center py-5">
                    <div className="col-7">
                        <h1 className="h1 text-center py-5" style={{color: 'white'}}> {props.params.title} </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;