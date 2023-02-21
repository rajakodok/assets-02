document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    e.stopPropagation();
});
document.addEventListener('copy', function (e) {
    e.preventDefault();
    e.stopPropagation();
});
document.addEventListener('cut', function (e) {
    e.preventDefault();
    e.stopPropagation();
});

document.onkeydown = function (e) {
    if (e.ctrlKey &&
        (e.keyCode === 67 ||
            e.keyCode === 86 ||
            e.keyCode === 85 ||
            e.keyCode === 117)) {
        return false;
    } else {
        return true;
    }
};

let trigger = document.getElementById('searchTrigger');
let disValue = document.getElementById('search');

function myFunction() {
    disValue.classList.toggle('showSearch');

}