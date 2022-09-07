import "./hero.scss";
import hero from '../../assets/img/hero/introduction-bg.png';
import hero1 from '../../assets/img/hero/introduction-bg@2x.png';
import hero2 from '../../assets/img/hero/introduction-bg@3x.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-introduction">
        <img src={hero} alt="hero" srcSet={`${hero1} 2x,
            ${hero2} 3x`} />

        <div className="hero-content">
          <div className="hero-title primary-heading">
            What Happened!
          </div>
          <div className="hero-desc primary-desc">
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first
            step to your brand's success. How to create
            mobile-optimized videos in minutes.
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero