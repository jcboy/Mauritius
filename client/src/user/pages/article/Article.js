import React from 'react';
import '../../styles/styles.css';
import '../../styles/article.css';
import Welcome from "../../components/Welcome/welcome";
import thumb01 from "../../assets/images/thumb-01.jpg";
import parasol01 from "../../assets/images/parasols-2393938_1280.jpg";
import waterfall01 from "../../assets/images/waterfall-5056207_1280.jpg";
import Contact from "../../components/Contact/Contact";


export const Article = () => {
    return (
        <div>
            <Welcome param={{path: '/article'}}/>

            <div className="container">
                <div className="row">


                    <div className="col-9 mb-4 mt-5">
                        <button type="button" className="btn btn-link">Retour aux articles</button>

                        <h2 className="h2 green text-center">SOUS-TITRE</h2>
                        <br/>
                        <br/>
                        <br/>
                        <div className="row text">
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

                    <div className="col-md-3 mt-5">
                        <div className="content-filter mt-5 pt-5">
                            <h2 className="h3 red text-align">FILTRES ASSOCIES</h2>
                        </div>
                        <div className="row my-4">
                            <div className="col-3">
                                <button type="button" className="btn btn-info btn-sm">Excursion</button>
                            </div>
                            <div className="col-3">
                                <button type="button" className="btn btn-info btn-sm">Excursion</button>
                            </div>
                            <div className="col-3">
                                <button type="button" className="btn btn-info btn-sm">Ville</button>
                            </div>
                            <div className="col-5">
                                <button type="button" className="btn btn-info btn-sm">Ville</button>
                            </div>
                        </div>

                    </div>

                    <div className="row my-4">
                        <div className="col-3">
                            <img src={thumb01} class="rounded float-start img-thumb" alt=""/>
                        </div>

                        <div className="col-3">
                            <img src={thumb01} className="rounded float-start img-thumb" alt=""/>
                        </div>

                        <div className="col-3">
                            <img src={thumb01} className="rounded float-start img-thumb" alt=""/>
                        </div>

                        <div className="col-3">
                            <img src={thumb01} className="rounded float-start img-thumb" alt=""/>
                        </div>

                    </div>
                    <div className="row my-4">
                        <div className="col-3">
                            <img src={thumb01} className="rounded float-start img-thumb" alt=""/>
                        </div>

                        <div className="col-3">
                            <img src={thumb01} className="rounded float-start img-thumb" alt=""/>
                        </div>

                        <div className="col-3">
                            <img src={thumb01} className="rounded float-start img-thumb" alt=""/>
                        </div>

                        <div className="col-3">
                            <img src={thumb01} className="rounded float-start img-thumb" alt=""/>
                        </div>
                    </div>

                    <div className="row my-4">
                        <h2 className="h2 green text-center">ARTICLE QUI POURRAIENT VOUS INTÉRESSER</h2>
                    </div>

                    <div className="row my-4">
                        <div className="col">
                            <img src={thumb01} class="rounded-circle img-form" alt=""/>
                            <br/>
                            <br/>
                            <br/>
                            <h2 className="h3 red text-center bord">TITRE ARTICLE 1</h2>
                        </div>
                        <div className="col">
                            <img src={parasol01} class="rounded-circle img-form" alt=""/>
                            <br/>
                            <br/>
                            <br/>
                            <h2 className="h3 red text-center bord">ARTICLE 2</h2>
                        </div>
                        <div className="col">
                            <img src={waterfall01} class="rounded-circle img-form" alt=""/>
                            <br/>
                            <br/>
                            <br/>
                            <h2 className="h3 red text-center bord">ARTICLE 3</h2>
                        </div>
                    </div>

                </div>
            </div>

            <Contact/>
        </div>
    )
}
