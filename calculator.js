window.onload = function () {
    var display = document.getElementById("display");
    const insertKey = (e) => {
        let key = e.key;
        let code = e.keyCode;
        let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        let symbols = [".", "=", "+", "-", "*", "÷", "x", "X", ":", "/"];
        let operations = ["+", "-", "x", "÷"];
        let parentheses = ["(", ")"];
        let rmsymbols = ["X", "*"];
        let rdsymbols = ["/", ":"];
        if ((display.innerHTML == "0" || display.innerHTML == "NaN") && (!isNaN(key) || key == "(" || key == "-")) {
            display.innerHTML = "";
        }
        if (symbols.includes(key) && (!isNaN(display.innerHTML.charAt(display.innerHTML.length - 1)) || parentheses.includes(display.innerHTML.charAt(display.innerHTML.length - 1))) && display.innerHTML != "NaN") {
            if (rmsymbols.includes(key)) {
                e.preventDefault();
                display.innerHTML += "x";
            } else if (rdsymbols.includes(key)) {
                e.preventDefault();
                display.innerHTML += "÷";
            } else if (key == "." && !parseFloat(display.innerHTML.split("").reverse().join("")).toString().includes(".")) {
                display.innerHTML += ".";
            } else if (key != ".") {
                display.innerHTML += key;
            }
        }
        if (numbers.includes(key)) {
            if (display.innerHTML.charAt(display.innerHTML.length - 1) == 0 && isNaN(display.innerHTML.charAt(display.innerHTML.length - 2)) && display.innerHTML.charAt(display.innerHTML.length - 2) != ".") {
                display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length - 1) + key;
            } else {
                display.innerHTML += key
            }
        }
        if (parentheses.includes(key)) {
            if (key == "(") {
                display.innerHTML = display.innerHTML + key
            } else if (key == ")") {
                if (!symbols.includes(display.innerHTML.charAt(display.innerHTML.length - 1)) && display.innerHTML.charAt(display.innerHTML.length - 1) != "(") {
                    display.innerHTML = display.innerHTML + key
                }
            }
        }
        if (code == 8) {
            if (display.innerHTML.length == 1) {
                display.innerHTML = 0
            } else if (display.innerHTML == "NaN") {
                display.innerHTML = 0;
            } else {
                display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length - 1);
            }
        }

        try {
            if (code == 13) {
                let result = math.evaluate(display.innerHTML.replace(/\[|{/g, '(').replace(/}|]/g, ')').replace(/x/g, '*').replace(/÷/g, '/').replace(/√/g, "sqrt"))
                if (result == "Infinity" || result == "-Infinity") {
                    display.innerHTML = "NaN"
                }  else if (result.toString().includes(".") && !result.toString().includes("i")) {
                    display.innerHTML = result.toString().slice(0, 14)
                } else if (result.toString().includes(".") && result.toString().includes("i")) {
                    display.innerHTML = result.toString().slice(0, 14) + "i"
                } else {
                    display.innerHTML = result
                }
            }
        } catch (e) {
            if (display.innerHTML != "-") display.innerHTML = "NaN";
        }
    }
    const backspacePressed = (e) => {
        e.preventDefault()
    }
    document.body.addEventListener("keydown", insertKey, true);
    window.addEventListener("keydown", backspacePressed, true);
    const m = window.matchMedia("(max-width: 1000px)");
    if (m.matches) {
        document.getElementById("grid-container").style.width = "100vw";
        document.getElementById("grid-container").style.height = "100%";
        document.getElementById("grid-container").style.border = "0";
        document.getElementById("grid-container").style.border = "0";
        document.getElementById("container").style.height = "100%";
        document.getElementById("container").style.display = "block";
        document.getElementById("grid-container").style.position = "fixed";
        document.getElementById("welcome").style.display = "none";
        document.body.style.backgroundColor = "#1594dd";
    }

}

let parentheses = ["(", ")"];

function zero(clicked) {
    if ((display.innerHTML == "0" || display.innerHTML == "NaN") && (!isNaN(clicked) || clicked == "(" || clicked == "-" || clicked == "√x")) {
        display.innerHTML = "";
    }
}

function one(clicked) {
    zero(clicked);
    display.innerHTML = display.innerHTML + 1;
}

