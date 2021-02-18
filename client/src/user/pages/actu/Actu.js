import React, {useEffect, useState} from 'react';
import '../../styles/styles.css';
import '../../styles/article.css';
import Welcome from "../../components/Welcome/welcome";
import thumb01 from "../../assets/images/thumb-01.jpg";
import parasol01 from "../../assets/images/parasols-2393938_1280.jpg";
import waterfall01 from "../../assets/images/waterfall-5056207_1280.jpg";
import Contact from "../../components/Contact/Contact";
import axios from "axios";



export const Actu = () => {
    const [actu, setActu] = useState({});

    useEffect(() => {

        axios.get('http://localhost:8080/actualities')
            .then(({data}) => {
                console.log(data);
                setActu(data);
            });
    }, []);

    return (
        <div className="actuContent">
            <Welcome param={{path: '/actu'}}/>

            <div className="container">
                <div className="row">

                    <div className="col-12 mb-4 mt-5">
                        <a href={'/activities'}>Retour aux actualités</a>

                        <h2 className="h2 green text-center">SOUS-TITRE</h2>
                        <br/>
                        <br/>
                        <br/>
                        <div>
                            <p>Publié le JJ/MM/AAAA</p>
                        </div>
                        <div className="row text justify-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat pretium
                                risus,
                                sit
                                amet rhoncus arcu sodales et. Vestibulum ante ipsum primis in faucibus orci
                                luctus
                                et
                                ultrices posuere cubilia curae; Phasellus pulvinar urna velit, vitae dignissim
                                mauris
                                maximus id. Vestibulum sed vestibulum sem. Fusce maximus eget arcu ac cursus.
                                Sed
                                facilisis tristique nunc, at tincidunt mauris tempus ut. Vivamus ut ultrices ex.
                                Suspendisse potenti.</p>

                            <p>Quid? qui se etiam nunc subsidiis patrimonii aut amicorum liberalitate
                                sustentant,
                                hos
                                perire patiemur? An, si qui frui publico non potuit per hostem, hic tegitur ipsa
                                lege censoria;
                                quem is frui non sinit, qui est, etiamsi non appellatur, hostis, huic ferri
                                auxilium
                                non oportet?
                                Retinete igitur in provincia diutius eum, qui de sociis cum hostibus, de civibus
                                cum
                                sociis faciat
                                pactiones, qui hoc etiam se pluris esse quam collegam putet, quod ille vos
                                tristia
                                voltuque deceperit,
                                ipse numquam se minus quam erat, nequam esse simularit. Piso autem alio quodam
                                modo
                                gloriatur
                                se brevi tempore perfecisse, ne Gabinius unus omnium nequissimus
                                existimaretur.</p>

                            <p>Proin ac nunc ac nulla commodo pharetra. Pellentesque habitant morbi tristique
                                senectus
                                et netus et malesuada fames ac turpis egestas. Proin ac congue metus, egestas
                                dapibus
                                eros. Aenean at dolor tellus. Fusce sollicitudin sed eros eget malesuada. Mauris
                                tempus
                                sed lacus nec molestie. Integer sodales tortor luctus varius malesuada.
                                Vestibulum
                                bibendum, lorem vitae lobortis eleifend, erat odio mattis odio, ut mollis sem ex
                                eu
                                nibh. Integer rutrum magna in bibendum efficitur. Etiam egestas vitae leo et
                                condimentum. Praesent sodales augue sed sagittis consectetur. Donec congue
                                ligula
                                erat,
                                non tempus felis sagittis in.</p>
                            <p>
                                Iis igitur est difficilius satis facere, qui se Latina scripta dicunt
                                contemnere. in
                                quibus hoc primum est in quo admirer, cur in gravissimis rebus non delectet eos
                                sermo patrius, cum idem fabellas Latinas ad verbum e Graecis expressas non
                                inviti
                                legant. quis enim tam inimicus paene nomini Romano est, qui Ennii Medeam aut
                                Antiopam Pacuvii spernat aut reiciat, quod se isdem Euripidis fabulis delectari
                                dicat, Latinas litteras oderit?
                            </p>
                        </div>
                    </div>


                    <div className="row my-4">
                        <div className="col-3">
                            <img src={thumb01} class="rounded float-start img-block" alt=""/>
                        </div>

                        <div className="col-3">
                            <img src={thumb01} className="rounded float-start img-block" alt=""/>
                        </div>

                        <div className="col-3">
                            <img src={thumb01} className="rounded float-start img-block" alt=""/>
                        </div>

                        <div className="col-3">
                            <img src={thumb01} className="rounded float-start img-block" alt=""/>
                        </div>

                    </div>
                    <div className="row my-4">
                        <div className="col-3">
                            <img src={thumb01} className="rounded float-start img-block" alt=""/>
                        </div>

                        <div className="col-3">
                            <img src={thumb01} className="rounded float-start img-block" alt=""/>
                        </div>

                        <div className="col-3">
                            <img src={thumb01} className="rounded float-start img-block" alt=""/>
                        </div>

                        <div className="col-3">
                            <img src={thumb01} className="rounded float-start img-block" alt=""/>
                        </div>
                    </div>

                    <div className="row my-4">
                        <h2 className="h2 green text-center">DERNIÈRE ACTU</h2>
                    </div>

                    <div className="row my-4">

                        <div className="col">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center">
                                    <img src={thumb01} className="rounded-circle img-form" alt=""/>
                                </div>
                                <div className="col-12 d-flex justify-content-center actuName">
                                    <a href={'/article'} className="h3 red text-center bord">TITRE ACTU 1</a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center">
                                    <img src={waterfall01} className="rounded-circle img-form" alt=""/>
                                </div>
                                <div className="col-12 d-flex justify-content-center actuName">
                                    <a href={'/article'} className="h3 red text-center bord">ACTU 2</a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center">
                                    <img src={parasol01} className="rounded-circle img-form" alt=""/>
                                </div>
                                <div className="col-12 d-flex justify-content-center actuName">
                                    <a href={'/article'} className="h3 red text-center bord">ACTU 3</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Contact/>
        </div>
    )
}
