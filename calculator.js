window.onload = function () {
    var input = document.getElementById('input');
    input.addEventListener('keydown', (e) => {
        let symbols = [".", "+", ":", "/", "-", "x", "(", ")", "!", "÷", "X", "*"];
        let specialKeys = [8, 13, 16];
        let key = e.key;
        let keyCode = e.keyCode;
        if (isNaN(key) && keyCode != 13) {
            if (((isNaN(input.value.charAt(0)) && input.value.charAt(0) != "-") || input.value.charAt(0) == "") && keyCode != 8) {
                e.preventDefault();
            }
            if (!symbols.includes(key) && !specialKeys.includes(keyCode)) {
                e.preventDefault();
            } else if (symbols.includes(input.value.charAt(input.value.length - 1)) && symbols.includes(key)) {
                e.preventDefault();
                input.value = input.value.slice(0, (input.value.length - 1)) + key;
                if ([":", "/"].includes(key)) {
                    e.preventDefault();
                    input.value = input.value.slice(0, (input.value.length - 1)) + "÷";
                }
                if (["*", "X"].includes(key)) {
                    e.preventDefault();
                    input.value = input.value.slice(0, (input.value.length - 1)) + "x";
                }
            } else if (symbols.includes(key) && input.value != "NaN") {
                if ([":", "/"].includes(key)) {
                    e.preventDefault();
                    input.value = input.value + "÷";
                }
                if (!Number.isInteger(parseFloat(input.value.split("").reverse().join(""))) && key == ".") {
                    e.preventDefault()
                }
                if (["*", "X"].includes(key) && input.value != "NaN") {
                    e.preventDefault();
                    input.value = input.value + "x";
                } else {
                    return true
                }
            } else if (keyCode == 8 && input.value.length == 1) {
                e.preventDefault();
                input.value = 0;
            }

        } else if (!isNaN(key) && input.value == 0) {
            e.preventDefault();
            input.value = key;
        }

        if (keyCode == 13) {
            let result = math.evaluate(input.value.replace(/x|X/g, '*').replace(/:|÷/g, '/'))
            if (!isNaN(result) && result != "Infinity" && result != "-Infinity") {
                input.value = result;
            } else {
                e.preventDefault();
                input.value = "NaN";
            }
        }

        if (!isNaN(key) && input.value.charAt(input.value.length - 1) == 0 && isNaN(input.value.charAt(input.value.length - 2))) {
            e.preventDefault();
            input.value = input.value.slice(0, input.value.length - 1) + key;
        }

        if (input.value == "NaN" && !isNaN(key)) {
            e.preventDefault();
            input.value = key;
        } else if ((isNaN(key) && keyCode != 8 && keyCode != 13) || e.altKey) {
            e.preventDefault()
        } else if (keyCode == 8 && input.value == "NaN") {
            e.preventDefault();
            input.value = 0
        }
    })

    function clickBody() {
        input.focus();
    }

    document.body.addEventListener("click", clickBody);

    const x = window.matchMedia("(max-width: 550px)")

    const mobile = (x) => {
        if (x.matches) {
            input.setAttribute("disabled", "");
            document.body.removeEventListener("click", clickBody);
        }
    }

    x.addListener(mobile)
}