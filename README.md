# social-network-api
API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

## Description
API backend for a social media website. Allows for users to upload their thoughts(posts) and reactions(comments). They can create these thoughts and reactions, view them, update them, and delete them. Users can also add and remove friends which they can interact with.


## Table of Contents
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Usage
This Application requires [Nodejs](https://nodejs.org/) to be installed.
<br></br>
Navigate to the folder where this application was cloned to and within your CLI you need to first seed the data by typing "npm run seed". From then on you can just type "npm run start"
<br></br>
From your browser enter localhost:3001/api/users or localhost:3001/api/thoughts
<br></br>
The users endpoint allows you to get all users with a GET request, add users with a POST request, and by adding a user's id after api/users/ you can also update a user or delete a user.
<br></br>
To add or delete friends you need to the navigate to the end point api/users/"userid"/friends/"friendid". A post request to this endpoint adds a friend to the user in the "userid". Sending a delete request to that end point removes the friend in the "friendid" from the user in "userid"
<br></br>

The following video demonstrates the possiblities of the users endpoint.
<br></br>
**Show all users**
<br></br>
![getuser](./assets/userget.gif)
<br></br>
**Adding a user**
<br></br>
![adduser](./assets/userpost.gif)
<br></br>
**Delete a user**
<br></br>
![getuser](./assets/userdelete.gif)
<br></br>
**Add a Friend** (the value after api/users is the user that is adding a friend and the value after friends/ is the userid your adding as a friend)
<br></br>
![getuser](./assets/friendpost.gif)
<br></br>

The thoughts endpoint allows you to get all thoughts with a GET request, add a thought with a POST request, and by adding a thought's id after api/thoughts/ you can also update a thought and delete a thought.
<br></br>
To add or delete reactions you need to the navigate to the end point api/thoughts/"thoughtid"/reactions. A post request to this endpoint adds a reaction to the thought in the "thoughtid". Sending a delete request to that end point removes the reaction from the thought in the "thoughtid".
<br></br>

The following video demonstrates the possiblities of the thoughts endpoint.

<br></br>
**Show all thoughts**
<br></br>
![getuser](./assets/thoughtget.gif)

<br></br>
**Add a thought** (the value after api/thoughts is the userid that is making the thought)
<br></br>
![getuser](./assets/thoughtpost.gif)

<br></br>
**Delete a thought** (the value after the api/thought is the id of the thought you are deleting)
<br></br>
![getuser](./assets/thoughtdelete.gif)

<br></br>
**Add a reaction to a thought** (the value after api/thoughts/ is what thought your creating a reaction to)
<br></br>
![getuser](./assets/reactionpost.gif)
<br></br>


## License
This project is licensed under the MIT license.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Questions
If you have any questions, please feel free to reach out to me at my GitHub: [drewhermanson](https://github.com/drewhermanson)
or by email: drew.hermanson@gmail.com
