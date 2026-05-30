const imgs = [
    { src: "https://picsum.photos/id/10/400/250", txt: "Ảnh 1: Cảnh núi" },
    { src: "https://picsum.photos/id/20/400/250", txt: "Ảnh 2: Khung cảnh biển" },
    { src: "https://picsum.photos/id/30/400/250", txt: "Ảnh 3: Cốc cà phê" }
];
const cmds = [
    { txt: "Next Image (Ảnh sau)", act: () => go(1) },
    { txt: "Prev Image (Ảnh trước)", act: () => go(-1) },
    { txt: "Toggle Dark Mode (Đổi giao diện)", act: () => document.body.classList.toggle("dark") }
];

let idx = 0, matchCmds = [...cmds], selIdx = 0;
const mainImg = document.getElementById("mainImg"), caption = document.getElementById("caption");
const palette = document.getElementById("palette"), pInput = document.getElementById("pInput"), pList = document.getElementById("pList");

function go(dir) {
    idx = (idx + dir + imgs.length) % imgs.length;
    mainImg.src = imgs[idx].src;
    caption.textContent = imgs[idx].txt;
}

function renderCmds() {
    pList.innerHTML = "";
    matchCmds.forEach((c, i) => {
        const li = document.createElement("li");
        li.className = `item ${i === selIdx ? "active" : ""}`;
        li.textContent = c.txt;
        li.setAttribute("role", "option");
        li.setAttribute("aria-selected", i === selIdx ? "true" : "false");
        li.onclick = () => { c.act(); palette.classList.add("hidden"); };
        pList.appendChild(li);
    });
}

pInput.oninput = (e) => {
    matchCmds = cmds.filter(c => c.txt.toLowerCase().includes(e.target.value.toLowerCase()));
    selIdx = 0;
    renderCmds();
};

window.onkeydown = (e) => {
    const isOpen = !palette.classList.contains("hidden");
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) palette.classList.add("hidden");
        else { palette.classList.remove("hidden"); pInput.value = ""; search(""); pInput.focus(); }
    }

    if (isOpen) {
        if (e.key === "Escape") palette.classList.add("hidden");
        if (e.key === "ArrowDown") { e.preventDefault(); selIdx = (selIdx + 1) % matchCmds.length; renderCmds(); }
        if (e.key === "ArrowUp") { e.preventDefault(); selIdx = (selIdx - 1 + matchCmds.length) % matchCmds.length; renderCmds(); }
        if (e.key === "Enter") { e.preventDefault(); if (matchCmds[selIdx]) { matchCmds[selIdx].act(); palette.classList.add("hidden"); } }
        return;
    }

    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
    if (e.key >= "1" && e.key <= "3") go(parseInt(e.key) - 1 - idx); // Nhảy số 1-3
};

function search(k) { matchCmds = cmds.filter(c => c.txt.toLowerCase().includes(k)); renderCmds(); }