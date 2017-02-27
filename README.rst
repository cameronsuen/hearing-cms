Hearing CMS
===========
This is a project aiming to develop a CMS for storing, evaluating and exporting voice samples that can be used to develop a articulation training system. 
The backend is developed using Lumen and the Frontend is developed in React/Redux.

Project Structure
-----------------
The project consists of a backend which serves RESTful APIs and a frontend which consumes the API.  It is possible to develop other frontends that consume the backend services

Setting Up
----------
Configure the development environment (docker). Then you can work on frontend or backend 

Laradock
--------
Laradock is the main application development environment used in the project, mainly used by the backend side to set up lumen, nginx and MySQL

Installation
^^^^^^^^^^^^
Install docker and docker-compose as instructed in https://docs.docker.com/compose/install

After cloning this repository, cd to *laradock* folder and run the following::
    
    docker-compose build nginx mysql workspace

Running laradock
^^^^^^^^^^^^^^^^
After installation, launch nginx and mysql by running::

    docker-compose up -d nginx mysql

If it fails, try adding yourself in docker group, or adding sudo before the command

Entering workspace
^^^^^^^^^^^^^^^^^^
The majority of commands are available in the workspace container.  Some of the useful tools include

* composer - enable packages installed in the backend

* artisan - manage the backend application, including making changes/seeding the database

To enter the workspace, run::
    
    docker-compose exec --user=laradock workspace /bin/bash

As usual, add yourself in docker group, or use sudo before the command

After entering the workspace, cd to the project folder (*backend*)

Frontend & Backend Development
------------------------------
For both of them, please find the corresponding READMEs in the subfolders
