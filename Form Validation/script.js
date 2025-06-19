document.getElementById("contactForm").addEventListener
("submit", function(event){

    event.preventDefault(); //prevent form from refreshing

    let name= document.getElementById("name").value.trim()
    let email= document.getElementById("email").value.trim()
    let message= document.getElementById("message").value.trim()

    if (name ==="" || email==="" || message ==="")
        alert("Ekse fill in all the fields")
        else{
            ("Danko, bathini bona!")
        }

})
