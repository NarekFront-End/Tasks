const products = [
    { id: 1, name: "Eco-friendly Water Bottle", category: "home", price: 15, tags: ["eco-friendly", "new"] },
    { id: 2, name: "Organic Cotton T-shirt", category: "apparel", price: 25, tags: ["eco-friendly"] },
    { id: 3, name: "Wireless Headphones", category: "electronics", price: 200, tags: ["new", "sale"] },
    { id: 10, name: "Biodegradable Trash Bags", category: "home", price: 12, tags: ["eco-friendly", "new"] },
    { id: 11, name: "Cotton Bed Sheets", category: "home", price: 40, tags: ["comfort", "bedding"] },
    { id: 12, name: "Linen Curtains", category: "home", price: 35, tags: ["home decor", "new"] },
    { id: 13, name: "Denim Jeans", category: "apparel", price: 30, tags: ["classic", "fashion"] },
    { id: 14, name: "Smart Speaker", category: "electronics", price: 80, tags: ["smart", "audio"] },
    { id: 15, name: "Coffee Maker", category: "electronics", price: 50, tags: ["kitchen", "coffee"] },
    { id: 16, name: "Air Purifier", category: "home", price: 150, tags: ["clean air", "smart"] },
    { id: 17, name: "Yoga Mat", category: "apparel", price: 20, tags: ["fitness", "comfortable"] },
    { id: 18, name: "Bluetooth Earbuds", category: "electronics", price: 70, tags: ["wireless", "music"] },
    // More products...
  ];
let form = document.getElementById("form");
let categorySelect = document.getElementById("category");
let ecoFriendlyCheckbox = document.getElementById("eco-friendly");
let newCheckbox = document.getElementById("new");
let saleCheckbox = document.getElementById("sale");

const showProducts = function(products) {
    form.innerHTML = '';
    for (let product of products) {
      let div = document.createElement("div");
      div.setAttribute("class", "products");
      for (let key in product) {
        let p = document.createElement("p");
        p.textContent = `${key}: ${product[key]}`;
        div.appendChild(p);
      }
      form.appendChild(div);
    }
  }

  const selectCategoryAndTags = function () {
    const selectedCategory = categorySelect.value;
    let filteredProducts = selectedCategory === 'all' ? products : products.filter(product => product.category === selectedCategory);
    if (ecoFriendlyCheckbox.checked) {
      filteredProducts = filteredProducts.filter(product => product.tags.includes("eco-friendly"));
    }
    if (newCheckbox.checked) {
      filteredProducts = filteredProducts.filter(product => product.tags.includes("new"));
    }
    if (saleCheckbox.checked) {
      filteredProducts = filteredProducts.filter(product => product.tags.includes("sale"));
    }
    showProducts(filteredProducts);
  }

  // Add event listener for category change
  categorySelect.addEventListener("change", selectCategoryAndTags);
  ecoFriendlyCheckbox.addEventListener("change", selectCategoryAndTags);
  newCheckbox.addEventListener("change", selectCategoryAndTags);
  saleCheckbox.addEventListener("change", selectCategoryAndTags);
  window.addEventListener("load", () => showProducts(products));
