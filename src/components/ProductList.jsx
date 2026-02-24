import { useState } from "react";
import productsData from "../data/product.js";

function ProductList() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const filteredProducts = productsData
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) =>
      category === "All" ? true : product.category === category
    )
    .sort((a, b) => {
      if (sort === "price") return a.price - b.price;
      if (sort === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="container">
      <h2>Product Listing</h2>

   
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

   
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Furniture">Furniture</option>
      </select>

    
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort By</option>
        <option value="price">Price (Low → High)</option>
        <option value="rating">Rating (High → Low)</option>
      </select>

 
      <div className="grid">
        {filteredProducts.map((product) => (
          <div className="card" 
          key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: ⭐ {product.rating}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;