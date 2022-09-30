

// var cursor = document.querySelector(".cursor"),
//     follower = document.querySelector(".cursor-follower");


// var posX = 0,
//     posY = 0;

// var mouseX = 0,
//     mouseY = 0;

// TweenMax.to({}, 0.016, {
//     repeat: -1,
//     onRepeat: function () {
//         posX += (mouseX - posX) / 9;
//         posY += (mouseY - posY) / 9;

//         TweenMax.set(follower, {
//             css: {
//                 left: posX - 12,
//                 top: posY - 12
//             }
//         });

//         TweenMax.set(cursor, {
//             css: {
//                 left: mouseX,
//                 top: mouseY
//             }
//         });
//     }
// });

// document.querySelector('body').addEventListener("mousemove", function (e) {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
// });
// document.querySelector('body').style.cursor = 'none'


// // document.querySelector(".link").addEventListener("mouseenter", function () {
// //     cursor.addClass("active");
// //     follower.addClass("active");
// // });
// // document.querySelector(".link").addEventListener("mouseleave", function () {
// //     cursor.removeClass("active");
// //     follower.removeClass("active");
// // });
