const Box1 = document.querySelector("#box1")
const Box2 = document.querySelector("#box2")
const Box3 = document.querySelector("#box3")
const Box4 = document.querySelector("#box4")

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