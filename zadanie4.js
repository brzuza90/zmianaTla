let red = 100;
let green = 100;
let blue = 100;
document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
const changeColor = function (e) {
    // console.log(e.keyCode, e.which);
    // INSTRUCKJA WARUNKOWA IF
    if (e.keyCode == 38 && red < 255) {
        red += 2;
        green += 2;
        blue += 2;
        document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    }

    if (e.keyCode == 40 && red > 0) {
        document.body.style.backgroundColor = `rgb(${red -=2},${green -=2},${blue -=2})`;
    }

    // INSTRUKCJA WARUNKOWA SWITCH 
    // const keyCode = e.keyCode;
    // const which = e.which;
    // switch (keyCode) {
    //     case 38:
    //         if (red <= 255) {
    //             red += 2;
    //             green += 2;
    //             blue += 2;
    //             document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    //         }
    //         break;
    //     case 40:
    //         if (red >= 0) {
    //             red -= 2;
    //             green -= 2;
    //             blue -= 2;
    //             document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    //         }
    //         break;
    // }
}
window.addEventListener('keydown', changeColor);