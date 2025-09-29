import "../css/FeaturedPost.css";

const FeaturedPost = () => (
  <section className="featured-section">
    <h2>Bài Viết Nổi Bật</h2>
    <div className="featured-card">
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
        alt="Featured"
        className="featured-img"
      />
      <div className="featured-content">
        <div className="featured-meta">
          <span className="featured-category">Lập Trình</span>
          <span className="featured-time">5 phút đọc</span>
        </div>
        <h3>Khám Phá Thế Giới Lập Trình React Hiện Đại</h3>
        <p>
          Tìm hiểu về những tính năng mới nhất của React và cách áp dụng chúng vào dự án thực tế để tạo ra những ứng dụng web tuyệt vời.
        </p>
        <div className="featured-author">
          <span className="author-avatar">👤</span>
          <span>Admin</span>
          <span className="featured-date">15/1/2024</span>
        </div>
        <a href="#" className="featured-btn">Đọc Tiếp</a>
      </div>
    </div>
  </section>
);

export default FeaturedPost;