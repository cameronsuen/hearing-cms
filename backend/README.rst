Hearing CMS Backend: RESTful API with Lumen
===========================================
The backend provides a set of RESTful APIs for exposing the functionalities of the system.  It is powered by nginx as the HTTP server and MySQL as the database.

Installation/Launching
----------------------
Assuming that you have Laradock installed, simply cd into the laradock directory, and run::

    docker-compose up -d nginx mysql

to launch nginx and MySQL services.  By default, the RESTful APIs endpoints can be accessed from http://localhost:80/[apiName]

Adding APIs
-----------
APIs are defined in the folder *app/Http/Controllers/*.  To create a new API, add a new class extending Controller class 

API Authentication
------------------
To enable authentication, in the controller's constructor, add:: 

        $this->middleware('auth');

Specifying routes to APIs
-------------------------
After writing the APIs, specify the endpoint to call the API in *routes/web.php*

Installing new packages
-----------------------
If you want to use new packages, you need to use the *composer* utility included in the Laradock workspace container.  

1. Edit *composer.json* and add any packages you want to use (basically follow the instructions on the packages' github page.

2. Enter the workspace container by running::
    
    docker-compose exec --user-laradock workspace /bin/bash

3. If the above command failed, try adding you user to docker group, or use sudo in front of the command

4. After entering to the workspace, cd to the project folder, installing the new package(s) by running::

   composer update

5. You can exit the workspace when you are done::

   exit

Database Configuration
----------------------
By default, MySQL is listening on port *3306*.  Default username is *homestead* and default password is *secret*

Making changes to Database Structure
------------------------------------

* To make changes to the database, enter into the workspace (See *"Installing new packages"* above) and run::
  
    php artisan make:migration --table-[table_name]

* Specify the changes in up() and down() function respectively.  For more information, see http://laravel.com/docs/5.4/migrations

* After making changes, write the changes to db by running::

  php artisan migrate
  
Seeding Database with data 
--------------------------

* To import mock data to the database, enter into the workspace (See *"Installing new new packages"* above) and run::

  php artisan make:seeder [SeederName]

* Edit the run() function of the seeder.  For more information, see http://laravel.com/docs/5.4/seeding

* After making changes, write the mock data to the db by running::

  php artisan db:seed --class-[SeederName]


