console.log("Hi, I have been injected");

var recorder = null;

const recordBtn = `<div style="position: fixed; left: 10vw; bottom: 10vh; z-index: 999">
      <div
        style="
          border-radius: 200px;
          padding: 8px;
          background-color: rgba(98, 98, 98, 0.294);
        "
      >
        <div
          style="
            background-color: #141414;
            height: 86px;
            width: 551px;
            padding: 3px;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 200px;
          "
        >
          <div
            style="
              display: flex;

              gap: 8px;
              padding-left: 16px;
              padding-top: 16px;
              padding-right: 20px;
              padding-bottom: 16px;
              border-right: 1px solid white;
              align-items: center;
              height: fit-content;
            "
          >
            <p style="font-size: 20px; margin: 0%">00:03:45</p>

            <div
              style="
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: rgba(192, 4, 4, 0.695);
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <div
                style="
                  width: 10px;
                  height: 10px;
                  border-radius: 50%;
                  background-color: #c00404;
                "
              ></div>
            </div>
          </div>

          <div style="display: flex; padding-left: 24px; gap: 24px">
            <div
              style="
                display: flex;
                flex-direction: column;
                gap: 4px;
                font-size: 12px;
                font-weight: 500;
                justify-content: center;
                align-items: center;
              "
            >
              <div
                style="
                  border-radius: 50%;
                  background-color: white;
                  height: 44px;
                  width: 44px;
                  color: black;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  src="https://res.cloudinary.com/dzsomaq4z/image/upload/v1696166602/Icons/ae3ufl4s59dy7tvh0tsb.png"
                  alt=""
                  style="height: 11px; width: 8px"
                />
              </div>
              Pause
            </div>
            <div
              style="
                display: flex;
                flex-direction: column;
                gap: 4px;
                font-size: 12px;
                font-weight: 500;
                justify-content: center;
                align-items: center;
              "
              id="stopRecording"
            >
              <div
                style="
                  border-radius: 50%;
                  background-color: white;
                  height: 44px;
                  width: 44px;
                  color: black;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQABLAEsAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCABLAEsDAREAAhEBAxEB/8QAGgABAAMBAQEAAAAAAAAAAAAAAAcICQYDBf/EADgQAAAFAgMEBgkDBQAAAAAAAAABAgMEBQYHCBEJGSE4Eld2lbXUExQxQVFUc7PTFSKBMkJxgpL/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAgMEAQX/xAAlEQEAAgECBgIDAQAAAAAAAAAAAQIDBBETFCEyM1ESMUFhgSL/2gAMAwEAAhEDEQA/ANUwAAAAAAAAAAAAAAARbirmhwAwSmppeJ+KNHotQUkl+o6rkSkpMtSUphhK3EkfuM0kR+4WUxXv2wjN61+5R3vIclvXW13DVPLCfLZfSPFp7N5Dkt662u4ap5YOWy+ji09m8hyW9dbXcNU8sHLZfRxae30aDtA8ndx1FqlU7HClNPvKJKVToUyE1qfxdfZQ2n/JqIcnT5Y67O8Ss/lYCLLizorM2DJakR5CEusvNLJaHEKLVKkqLgZGRkZGQpTeoAAAItzQ4qzcEsAL2xPpaEKqFFpp+o9NJKSmU84lhhSiP2kTjqDMveRGQsxU+d4qjefjWZZoZI8kcLN/CuPGvGu9a8uCurOw0phvo9cqEzoIceedecSvRBelQRERaqPpcUkn927Pn4O1KQz48fz6ytbuk8q/z1897s/gGfnMn6W8Gpuk8q/z1897s/gDnMn6ODU3SeVf56+e92fwBzmT9HBq5nEbZDYKzbSqBYY3VdNMuRtla4CqjMZkRHXSLVLbqSaSokqPh0kq1TrrorTQ5V1l9/8AUdHJwxt0chsisarrnyLsy+3LNfkw6HE/WaQh5ZqVCSTyWpLCTP2INbrSiSXAj6Z/3CWspEbXhHDae2WlIwtAAAK07SHktxH+nS/FIgv03lhXl7JcBskeViX2sn/ZjCes8n8cw9q6oyrQAAAGSmyh5tMQOy9R8Thj0dX44ZsPdLWsec0gAArTtIeS3Ef6dL8UiC/TeWFeXslwGyR5WJfayf8AZjCes8n8cw9q6oyrQAAAGSmyh5tMQOy9R8Thj0dX44ZsPdLWsec0gAArTtIeS3Ef6dL8UiC/TeWFeXslwGyR5WJfayf9mMJ6zyfxzD2rqjKtAAAAZKbKHm0xA7L1HxOGPR1fjhmw90tax5zSAACvW0DoNSuPJ3iXTqVHW8+1T405SUlqfoo0xh91X8NtLP8AgXaedssboZOtZQTshcRbSmYK13DIqxHbuSm1+RUlQFuEl12I8yySXkJPipJKbWlWmvRMk66dItbtZWfnFvwhhmPjsv2Ma4AAHwb5vm1MN7UqV7XtW41Ko1KYVIkyZCySkkkWvRTr/Us/YlJcVGZERGZjtazadocmYiN5Zd7Iimz6zmCxDvhiI4mnNW85GdWZcEOyprLraDP4mmO7/wAmPQ1k7UiGfD1tMtYh5zSAADylRYs6K9Bmx2pEeQ2pp5l1BKQ4hRaKSpJ8DIyMyMjAZuY17IqRPuuRc2X3EKBQ4kl1TyKRWfTJTCUfE0syWiWs0cdCSpGpF7VKG6ms2ja8M9sPXeqPt1Hm2647L77qflRPm8fpzg29m6jzbdcdl991Pyoc3j9HBt7N1Hm2647L77qflQ5vH6ODb296fsicwdansMXzjLabdOSsjW7HfnTnUF7zS2600kz/ANyCdZSPqDg2n7loflzy54f5ZsP27EsRl503XPWalUpOhyZ8kyIjcWZFoRERaJQXBJfEzMzxZMlstt5X1rFI2hKYrSAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q=="
                  alt=""
                  style="height: 24px; width: 24px"
                />
              </div>
              Stop
            </div>
            <div
              style="
                display: flex;
                flex-direction: column;
                gap: 4px;
                font-size: 12px;
                font-weight: 500;
                justify-content: center;
                align-items: center;
              "
            >
              <div
                style="
                  border-radius: 50%;
                  background-color: white;
                  height: 44px;
                  width: 44px;
                  color: black;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  position: relative;
                "
              >
                <img
                  src="data:image/jpg;base64,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"
                  alt=""
                  style="height: 24px; width: 24px"
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJQSURBVHgBlVVLbuJAEG23DSSDiVDEZ9ixYAUbJC4AJ0As2M9NYDMnmANwBk4AXAGJ9bCZ2aARMICCwXbnVbvaOAQloaSnbpf7va6uqraFgCmlLALPfwBr9bn95rXilhlBKwzDpfq6rU0gsRnHcDiUGGx1p4HjUCBGTxrR6XQqq9VqStxvJGgbUWlZlgLkbrezlsvlO8HNZiM6nY7o9Xp6fsOII3FCnTaLlSnSNPAI579rsW63q5/H47GYTCYin8/Hapg/b7fbI6YnIIzDLpfLWYylZH6azaYaDAbxM83Jt15fmsB13RJ43/jo2ihCp1gsuhjLcflAGo1G74pw7SMO4LbbbccU2GJ1Eqyo+6tc4WB0tSX5Wq2WVs5ms7e79ANLcKgoUZVzuZzCLuJwOAg09v+vip1Opz/EWa1WkSJqLM1LOHWU8/n8p+d5fz8TC4Jgt1gsfiHCpFuZtqHGfMBLFzs+iSifD+LqFhgS4KdSqaOUco/N6UR7FOWIy+HTVbNms5lEU9vn85maNM0bSMdxBEgKaaD+0oAvtG3bx9oTovTg0z0IfkCbUQ4F8ke7ksMXUYN6iMDzff9IYJIG1h8h5mUyGY/X+hy1BuVQNRoNxRGcmfgC0h6kPR0ngQMdk+Y46guvJcEAVy+qNjej1e/37VqtlsE8BzwDJeSUmvY7UOHRoMRrnohD3FhLXT6Qpjj6TgNZbljaIFcoFPTIPirtY71eT3PhZCK4S5QE+i7yjg5dJxrR+CkmGp9tCqeuP7BxLyR+AwmfiVwj8f7N2uT8FYwOHFulcbS/AAAAAElFTkSuQmCC"
                  alt="more"
                  style="
                    position: absolute;
                    height: 20px;
                    width: 20px;
                    bottom: -8px;
                    right: -6px;
                  "
                />
              </div>
              Camera
            </div>
            <div
              style="
                display: flex;
                flex-direction: column;
                gap: 4px;
                font-size: 12px;
                font-weight: 500;
                justify-content: center;
                align-items: center;
              "
            >
              <div
                style="
                  border-radius: 50%;
                  background-color: white;
                  height: 44px;
                  width: 44px;
                  color: black;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  position: relative;
                "
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHOSURBVHgB5VTNLkNREJ45rla19CTUbWJzN5LeWrjeoHaW7OxqackTlJVYqSfAE+AJ6hG6oju1K5E4fkKJ3DFz4kaLk1QsTXJyz50z3/lmzvwAOCRbmIlyk6WK6xy/KvRUuESg9gFJf6jaSLRhrs+Pe+1UH6hYCgjxCDAW42VZAASi0+yBExjHqsYfg0jLwiALX9LzjDWx8ladQEQMmKFpOq12ojOmafigyTHNOYG/kf8A9HShHHGyg68Jdkli75HCXUkyy0DAxP4PMRIZTr2tS6L4kvfRDzwB+3TXqxlKZwshIqxkhrN7OOx1GLjGOsiMTVyOeDlI5ae3uWoWCWlnNDcpJHW+5EQpFZ/KDXE6W+NSO+VLtnhtEqkLSo/eItC66B46rQOu5ap1E6luacf9cj3vl2ncD9flX7pE9rJ4XxHdWKFUFRvthxZk+1HrSFPqtcF/ERHwzfHh403LeiLNzG5VmXVVGgBfnheMaZu+RtbFMrsIte9vw62mYM90zjYT1fcJoAMNqUyFm9fmi1ttC7pPx8ICg0jen23k/bDhOvd6md68kc8cEs8cDqx3YCVx97kqL4gg7rmFp8/G/dV5vQ9oWYvucWil220msb4DYAqxUPp0WqYAAAAASUVORK5CYII="
                  alt=""
                  style="height: 21px; width: 12px"
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJQSURBVHgBlVVLbuJAEG23DSSDiVDEZ9ixYAUbJC4AJ0As2M9NYDMnmANwBk4AXAGJ9bCZ2aARMICCwXbnVbvaOAQloaSnbpf7va6uqraFgCmlLALPfwBr9bn95rXilhlBKwzDpfq6rU0gsRnHcDiUGGx1p4HjUCBGTxrR6XQqq9VqStxvJGgbUWlZlgLkbrezlsvlO8HNZiM6nY7o9Xp6fsOII3FCnTaLlSnSNPAI579rsW63q5/H47GYTCYin8/Hapg/b7fbI6YnIIzDLpfLWYylZH6azaYaDAbxM83Jt15fmsB13RJ43/jo2ihCp1gsuhjLcflAGo1G74pw7SMO4LbbbccU2GJ1Eqyo+6tc4WB0tSX5Wq2WVs5ms7e79ANLcKgoUZVzuZzCLuJwOAg09v+vip1Opz/EWa1WkSJqLM1LOHWU8/n8p+d5fz8TC4Jgt1gsfiHCpFuZtqHGfMBLFzs+iSifD+LqFhgS4KdSqaOUco/N6UR7FOWIy+HTVbNms5lEU9vn85maNM0bSMdxBEgKaaD+0oAvtG3bx9oTovTg0z0IfkCbUQ4F8ke7ksMXUYN6iMDzff9IYJIG1h8h5mUyGY/X+hy1BuVQNRoNxRGcmfgC0h6kPR0ngQMdk+Y46guvJcEAVy+qNjej1e/37VqtlsE8BzwDJeSUmvY7UOHRoMRrnohD3FhLXT6Qpjj6TgNZbljaIFcoFPTIPirtY71eT3PhZCK4S5QE+i7yjg5dJxrR+CkmGp9tCqeuP7BxLyR+AwmfiVwj8f7N2uT8FYwOHFulcbS/AAAAAElFTkSuQmCC"
                  alt="more"
                  style="
                    position: absolute;
                    height: 20px;
                    width: 20px;
                    bottom: -8px;
                    right: -6px;
                  "
                />
              </div>
              Mic
            </div>
            <div
              style="
                display: flex;
                flex-direction: column;
                gap: 1px;
                font-size: 12px;
                font-weight: 500;
              "
            >
              <div
                style="
                  border-radius: 50%;
                  background-color: #4b4b4b;
                  height: 44px;
                  width: 44px;
                  color: black;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAWCAYAAADNX8xBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHfSURBVHgBlVTLbcJAEF0b8xEc4lSQTQeUEATiGruDpIKIDtJBkgqgA3ND4mfogA5wOjAHEOLnvHG8zthZBIwE6515783s7McQZ2w0Gj2ZpvnEfVEULVqtVl+HN3RO3/c9kBxdDP5+s9l0xSUbj8fOdDqNJpPJez5GPooR5mxFnufZtVpNFgqFN8MwXpC5A7edw4eIfSDWOx6PX+v1OnBdN4yFkMHHWNeQrrUQwjMLf3NkIaH56XT6xC9AtrBSqYSNRiPkDPTO3m63tmVZEhybqgefuL84VLUEqCtuNPTMIy59m4kvgLJUAGomQF0dcTgc1tWcqiJuKgQRKs1mgDo1PC8En4Pl8B1LOWYCWIlss+M1U0+Ug33zvtngBvmKZF6oVCrdabJzIYnN+U6FdBXcammzNRVkbL/fx0mS6imp5Fy+NLHb7e5ppLNE42azeVRCyQ6l2MPhIPnczAVvXlpGCCc1iCemKXlQVaEzhQX3T4hZTCwWi/+EFLFarS45VvAe4U4FuSBdxD7IMyWE+7cgH/q44lh1Hy1WTQjiAwtmHq92u73I+UgoPVN8aZTRGQwGUlwwwmDZz8RRvrQi7FgHjfPK5fISN1pcYfTIvapJ5s2mQ4Yz5IjLjxy1ocffqx92nAJQEykERQAAAABJRU5ErkJggg=="
                  alt=""
                  style="height: 19.5px; width: 16.5px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
`

