window.onload = function () {
    const input = document.getElementById('input');
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
            } else if (symbols.includes(key)) {
                if ([":", "/"].includes(key)) {
                    e.preventDefault();
                    input.value = input.value + "÷";
                }
                if (!Number.isInteger(parseFloat(input.value.split("").reverse().join(""))) && key == ".") {
                    e.preventDefault()
                }
                if (["*", "X"].includes(key)) {
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
            e.preventDefault()
        }

        if (input.value == "NaN" && keyCode != 13 && keyCode != 8) {
            e.preventDefault();
            input.value = key;
        } else if (keyCode == 8 && input.value == "NaN") {
            e.preventDefault();
            input.value = 0
        }
    })

    document.body.addEventListener("click", (e) => {
        input.focus();
    });
}