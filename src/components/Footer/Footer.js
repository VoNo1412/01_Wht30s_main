import "./footer.scss";
import NIcon from "../../assets/img/footer/snsicon-01.svg";
import face from "../../assets/img/footer/snsicon-02.svg";
import blog from "../../assets/img/footer/snsicon-03.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-main">
                <div className="footer-content">
                    <div className="footer-list">
                        <div className="footer-item">
                            <div className="footer-brand">what happened</div>
                            <div className="footer-desc">
                                [공지] 개인 정보 처리 방침 변경 사전 안내 <br />
                                [공지] 29CM 강남 스토어 영업 종료 <br />
                                [공지] 개인 정보 처리 방침 변경 사전 안 내 <br />
                                [공지] iOS 10 이하 버전 지원 중단 안내 <br />
                                [공지] 개인 정보 처리 방침 변경 사전 안내
                            </div>
                        </div>
                        <div className="footer-item">
                            <div className="footer-info">
                                <div className="footer-info_item">
                                    <div className="footer-title">about us</div>
                                    <div className="footer-text">
                                        회사 소개 <br />
                                        인재 채용 <br />
                                        상시 할인 혜택 <br />
                                    </div>
                                </div>
                                <div className="footer-info_item">
                                    <div className="footer-title">my order</div>
                                    <div className="footer-text">
                                        내 주문 <br />
                                        주문 배송 <br />
                                        취소 / 교환 / 반품 내역 <br />
                                        상품 리뷰 내역 <br />
                                        증빙 서류 발급 <br />
                                    </div>
                                </div>
                                <div className="footer-info_item">
                                    <div className="footer-title">my account</div>
                                    <div className="footer-text">
                                        회원 정보 수정 <br />
                                        회원 등급 <br />
                                        마일리지 현황 <br />
                                        쿠폰
                                    </div>
                                </div>
                                <div className="footer-info_item">
                                    <div className="footer-title">help</div>
                                    <div className="footer-text">
                                        1 : 1 상담 내역 <br />
                                        상품 Q & A 내역 <br />
                                        공지 사항  <br />
                                        자주하는 질문 <br />
                                        고객의 소리
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="dived" />
                <div className="footer-copy">
                    <div className="footer-copy_content">
                        © 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr <br />
                        서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침
                    </div>
                    <div className="footer-icon">
                        <img src={NIcon} alt="icon-footer" />
                        <img src={face} alt="icon-footer" />
                        <img src={blog} alt="icon-footer" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer