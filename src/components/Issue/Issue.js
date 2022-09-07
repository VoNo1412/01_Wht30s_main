import "./issue.scss";
import dice2 from "../../assets/img/issue/news-object-02.png";
import dice2_2x from "../../assets/img/issue/news-object-02@2x.png";
import dice2_3x from "../../assets/img/issue/news-object-02@3x.png";
import dice3 from "../../assets/img/issue/news-object-03.png";
import dice3_2x from "../../assets/img/issue/news-object-03@2x.png";
import dice3_3x from "../../assets/img/issue/news-object-03@3x.png";
import circle from "../../assets/img/issue/circle.png";
import circle2x from "../../assets/img/issue/circle@2x.png"
import circle3x from "../../assets/img/issue/circle@3x.png"
import newImg03 from "../../assets/img/issue/news-img-03.png";
import newImg03_2x from "../../assets/img/issue/news-img-03@2x.png";
import newImg03_3x from "../../assets/img/issue/news-img-03@3x.png";
import newImg04 from "../../assets/img/issue/news-img-04.png";
import newImg04_2x from "../../assets/img/issue/news-img-04@2x.png";
import newImg04_3x from "../../assets/img/issue/news-img-04@3x.png"; 
import newImg05 from "../../assets/img/issue/news-img-05.png";
import newImg05_2x from "../../assets/img/issue/news-img-05@2x.png";
import newImg05_3x from "../../assets/img/issue/news-img-05@3x.png"; 
import arrow from "../../assets/img/issue/news-img-01.svg";
import hot from "../../assets/img/issue/news-object-04.svg";


import Img from "../../features/Img";

const Issue = () => {
    return (
        <div className="issue">
            <div className="issue-main">
                <div className="issue-content primary-fonts">
                    <div className="third-heading issue-title">
                        Happened’s issue</div>
                    <div className="issue-desc third-desc">
                        모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                        다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                    </div>

                    <div className="button issue-btn">SEE MORE</div>
                </div>
                <div className="issue-logo">
                    <div className="issue_object02">
                        <Img src={dice2} srcSet01={dice2_2x} srcSet02={dice2_3x}
                        />
                    </div>
                    <div className="issue_object03">
                        <Img src={dice3} srcSet01={dice3_2x} srcSet02={dice3_3x}
                        />
                    </div>
                </div>
                <div className="issue-list">
                    <div className="issue-item issue-card">
                        <div className="issue-heading  primary-fonts">
                            WHPN <br />
                            ISSUE
                        </div>
                        <div className="issue-arrow">
                            <img src={arrow} alt="arrow-icon" />
                        </div>

                        <div className="issue-circle">
                            <Img src={circle} srcSet01={circle2x} srcSet02={circle3x}
                            />
                        </div>
                    </div>

                    <div className="issue-item issue-card02">
                        <div className="issue-item_title primary-fonts">B BRAND</div>
                        <div className="issue-item_object03">
                            <Img src={newImg03} srcSet01={newImg03_2x} srcSet02={newImg03_3x}
                            />
                        </div>
                        <div className="issue-hot">
                            <img src={hot} alt="issue-hot" />
                        </div>
                    </div>

                    <div className="issue-item issue-card">
                        <div className="issue-heading">
                            WHPN <br />
                            ISSUE
                        </div>
                        <div className="issue-arrow">
                            <img src={arrow} alt="arrow-icon" />
                        </div>

                        <div className="issue-circle">
                            <Img src={circle} srcSet01={circle2x} srcSet02={circle3x}
                            />
                        </div>
                    </div>

                    <div className="issue-item issue-card04">
                        <div className="issue-item_title">D BRAND</div>
                        <div className="issue-item_object04">
                            <Img src={newImg04} srcSet01={newImg04_2x} srcSet02={newImg04_3x}
                            />
                        </div>
                    </div>

                    <div className="issue-item issue-card05">
                        <div className="issue-item_title">E BRAND</div>
                        <div className="issue-item_object05">
                            <Img src={newImg05} srcSet01={newImg05_2x} srcSet02={newImg05_3x}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Issue