import "./product.scss";
import productImg from "../../assets/img/product";
import Img from "../../features/Img";
import GoIcon from "../../features/GoIcon";


const Product = () => {

    return (
        <div className="product">
            <div className="product-main">
                <Img src={productImg.bestBg} srcSet01={productImg.bestBg_2x} srcSet02={productImg.bestBg_3x} className="Bes_bg" alt="bes-bg" />

                <div className="product-content primary-fonts">
                    <div className="product-info">
                        <div className="product-title primary-heading">BEST PRODUCT</div>
                        <div className="product-desc primary-desc">
                            How to create mobile-optimized videos in minutes. Not a designer,
                            every team makes a lot of videos Can be trimmed. Take the first
                        </div>
                    </div>

                    <div className="product-represents">
                        <div className="product-represent">
                            <Img src={productImg.mark01} srcSet01={productImg.mark01_2x} srcSet02={productImg.mark01_3x} className="mark" alt="mark01" />
                            <Img src={productImg.bestImg01} srcSet01={productImg.bestImg01_2x} srcSet02={productImg.bestImg01_3x} className="BestImage" alt="bes01" />

                            <GoIcon />
                        </div>
                        <div className="product-represent">
                            <Img src={productImg.mark02} srcSet01={productImg.mark02_2x} srcSet02={productImg.mark02_3x} className="mark" alt="mark02" />
                            <Img src={productImg.bestImg02} srcSet01={productImg.bestImg02_2x} srcSet02={productImg.bestImg02_3x} className="BestImage" alt="bes02" />

                            <GoIcon />

                        </div>
                        <div className="product-represent">
                            <Img src={productImg.mark03} srcSet01={productImg.mark03_2x} srcSet02={productImg.mark03_3x} className="mark" alt="mark03" />
                            <Img src={productImg.bestImg03} srcSet01={productImg.bestImg03_2x} srcSet02={productImg.bestImg03_3x} className="BestImage" alt="bes03" />

                            <GoIcon />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product