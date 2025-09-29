import "../css/LatestPosts.css";

const posts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    category: "Thiết Kế",
    time: "7 phút",
    title: "Thiết Kế UI/UX Đẹp Mắt Với Tailwind CSS",
    desc: "Hướng dẫn chi tiết cách sử dụng Tailwind CSS để tạo ra những giao diện người dùng đẹp mắt và responsive.",
    author: "Admin",
    date: "12/1/2024",
    link: "#"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "Tối Ưu Hóa",
    time: "6 phút",
    title: "Tối Ưu Hóa Hiệu Suất Website",
    desc: "Những kỹ thuật và công cụ giúp tăng tốc độ tải trang và cải thiện trải nghiệm người dùng.",
    author: "Admin",
    date: "10/1/2024",
    link: "#"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    category: "Công Nghệ",
    time: "8 phút",
    title: "Xu Hướng Công Nghệ 2024",
    desc: "Cập nhật những xu hướng công nghệ mới nhất và tác động của chúng đến ngành phát triển phần mềm.",
    author: "Admin",
    date: "8/1/2024",
    link: "#"
  }
];

const LatestPosts = () => (
  <section className="latest-section">
    <h2>Bài Viết Mới Nhất</h2>
    <div className="latest-list">
      {posts.map(post => (
        <div className="latest-card" key={post.id}>
          <img src={post.image} alt={post.title} className="latest-img" />
          <div className="latest-content">
            <div className="latest-meta">
              <span className="latest-category">{post.category}</span>
              <span className="latest-time">{post.time}</span>
            </div>
            <h3>{post.title}</h3>
            <p>{post.desc}</p>
            <div className="latest-author">
              <span className="author-avatar">👤</span>
              <span>{post.author}</span>
              <span className="latest-date">{post.date}</span>
            </div>
            <a href={post.link} className="latest-readmore">Đọc thêm &rarr;</a>
          </div>
        </div>
      ))}
    </div>
    <a href="#" className="latest-all-btn">Xem Tất Cả Bài Viết</a>
  </section>
);

export default LatestPosts;