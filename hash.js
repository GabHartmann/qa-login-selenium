async function digestSHA256(data) {
    return await crypto.subtle.digest("SHA-256", data)
}

async function hashPassword(password) {
    let encodedText = new TextEncoder().encode(password)
    let hashBuffer = await digestSHA256(encodedText)
    let hashArray = Array.from(new Uint8Array(hashBuffer))
    let hashHex = hashArray.map(function(b) {
        return b.toString(16).padStart(2, "0")
    }).join("")
    return hashHex
}
