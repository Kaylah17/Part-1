// Show button when scrolling
window.onscroll = function() {
    document.getElementById("topBtn").style.display =
    document.documentElement.scrollTop > 100 ? "Block" : "none";

};

//scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth'});
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}