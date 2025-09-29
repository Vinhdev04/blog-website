
import { faCss3Alt, faHtml5, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/About.css";
const About = () => {
  return (
    <div className="about-root">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>
            Xin Chào, Tôi Là <span className="about-highlight">Phạm Công Vinh</span>
          </h1>
          <p>
            Frontend Developer với hơn 1 năm kinh nghiệm trong việc xây dựng các ứng dụng web hiện đại. Đam mê chia sẻ kiến thức và học hỏi những công nghệ mới.
          </p>
          <div className="about-hero-actions">
            <a href="#contact" className="about-btn about-btn-primary">Liên Hệ Với Tôi</a>
            <a href="#skills" className="about-btn about-btn-outline">Xem Kỹ Năng</a>
          </div>
        </div>
    
        <div className="about-hero-avatar">
          <div className="about-avatar-img"></div>
         <div className="avatar-icon orbit orbit-html"><FontAwesomeIcon icon={faHtml5} /></div>
        <div className="avatar-icon orbit orbit-css"><FontAwesomeIcon icon={faCss3Alt} /></div>
        <div className="avatar-icon orbit orbit-js"><FontAwesomeIcon icon={faJs} /></div>
        <div className="avatar-icon orbit orbit-react"><FontAwesomeIcon icon={faReact} /></div>
        <div className="avatar-icon orbit orbit-mongo"><FontAwesomeIcon icon={faLeaf} /></div>
        <div className="avatar-icon orbit orbit-node"><FontAwesomeIcon icon={faNodeJs} /></div>
        </div>

      </section>

      {/* Story Section */}
      <section className="about-story container">
        <div className="about-story-text">
          <h2>Câu Chuyện Của Tôi</h2>
          <p>
            Tôi bắt đầu hành trình lập trình từ năm 2020 với niềm đam mê tạo ra những sản phẩm công nghệ có thể giúp ích cho mọi người. Từ những dòng code đầu tiên đến việc xây dựng các ứng dụng phức tạp, tôi luôn không ngừng học hỏi và phát triển.
          </p>
          <p>
            Qua những năm làm việc, tôi đã có cơ hội tham gia vào nhiều dự án đa dạng, từ website thương mại điện tử đến các ứng dụng doanh nghiệp quy mô lớn. Mỗi dự án đều mang lại những bài học quý giá và giúp tôi trở thành developer toàn diện hơn.
          </p>
          <p>
            Blog này được tạo ra với mục đích chia sẻ những kiến thức, kinh nghiệm mà tôi đã tích lũy được trong suốt quá trình làm việc. Hy vọng những bài viết của tôi sẽ hữu ích cho cộng đồng developer Việt Nam.
          </p>
        </div>
        <div className="about-story-stats">
          <div className="about-stat about-stat-blue">
            <div className="about-stat-icon"><i className="fas fa-trophy"></i></div>
            <div className="about-stat-value">20+</div>
            <div className="about-stat-label">Dự Án Hoàn Thành</div>
          </div>
          <div className="about-stat about-stat-green">
            <div className="about-stat-icon"><i className="fas fa-clock"></i></div>
            <div className="about-stat-value">1+</div>
            <div className="about-stat-label">Năm Kinh Nghiệm</div>
          </div>
          <div className="about-stat about-stat-yellow">
            <div className="about-stat-icon"><i className="fas fa-users"></i></div>
            <div className="about-stat-value">20+</div>
            <div className="about-stat-label">Khách Hàng Hài Lòng</div>
          </div>
          <div className="about-stat about-stat-purple">
            <div className="about-stat-icon"><i className="fas fa-file-alt"></i></div>
            <div className="about-stat-value">100+</div>
            <div className="about-stat-label">Bài Viết Blog</div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="about-skills-section" id="skills">
        <h2>Kỹ Năng Chuyên Môn</h2>
        <p>Những công nghệ và kỹ năng mà tôi sử dụng hàng ngày để tạo ra các sản phẩm chất lượng</p>
        <div className="about-skills-list">
          <div className="about-skill-card">
            <div className="about-skill-icon about-skill-blue"><i className="fab fa-react"></i></div>
            <div>
              <div className="about-skill-title">React</div>
              <div className="about-skill-level">95% thành thạo</div>
              <div className="about-skill-bar"><div style={{width: "95%"}}></div></div>
            </div>
          </div>
          <div className="about-skill-card">
            <div className="about-skill-icon about-skill-blue"><i className="fab fa-js"></i></div>
            <div>
              <div className="about-skill-title">TypeScript</div>
              <div className="about-skill-level">90% thành thạo</div>
              <div className="about-skill-bar"><div style={{width: "90%"}}></div></div>
            </div>
          </div>
          <div className="about-skill-card">
            <div className="about-skill-icon about-skill-blue"><i className="fab fa-node-js"></i></div>
            <div>
              <div className="about-skill-title">Node.js</div>
              <div className="about-skill-level">85% thành thạo</div>
              <div className="about-skill-bar"><div style={{width: "85%"}}></div></div>
            </div>
          </div>
          <div className="about-skill-card">
            <div className="about-skill-icon about-skill-purple"><i className="fas fa-palette"></i></div>
            <div>
              <div className="about-skill-title">UI/UX Design</div>
              <div className="about-skill-level">80% thành thạo</div>
              <div className="about-skill-bar"><div style={{width: "80%"}}></div></div>
            </div>
          </div>
          <div className="about-skill-card">
            <div className="about-skill-icon about-skill-purple"><i className="fas fa-database"></i></div>
            <div>
              <div className="about-skill-title">MongoDB</div>
              <div className="about-skill-level">75% thành thạo</div>
              <div className="about-skill-bar"><div style={{width: "75%"}}></div></div>
            </div>
          </div>
          <div className="about-skill-card">
            <div className="about-skill-icon about-skill-purple"><i className="fab fa-aws"></i></div>
            <div>
              <div className="about-skill-title">AWS</div>
              <div className="about-skill-level">70% thành thạo</div>
              <div className="about-skill-bar"><div style={{width: "70%"}}></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="about-exp-section">
        <h2>Kinh Nghiệm Làm Việc</h2>
        <p>Hành trình phát triển sự nghiệp của tôi qua các vị trí và dự án khác nhau</p>
        <div className="about-exp-list">
          <div className="about-exp-card">
            <div>
              <div className="about-exp-title">Senior Full Stack Developer</div>
              <div className="about-exp-company">Tech Solutions Inc.</div>
              <div className="about-exp-time">2022 - Hiện tại</div>
            </div>
            <div>
              <div>Phát triển và duy trì các ứng dụng web quy mô lớn sử dụng React, Node.js và MongoDB.</div>
              <b>Thành tựu nổi bật:</b>
              <ul>
                <li>✅ Tăng hiệu suất ứng dụng 40%</li>
                <li>✅ Dẫn dắt team 5 developers</li>
                <li>✅ Triển khai CI/CD pipeline</li>
              </ul>
            </div>
          </div>
          <div className="about-exp-card">
            <div>
              <div className="about-exp-title">Frontend Developer</div>
              <div className="about-exp-company">Digital Agency</div>
              <div className="about-exp-time">2020 - 2022</div>
            </div>
            <div>
              <div>Tạo ra những giao diện người dùng đẹp mắt và tương tác cho các website thương mại điện tử.</div>
              <b>Thành tựu nổi bật:</b>
              <ul>
                <li>✅ Hoàn thành 50+ dự án</li>
                <li>✅ Cải thiện UX score 35%</li>
                <li>✅ Mentor cho junior developers</li>
              </ul>
            </div>
          </div>
          <div className="about-exp-card">
            <div>
              <div className="about-exp-title">Junior Developer</div>
              <div className="about-exp-company">Startup Hub</div>
              <div className="about-exp-time">2019 - 2020</div>
            </div>
            <div>
              <div>Bắt đầu sự nghiệp với việc phát triển các tính năng cơ bản và học hỏi từ senior developers.</div>
              <b>Thành tựu nổi bật:</b>
              <ul>
                <li>✅ Học được 5+ công nghệ mới</li>
                <li>✅ Đóng góp vào 10+ dự án</li>
                <li>✅ Nhận giải thưởng Best Newcomer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta-section" id="contact">
        <h2>Hãy Cùng Nhau Tạo Ra Điều Gì Đó Tuyệt Vời</h2>
        <p>
          Tôi luôn sẵn sàng thảo luận về các dự án mới, cơ hội hợp tác hoặc đơn giản là trò chuyện về công nghệ
        </p>
        <div className="about-cta-actions">
          <a href="mailto:yourmail@example.com" className="about-btn about-btn-primary">Liên Hệ Ngay</a>
          <a href="/blog" className="about-btn about-btn-outline">Đọc Blog</a>
        </div>
      </section>
    </div>
  );
};

export default About;