import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt, faClock, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "../css/Contact.css";

const Contact = () => (
  <div className="contact-root">
    {/* Hero Section */}
    <section className="contact-hero">
      <h1>Liên Hệ Với Tôi</h1>
      <p>
        Tôi luôn sẵn sàng lắng nghe ý kiến, thảo luận về dự án hoặc đơn giản là trò chuyện về công nghệ.<br />
        Hãy liên hệ với tôi qua các cách dưới đây.
      </p>
    </section>

    {/* Quick Info Section */}
    <section className="contact-quick">
      <div className="contact-quick-list">
        <div className="contact-quick-card">
          <div className="contact-quick-icon email"><FontAwesomeIcon icon={faEnvelope} /></div>
          <div className="contact-quick-title">Email</div>
          <a href="mailto:contact@personalblog.com" className="contact-quick-link">contact@personalblog.com</a>
          <div className="contact-quick-desc">Gửi email cho tôi bất cứ lúc nào</div>
        </div>
        <div className="contact-quick-card">
          <div className="contact-quick-icon phone"><FontAwesomeIcon icon={faPhone} /></div>
          <div className="contact-quick-title">Điện Thoại</div>
          <a href="tel:+84123456789" className="contact-quick-link">+84 123 456 789</a>
          <div className="contact-quick-desc">Gọi điện trong giờ hành chính</div>
        </div>
        <div className="contact-quick-card">
          <div className="contact-quick-icon map"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
          <div className="contact-quick-title">Địa Chỉ</div>
          <div className="contact-quick-link">Hà Nội, Việt Nam</div>
          <div className="contact-quick-desc">Có thể gặp mặt trực tiếp</div>
        </div>
        <div className="contact-quick-card">
          <div className="contact-quick-icon clock"><FontAwesomeIcon icon={faClock} /></div>
          <div className="contact-quick-title">Giờ Làm Việc</div>
          <div className="contact-quick-link">9:00 - 18:00</div>
          <div className="contact-quick-desc">Thứ 2 - Thứ 6</div>
        </div>
      </div>
    </section>

    {/* Main Content */}
    <section className="contact-main">
      <div className="contact-form-wrap">
        <h2>Gửi Tin Nhắn</h2>
        <p>Điền thông tin vào form dưới đây và tôi sẽ phản hồi trong vòng 24 giờ.</p>
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Họ và Tên *</label>
              <input type="text" placeholder="Nhập họ và tên của bạn" required />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input type="email" placeholder="your@email.com" required />
            </div>
          </div>
          <div className="form-group">
            <label>Chủ Đề *</label>
            <input type="text" placeholder="Chủ đề tin nhắn" required />
          </div>
          <div className="form-group">
            <label>Tin Nhắn *</label>
            <textarea rows={5} placeholder="Nội dung tin nhắn của bạn..." maxLength={500} required />
            <div className="form-count">0/500 ký tự</div>
          </div>
          <button type="submit" className="contact-btn">
            <FontAwesomeIcon icon={faPaperPlane} /> Gửi Tin Nhắn
          </button>
        </form>
      </div>
      <div className="contact-side">
        <div className="contact-faq">
          <h3>Câu Hỏi Thường Gặp</h3>
          <div className="faq-item">
            <b>Tôi có thể hợp tác với bạn không?</b>
            <p>Tất nhiên! Tôi luôn mở cửa cho các cơ hội hợp tác thú vị. Hãy liên hệ để thảo luận chi tiết.</p>
          </div>
          <div className="faq-item">
            <b>Bạn có nhận làm dự án freelance không?</b>
            <p>Có, tôi nhận các dự án freelance phù hợp với lịch trình và chuyên môn của mình.</p>
          </div>
          <div className="faq-item">
            <b>Thời gian phản hồi là bao lâu?</b>
            <p>Tôi thường phản hồi trong vòng 24 giờ, trừ cuối tuần và ngày lễ.</p>
          </div>
        </div>
        <div className="contact-social">
          <h3>Kết Nối Với Tôi</h3>
          <div className="social-list">
            <a href="#" className="social-item github">
              <FontAwesomeIcon icon={faGithub} /> <span>GitHub</span>
            </a>
            <a href="#" className="social-item linkedin">
              <FontAwesomeIcon icon={faLinkedin} /> <span>LinkedIn</span>
            </a>
            <a href="#" className="social-item twitter">
              <FontAwesomeIcon icon={faTwitter} /> <span>Twitter</span>
            </a>
            <a href="#" className="social-item facebook">
              <FontAwesomeIcon icon={faFacebook} /> <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;