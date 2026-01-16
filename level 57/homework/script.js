const body = document.querySelector('body')
body.style.display = "flex"
body.style.justifyContent = "center"
body.style.alignItems = "center"
body.style.flexDirection = "column"

const title = document.getElementById('title')
title.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
title.style.fontSize = "70px"
title.style.color = "rgb(64,15,15)"

const addBox = document.getElementById('add-music')
addBox.style.border = "2px solid black"
addBox.style.width = "300px"
addBox.style.height = "400px"
addBox.style.display = "flex";
addBox.style.flexDirection = "column";
addBox.style.justifyContent = "center";
addBox.style.alignItems = "center";
addBox.style.boxShadow = "3px 7px 7px rgb(64,15,15)"

const form = document.getElementById('form');
form.style.display = "flex"
form.style.flexDirection = "column"
form.style.alignItems = "center"
form.style.justifyContent = "center"
form.style.gap = "10px"

document.querySelectorAll("input").forEach(i => {
    i.style.border = "2px solid black"
    i.style.boxShadow = "3px 7px 7px rgb(64,15,15)"
    i.style.width = "230px"
    i.style.height = "30px"
    i.style.margin = "10px"
})


