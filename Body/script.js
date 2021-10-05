document.querySelector("#myinput").addEventListener("keyup", () => {
    const inputValue = document.querySelector("#myinput").value.toUpperCase();
    const userList = Array.from(document.getElementsByClassName("d-row"));
    const matchedUsers = userList.filter(user => { user.childNodes[0].childNodes[0].innerText.toUpperCase().includes(inputValue)})

    console.log(matchedUsers)




})