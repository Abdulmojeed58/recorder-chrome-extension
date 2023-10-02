chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && /^http/.test(tab.url)) {
    chrome.scripting.executeScript({
      target: { tabId },
      files: ["./content.js"]
    }).then(()=>{
        console.log('content script injected')
    }).catch(err=>{
        console.log(err, "An error occured in the background script")
    });
  }
});


// chrome.runtime.onMessage.addListener((request, sender, sendResponse)=> {

// })