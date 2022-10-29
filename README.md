
This is a simple fullstack Atelier application built using an Express server backend and a Reactjs frontend. The express server directs incoming react client requests and appends a secure github token to make a request to an external API. 

Testing bundles are included. 


SETUP:
1. Clone the repository
2. Install Dependencies - npm install 
2. Build the application - npm run build
3. Add your environment variables, a defined PORT and a GITHUB API Token to authenticate API requests. Add a 'PORT' environment variable to a port you would like your application to listen on, add a 'AUTH' environment variable set to a GITHUB token. 
4. Start your server - npm run server 
