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


    public function export(Zipper $zipper)
    {



		$gender = $_GET["gender"];
	    $username = $_GET["username"];
	    $min_age = $_GET["minAge"];
	    $max_age = $_GET["maxAge"];
	    $validPercent = $_GET["validationPercentage"];
	    $min_correct = $_GET['minCorrect'];
	    $vowel = $_GET['vowel'];
	    $consonant = $_GET['consonant'];


		$word_id_result = DB::select("SELECT id FROM ipa WHERE vowel=:vowel and consonant=:consonant", 
	    	['vowel'=>$vowel,'consonant'=>$consonant]);

	    $word_id = $word_id_result[0]->id;	
	  	

	    $results = DB::select("SELECT sample FROM sample WHERE age >=:min_age and age <=:max_age and recorder =:username and correct/(correct + incorrect + unsure + noise ) >=:validPercent and correct>=:min_correct and word_id=:word_id", 
	    	['min_age' => $min_age, 'max_age'=>$max_age,'username'=>$username,'validPercent'=>$validPercent,'min_correct'=>$min_correct,'word_id'=>$word_id]);



 		// Build the filename by timestamp
    	  $filename = time().'.zip';

    	  $status='';



    	  if (sizeof($results)==0){
    	  	$status = 'empty result retruned! (line 55)';
    	  	return response()->json(['error' => $status], 400);
    	  }

      	//echo sizeof($results);
      	for ($i=0;$i<sizeof($results);$i++){
   
	      	$data[$i] = $results[$i]->sample;

	      	$files = '../storage/app/samples/'.$data[$i];
	      	

	      	// Zip the files and get Status
	      	$status = $zipper->make('../storage/app/exports/'.$filename)->add($files)->getStatus();
      	}
        

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
