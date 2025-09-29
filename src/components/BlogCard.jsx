
// import "../css/Blog.css";
// const BlogCard = ({ post }) => (
//   <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-[1.03] cursor-pointer overflow-hidden group">
//     <div className="relative">
//       <img
//         src={post.image}
//         alt={post.title}
//         className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//       />
//       <span className="absolute top-4 left-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg animate-pulse">
//         {post.category}
//       </span>
//     </div>
//     <div className="p-5">
//       <div className="flex items-center text-gray-400 text-xs mb-2 space-x-3">
//         <span>
//           <i className="fa-regular fa-calendar"></i> {post.date}
//         </span>
//         <span>
//           <i className="fa-regular fa-clock"></i> {post.readTime}
//         </span>
//       </div>
//       <h2 className="font-bold text-lg md:text-xl text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
//         {post.title}
//       </h2>
//       <p className="text-gray-600 text-sm mb-3">{post.description}</p>
//       <div className="flex flex-wrap gap-2 mb-4">
//         {post.tags.map((tag) => (
//           <span
//             key={tag}
//             className="bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs font-medium"
//           >
//             #{tag}
//           </span>
//         ))}
//       </div>
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <span className="w-7 h-7 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow">
//             <i className="fa-solid fa-user"></i>
//           </span>
//           <span className="text-gray-700 text-xs font-semibold">{post.author}</span>
//         </div>
//         <a
//           href={post.link}
//           className="text-indigo-600 font-semibold text-sm hover:underline transition-all duration-200"
//         >
//           Đọc thêm →
//         </a>
//       </div>
//     </div>
//   </div>
// );

// export default BlogCard;