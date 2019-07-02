window.onload = function () {
    let display = document.getElementById("display");
    display.innerHTML = display.innerHTML.split("").reverse().join("")
    const insertKey = (e) => {
        let key = e.key;
        let code = e.keyCode;
        let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        let symbols = [".", "=", "+", "-", "*", "÷", "x", "X", ":", "/"];
        let parentheses = ["(", ")"];
        let rmsymbols = ["X", "*"];
        let rdsymbols = ["/", ":"];
        if ((display.innerHTML == 0 || display.innerHTML == "NaN") && (!isNaN(key) || parentheses.includes(key) || key == "-")) {
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
                let result = math.evaluate(display.innerHTML.replace(/\[|{/g, '(').replace(/}|]/g, ')').replace(/x/g, '*').replace(/÷/g, '/'))
                if (result == "Infinity" || result == "-Infinity") {
                    display.innerHTML = "NaN"
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
    const m = window.matchMedia("(max-width: 550px)");
    if (m.matches) {
        document.getElementById("grid-container").style.backgroundColor= "black";
        document.getElementById("welcome").style.display = "none";
    } 
}