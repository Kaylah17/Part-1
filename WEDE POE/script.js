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

let count= 0;
const target = 1000; // Change this number
const counter = document.getElementById("counter");

function updateCounter() {
if (count < target) {
count += Math.ceil((target - count) / 10);
counter.innerText = count;
setTimeout(updateCounter, 30);
}
}

window.onload = updateCounter;

document.getElementById("enquiryForm").addEventListener("submit", function(event){
  event.preventDefault(); //preventing the form from submitting before we are done


    const name = document.getElementById("name").value.trim();
  
    const email = document.getElementById("email").value.trim();
  
    const type = document.getElementById("type").value.trim()
  
    const message = document.getElementById("message").value.trim();
  
    const error = document.getElementById("error");

    error.textContent="";
  
  if (name === "" || email === "" || message ==="" || type === ""){
    
    error.textContent ="Please fill in all the fields"
    return
  }
  
  const subject = "Message from" + name;
  const body = "Name: " + name + "nEmail: " + email + "nMessage: " + message;

  window.location.href = `mailto: st10458045@rcconnect.edu.za?subject=${encodeURIComponent(body)}`;

  alert("Form submitted successfully")

    
}
)
  
  
    