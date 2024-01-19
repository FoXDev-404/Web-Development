const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const homeStartingContent = "Welcome to my blog! This is my first blog website built with Node.js and Express.js. I've made it dynamic using EJS, responsive with Bootstrap, and efficient with Lodash. MongoDB is storing my data through Mongoose, and the website is deployed on Heroku. I use Git and GitHub for version control, VS Code for coding, npm for package management, and nodemon for server monitoring. MongoDB Atlas and Compass help manage my database, while Git Bash and GitHub are used for code versioning and deployment. Let's explore the world of web development together!";

const aboutContent = "About Me: I'm a web developer with two years of experience, learning from various platforms like Udemy, YouTube, Google, Stack Overflow, W3Schools, FreeCodeCamp, GitHub, Medium, GeeksforGeeks, Hackerrank, and more. I've also participated in coding challenges on CodeChef, Codeforces, LeetCode, and learning through platforms like Udacity, Coursera, Pluralsight, SoloLearn, and Codecademy. Web development is not just my job; it's my passion and continuous learning journey. Join me in this exciting adventure of coding and creativity.";
const contactContent = "Contact Me: Feel free to reach out! You can contact me via email, phone, or find me on various social media platforms such as GitHub, LinkedIn, Twitter, Instagram, Facebook, Snapchat, WhatsApp, Telegram, Skype, Discord, Slack, Zoom, Google Meet, Microsoft Teams, YouTube, Pinterest, Medium, Stack Overflow, Quora, Reddit, GitLab, Bitbucket, CodePen, CodeSandbox, Repl.it, and more. I'm always open to connecting and collaborating.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let posts = [];


app.get('/', function (req, res) {
  res.render('home', { StartingContent: homeStartingContent });
});

app.get('/about', (req, res) => {
  res.render('about', { aboutString: aboutContent });
});

app.get('/contact', (req, res) => {
  res.render('contact', { contactString: contactContent });
});

app.get('/compose', (req, res) => {
  res.render('compose');
});


app.post('/compose', function (req, res) {
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  };
  posts.push(post);
  res.redirect('/');

  console.log(posts);
});








app.listen(3000, function () {
  console.log("Server started on port 3000");
});
