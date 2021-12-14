var box = document.querySelector(".main")
var rect = document.querySelector(".rectangle")

console.log(box, rect);


// function addEventListener(typeofevent, callingfunction) {
//     if (typeofevent == "mousemove") {
//         Event

//         callingfunction(even)
//     }
// }

box.addEventListener("mousemove", function(e) {
    var x = e.clientX - box.getBoundingClientRect().x
    var y = e.clientY - box.getBoundingClientRect().y

    var bottomBoundry = box.getBoundingClientRect().bottom;
    var rightBoundry = box.getBoundingClientRect().right;

    console.log(box.getBoundingClientRect());
    if (e.clientY < (bottomBoundry - 100) && e.clientX < (rightBoundry - 100)) {
        rect.style.left = x + "px"
        rect.style.top = y + "px"
    }
})