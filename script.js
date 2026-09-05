/* ============================
   CLEAT DATABASE
   ============================ */

const cleats = [
    {
        name: "Nike Mercurial Vapor",
        fit: "narrow",
        feel: "tight",
        style: "explosive",
        price: "high"
    },
    {
        name: "Nike Mercurial Superfly",
        fit: "narrow",
        feel: "tight",
        style: "explosive",
        price: "high"
    },
    {
        name: "Adidas X Speedportal",
        fit: "regular",
        feel: "tight",
        style: "explosive",
        price: "mid"
    },
    {
        name: "Adidas Predator Accuracy",
        fit: "regular",
        feel: "regular",
        style: "technical",
        price: "high"
    },
    {
        name: "Adidas Copa Pure",
        fit: "wide",
        feel: "roomy",
        style: "balanced",
        price: "mid"
    },
    {
        name: "Puma Future",
        fit: "wide",
        feel: "regular",
        style: "creative",
        price: "mid"
    },
    {
        name: "Puma Ultra",
        fit: "narrow",
        feel: "tight",
        style: "explosive",
        price: "low"
    },
    {
        name: "New Balance Furon",
        fit: "regular",
        feel: "regular",
        style: "explosive",
        price: "mid"
    },
    {
        name: "New Balance Tekela",
        fit: "wide",
        feel: "roomy",
        style: "technical",
        price: "mid"
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
            <div class="section">
                <h3>${c.name}</h3>
                <p><strong>Fit:</strong> ${c.fit}</p>
                <p><strong>Feel:</strong> ${c.feel}</p>
                <p><strong>Style:</strong> ${c.style}</p>
                <p><strong>Price Range:</strong> ${c.price}</p>
            </div>
        `)
        .join("");
}

loadCleats();
