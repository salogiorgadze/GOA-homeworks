let boomTimer = setTimeout(() => {
    console.log("BOOM!")
}, 3000)

setTimeout(() => {
    clearTimeout(boomTimer)
    console.log("Timer canceled")
}, 4000)