import "./brand.scss";
import BrandImages from "../../assets/img/brand";
import Img from "../../features/Img";

const Brand = () => {
    return (
        <div className="brand">
            <div className="brand-main">
                <div className="brand-content primary-fonts">
                    <div className=" brand-title third-heading">Brand Story</div>
                    <div className="third-desc brand-desc">
                        모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                        다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                    </div>
                </div>
                <div className="brand-list">
                    <div className="brand_object01">
                        <Img
                            src={BrandImages.obj01}
                            srcSet01={BrandImages.obj01_2x}
                            srcSet02={BrandImages.obj01_3x}
                        />
                    </div>
                    <div className="brand_object02">
                        <img src={BrandImages.obj02} alt="object02" />
                    </div>
                    <div className="brand_object03">
                        <img src={BrandImages.obj03} alt="object03" />
                    </div>
                    <div className="brand_object04">
                        <Img src={BrandImages.obj04} srcSet01={BrandImages.obj04_2x} srcSet02={BrandImages.obj04_3x} />
                    </div>
                    <div className="brand_window">
                        <Img src={BrandImages.window} srcSet01={BrandImages.window_2x} srcSet02={BrandImages.window_3x} />
                    </div>
                    <div className="brand_object05">
                        <Img src={BrandImages.obj05} srcSet01={BrandImages.obj05_2x} srcSet02={BrandImages.obj05_3x} />
                    </div>
                    <div className="brand_object06">
                        <Img src={BrandImages.obj06} srcSet01={BrandImages.obj06_2x} srcSet02={BrandImages.obj06_3x} />
                    </div>
                    <div className="brand_object07">
                        <Img src={BrandImages.obj07} srcSet01={BrandImages.obj07_2x} srcSet02={BrandImages.obj07_3x} />
                    </div>

                    <div className="brand-board primary-fonts">
                        <div className="brand-heading">
                            What Happened’s Brand story
                        </div>
                        <div className="third-desc brand-text">
                            청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을
                            봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
                            긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
                            인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
                            아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다.
                        </div>
                        <div className="button">
                            SEE MORE
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brand