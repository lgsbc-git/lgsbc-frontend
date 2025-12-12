import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ProductSidebar.css";
import { productsData } from "../data/ProductsData";

const ProductSidebar = ({ active }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Convert products object to array and group by category
  const products = Object.entries(productsData).map(([slug, data]) => ({
    slug,
    title: data.title,
    category: data.category,
  }));

  // Group products by category
  const groupedByCategory = products.reduce((acc, product) => {
    const category = product.category || "Other";
    if (!acc[category]) acc[category] = [];
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <>
      {/* ================================
          DESKTOP SIDEBAR (unchanged)
      ================================= */}
      <div className="product-sidebar desktop-only">
        <h3 className="product-sidebar-title">Products</h3>

        <div className="product-sidebar-list">
          {Object.entries(groupedByCategory).map(([category, items]) => (
            <div key={category} className="product-sidebar-group">
              <p className="product-sidebar-category">{category}</p>

              {items.map((product) => (
                <Link
                  key={product.slug}
                  to={`/products/${product.slug}`}
                  style={{ textDecoration: "none" }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <p
                    className={
                      active === product.slug
                        ? "product-sidebar-link active"
                        : "product-sidebar-link"
                    }
                  >
                    {product.title}
                  </p>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ================================
          MOBILE DROPDOWN SIDEBAR
      ================================= */}
      <div className="product-sidebar-mobile mobile-only">
        <button
          className="sidebar-mobile-toggle"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? "Hide Products ▲" : "Products Menu ▼"}
        </button>

        {showMobileMenu && (
          <div className="product-sidebar-mobile-dropdown">
            <div className="product-sidebar-list">
              {Object.entries(groupedByCategory).map(([category, items]) => (
                <div key={category} className="product-sidebar-group">
                  <p className="product-sidebar-category">{category}</p>

                  {items.map((product) => (
                    <Link
                      key={product.slug}
                      to={`/products/${product.slug}`}
                      style={{ textDecoration: "none" }}
                      onClick={() => {
                        setShowMobileMenu(false);
                        window.scrollTo(0, 0);
                      }}
                    >
                      <p
                        className={
                          active === product.slug
                            ? "product-sidebar-link active"
                            : "product-sidebar-link"
                        }
                      >
                        {product.title}
                      </p>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductSidebar;
