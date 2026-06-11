let storedUser = {
    usernameStored: "admin",
    passwordHash: "ecd71870d1963316a97e3ac3408c9835ad8cf0f3c1bc703527c30265534f75ae"
}

document.getElementById("logon").addEventListener("submit", async function(loginRead) {
    loginRead.preventDefault()

    let username = document.getElementById("usr").value
    let password = document.getElementById("secret").value

    if (await hashPassword(password) === storedUser.passwordHash && username === storedUser.usernameStored) {
        document.getElementById("status").textContent = "Login Sucessfull"
    } else {
        document.getElementById("status").textContent = "Login failed"
    }
})
