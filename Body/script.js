document.querySelector("#myinput").addEventListener("keyup", ()=> {
    const inputValue = document.querySelector("#myinput").value;
    const userName = document.getElementsByClassName("d-row");
    const input = inputValue.toUpperCase()
    let arr = []
    for (let i = 0; i < userName.length; i++) {
        if(userName[i].childNodes[0].childNodes[0].innerText.toUpperCase()===input){
            arr.push(userName[i].childNodes[0].childNodes[0].innerText.toUpperCase())
        }
        if (inputValue !== "") {
            userName[i].style.display = "none"
        } else {
            userName[i].style.display = "block"
        }
    }
    let arr3 = []
    for (let i = 0; i < userName.length; i++) {
        if (userName[i].childNodes[0].childNodes[0].innerText.toUpperCase() === arr[0]) {
            arr3.push(userName[i])
        }
    }
    arr3[0] ? arr3[0].style.display = "block":2+2


})