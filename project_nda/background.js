chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "autofill") {
    // Execute the autofill script on the content page
    chrome.tabs.executeScript({
      file: "autofill.js"
    });
  }
});
