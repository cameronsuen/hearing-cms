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

$app->get('/export', 'ExportController@export');

$app->get('/search', 'ExportController@search');

$app->get('/getVowel', 'IPAController@getVowel');

$app->get('/getConsonant', 'IPAController@getConsonant');

$app->post('/authenticate', 'AuthenticateController@authenticate');

$app->post('/importzip', 'ImportController@importzip');

$app->post('/import', 'ImportController@import');

$app->get('/samples', 'SampleController@get');

$app->put('/samples/{sampleId}', 'SampleController@put');

$app->get('/storage/samples/{sampleName}', 'StaticServeController@getSample');

$app->get('/storage/img/{imgName}', 'StaticServeController@getImg');

$app->get('/storage/exports/{filename}', 'StaticServeController@getExport');

$app->get('/getsample', 'GetSampletable@showtable');
