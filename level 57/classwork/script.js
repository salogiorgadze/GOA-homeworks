const arrowDown = `<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>`;
const arrowUp   = `<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>`;

const navbar = document.getElementById("navbar");
navbar.style.display = "flex";
navbar.style.justifyContent = "space-between";
navbar.style.alignItems = "center";
navbar.style.padding = "25px";
navbar.style.fontFamily = "font-family: Verdana, Geneva, Tahoma, sans-serif";

const left = document.getElementById("left");
left.style.display = "flex";
left.style.alignItems = "center";
left.style.gap = "60px";

const menu = document.getElementById("menu");
menu.style.display = "flex";
menu.style.alignItems = "center";
menu.style.gap = "30px";

document.querySelectorAll("button").forEach(btn => {
    btn.style.background = "none";
    btn.style.border = "none";
    btn.style.fontSize = "16px";
    btn.style.color = "rgb(85,85,85)";
});

document.querySelectorAll(".dropdown").forEach(drp => {
  drp.style.position = "relative";
});

document.querySelectorAll(".dropdown-menu").forEach(mn => {
    mn.style.position = "absolute";
    mn.style.top = "35px";
    mn.style.background = "rgb(255,255,255)";
    mn.style.borderRadius = "10px";
    mn.style.padding = "15px";
    mn.style.boxShadow = "0 7px 20px rgb(0, 0, 0)";
    mn.style.display = "none";
});

document.querySelectorAll(".item").forEach(itm => {
    itm.style.display = "flex";
    itm.style.alignItems = "center";
    itm.style.gap = "12px";
    itm.style.padding = "8px";
    itm.style.color = "rgb(85,85,85)";
});

const auth = document.getElementById("auth");
auth.style.display = "flex";
auth.style.gap = "20px";

const register = document.getElementById("register");
register.style.border = "1px solid rgb(85,85,85)";
register.style.borderRadius = "15px";
register.style.padding = "6px";

const featuresBtn = document.getElementById("featuresBtn");
const companyBtn = document.getElementById("companyBtn");
const featuresMenu = document.getElementById("featuresMenu");
const companyMenu = document.getElementById("companyMenu");
const featuresArrow = document.getElementById("featuresArrow");
const companyArrow = document.getElementById("companyArrow");

featuresArrow.innerHTML = arrowDown;
companyArrow.innerHTML = arrowDown;

featuresBtn.onclick = () => {
  const open = featuresMenu.style.display === "block";
  featuresMenu.style.display = open ? "none" : "block";
  companyMenu.style.display = "none";
  featuresArrow.innerHTML = open ? arrowDown : arrowUp;
  companyArrow.innerHTML = arrowDown;
};

companyBtn.onclick = () => {
  const open = companyMenu.style.display === "block";
  companyMenu.style.display = open ? "none" : "block";
  featuresMenu.style.display = "none";
  companyArrow.innerHTML = open ? arrowDown : arrowUp;
  featuresArrow.innerHTML = arrowDown;
};
