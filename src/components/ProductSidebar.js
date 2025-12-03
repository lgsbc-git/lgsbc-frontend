// import React from "react";
// import { NavLink } from "react-router-dom";
// import "../styles/ProductSidebar.css";
// import { productsData } from "../data/ProductsData";

// const ProductSidebar = ({ active }) => {
//   return (
//     <div className="product-sidebar">

//       <h3 className="product-sidebar-title">Products</h3>

//       <div className="product-sidebar-list">

//         {productsData.map((group, i) => (
//           <div key={i} className="product-sidebar-group">
            
//             <p className="product-sidebar-category">{group.category}</p>

//             {group.items.map((item, idx) => (
//               <NavLink
//                 key={idx}
//                 to={item.route}
//                 className={({ isActive }) =>
//                   isActive
//                     ? "product-sidebar-link active"
//                     : "product-sidebar-link"
//                 }
//               >
//                 <span>{item.name}</span>
//               </NavLink>
//             ))}

//           </div>
//         ))}

//       </div>

//     </div>
//   );
// };

// export default ProductSidebar;
