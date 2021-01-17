# The Shoppies: Movie Awards for Entrepreneurs

Inspired by the Shopify Front-End Developer Challenge, I created a web application for you to search for your favourite movies and nominate them for a Shoppie! 

Go check it out at https://shoppies-chamod.netlify.app/.

## Features

- Simple and easy-to-use interface with 3 sections: Search, Results, and Nominees
- Search bar to find movies by their title (required) and year of release (optional)
- Paginated search results allowing user to see all the results of their search in sets of 10
- Textual loading indicators (e.g. "Awaiting results...")
- Nomination list to display up to 5 movies a user has nominated; persists in browser even after leaving page
- Ability to add and remove movies from Nomination list
- Linked IMDb button to each movie's corresponding IMDb page for additional information
- Banner that appears after selecting 5 movies
  - Button to trigger modal that allows user to generate and copy a shareable link for their completed Nomination list


## Future Improvements

- Button for each movie that displays the movie poster and additional information in a modal
- Non-textual visual loading indicators
- Notifications for adding and removing movies from Nomination list
- Dark mode

## Tech Stack

- React (bootstrapped with [Create React App](https://github.com/facebook/create-react-app))
- [OMDB API](http://www.omdbapi.com) 
- Hosted on [Netlify](https://www.netlify.com/)
- Nominees stored in localstorage

## Getting Started

1. Clone the repo
2. Install the dependencies with `yarn install`
3. Start the app with `yarn start` and view it at [http://localhost:3000](http://localhost:3000) in your browser
