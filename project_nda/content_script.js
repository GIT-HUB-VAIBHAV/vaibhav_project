chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "fillForm") {
    // Sample data to autofill the form
    const sampleData = {
      name: "John Doe",
      email: "john.doe@example.com",
      address: "123 Main Street",
      city: "Anytown",
      zip: "12345",
    };

    // Autofill the form fields using the sample data
    document.getElementById("name").value = sampleData.name;
    document.getElementById("email").value = sampleData.email;
    document.getElementById("address").value = sampleData.address;
    document.getElementById("city").value = sampleData.city;
    document.getElementById("zip").value = sampleData.zip;
  }
});
