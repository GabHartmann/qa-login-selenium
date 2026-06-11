document.getElementById("registerForm").addEventListener("submit", async function(event) {
    event.preventDefault()

    let username = document.getElementById("regUsr").value
    let password = document.getElementById("regSecret").value
    let confirmPassword = document.getElementById("regSecretConfirm").value
    let status = document.getElementById("regStatus")

    if (username === "") {
        status.textContent = "Username cannot be empty"
        return
    }

    if (password === "") {
        status.textContent = "Password cannot be empty"
        return
    }

    if (password !== confirmPassword) {
        status.textContent = "Passwords do not match"
        return
    }

    let hash = await hashPassword(password)

    status.style.color = "#007700"
    status.textContent = "Account created. Your password hash is: " + hash
})
