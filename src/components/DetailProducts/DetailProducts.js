import Photos from "../../assets/img/detailproduct";
import Img from "../../features/Img";
import "./detailproduct.scss";
import hearticon from "../../assets/img/detailproduct/hearticon.svg";

const DetailProducts = () => {
  const listImages = Photos.map(({ img, img_2x, img_3x }, index) =>
    <div key={index} className="detailproduct_item">
      <Img
        src={img}
        srcSet01={img_2x}
        srcSet02={img_3x}
        className={"photo"}
        alt={"photo-product"}
      />
      <div className="detailproduct_title secondary-heading">[What happen] How to create </div>
      <div className="detailproduct_sub">
        <div className="detailproduct_price secondary-desc">2,500 won</div>
        <div className="detailproduct_heart">
          <span><img src={hearticon} alt="heart_icon" className="hearticon" /></span>
          <span className="heart secondary-desc">236</span>
        </div>
      </div>
    </div>
  )


  return (
    <div className="detailproduct">
      {listImages}
      <div className="button detailproduct_button">SEE MORE</div>
    </div>
  )
}

export default DetailProducts