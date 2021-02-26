import React from 'react';
import Contact from "../../components/Contact/Contact";
import '../../styles/home.css';
import {Parallax} from 'react-parallax';
import ImageBg from '../../assets/images/ready-bg.jpg';
import Welcome from "../../components/Welcome/Welcome";
import LastNews from "../../components/LastNews/LastNews"
import mainHeaderBackground from "../../assets/images/Le-morne-Unesco-ile-maurice.jpg";

import {Link} from "react-router-dom";

const insideStyles = {position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)"};

export const Home = () => {

    return (
        <div>
            <Welcome params={{
                title : "WELCOME TO PARADISE",
                background : 'url(' + mainHeaderBackground + ')',
                type : "main"
            }}/>

            <div className="container text-center my-5 py-4">
                <div className="row justify-content-center">
                    <div className="col-9 mb-4">
                        <h2 className="h2 green mb-5">L'ILE MAURICE EN QUELQUES MOTS</h2>
                        <div className="row text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat pretium risus, sit
                                amet rhoncus arcu sodales et. Vestibulum ante ipsum primis in faucibus orci luctus et
                                ultrices posuere cubilia curae; Phasellus pulvinar urna velit, vitae dignissim mauris
                                maximus id. Vestibulum sed vestibulum sem. Fusce maximus eget arcu ac cursus. Sed
                                facilisis tristique nunc, at tincidunt mauris tempus ut. Vivamus ut ultrices ex.
                                Suspendisse potenti.</p>
                            <p>Vestibulum bibendum, lorem vitae lobortis eleifend, erat odio mattis odio, ut mollis sem
                                ex eu nibh. Integer rutrum magna in bibendum efficitur. Etiam egestas vitae leo et
                                condimentum. Praesent sodales augue sed sagittis consectetur. Donec congue ligula erat,
                                non tempus felis sagittis in.</p>
                            <p>Proin ac nunc ac nulla commodo pharetra. Pellentesque habitant morbi tristique senectus
                                et netus et malesuada fames ac turpis egestas. Proin ac congue metus, egestas dapibus
                                eros. Aenean at dolor tellus. Fusce sollicitudin sed eros eget malesuada. Mauris tempus
                                sed lacus nec molestie. Integer sodales tortor luctus varius malesuada. Vestibulum
                                bibendum, lorem vitae lobortis eleifend, erat odio mattis odio, ut mollis sem ex eu
                                nibh. Integer rutrum magna in bibendum efficitur. Etiam egestas vitae leo et
                                condimentum. Praesent sodales augue sed sagittis consectetur. Donec congue ligula erat,
                                non tempus felis sagittis in.</p>
                        </div>
                    </div>

                    <div className="col-7 map text-center">
                        <iframe src="https://www.google.com/maps/d/embed?mid=1FWxXyu67RYMXsJFb_-V6WUuwJ-o&hl=fr"
                                frameBorder="0" style={{border: 0}} allowFullScreen="" aria-hidden="false"
                                tabIndex="0"/>
                    </div>
                </div>
            </div>

            <Parallax bgImage={ImageBg} strength={-100}>
                <div style={{height: 430}}>
                    <div style={insideStyles}>
                        <h3 className="h2 white text-center mb-4">Prêt pour l’aventure ?</h3>
                        <p className="text-center white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            feugiat pretium risus, sit amet rhoncus arcu sodales et. Vestibulum ante ipsum primis in
                            faucibus orci luctus et ultrices posuere cubilia curae; Phasellus pulvinar urna velit, vitae
                            dignissim mauris maximus id. Vestibulum sed vestibulum sem. Fusce maximus eget arcu ac
                            cursus. Sed facilisis tristique nunc, at tincidunt mauris tempus ut. Vivamus ut ultrices ex.
                            Suspendisse potenti. </p>
                    </div>
                </div>
            </Parallax>

            <LastNews />

            <div className="container text-center mb-5 pb-5">
                <Link to={'/news/'} className="fs-4">|&nbsp;&nbsp;&nbsp;Plus d’actus&nbsp;&nbsp;&nbsp;|</Link>
            </div>

            <Contact/>

        </div>
    )
}
