const yes = document.getElementById("y");
const no = document.getElementById("n");


let uncheckNo = () => {
if (yes.checked) {
    console.log("yes");
    no.checked = false;
}
}

let uncheckYes = () => {
    if (no.checked) {
        console.log("no");
        yes.checked = false;
    }
    }
yes.addEventListener("change", uncheckNo);
no.addEventListener("change", uncheckYes);
