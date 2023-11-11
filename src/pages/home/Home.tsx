import { Link } from 'react-router-dom';
import './Home.css';

export const Home = () => {
    return (
        <div className='home-container'>
            <section className='home-section-01'>
                <div className='section-content'>
                    <Link to={'/PMV'}>
                        <div className='btn-products'>
                            VER MÁS
                        </div>
                    </Link>

                    <div className='info'>
                        <p>DISEÑADORES DE</p>
                        <p>MOBILIARIO DE EXTERIOR</p>
                    </div>
                </div>
            </section>

            <section className='home-section-02'>
                <div className='section-content'>
                    <div className='title'>
                        <p>¿QUIÉNES</p>
                        <p>SOMOS?</p>
                    </div>

                    <div className='info'>
                        <p>Somos un emprendimiento pionero en el diseño y fabricación de islas de cocina especialmente para lugares con mucha húmedad, que busca transformar la forma en que las personas experimentan la funcionalidad y el diseño en sus espacios culinarios, mejorando la ergonomía y brindando soluciones innovadoras para ambientes desafiantes. Nos centramos en el trabajo con concreto ya que es un material resistente que garantiza la vida útil de los productos, es de fácil mantenimiento y no es propenso a plagas y hongos que afecten su funcionalidad y estética.</p>
                    </div>
                </div>
            </section>

            <section className='home-section-03'>
                <div className='section-content'>
                    <div className="card">
                        <div className="card-content">
                            <div className='title'>
                                <p>“INTERRUPTED</p>
                                <p>RAWNESS ”</p>
                                <p>CONCEPTO</p>
                            </div>

                            <div className="info">
                                <p>Es un concepto que fusiona la fortaleza del concreto crudo con la sorprendente interrupción de elementos contrastantes. Este enfoque combina la estética industrial y la creatividad audaz para crear un diseño único y emocionante.</p>
                                <p>La “Crudeza Interrumpida” trata sobre la implementación de formas geométricas que se ven intervenidas por otras formas, generando una especie de abstracción y escultura intrigante que rara vez se puede observar en el mercado salvadoreño.</p>
                                <p>Nuestro concepto celebra la idea de que la belleza puede emerger de la interrupción de la monotonía. "Crudeza Interrumpida" transforma lo ordinario en lo extraordinario y resalta la capacidad de la creatividad para florecer incluso en los lugares más inesperados en este caso, en una cocina de un hogar.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}