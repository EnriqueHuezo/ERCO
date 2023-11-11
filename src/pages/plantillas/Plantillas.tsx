import './plantillas.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useEffect, useState } from 'react';
import '@splidejs/react-splide/css';
import fase1 from '../../assets/img/Fase-1.webp';
import fase2 from '../../assets/img/Fase-2.webp';
import {
    f1Image01, f1Image02, f1Image03, f1Image04, f1Image05, f1Image06, f1Image07, f1Image08,
    f2Image01, f2Image02, f2Image03, f2Image04, f2Image05, f2Image06, f2Image07, f2Image08, f2Image09, f2Image10, f2Image11, f2Image12, f2Image13, f2Image14, f2Image15
} from './imgManagerPlantillas.ts'

export const Plantillas = () => {
    const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
        setAnchoPantalla(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const display = anchoPantalla >= 1200 ? 2 : 1;

    return (
        <div className='plantillas-container'>
            <section className='plantillas-section-01'>
                <div className="image-container">
                    <img src={fase1} alt="fase-01" />
                </div>
            </section>

            <section className='plantillas-section-02'>
                <div className='section-content'>
                    <Splide options={ {
                        width : '100%',
                        height: 'auto',
                        perPage: `${display}`,
                        gap: '1rem',
                    } } aria-label="Fase 01">
                        <SplideSlide>
                            <img src={f1Image01} alt="Image 1"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={f1Image02} alt="Image 2"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={f1Image03} alt="Image 3"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={f1Image04} alt="Image 4"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={f1Image05} alt="Image 5"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={f1Image06} alt="Image 6"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={f1Image07} alt="Image 7"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={f1Image08} alt="Image 8"/>
                        </SplideSlide>
                    </Splide>
                </div>
            </section>

            <section className='plantillas-section-03'>
                <div className="image-container">
                    <img src={fase2} alt="fase-01" />
                </div>
            </section>

            <section className='plantillas-section-02'>
                <div className='section-content'>
                <Splide options={ {
                        width : '100%',
                        height: 'auto',
                        perPage: `${display}`,
                        gap: '1rem',
                    } } aria-label="Fase 01">
                        <SplideSlide>
                            <img src={f2Image01} alt="Image 1"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={f2Image02} alt="Image 2"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={f2Image03} alt="Image 3"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={f2Image04} alt="Image 4"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={f2Image05} alt="Image 5"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={f2Image06} alt="Image 6"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={f2Image07} alt="Image 7"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={f2Image08} alt="Image 8"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={f2Image09} alt="Image 9"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={f2Image10} alt="Image 10"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={f2Image11} alt="Image 11"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={f2Image12} alt="Image 12"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={f2Image13} alt="Image 13"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={f2Image14} alt="Image 14"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={f2Image15} alt="Image 15"/>
                        </SplideSlide>
                    </Splide>
                </div>
            </section>
        </div>
    )
}