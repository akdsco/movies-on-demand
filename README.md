## This is movies on demand!

To view and use the app, go [here](https://movies-on-demand.web.app/discover)

To run it locally, follow these steps:
- Install latest [node](https://nodejs.org/en/)
- Go to root of this project and install all dependencies with `npm i` command
- This project uses MovieDB to query movies, in order to get it to work, you need to supply API keys
- Add `.env` file with two variables:
``` 
REACT_APP_MOVIE_API_KEY=YOUR_API_KEY
REACT_APP_MOVIE_API_ACCESS_TOKEN=YOUR_API_ACCESS_TOKEN
```
- Start local server with `npm start`
- Go to `localhost:3000/discover` and enjoy browsing movies

If you're interested in tech side, you can read `Notes.md` where I put some notes as I wrote this project.