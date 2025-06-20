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

function handleEnquiry() {

    const name = document.getElementById("name").value.trim();
  
    const email = document.getElementById("email").value.trim();
  
    const type = document.getElementById("type").value;
  
    const message = document.getElementById("message").value.trim();
  
    const response = document.getElementById("response");
  
  
  
    if (!name || !email || !type || !message) {
  
      response.style.color = "red";
  
      response.innerText = "Please fill in all fields.";
  
      return false;
  
    }
  
  
  
    let reply = "";
  
  
  
    switch (type) {
  
      case "service":
  
        reply = `Thank you ${name}! We’ve received your product/service enquiry. Prices start at R500. We’ll contact you at ${email} with availability details.`;
  
        break;
  
      case "volunteer":
  
        reply = `Thanks ${name}! We’re excited you're interested in volunteering. We’ll follow up with upcoming opportunities via ${email}.`;
  
        break;
  
      case "sponsor":
  
        reply = `Dear ${name}, thank you for your interest in sponsoring us. We’ll email you sponsorship options and packages at ${email}.`;
  
        break;
  
      default:
  
        reply = "Something went wrong. Please try again.";
  
    }
  
  
  
    response.style.color = "green";
  
    response.innerText = "Thank you for your enquiry, we'll get back to you shortly."
  
  
  
    // Clear form after submission (optional)
  
    document.getElementById("enquiryForm").reset();
  
  
  
    return false; // Prevent actual form sub
  
  }
  

  
  
    
    