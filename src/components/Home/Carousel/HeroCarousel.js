import { Carousel } from 'antd';
import styles from './HeroCarousel.module.css'
import Hero from '../Hero/Hero';
import Banner from '../Banner/Banner';

// const contentStyle = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

const HeroCarousel = () => (
  <Carousel effect="fade" 
    dotPosition='top'
    autoplay
  >
    <div className={`${styles.caro_image_box}`}>
        <Banner></Banner>
    </div>
    <div className={`${styles.caro_image_box}`}>
    <Hero></Hero>

    </div>
    <div className={`${styles.caro_image_box}`}>
    <img src={'/images/backgrounds/background-01.jpg'} alt='hero_image'></img>
    </div>
    <div className={`${styles.caro_image_box}`}>
    <img src={'/images/backgrounds/background-04.jpg'} alt='hero_image'></img>
    </div>
  </Carousel>
);
export default HeroCarousel;