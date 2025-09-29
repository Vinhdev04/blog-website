import '../css/CV.css';

const CV = () => {
  return (
    <div className="cv-container">
      <header className="cv-header">
        <div className="profile-section">
          <div className="profile-image">
            <img src="/profile-image.jpg" alt="Profile" />
          </div>
          <div className="profile-info">
            <h1>Senior Full Stack Developer</h1>
            <p>Passionate developer với 5+ năm kinh nghiệm</p>
          </div>
        </div>
      </header>

      <main className="cv-content">
        <section className="cv-section fade-in">
          <h2>Học Vấn</h2>
          <div className="education-card">
            <h3>Cử Nhân Công Nghệ Thông Tin</h3>
            <p>Đại Học Bách Khoa Hà Nội</p>
            <p className="gpa">GPA: 3.7/4.0</p>
          </div>
        </section>

        <section className="cv-section slide-in">
          <h2>Kỹ Năng</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <span>React</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{width: "95%"}}></div>
              </div>
            </div>
            <div className="skill-item">
              <span>Node.js</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{width: "85%"}}></div>
              </div>
            </div>
          </div>
        </section>

        <section className="cv-section fade-in">
          <h2>Kinh Nghiệm Làm Việc</h2>
          <div className="experience-card">
            <h3>Senior Full Stack Developer</h3>
            <p className="company">Tech Solutions Inc.</p>
            <ul className="achievements">
              <li>Tăng hiệu suất ứng dụng 40%</li>
              <li>Dẫn dắt team 5 developers</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CV;