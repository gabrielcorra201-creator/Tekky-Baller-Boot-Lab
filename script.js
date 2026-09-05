/* ============================
   CLEAT DATABASE
   ============================ */

const cleats = [
    /* ============================
       NIKE
       ============================ */
    {
        name: "Nike Mercurial Vapor 15 Elite FG",
        brand: "Nike",
        fit: "narrow",
        feel: "tight",
        style: "explosive",
        price: "high",
        image: "https://images.soccer.com/merc-vapor-15-elite.jpg",
        link: "https://www.soccer.com/shop/details/nike-mercurial-vapor-15-elite-fg"
    },
    {
        name: "Nike Mercurial Superfly 9 Elite FG",
        brand: "Nike",
        fit: "narrow",
        feel: "tight",
        style: "explosive",
        price: "high",
        image: "https://images.soccer.com/merc-superfly-9-elite.jpg",
        link: "https://www.soccer.com/shop/details/nike-mercurial-superfly-9-elite-fg"
    },
    {
        name: "Nike Phantom GX Elite FG",
        brand: "Nike",
        fit: "regular",
        feel: "regular",
        style: "technical",
        price: "high",
        image: "https://images.soccer.com/phantom-gx-elite.jpg",
        link: "https://www.soccer.com/shop/details/nike-phantom-gx-elite-fg"
    },
    {
        name: "Nike Phantom Luna Elite FG",
        brand: "Nike",
        fit: "regular",
        feel: "regular",
        style: "creative",
        price: "high",
        image: "https://images.soccer.com/phantom-luna-elite.jpg",
        link: "https://www.soccer.com/shop/details/nike-phantom-luna-elite-fg"
    },
    {
        name: "Nike Tiempo Legend 10 Elite FG",
        brand: "Nike",
        fit: "wide",
        feel: "roomy",
        style: "balanced",
        price: "high",
        image: "https://images.soccer.com/tiempo-legend-10-elite.jpg",
        link: "https://www.soccer.com/shop/details/nike-tiempo-legend-10-elite-fg"
    },

    /* ============================
       ADIDAS
       ============================ */
    {
        name: "Adidas X Crazyfast Elite FG",
        brand: "Adidas",
        fit: "narrow",
        feel: "tight",
        style: "explosive",
        price: "high",
        image: "https://images.soccer.com/x-crazyfast-elite.jpg",
        link: "https://www.soccer.com/shop/details/adidas-x-crazyfast-elite-fg"
    },
    {
        name: "Adidas Predator Elite FG",
        brand: "Adidas",
        fit: "regular",
        feel: "regular",
        style: "technical",
        price: "high",
        image: "https://images.soccer.com/predator-elite.jpg",
        link: "https://www.soccer.com/shop/details/adidas-predator-elite-fg"
    },
    {
        name: "Adidas Copa Pure 2 Elite FG",
        brand: "Adidas",
        fit: "wide",
        feel: "roomy",
        style: "balanced",
        price: "high",
        image: "https://images.soccer.com/copa-pure-2-elite.jpg",
        link: "https://www.soccer.com/shop/details/adidas-copa-pure-2-elite-fg"
    },
    {
        name: "Adidas X Crazyfast Pro FG",
        brand: "Adidas",
        fit: "regular",
        feel: "tight",
        style: "explosive",
        price: "mid",
        image: "https://images.soccer.com/x-crazyfast-pro.jpg",
        link: "https://www.soccer.com/shop/details/adidas-x-crazyfast-pro-fg"
    },
    {
        name: "Adidas Predator League FG",
        brand: "Adidas",
        fit: "regular",
        feel: "regular",
        style: "technical",
        price: "mid",
        image: "https://images.soccer.com/predator-league.jpg",
        link: "https://www.soccer.com/shop/details/adidas-predator-league-fg"
    },

    /* ============================
       PUMA
       ============================ */
    {
        name: "Puma Ultra Ultimate FG/AG",
        brand: "Puma",
        fit: "narrow",
        feel: "tight",
        style: "explosive",
        price: "high",
        image: "https://images.soccer.com/puma-ultra-ultimate.jpg",
        link: "https://www.soccer.com/shop/details/puma-ultra-ultimate-fg-ag"
    },
    {
        name: "Puma Future Ultimate FG/AG",
        brand: "Puma",
        fit: "wide",
        feel: "regular",
        style: "creative",
        price: "high",
        image: "https://images.soccer.com/puma-future-ultimate.jpg",
        link: "https://www.soccer.com/shop/details/puma-future-ultimate-fg-ag"
    },
    {
        name: "Puma King Ultimate FG/AG",
        brand: "Puma",
        fit: "wide",
        feel: "roomy",
        style: "balanced",
        price: "high",
        image: "https://images.soccer.com/puma-king-ultimate.jpg",
        link: "https://www.soccer.com/shop/details/puma-king-ultimate-fg-ag"
    },
    {
        name: "Puma Ultra Pro FG/AG",
        brand: "Puma",
        fit: "narrow",
        feel: "tight",
        style: "explosive",
        price: "mid",
        image: "https://images.soccer.com/puma-ultra-pro.jpg",
        link: "https://www.soccer.com/shop/details/puma-ultra-pro-fg-ag"
    },
    {
        name: "Puma Future Pro FG/AG",
        brand: "Puma",
        fit: "wide",
        feel: "regular",
        style: "creative",
        price: "mid",
        image: "https://images.soccer.com/puma-future-pro.jpg",
        link: "https://www.soccer.com/shop/details/puma-future-pro-fg-ag"
    },

    /* ============================
       MIZUNO
       ============================ */
    {
        name: "Mizuno Morelia Neo III β Elite FG",
        brand: "Mizuno",
        fit: "narrow",
        feel: "tight",
        style: "balanced",
        price: "high",
        image: "https://images.soccer.com/morelia-neo-3-beta.jpg",
        link: "https://www.soccer.com/shop/details/mizuno-morelia-neo-iii-beta-elite-fg"
    },
    {
        name: "Mizuno Alpha Elite FG",
        brand: "Mizuno",
        fit: "regular",
        feel: "tight",
        style: "explosive",
        price: "high",
        image: "https://images.soccer.com/mizuno-alpha-elite.jpg",
        link: "https://www.soccer.com/shop/details/mizuno-alpha-elite-fg"
    },
    {
        name: "Mizuno Rebula Cup Elite FG",
        brand: "Mizuno",
        fit: "wide",
        feel: "roomy",
        style: "technical",
        price: "high",
        image: "https://images.soccer.com/mizuno-rebula-cup-elite.jpg",
        link: "https://www.soccer.com/shop/details/mizuno-rebula-cup-elite-fg"
    },
    {
        name: "Mizuno Morelia II FG",
        brand: "Mizuno",
        fit: "wide",
        feel: "roomy",
        style: "balanced",
        price: "mid",
        image: "https://images.soccer.com/morelia-ii.jpg",
        link: "https://www.soccer.com/shop/details/mizuno-morelia-ii-fg"
    },

    /* ============================
       NEW BALANCE
       ============================ */
    {
        name: "New Balance Furon V7 Pro FG",
        brand: "New Balance",
        fit: "narrow",
        feel: "tight",
        style: "explosive",
        price: "high",
        image: "https://images.soccer.com/nb-furon-v7-pro.jpg",
        link: "https://www.soccer.com/shop/details/new-balance-furon-v7-pro-fg"
    },
    {
        name: "New Balance Tekela V4 Pro FG",
        brand: "New Balance",
        fit: "wide",
        feel: "regular",
        style: "technical",
        price: "high",
        image: "https://images.soccer.com/nb-tekela-v4-pro.jpg",
        link: "https://www.soccer.com/shop/details/new-balance-tekela-v4-pro-fg"
    },
    {
        name: "New Balance 442 V2 Pro FG",
        brand: "New Balance",
        fit: "regular",
        feel: "roomy",
        style: "balanced",
        price: "mid",
        image: "https://images.soccer.com/nb-442-v2-pro.jpg",
        link: "https://www.soccer.com/shop/details/new-balance-442-v2-pro-fg"
    },

    /* ============================
       SOKITO
       ============================ */
    {
        name: "Sokito Devista Pro FG",
        brand: "Sokito",
        fit: "regular",
        feel: "regular",
        style: "balanced",
        price: "mid",
        image: "https://images.unisportstore.com/sokito-devista-pro.jpg",
        link: "https://www.unisportstore.com/sokito-devista-pro-fg"
    },
    {
        name: "Sokito Proxima FG",
        brand: "Sokito",
        fit: "regular",
        feel: "tight",
        style: "technical",
        price: "mid",
        image: "https://images.unisportstore.com/sokito-proxima.jpg",
        link: "https://www.unisportstore.com/sokito-proxima-fg"
    },
    {
        name: "Sokito Scudetto FG",
        brand: "Sokito",
        fit: "wide",
        feel: "roomy",
        style: "balanced",
        price: "mid",
        image: "https://images.unisportstore.com/sokito-scudetto.jpg",
        link: "https://www.unisportstore.com/sokito-scudetto-fg"
    }
];



