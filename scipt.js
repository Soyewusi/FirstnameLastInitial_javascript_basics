// Define an array of posts with unique titles, dates, and descriptions
const posts = [
    {
        title: "Exploring JavaScript Fundamentals",
        date: "March 20, 2025",
        description: "Learn the basics of JavaScript, from variables to functions, and how it powers the web."
    },
    {
        title: "Understanding Asynchronous Programming",
        date: "April 5, 2025",
        description: "Dive into JavaScript's asynchronous nature, covering callbacks, promises, and async/await."
    },
    {
        title: "Building Interactive Web Pages",
        date: "April 15, 2025",
        description: "Discover how to manipulate the DOM and create interactive user experiences with JavaScript."
    }
];

// Populate the HTML elements with unique post data
document.getElementById("title_1").innerText = posts[0].title;
document.getElementById("date_1").innerText = posts[0].date;
document.getElementById("descrip_1").innerText = posts[0].description;

document.getElementById("title_2").innerText = posts[1].title;
document.getElementById("date_2").innerText = posts[1].date;
document.getElementById("descrip_2").innerText = posts[1].description;

document.getElementById("title_3").innerText = posts[2].title;
document.getElementById("date_3").innerText = posts[2].date;
document.getElementById("descrip_3").innerText = posts[2].description;