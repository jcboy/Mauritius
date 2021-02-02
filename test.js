import {useState, useEffect} from 'react';

const Component = () => {

    const [state, setState] = useState([]) //valeur par défaut


    useEffect(() => {
        // logique
        axios.get('http://localhost:8080/get').then(() => {

        }).catch(() => {

        })
        /* jusqu'ici :cette logique équivalente à componentDidMount()

        componentDidMount = 2e étape du cycle de vie d'un composant REACT

        componentDidMount === cycle de vie qui correspond à
        l'intégration du composant dans le DOM virtuel de REACT

         */

        return () => {
            // logique pour componentWillUnmount
        }

    }, [])


    return <div>
        HELLO WORLD
    </div>
}

export default Component;


/*
useEffect( () => {
    console.log("mount")
}, [] );

POUR : componentDidMount()

---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------

useEffect( () => {
    console.log("will update data1")
}, [ data1 ] );

POUR : componentShouldUpdate(data1)

---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------

useEffect( () => {
    console.log("will update any")
});

POUR : actualise le composant à l'infini (et toutes les requêtes/observables)

---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------

useEffect( () => {
    () => {
        console.log("will update data1 or unmount")
    }
}, [ data1 ] );

POUR : componentShouldUpdate(data1) OU componentWillUnmount

---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------

useEffect( () => {
    () => {
        console.log("unmount")
    }
}, [] );

POUR : componentWillUnmount()
 */
