const { Builder, By, until } = require("selenium-webdriver")
require("chromedriver")

// Update this URL to match your Live Server port and path
const BASE_URL = "http://127.0.0.1:5500/qa-login-showcase/index.html"
const TIMEOUT = 5000

async function runTests() {
    let passed = 0
    let failed = 0

    async function test(name, fn) {
        try {
            await fn()
            console.log("PASS: " + name)
            passed++
        } catch (err) {
            console.log("FAIL: " + name + " — " + err.message)
            failed++
        }
    }

    function assert(actual, expected) {
        if (actual !== expected) {
            throw new Error("Expected '" + expected + "' but got '" + actual + "'")
        }
    }

    let driver = await new Builder().forBrowser("chrome").build()

    try {

        // TEST 1: Valid login
        await test("Valid login shows success message", async function() {
            await driver.get(BASE_URL)
            await driver.findElement(By.id("usr")).sendKeys("admin")
            await driver.findElement(By.id("secret")).sendKeys("test123")
            await driver.findElement(By.id("logon")).submit()
            await driver.wait(until.elementTextContains(driver.findElement(By.id("status")), "Login"), TIMEOUT)
            let status = await driver.findElement(By.id("status")).getText()
            assert(status, "Login Sucessfull")
        })

        // TEST 2: Wrong password
        await test("Wrong password shows failure message", async function() {
            await driver.get(BASE_URL)
            await driver.findElement(By.id("usr")).sendKeys("admin")
            await driver.findElement(By.id("secret")).sendKeys("wrongpassword")
            await driver.findElement(By.id("logon")).submit()
            await driver.wait(until.elementTextContains(driver.findElement(By.id("status")), "Login"), TIMEOUT)
            let status = await driver.findElement(By.id("status")).getText()
            assert(status, "Login failed")
        })

        // TEST 3: Wrong username
        await test("Wrong username shows failure message", async function() {
            await driver.get(BASE_URL)
            await driver.findElement(By.id("usr")).sendKeys("notadmin")
            await driver.findElement(By.id("secret")).sendKeys("test123")
            await driver.findElement(By.id("logon")).submit()
            await driver.wait(until.elementTextContains(driver.findElement(By.id("status")), "Login"), TIMEOUT)
            let status = await driver.findElement(By.id("status")).getText()
            assert(status, "Login failed")
        })

        // TEST 4: Empty fields
        await test("Empty fields show failure message", async function() {
            await driver.get(BASE_URL)
            await driver.findElement(By.id("logon")).submit()
            await driver.wait(until.elementTextContains(driver.findElement(By.id("status")), "Login"), TIMEOUT)
            let status = await driver.findElement(By.id("status")).getText()
            assert(status, "Login failed")
        })

    } finally {
        await driver.quit()
        console.log("\nResults: " + passed + " passed, " + failed + " failed")
    }
}

runTests()
