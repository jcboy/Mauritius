import React from 'react';
import Contact from "../../components/Contact/Contact";
import {Welcome} from "../../components/Welcome/welcome";

export const Home = () => {
    return (
        <div>
            <Welcome/>
            <div className="container">
                {/* Ceci est juste un exemple */}
                <h1 className="h1 green text-center mb-5">Un titre header</h1>
                <h2 className="h2 text-center mb-5">Un soutitre</h2>
                <p>
                    Latrones timore latrones praesidiis fore populationum magnis et propinqua stataria per diu per
                    documentis intactam cum Lycaoniam congressione parte scirent igitur campestrem Lycaoniam inpares
                    fore per petivere timore diu inpares timore campestrem congressione magnis milite scirent sed igitur
                    et latrones
                </p>
                <p>
                    Inpares fore intactam undique parte parte magnis campestrem petivere milite fore magna per
                    praesidiis
                    igitur congressione se igitur deviis nostris populationum magnis timore undique Lycaoniam parte
                    frequentibus per caedium et magna per magnis cum parte stataria nostris stataria congressione diu
                    praesidiis undique igitur Pamphyliam undique frequentibus se deviis quidem caedium caedium latrones
                    conmunitam diffuso timore stataria latrones timore et congressione.
                </p>
                <a href="#" className="bold">en savoir plus</a>
                <hr/>
                <h3 className="h3 red">Un titre de niveau 3</h3>
                <p className="h3">Un texte avec du style</p>

            </div>
            <Contact/>
        </div>
    )
}
