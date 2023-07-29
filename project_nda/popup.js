document.addEventListener("DOMContentLoaded", function () {
  const autofillBtn = document.getElementById("autofillBtn");

  autofillBtn.addEventListener("click", function () {
    // Get user information from the form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    // Add more variables to collect other user information as needed

    // Define the autofill data (replace this with your data)
    const autofillData = {
      "John Doe": "john.doe@example.com",
      "Jane Smith": "jane.smith@example.com",
      // Add more predefined autofill data for other users as needed
    };

    // Autofill the form fields based on the user information
    if (autofillData.hasOwnProperty(name)) {
      document.getElementById("email").value = autofillData[name];
      // Autofill other form fields based on the predefined data
    } else {
      console.log("Autofill data not found for this user.");
    }
  });
});