function onAccessApproved(stream) {
  recorder = new MediaRecorder(stream);
  recorder.start();

  recorder.onstop = function () {
    stream.getTracks().forEach((track) => {
      if (track.readyState === "live") {
        track.stop();
      }
    });
  };

  appendHtmlToScreen(recordBtn)

  recorder.ondataavailable = function (event) {
    let recordedBlob = event.data;
    console.log(recordedBlob);
    let url = URL.createObjectURL(recordedBlob);

    const filename = generateRandomFilename("webm")


    let a = document.createElement("a");

    a.style.display = "none";
    a.href = url;
    a.download = filename;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);

    let b = document.createElement("a");

    b.style.display = "none";

    const id = generateRandomFilename()

    b.href = 'https://mjay-chrome-extension.vercel.app/' + id;

    b.target = '_blank';

    document.body.appendChild(b);
    b.click();

    document.body.removeChild(b);
    URL.revokeObjectURL(url);

    removeElementFromScreen('record')
  };

  
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "open_dialog_box") {
    console.log("requesting recording");
    sendResponse(`Processed ${message.action}`);

    navigator.mediaDevices
      .getDisplayMedia({
        audio: true,
        video: {
          width: 9999999999,
          height: 9999999999,
        },
      })
      .then((stream) => {
        onAccessApproved(stream);
      });
  }

  if (message.action === "stopvideo") {
    console.log("stoping video");
    sendResponse(`Processed ${message.action}`);
    if (!recorder) return console.log("No recorder");

    recorder.stop();
  }
});

async function sendRequest(body, url) {
  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("An error occured");
    }
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("error", err);
  }
}




function appendHtmlToScreen(htmlString) {
    const tempDiv = document.createElement("div")

    tempDiv.innerHTML = htmlString.trim() 
    tempDiv.id = 'record'

   
    if (tempDiv.firstChild) {
      document.body.appendChild(tempDiv.firstChild)
      appendedElement = tempDiv.firstChild 
      console.log("appended controls")
    }
  }

  function removeElementFromScreen(elementId) {
    const elementToRemove = document.getElementById(elementId);
    if (elementToRemove) {
      elementToRemove.parentNode.removeChild(elementToRemove);
      console.log(`Removed element with ID: ${elementId}`);
    } else {
      console.warn(`Element with ID ${elementId} not found.`);
    }
  }


  function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (reader.result) {
          resolve(reader.result.split(",")[1])
        } else {
          reject(new Error("Failed to read Blob as Data URL."))
        }
      }
      reader.onerror = reject
      reader.readAsDataURL(blob)
    })
  }

  function generateRandomFilename(extension) {
    const time = Date.now()
    if(!extension) {
        return `screen-recording-${time}`

    }
    return `screen-recording-${time}.${extension}`
  }