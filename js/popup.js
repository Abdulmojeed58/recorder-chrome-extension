document.addEventListener("DOMContentLoaded", () => {
  const startVideoButton = document.querySelector("button#start_video");
  const stopVideoButton = document.querySelector("button#stop_video");

  startVideoButton.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "open_dialog_box" },
        (response) => {
          if (!chrome.runtime.lastError) {
            console.log(response);
          } else {
            console.log(chrome.runtime.lastError, "popup error");
          }
        }
      );
    });
  });

  stopVideoButton.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "stop video" },
        (response) => {
          if (!chrome.runtime.lastError) {
            console.log(response);
          } else {
            console.log(chrome.runtime.lastError, "stop recording popup error");
          }
        }
      );
    });
  });


});
