import React from 'react';
import Projects from './components/Projects';
import './App.css';

const projectData = [
    {
        title: "Wordmage.app",
        description: `This reflects my lifelong interest in words–especially those likely to be a bit off the beaten path. The app has a built-in list of several thousand words, which I scraped from a list that someone else made and apparently abandoned. (My source was not the original one.) The user can add new words and also mark words as of no interest, so that they don’t remain in active display.

        The landing page of the app shows a random list of words, intentionally unsorted, to give the user something quick and unpredictable to browse. A Refresh button allows the user to get a new selection.
        
        Each word has a set of buttons (learn, like, meh, tag) to allow the user to organize it in some way. Words marked as “learn” are added to the pool from which the Unscramble area of the app makes its selections.
        
        A user’s customizations are saved in the browser’s local storage. However, there is the option to register and thus set up a profile that’s accessed via email and password. If a user chooses to register, the customizations are stored in a database and so can be accessed from a different browser.`,
        link: "https://wordmage.app"
    },
    {
        title: "calendar.math-toys.app",
        description: `Long ago, a math enthusiast showed me how to find the day of the week for a given date, using a 12-digit calendar. I took the concept and developed it further so I could directly calculate the calendar for any year. This app provides a large list of 12-digit calendars and also gives instructions for performing the calculations.`,
        link: "https://calendar.math-toys.app"
    },
    {
        title: "art-game.vercel.app",
        description: `This is an art gallery game. The purpose is to help the user become familiar with paintings considered to be among the great works of art. I think the idea came to me while I was chatting with my brother about identifying music from a passage within it. My idea was to make a game that would show the user a cutout of a painting and challenge the user to identify the painting based on the cutout.`,
        link: "https://art-game.vercel.app"
    }
];

const App = () => {
    return (
        <div className="app">
            <h1>Personal Projects</h1>
            <p>Things I've done that combine web development with other personal interests.</p>
            <Projects projects={projectData} />
        </div>
    );
};

export default App;

