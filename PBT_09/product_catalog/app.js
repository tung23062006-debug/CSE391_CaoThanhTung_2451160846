const products = [
    { id: 1, name: "iPhone 16", price: 25990000, category: "phone", image: "https://placehold.co/200", rating: 4.5, inStock: true },
    { id: 2, name: "Samsung S24 Ultra", price: 29990000, category: "phone", image: "https://placehold.co/200", rating: 4.7, inStock: true },
    { id: 3, name: "Google Pixel 9", price: 19990000, category: "phone", image: "https://placehold.co/200", rating: 4.4, inStock: false },
    { id: 4, name: "MacBook Pro M3", price: 39990000, category: "laptop", image: "https://placehold.co/200", rating: 4.9, inStock: true },
    { id: 5, name: "Dell XPS 13", price: 32490000, category: "laptop", image: "https://placehold.co/200", rating: 4.6, inStock: true },
    { id: 6, name: "Asus ROG Strix", price: 27990000, category: "laptop", image: "https://placehold.co/200", rating: 4.3, inStock: true },
    { id: 7, name: "iPad Pro M4", price: 26490000, category: "tablet", image: "https://placehold.co/200", rating: 4.8, inStock: true },
    { id: 8, name: "Galaxy Tab S9", price: 15990000, category: "tablet", image: "https://placehold.co/200", rating: 4.5, inStock: true },
    { id: 9, name: "Lenovo Legion Tab", price: 8990000, category: "tablet", image: "https://placehold.co/200", rating: 4.1, inStock: false },
    { id: 10, name: "AirPods Pro 2", price: 5990000, category: "accessory", image: "https://placehold.co/200", rating: 4.7, inStock: true },
    { id: 11, name: "Sony WH-1000XM5", price: 6890000, category: "accessory", image: "https://placehold.co/200", rating: 4.6, inStock: true },
    { id: 12, name: "Keychron K2 V2", price: 1850000, category: "accessory", image: "https://placehold.co/200", rating: 4.2, inStock: true }
];

let currentCategory = "all";
let searchKeyword = "";
let currentSort = "default";
let cartCount = 0;

let gridContainer, cartBadge;

function initUI() {
    const body = document.body;

    const header = document.createElement("header");
    const title = document.createElement("h1");
    title.textContent = "TechCatalog";

    const headerRight = document.createElement("div");
    headerRight.className = "header-right";

    const darkModeBtn = document.createElement("button");
    darkModeBtn.className = "btn";
    darkModeBtn.textContent = "🌓 Mode";
    darkModeBtn.addEventListener("click", () => body.classList.toggle("dark-mode"));

    const cartIcon = document.createElement("div");
    cartIcon.className = "cart-icon";
    cartIcon.textContent = "🛒";
    cartBadge = document.createElement("span");
    cartBadge.className = "cart-badge";
    cartBadge.textContent = "0";
    cartIcon.appendChild(cartBadge);

    headerRight.append(darkModeBtn, cartIcon);
    header.append(title, headerRight);

    const toolbar = document.createElement("div");
    toolbar.className = "toolbar";

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Tìm kiếm sản phẩm...";
    searchInput.addEventListener("input", (e) => searchProducts(e.target.value));

    const categories = ["all", "phone", "laptop", "tablet", "accessory"];
    const filterGroup = document.createElement("div");
    categories.forEach(cat => {
        const btn = document.createElement("button");
        btn.className = `btn ${cat === "all" ? "active" : ""}`;
        btn.textContent = cat.toUpperCase();
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".toolbar .btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filterByCategory(cat);
        });
        filterGroup.appendChild(btn);
    });

    const sortSelect = document.createElement("select");
    const options = [
        { value: "default", text: "Sắp xếp theo" },
        { value: "price-asc", text: "Giá tăng dần" },
        { value: "price-desc", text: "Giá giảm dần" },
        { value: "name-az", text: "Tên A-Z" },
        { value: "rating-high", text: "Đánh giá cao nhất" }
    ];
    options.forEach(opt => {
        const o = document.createElement("option");
        o.value = opt.value;
        o.textContent = opt.text;
        sortSelect.appendChild(o);
    });
    sortSelect.addEventListener("change", (e) => sortProducts(e.target.value));

    toolbar.append(searchInput, filterGroup, sortSelect);

    gridContainer = document.createElement("div");
    gridContainer.className = "grid-container";

    body.append(header, toolbar, gridContainer);
}

function filterByCategory(category) {
    currentCategory = category;
    applyAllFilters();
}

function searchProducts(keyword) {
    searchKeyword = keyword.toLowerCase().trim();
    applyAllFilters();
}

function sortProducts(sortType) {
    currentSort = sortType;
    applyAllFilters();
}

function applyAllFilters() {
    let result = products.filter(p => {
        const matchCat = currentCategory === "all" || p.category === currentCategory;
        const matchSearch = p.name.toLowerCase().includes(searchKeyword);
        return matchCat && matchSearch;
    });

    if (currentSort === "price-asc") result.sort((a, b) => a.price - b.price);
    else if (currentSort === "price-desc") result.sort((a, b) => b.price - a.price);
    else if (currentSort === "name-az") result.sort((a, b) => a.name.localeCompare(b.name));
    else if (currentSort === "rating-high") result.sort((a, b) => b.rating - a.rating);

    renderProducts(result);
}

function renderProducts(productArray) {
    gridContainer.innerHTML = ""; 

    if (productArray.length === 0) {
        const notify = document.createElement("p");
        notify.textContent = "Không tìm thấy sản phẩm phù hợp.";
        gridContainer.appendChild(notify);
        return;
    }

    productArray.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";

        card.addEventListener("click", (e) => {
            if (!e.target.classList.contains("add-btn")) {
                showModal(p);
            }
        });

        const img = document.createElement("img");
        img.src = p.image;
        img.alt = p.name;

        const name = document.createElement("h3");
        name.textContent = p.name;

        const price = document.createElement("div");
        price.className = "card-price";
        price.textContent = p.price.toLocaleString("vi-VN") + "đ";

        const meta = document.createElement("div");
        meta.className = "card-meta";
        meta.textContent = `⭐ ${p.rating} | ${p.inStock ? "Còn hàng" : "Hết hàng"}`;

        const addBtn = document.createElement("button");
        addBtn.className = "add-btn";
        addBtn.textContent = "Thêm vào giỏ";
        addBtn.addEventListener("click", () => {
            cartCount++;
            cartBadge.textContent = cartCount;
        });

        card.append(img, name, price, meta, addBtn);
        gridContainer.appendChild(card);
    });
}

function showModal(product) {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.remove();
    });

    const content = document.createElement("div");
    content.className = "modal-content";

    const closeBtn = document.createElement("span");
    closeBtn.className = "close-modal";
    closeBtn.textContent = "×";
    closeBtn.addEventListener("click", () => overlay.remove());

    const img = document.createElement("img");
    img.src = product.image;

    const name = document.createElement("h2");
    name.textContent = product.name;

    const info = document.createElement("p");
    info.innerHTML = `
        Danh mục: <b>${product.category.toUpperCase()}</b><br>
        Giá bán: <span style="color:red; font-weight:bold">${product.price.toLocaleString("vi-VN")}đ</span><br>
        Đánh giá: ${product.rating} / 5 ⭐<br>
        Trạng thái kho: ${product.inStock ? "🟢 Sẵn sàng giao" : "🔴 Tạm hết hàng"}
    `;

    content.append(closeBtn, img, name, info);
    overlay.appendChild(content);
    document.body.appendChild(overlay);
}

initUI();
renderProducts(products);