// // var a1 = document.querySelector(".btn-1")
// // console.log(a1)
// // var a2 = document.querySelector(".btn-2")
// // console.log(a2)
// // var a3 = document.querySelector(".btn-3")
// // console.log(a3)

// /*
// Multi line comment 
// */


// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// function fun() {
//     console.log("hello fun")
// }

// function iRecFun(name, fun) {
//     console.log(name);
//     fun()
// }
// iRecFun("passing fun", fun)



var a = 11;


// console.log(a)

// var btn1 = document.querySelector(".btn-1")

// var btn2 = document.querySelector(".btn-2")

// var btn3 = document.querySelector(".btn-3")
// var btn4 = document.querySelector(".btn-4")


// console.log(btn1)
// console.log(btn2)
// console.log(btn3)
// console.log(btn4)


for (var i = 1; i <= 10; i++) {
    console.log(i);
}


if (a == 10) {
    console.log("value of a is " + a);
} else {
    console.log("value of a is not 10 ");
}
var a = 1
switch (a) {
    case 1:
        console.log("value of a is 1");
        break;
    case 2:
        console.log("value of a is 2");
        break;

    default:
        console.log("value of a is other than 1 and 2");
        break;
}

// var i = 10

// while (i > 0) {
//     console.log(i, "i am inside while   ");
//     i--
// }



// innerHTML

// console.log(document);



// var html = btn1.innerHTML
// var text = btn1.innerText

// console.log(text)

// height
// width
// background
// color


//with the help of js change these properties of the btn 1

// var arr = [1, 1, 1, 1, 1, ]
//     // [2, 2, 2, 2, 2, ]
// for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * 2;
// }

// console.log(arr)

var arr = document.querySelectorAll("button")

// arr.forEach((ele) => {
//     ele.style.background = "blue"
// })


// // btn1 is an array
// for (var i = 0; i < btn1.length; i++) {
//     // apply styles on each element
//     btn1[i].style.height = "100px"
//     btn1[i].style.width = "100px"
//     btn1[i].style.backgroundColor = "blue"
//     if (i % 3 == 0) {
//         btn1[i].style.backgroundColor = "pink"
//     }
//     btn1[i].style.color = "white"
//     btn1[i].innerText = (i + 1)


//     function gayab(e) {
//         e.target.style.background = 'yellow'
//     }

//     function yellow(e) {
//         e.target.style.background = "green"
//     }

//     btn1[i].addEventListener("mouseenter", gayab)
//     btn1[i].addEventListener("mouseleave", yellow)
// }



// btn1.style.height = "100px"
// btn1.style.width = "100px"
// btn1.style.background = "blue"
// btn1.style.color = "white"