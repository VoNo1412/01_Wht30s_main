import ImagesStudy from "../../assets/img/study";
import Img from "../../features/Img";
import "./study.scss";



const Study = () => {
    return (
        <div className="study">
            <div className="study-main">
                <div className="study-content primary-fonts">
                    <div className="study-title primary-heading">
                        what happened</div>
                    <div className="study-desc primary-desc">
                        How to create mobile-optimized videos in minutes. Not a designer,
                        every team makes a lot of videos Can be trimmed. Take the first
                    </div>

                    <div className="button study-btn">SEE MORE</div>
                </div>
                <div className="study-list">
                    <div className="study_item study_video01">
                        <Img src={ImagesStudy.video01} srcSet01={ImagesStudy.video01_2x} srcSet02={ImagesStudy.video01_3x}
                            alt="video"
                        />
                    </div>
                    <div className="study_item study_video02">
                        <Img src={ImagesStudy.video02} srcSet01={ImagesStudy.video02_2x} srcSet02={ImagesStudy.video02_3x}
                            alt="video"
                        />
                    </div>
                    <div className="study_item study_video03">
                        <img src={ImagesStudy.video03} alt="video" />
                    </div>
                    <div className="study_item study_video04">
                        <Img src={ImagesStudy.video04} srcSet01={ImagesStudy.video04_2x} srcSet02={ImagesStudy.video04_3x}
                            alt="video"
                        />
                    </div>
                    <div className="study_item study_video05">
                        <img src={ImagesStudy.video05} alt="video" />
                    </div>
                    <div className="study_item study_video06">
                        <img src={ImagesStudy.video06} alt="video" />
                    </div>
                    <div className="study_item study_video07">
                        <img src={ImagesStudy.video07} alt="video" />
                    </div>
                    <div className="study_item study_video08">
                        <Img src={ImagesStudy.video08} srcSet01={ImagesStudy.video08_2x} srcSet02={ImagesStudy.video08_3x}
                            alt="video"
                        />
                    </div>
                    <div className="study_item study_video09">
                        <img src={ImagesStudy.video09} alt="video" />
                    </div>
                    <div className="study_item study_video">
                        <Img src={ImagesStudy.video} srcSet01={ImagesStudy.video_2x} srcSet02={ImagesStudy.video_3x}
                            alt="video"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Study