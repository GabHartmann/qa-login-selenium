# QA Login Showcase

A login page built with HTML, CSS and JavaScript. The purpose of this project is to practice automated testing with Selenium WebDriver using JavaScript.

The project has a sign in page and a registration page. Passwords are hashed with SHA-256 using the native browser crypto API. There is no backend.

## Project files

    index.html        sign in page
    register.html     registration page
    script.js         login logic
    register.js       registration logic
    hash.js           shared SHA-256 hashing functions
    style.css         styling for both pages
    tests/
        test_login.js     Selenium test suite

## Requirements

You need Node.js installed on your machine to run the tests.

You need Google Chrome installed on your machine.

You need a code editor with Live Server support such as Visual Studio Code.

## How to run the login page

Open index.html with Live Server in Visual Studio Code. The page will be available at http://127.0.0.1:5500/qa-login-showcase/index.html

## How to run the tests

Install the dependencies by running this command in the project folder:

    npm install

Run the tests with:

    node tests/test_login.js

Make sure Live Server is running before you run the tests.

## Login credentials for testing

Username: admin

Password: test123
