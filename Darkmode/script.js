const toggleBtn = document.getElementById("toggleBtn");

toggleBtn,addEventListener("click",function(){
    document.body.classList.toggle("dark-mode")

    if(document.body.classList.contains("dark-mode")){
        toggleBtn.textContent = "Switch to light mode";
    }else{
        toggleBtn.textContent = "Switch to dark mode"
    }
});