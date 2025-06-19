document.getElementById("searchInput").addEventListener("keyup", function() {
    let filter = this.value.toUpperCase();
    let lis = document.querySelectionAll("#subjectList li");

    lis.forEach(li => {
    let text =lo.textContent || li.innerText;
    li.style.display = text.toUpperCase().indexOf(filter) > -1 ? "" : "none";
    });
});

