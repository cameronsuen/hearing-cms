Hearing CMS Web Client Frontend
================================
The frontend is written in React and Redux, for their information, please refer to https://facebook.github.io/react and https://github.com/reactjs/redux respectively.

Installation
------------
To install the packages, please run::

    npm install 

Building the application
------------------------
After installing the packages, you can transpile the source codes into bundled javascript in the /public folder by running::

    npm run build

Running the application
-----------------------
In order to see the changes you made without rebuilding the application every time, run::

    npm start

You can see checkout running application in http://localhost:8080

Project Structure
-----------------
The main source code resides in */src* folder

* */actions* - where all the actions of the application are defined.  An action is dispatched to update any changes in application states.  Side effects (such as async. calls are allowed as well)

* */reducers* - where all the reducers of the application are defined.  A reducer takes the old state and an action and returns a new state

* */components* - where all the react components are defined.  They define the layout of the whole applicaiton

* */containers* - containers bind react components properties to application states

* */middlewares* - where all the middlewares are defined.  They intercept dispatched actions and make additional changes / dispatch other actions

For more information about what they really mean, it's highly recommended that you walk through the official redux documentation at https://github.com/reactjs/redux 