/* ============================
   CLEAT FINDER ENGINE
   ============================ */

function runCleatFinder() {
    const footShape = document.getElementById("footShape").value;
    const fitPreference = document.getElementById("fitPreference").value;
    const playStyle = document.getElementById("playStyle").value;
    const budget = document.getElementById("budget").value;

    let results = cleats.filter(cleat => {
        return (
            (footShape === "" || cleat.fit === footShape) &&
            (fitPreference === "" || cleat.feel === fitPreference) &&
            (playStyle === "" || cleat.style === playStyle) &&
            (budget === "" || cleat.price === budget)
        );
    });

    const resultsText = document.getElementById("resultsText");

    if (results.length === 0) {
        resultsText.innerHTML = "No exact matches found — try adjusting your filters.";
        return;
    }

    resultsText.innerHTML = results.map(c => `• ${c.name}`).join("<br>");
}


/* ============================
   DISPLAY CLEATS ON cleats.html
   ============================ */

function loadCleats() {
    const list = document.getElementById("cleatList");
    if (!list) return;

    list.innerHTML = cleats
        .map(c => `
            <div class="section cleat-card">
                <img src="${c.image}" alt="${c.name}" class="cleat-image">
                <h3>${c.name}</h3>
                <p><strong>Brand:</strong> ${c.brand}</p>
                <p><strong>Fit:</strong> ${c.fit}</p>
                <p><strong>Feel:</strong> ${c.feel}</p>
                <p><strong>Style:</strong> ${c.style}</p>
                <p><strong>Price tier:</strong> ${c.price}</p>
                <a href="${c.link}" target="_blank" class="section-button">View on retailer</a>
            </div>
        `)
        .join("");
}

loadCleats();
