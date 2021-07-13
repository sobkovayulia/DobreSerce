function stateChange() {
    var obj = document.getElementById('2');

    obj.style.display =
        (obj.style.display == "none" ?
            "block" : "none");
}

/* Види допомоги */
function openFrame() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeFrame() {
    document.getElementById("myOverlay").style.display = "none";
}

/* Пошук */
function openSearch() {
    document.getElementById("Overlay2").style.display = "block";
}

function closeSearch() {
    document.getElementById("Overlay2").style.display = "none";
}


/* Активний пошук */
function openSearch2() {
    document.getElementById("Overlay3").style.display = "block";
    document.getElementById("Overlay2").style.display = "none";
}

function closeSearch2() {
    document.getElementById("Overlay3").style.display = "none";
    document.getElementById("Overlay2").style.display = "block";
}


/* ФОрми */
function closeForms() {
    document.getElementById("Lay").style.display = "none";
}

function openForms() {
    document.getElementById("Lay").style.display = "block";
}


/* Перемикач */
function getValue() {
    var isChecked = document.getElementById("myCheckBox").checked;

    if (isChecked) {
        document.getElementById("ur_osoba").style.display = "none";
        document.getElementById("fiz_osoba").style.display = "block";
        console.log("Input is checked");
    } else {
        document.getElementById("ur_osoba").style.display = "block";
        document.getElementById("fiz_osoba").style.display = "none";
        console.log("Input is NOT checked");
    }
}