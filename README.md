# Social-Network-API-Challenge-18

## Description

This is the eighteenth challenge in the Northwestern Coding Bootcamp (Module 18). This is the backend-only functionality for a generic social network, which allows users to create an account, a thought, a friend's list, and a reaction to a thought, as well as update, view, and delete any of the above. This challenge is utilizing a noSQL database, and we are using MongoDB and Mongoose as our database and and ODM library, respectively, to perform each action in the CRUD method.

## Link to video walkthrough

[Live Video Walkthrough](https://drive.google.com/file/d/11Ea4iJIf2UlDjd-KN_YRIdoKf-zKkChy/view)

## Screenshot

![Webpage Screenshot](./assets/Screen%20Shot%202022-10-25%20at%209.47.29%20PM.png)
![Webpage Screenshot](./assets/Screen%20Shot%202022-10-25%20at%209.47.40%20PM.png)

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```