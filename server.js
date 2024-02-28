
    function showContactInfo() {
        // Display the contact information
        document.getElementById("contactInfo").style.display = "block";
        // Assuming you have variables for email and phone number
        document.getElementById("email").innerText = "example@example.com";
        document.getElementById("phone").innerText = "+1234567890";
    }


    app.get('/contact', (req, res) => {
        // Assuming you have stored email and phone number somewhere
        const email = 'amanp0388@gmail.com';
        const phone = '7828143796';
        // Render a page with the contact information
        res.render('contact', { email, phone });
    });
    
// Function to add a new message under the message box
function addNewMessage(message) {
    var newMessageContainer = document.getElementById("newMessage");
    
    // Create a new message element
    var newMessage = document.createElement("p");
    newMessage.textContent = message;
    
    // Append the new message element to the newMessageContainer
    newMessageContainer.appendChild(newMessage);
}

// Call the function to add a new message
addNewMessage("This is a new message under the message box!"); // Add your desired message here
