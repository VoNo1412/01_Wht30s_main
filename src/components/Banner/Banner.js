import "./banner.scss";
import mainBanner from "../../assets/img/banner/main-banner.png";
import mainBanner2 from "../../assets/img/banner/main-banner@2x.png";
import mainBanner3 from "../../assets/img/banner/main-banner@3x.png";


const Banner = () => {
    return (
        <div className="banner">
            <img src={mainBanner}
                srcSet={`${mainBanner2} 2x,
             ${mainBanner3} 3x`}
                className="main_banner" alt="banner" />
        </div>
    )
}

export default Banner