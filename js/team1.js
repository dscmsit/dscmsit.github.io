// Function to display team according to the selected year
let t020 = document.getElementById("t020");
let t019 = document.getElementById("t019");
t019.style.display = "none"; //Only current year will be displayed by default
function selectTeam() {
    let x = document
        .getElementById("mySelect")
        .value;

    if (x == "2020") {
        t020.style.display = "block";
        t019.style.display = "none";
    } else if (x == "2019") {
        t019.style.display = "block";
        t020.style.display = "none";
    }
}

let show = false;
let buttonClass = document.getElementsByClassName("showButton"); //Get the Show More Button
let lowerRows = document.getElementsByClassName("lowerRows"); //Get the LowerRows
for (i in lowerRows) {
    lowerRows[i].style.display = "none";
}

//Function to toogle functionalities of show more button
function showFunction() {
    // show = !show;
    show = show
        ? false
        : true;

    if (show === true) {
        buttonClass[0].innerHTML = "Show Less";
        for (i in lowerRows) {
            lowerRows[i].style.display = "block";
        }
    } else {
        buttonClass[0].innerHTML = "Show More";
        for (i in lowerRows) {
            lowerRows[i].style.display = "none";
        }
    }
}
