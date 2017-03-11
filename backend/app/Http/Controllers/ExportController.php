<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use DB;
use Chumper\Zipper\Zipper;
use Exception;

class ExportController extends Controller
{

    /**
     * Export all files as a zip file
     * 
     * @return Array
     */


    public function exportAll(Zipper $zipper)
    {



    $gender = $_GET["gender"];
    $username = $_GET["username"];
    $min_age = $_GET["min_age"];
    $max_age = $_GET["max_age"];
    $validPercent = $_GET["validation_percentage"];
    $min_correct = $_GET['min_correct'];


//SELECT sample FROM sample WHERE age >=3 and age <=6 and recorder = 'test' and correct/(correct + incorrect + unsure + noise ) >=0.3 and correct>2;
      $results = DB::select("SELECT sample FROM sample WHERE age >=:min_age and age <=:max_age and recorder =:username and correct/(correct + incorrect + unsure + noise ) >=:validPercent and correct>=:min_correct",
      	['min_age' => $min_age, 'max_age'=>$max_age,'username'=>$username,'validPercent'=>$validPercent,'min_correct'=>$min_correct ]);



 	// Build the filename by timestamp
      $filename = time().'.zip';

      	//echo sizeof($results);
      for ($i=0;$i<sizeof($results);$i++){
   
      	$data[$i] = $results[$i]->sample;
      	//echo $data[$i];

      	$files = '../storage/app/samples/'.$data[$i];
      	// Zip the files and get Status
      	$status = $zipper->make('../storage/app/exports/'.$filename)->add($files)->getStatus();
      }


      	//fretch array into string
      //add ../storage/app/samples/
      //$file =(added result)
      //loop $status = $zipper->make('../storage/app/exports/'.$filename)->add($files)->getStatus();

        // Current directory is public folder
        // Get all the file paths from ../storage/app/samples

     //   $files = glob('../storage/app/samples/*');

        

        // Close the zipper and write file to disk
        $zipper->close();

        // Return the filename of the zip files
        if ($status == 'No error') {
            return response()->json(['filename' => $filename], 200);
        } else {
            return response()->json(['error' => $status], 400);
        }
    }

}
