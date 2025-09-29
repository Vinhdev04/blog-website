import { faFacebookF, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section about">
        <div className="footer-logo">Personal Blog</div>
        <p>
          Chia sẻ kiến thức và kinh nghiệm về công nghệ, lập trình, thiết kế và nhiều chủ đề thú vị khác.
        </p>
        <div className="footer-socials">
          <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </div>
      <div className="footer-section category">
        <h4>Danh Mục</h4>
        <ul>
          <li>Lập Trình</li>
          <li>Thiết Kế</li>
          <li>Công Nghệ</li>
          <li>Tối Ưu Hóa</li>
        </ul>
      </div>
      <div className="footer-section links">
        <h4>Liên Kết</h4>
        <ul>
          <li>Giới Thiệu</li>
          <li>Liên Hệ</li>
          <li>Chính Sách</li>
          <li>Điều Khoản</li>
        </ul>
      </div>
    </div>
    <hr />
    <div className="footer-bottom">
      © 2024 Personal Blog. Tất cả quyền được bảo lưu. <a href="#">Powered by Vinhdev</a>
    </div>
  </footer>
);

export default Footer;