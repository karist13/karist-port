const Box1 = document.querySelector("#box1")
const Box2 = document.querySelector("#box2")
const Box3 = document.querySelector("#box3")
const Box4 = document.querySelector("#box4")
const avatar = document.getElementById("avatar")

Box1.addEventListener("mouseenter", () => {
    Box1.classList.add("pop")
})
Box1.addEventListener("mouseleave", () => {
    Box1.classList.remove("pop")
})

Box2.addEventListener("mouseenter", () => {
    Box2.classList.add("pop")
})
Box2.addEventListener("mouseleave", () => {
    Box2.classList.remove("pop")
})

Box3.addEventListener("mouseenter", () => {
    Box3.classList.add("pop")
})
Box3.addEventListener("mouseleave", () => {
    Box3.classList.remove("pop")
})

Box4.addEventListener("mouseenter", () => {
    Box4.classList.add("pop")
})
Box4.addEventListener("mouseleave", () => {
    Box4.classList.remove("pop")
})

//setTimeout(imgch, 1000)

document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowUp") {
        avatar.src = "image/satori.jpg"
    } else if (event.key == "ArrowLeft") {
        avatar.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAsrGAtalb-ZEhJqH4YzCm05JnnY6HXAQyiD14iMp5SBccaYV5EbYi5uwG&s=10"
    } else if (event.key == "ArrowDown") {
        avatar.src = "adib06.gif"
    } else if (event.key == "ArrowRight") {
        avatar.src = "https://media1.tenor.com/m/LX84J7UzOHgAAAAd/papyrus.gif"
    }
})
console.log(avatar)

//function imgch() {
//    console.log("AAAAAAA")
//}