function two(clicked) {
    zero(clicked);
    display.innerHTML = display.innerHTML + 2;
}

function three(clicked) {
    zero(clicked);
    display.innerHTML = display.innerHTML + 3;
}

function four(clicked) {
    zero(clicked);
    display.innerHTML = display.innerHTML + 4;
}

function five(clicked) {
    zero(clicked);
    display.innerHTML = display.innerHTML + 5;
}

function six(clicked) {
    zero(clicked);
    display.innerHTML = display.innerHTML + 6;
}

function seven(clicked) {
    zero(clicked);
    display.innerHTML = display.innerHTML + 7;
}

function eight(clicked) {
    zero(clicked);
    display.innerHTML = display.innerHTML + 8;
}

function nine(clicked) {
    zero(clicked);
    display.innerHTML = display.innerHTML + 9;
}

function nought(clicked) {
    zero(clicked);
    display.innerHTML = display.innerHTML + 0;
}

function result() {
    try {
            let result = math.evaluate(display.innerHTML.replace(/\[|{/g, '(').replace(/}|]/g, ')').replace(/x/g, '*').replace(/÷/g, '/').replace(/√/g, "sqrt"))
            if (result == "Infinity" || result == "-Infinity") {
                display.innerHTML = "NaN"
            } else if (result.toString().includes(".") && !result.toString().includes("i")) {
                display.innerHTML = result.toString().slice(0, 14)
            } else if (result.toString().includes(".") && result.toString().includes("i")) {
                display.innerHTML = result.toString().slice(0, 14) + "i"
            } else {
                display.innerHTML = result
            }
        } catch (e) {
        if (display.innerHTML != "-") display.innerHTML = "NaN";
    }
}

function sqroot(clicked) {
    zero(clicked);
    display.innerHTML = display.innerHTML + "√(";
}


function dot(clicked) {
    if (!parseFloat(display.innerHTML.split("").reverse().join("")).toString().includes(".") && display.innerHTML != "0.") {
        zero(clicked);
        display.innerHTML = display.innerHTML + ".";
    }
}

function mi(clicked) {
    if ((!isNaN(display.innerHTML.charAt(display.innerHTML.length - 1)) || parentheses.includes(display.innerHTML.charAt(display.innerHTML.length - 1)))) {
    zero(clicked);
    display.innerHTML = display.innerHTML + "-";
}
}

function pl(clicked) {
    if ((!isNaN(display.innerHTML.charAt(display.innerHTML.length - 1)) || parentheses.includes(display.innerHTML.charAt(display.innerHTML.length - 1))) && display.innerHTML != "NaN") {
        zero(clicked);
        display.innerHTML = display.innerHTML + "+";
    }
}

function mu(clicked) {
    if ((!isNaN(display.innerHTML.charAt(display.innerHTML.length - 1)) || parentheses.includes(display.innerHTML.charAt(display.innerHTML.length - 1))) && display.innerHTML != "NaN") {
        zero(clicked);
        display.innerHTML = display.innerHTML + "x";
    }
}

function di(clicked) {
    if ((!isNaN(display.innerHTML.charAt(display.innerHTML.length - 1)) || parentheses.includes(display.innerHTML.charAt(display.innerHTML.length - 1))) && display.innerHTML != "NaN") {
        zero(clicked);
        display.innerHTML = display.innerHTML + "÷";
    }
}

function del() {
    if (display.innerHTML.length == 1) {
        display.innerHTML = 0
    } else if (display.innerHTML == "NaN") {
        display.innerHTML = 0;
    } else {
        display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length - 1);
    }
}

function reset() {
    display.innerHTML = "0"
}

function pa2(clicked) {
    if ((!isNaN(display.innerHTML.charAt(display.innerHTML.length - 1)) || parentheses.includes(display.innerHTML.charAt(display.innerHTML.length - 1))) && display.innerHTML.charAt(display.innerHTML.length - 1) != "(" && display.innerHTML != "NaN" && display.innerHTML != "0") {
    zero(clicked);
    display.innerHTML = display.innerHTML + ")";
}
}

function pa1(clicked) {
    zero(clicked);
    display.innerHTML = display.innerHTML + "(";
}