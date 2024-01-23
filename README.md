# valuni
Software Engineering project for Fall 2023-2024 AUC, Online University Evaluation System 
For SW architecture and UI references check ``documents`` directory
Project backlog here: https://github.com/users/Ahmed-Waseem77/projects/1

## How to setup 
 1. Clone the repo 
    ``` 
    git clone <HTTPS LINK>
    ``` 
 2. open terminal change directory to the repo directory ``valuni_wd``

 3. inside ``valuni_wd`` install the repo dependencies with NPM
    ```
    npm install
    ```
    if npm is not found, install nodejs on your machine  
    https://nodejs.org/en/download
 4. setup the node server remotely or locally
    ```
    node Queries.js
    ```
 5. set up expo development environment in working directory ``valuni_wd``
    ```  
    npx expo start --web 
    ```
## Critical Notes, 
### Firebase project is deleted from this project.
to run your project, paste your own firebase project configuration in ``src/firebase/config.js``
### Remote DB is deleted
Either run a local instance or host it remotely then use the dump files in repo to populate it
