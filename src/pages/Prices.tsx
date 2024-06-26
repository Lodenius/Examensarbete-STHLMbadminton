import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Prices.scss';

//imgs
import shuttlecock from '../assets/icons/Motion-blue.svg';
import PageTitle from "../components/PageTitle";

function Prices() {

    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const [ref1, inView1] = useInView();
    const [ref2, inView2] = useInView();

    if (inView1) {
        controls1.start({ x: 0 });
    }
    if (inView2) {
        controls2.start({ x: 0 });
    }

    return ( 
        <section>
            <Header />
            <PageTitle 
            PageTitle="Priser"/>
            <section className="prices">
                <article ref={ref1} className="prices__info">
                        <h2>
                            <motion.img
                                src={shuttlecock}
                                className='img'
                                alt="Shuttlecock icon"
                                animate={controls1}
                                initial={{ x: -1700 }}
                                transition={{ duration: 0.4 }}
                            />
                            &nbsp;Våra priser
                        </h2>
                        <p>Hos oss kan du njuta av en spännande badmintonupplevelse när det passar dig bäst. Våra priser är flexibla och 
                        anpassas efter olika faktorer såsom tid på dygnet och ålder, vilket gör att du kan skräddarsy din spelupplevelse 
                        precis efter dina behov. Oavsett om du är en entusiastisk nybörjare eller en erfaren spelare, finns det något för 
                        alla här hos oss. Ta del av vår varierade prisstruktur och ge dig själv möjligheten att spela badminton på dina egna villkor.</p>
                </article>
                <article ref={ref2} className="prices__info">
                    <h2>
                        <motion.img
                            src={shuttlecock}
                            className='img'
                            alt="Shuttlecock icon"
                            animate={controls2}
                            initial={{ x: -1700 }}
                            transition={{ duration: 0.6 }}
                        />
                        &nbsp;Bokning
                    </h2>
                    <p>Spelstart finns tillgänglig varje hel- och halvtimme med en speltid på en timme. 
                        För att öka dina chanser att säkra en bana rekommenderar vi att undvika att boka under de mest populära 
                        tiderna mellan måndag och torsdag, från klockan 17:00 till 20:30, då efterfrågan är hög och platserna fylls snabbt. 
                        Bokningar kan göras upp till en vecka i förväg och sker via hemsidan eller telefon. <br></br> Klicka <a href="/booking">här</a> för att boka.</p>
                </article>

                <section className="prices__price">
                    <article className="prices__price__sing-night">
                        <h2>Ströspel kväll</h2>
                        <p>Spelstart från och med 16:00</p>
                        <div></div>
                        <section className="cat-time">
                            <p>Ströspel</p>
                            <h3>250 kr/tim</h3>
                        </section>
                    </article>
                    <article className="prices__price__sing-day">
                        <h2>Ströspel dag</h2>
                        <p>Till och med 15:30</p>
                        <div></div>
                        <section className="cat-time">
                            <p>Ströspel</p>
                            <h3>200 kr/tim</h3>
                        </section>
                        <section className="cat-time">
                            <p>Rabatthäfte | 10 speltimmar 1600:-</p>
                            <h3>160 kr/tim</h3>
                        </section>
                        <section className="cat-time">
                            <p>Arbetslösa *</p>
                            <h3>170 kr/tim</h3>
                        </section>
                        <section className="cat-time">
                            <p>Studerande *</p>
                            <h3>170 kr/tim</h3>
                        </section>
                        <section className="cat-time">
                            <p>Pensionärer *</p>
                            <h3>170 kr/tim</h3>
                        </section>
                        <p className="important">*Legitimation eller intyg obligatoriskt.</p>
                    </article>
                    <article className="prices__price__cont-night">
                        <h2>Kontrakt kvällstid</h2>
                        <p>Stående tid med spelstart från och med 16:00</p>
                        <div></div>
                        <section className="cat-time">
                            <p>Kvällstid grundpris</p>
                            <h3>210 kr/tim</h3>
                        </section>
                        <section className="cat-time">
                            <p>Kvällstid 10 månader 10% rabatt</p>
                            <h3>189 kr/tim</h3>
                        </section>
                    </article>
                    <article className="prices__price__cont-day">
                        <h2>Kontrakt dagtid</h2>
                        <p>Stående tid med spelstart till och med 15:30</p>
                        <div></div>
                        <section className="cat-time">
                            <p>Dagtid grundpris</p>
                            <h3>140 kr/tim</h3>
                        </section>
                        <section className="cat-time">
                            <p>Dagtid 10 månader 10% rabatt</p>
                            <h3>126 kr/tim</h3>
                        </section>
                        <p className="important">! Den infomation vi erhåller i samband med kontrakt behandlas i enlighet med föreskrifterna för GDPR</p>
                    </article>
                    <article className="prices__price__other">
                        <h2>Övrigt</h2>
                        <div></div>
                        <section className="cat-time">
                            <p>Skolklasser (Minst 4 banor, per timme & bana)</p>
                            <h3>140 kr</h3>
                        </section>
                        <section className="cat-time">
                            <p>Pingis</p>
                            <h3>150 kr/tim</h3>
                        </section>
                        <section className="cat-time">
                            <p>Hyra badmintonracket (per gång)</p>
                            <h3>45 kr</h3>
                        </section>
                        <section className="cat-time">
                            <p>Hyra pingisracket (per gång)</p>
                            <h3>45 kr</h3>
                        </section>
                    </article>
                </section>
            </section>
            <Footer />
        </section>
     );
}

export default Prices;