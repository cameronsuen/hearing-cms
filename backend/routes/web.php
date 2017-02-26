<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function () use ($app) {
    return $app->version();
});

$app->get('/exportAll', 'ExportController@exportAll');

$app->post('/authenticate', 'AuthenticateController@authenticate');

$app->get('/samples', 'SampleController@get');

$app->put('/samples/{sampleId}', 'SampleController@put');

$app->get('/storage/samples/{sampleName}', 'StaticServeController@getSample');

$app->get('/storage/img/{imgName}', 'StaticServeController@getImg');
