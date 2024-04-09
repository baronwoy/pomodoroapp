# Pomodoro App

### Project Aim
Simple Pomodoro app with 2 modes to assist with Time Management for tasks like studying, work, etc. <br />

### Current State:
<img src="https://github.com/baronwoy/pomodoroapp/assets/157763277/fe3b9827-b96f-458a-82ea-6360b182f34b" width="auto" height="auto">

### Built With

[![My Skills](https://skillicons.dev/icons?i=js,html,css,react)](https://skillicons.dev) <br />
Javascript, HTML/CSS, ReactJs

* [`react-circular-progressbar`](https://github.com/kevinsqi/react-circular-progressbar) for the circular, SVG progress bar component

## Install
This module depends upon basic knowledge of [terminal](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line), [Node](https://nodejs.org/en/), [React](https://reactjs.org), [HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML), and [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS).


```
git clone https://github.com/baronwoy/pomodoroapp.git
```
<br>

Then install dependencies:

```
cd pomodoro-react-app
npm install
```
<br>

Start the app in development mode and open your browser to [http://localhost:3000/](http://localhost:3000/) to view the app. The page will reload if you make edits. You will also see any lint errors in the console.

```
npm start
```
<br>

## Known Issues
* Does not track your start time or save your preferences, so timer stops if your computer sleeps and the settings need to be reentered when the page is refreshed.
* When page first loads the circle is shown green when it should be shown red
* Currently clicking 'Pomodoro' or 'Short Break' has no function
* Has no long break timer

### Roadmap
* Implement functionality so a user can click short break to access it without going through pomodoro first and vice-versa
* Implement long break functionality
* Make the Settings page more visually appealing and more features to it
* Implement to-do list funcitonality

