window.onload = function() {
    var a = document.getElementById("display");
    document.body.addEventListener("keydown", b => {
        let c = b.key,
            d = b.keyCode,
            e = [".", "=", "+", "-", "*", "\xF7", "x", "X", ":", "/"],
            f = ["(", ")"];
        "0" != a.innerHTML && "NaN" != a.innerHTML || isNaN(c) && "(" != c && "-" != c || (a.innerHTML = ""), e.includes(c) && (!isNaN(a.innerHTML.charAt(a.innerHTML.length - 1)) || f.includes(a.innerHTML.charAt(a.innerHTML.length - 1))) && "NaN" != a.innerHTML && (["X", "*"].includes(c) ? (b.preventDefault(), a.innerHTML += "x") : ["/", ":"].includes(c) ? (b.preventDefault(), a.innerHTML += "\xF7") : "." != c || parseFloat(a.innerHTML.split("").reverse().join("")).toString().includes(".") ? "." != c && (a.innerHTML += c) : a.innerHTML += "."), ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(c) && (0 == a.innerHTML.charAt(a.innerHTML.length - 1) && isNaN(a.innerHTML.charAt(a.innerHTML.length - 2)) && "." != a.innerHTML.charAt(a.innerHTML.length - 2) ? a.innerHTML = a.innerHTML.slice(0, a.innerHTML.length - 1) + c : a.innerHTML += c), f.includes(c) && ("(" == c ? a.innerHTML += c : ")" == c && !e.includes(a.innerHTML.charAt(a.innerHTML.length - 1)) && "(" != a.innerHTML.charAt(a.innerHTML.length - 1) && (a.innerHTML += c)), 8 == d && (1 == a.innerHTML.length ? a.innerHTML = 0 : "NaN" == a.innerHTML ? a.innerHTML = 0 : a.innerHTML = a.innerHTML.slice(0, a.innerHTML.length - 1));
        try {
            if (13 == d) {
                let b = math.evaluate(a.innerHTML.replace(/\[|{/g, "(").replace(/}|]/g, ")").replace(/x/g, "*").replace(/÷/g, "/").replace(/√/g, "sqrt"));
                a.innerHTML = "Infinity" == b || "-Infinity" == b ? "NaN" : b.toString().includes(".") && !b.toString().includes("i") ? b.toString().slice(0, 14) : b.toString().includes(".") && b.toString().includes("i") ? b.toString().slice(0, 14) + "i" : b
            }
        } catch (b) {
            "-" != a.innerHTML && (a.innerHTML = "NaN")
        }
    }, !0), window.addEventListener("keydown", a => {
        a.preventDefault()
    }, !0);
    const b = window.matchMedia("(max-width: 1000px)");
    b.matches && (document.getElementById("grid-container").style.width = "100vw", document.getElementById("grid-container").style.height = "100%", document.getElementById("grid-container").style.border = "0", document.getElementById("grid-container").style.border = "0", document.getElementById("container").style.height = "100%", document.getElementById("container").style.display = "block", document.getElementById("grid-container").style.position = "fixed", document.getElementById("welcome").style.display = "none", document.body.style.backgroundColor = "#1594dd")
};
let parentheses = ["(", ")"];

function zero(a) {
    "0" != display.innerHTML && "NaN" != display.innerHTML || isNaN(a) && "(" != a && "-" != a && "\u221Ax" != a || (display.innerHTML = "")
}

function one(a) {
    zero(a), ++display.innerHTML
}

function two(a) {
    zero(a), display.innerHTML += 2
}

function three(a) {
    zero(a), display.innerHTML += 3
}

function four(a) {
    zero(a), display.innerHTML += 4
}

function five(a) {
    zero(a), display.innerHTML += 5
}

function six(a) {
    zero(a), display.innerHTML += 6
}

function seven(a) {
    zero(a), display.innerHTML += 7
}

function eight(a) {
    zero(a), display.innerHTML += 8
}

function nine(a) {
    zero(a), display.innerHTML += 9
}

function nought(a) {
    zero(a), display.innerHTML += 0
}

function result() {
    try {
        let a = math.evaluate(display.innerHTML.replace(/\[|{/g, "(").replace(/}|]/g, ")").replace(/x/g, "*").replace(/÷/g, "/").replace(/√/g, "sqrt"));
        display.innerHTML = "Infinity" == a || "-Infinity" == a ? "NaN" : a.toString().includes(".") && !a.toString().includes("i") ? a.toString().slice(0, 14) : a.toString().includes(".") && a.toString().includes("i") ? a.toString().slice(0, 14) + "i" : a
    } catch (a) {
        "-" != display.innerHTML && (display.innerHTML = "NaN")
    }
}

function sqroot(a) {
    zero(a), isNaN(display.innerHTML) ? display.innerHTML += "\u221A(" : display.innerHTML = "\u221A(" + display.innerHTML
}

function dot(a) {
    parseFloat(display.innerHTML.split("").reverse().join("")).toString().includes(".") || "0." == display.innerHTML || "NaN" == display.innerHTML || (zero(a), display.innerHTML += ".")
}

function mi(a) {
    (!isNaN(display.innerHTML.charAt(display.innerHTML.length - 1)) || parentheses.includes(display.innerHTML.charAt(display.innerHTML.length - 1))) && (zero(a), display.innerHTML += "-")
}

function pl(a) {
    (!isNaN(display.innerHTML.charAt(display.innerHTML.length - 1)) || parentheses.includes(display.innerHTML.charAt(display.innerHTML.length - 1))) && "NaN" != display.innerHTML && (zero(a), display.innerHTML += "+")
}

function mu(a) {
    (!isNaN(display.innerHTML.charAt(display.innerHTML.length - 1)) || parentheses.includes(display.innerHTML.charAt(display.innerHTML.length - 1))) && "NaN" != display.innerHTML && (zero(a), display.innerHTML += "x")
}

function di(a) {
    (!isNaN(display.innerHTML.charAt(display.innerHTML.length - 1)) || parentheses.includes(display.innerHTML.charAt(display.innerHTML.length - 1))) && "NaN" != display.innerHTML && (zero(a), display.innerHTML += "\xF7")
}

function del() {
    display.innerHTML = 1 == display.innerHTML.length ? 0 : "NaN" == display.innerHTML ? 0 : display.innerHTML.slice(0, display.innerHTML.length - 1)
}

function reset() {
    display.innerHTML = "0"
}

function pa2(a) {
    (!isNaN(display.innerHTML.charAt(display.innerHTML.length - 1)) || parentheses.includes(display.innerHTML.charAt(display.innerHTML.length - 1))) && "(" != display.innerHTML.charAt(display.innerHTML.length - 1) && "NaN" != display.innerHTML && "0" != display.innerHTML && (zero(a), display.innerHTML += ")")
}

function pa1(a) {
    zero(a), display.innerHTML += "("
}
