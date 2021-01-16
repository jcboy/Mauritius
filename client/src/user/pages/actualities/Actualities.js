import React from 'react';
import {Component} from "react/cjs/react.production.min";
import Welcome from "../../components/Welcome/welcome";
import '../../styles/styles.css'

const actualités = {
    nombre : 10,
    infos : [
        {
            titre: 'montitre',
            date : 'madate',
            contenu: 'moncontenu'
        }
    ]
}

class Actualities extends Component {

    render() {
        return (
            <div>
                <Welcome param={{path: '/actualities'}}/>
            </div>
        )
    }
}

export default Actualities;