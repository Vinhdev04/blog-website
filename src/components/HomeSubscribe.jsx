import "../css/HomeSubscribe.css";

const HomeSubscribe = () => (
  <section className="subscribe-section">
    <h2>Đăng Ký Nhận Bài Viết Mới</h2>
    <p>Nhận thông báo về những bài viết mới nhất và thú vị nhất từ blog</p>
    <form className="subscribe-form">
      <input type="email" placeholder="Nhập email của bạn" />
      <button type="submit">Đăng Ký</button>
    </form>
  </section>
);

export default HomeSubscribe;