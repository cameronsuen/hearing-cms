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
     * search the samples
     * 
     * @return Array
     */

    public function search(Request $request)
    {

        $gender = $request->get('gender');
        $username = $request->get('username');
        $min_age = $request->get('minAge');
        $max_age = $request->get('maxAge');
        $validPercent = $request->get('validationPercentage');
        $min_correct = $request->get('minCorrect');
        $vowel = $request->get('vowel');
        $consonant = $request->get('consonant');
        
        $query = "SELECT s.recorder, s.stamp, s.gender, s.age, s.hearing_prob, s.phone, s.sample, s.correct, ";
        $query .= "CASE WHEN (s.correct + s.incorrect + s.unsure + s.noise)=0 THEN -1 ";
        $query .= "ELSE s.correct / (s.correct + s.incorrect + s.unsure + s.noise) * 100 END AS validPercent, ";
        $query .= "i.vowel, i.consonant FROM sample s INNER JOIN ipa i ON i.id = s.id WHERE 1=1";
        
        $params = array();

        if (isset($gender)) {
            $query .= " AND gender=:gender";
            $params['gender'] = $gender;
        }

        if (isset($username)) {
            $query .= " AND username=:username";
            $params['username'] = $username;
        }

        if (isset($min_age)) {
            $query .= " AND age >=:min_age";
            $params['min_age'] = $min_age;
        }

        if (isset($max_age)) {
            $query .= " AND age <=:max_age";
            $params['max_age'] = $max_age;
        }

        if (isset($validPercent)) {
            //$query .= " AND correct/(correct + incorrect + unsure + noise) >=:validPercent"; 
            $query .= " AND validPercent >=:validPercent";
            $params['validPercent'] = $validPercent;
        }

        if (isset($vowel)) {
            $query .= " AND vowel=:vowel";
            $params['vowel'] = $vowel;
        }

        if (isset($consoant)) {
            $query .= " AND consonant=:consonant";
            $params['consonant'] = $consonant;
        }

        $results = DB::select($query, $params);

        return $results;
    }
    
    /**
     * export the samples
     * 
     * @return Array
     */
    public function export(Request $request, Zipper $zipper)
    {
        $gender = $request->get('gender');
        $username = $request->get('username');
        $min_age = $request->get('minAge');
        $max_age = $request->get('maxAge');
        $validPercent = $request->get('validationPercentage');
        $min_correct = $request->get('minCorrect');
        $vowel = $request->get('vowel');
        $consonant = $request->get('consonant');
        
        $query = "SELECT s.sample FROM sample s INNER JOIN ipa i ON i.id = s.id WHERE 1=1";
        
        $params = array();

        if (isset($gender)) {
            $query .= " AND gender=:gender";
            $params['gender'] = $gender;
        }

        if (isset($username)) {
            $query .= " AND username=:username";
            $params['username'] = $username;
        }

        if (isset($min_age)) {
            $query .= " AND age >=:min_age";
            $params['min_age'] = $min_age;
        }

        if (isset($max_age)) {
            $query .= " AND age <=:max_age";
            $params['max_age'] = $max_age;
        }

        if (isset($validPercent)) {
            $query .= " AND correct/(correct + incorrect + unsure + noise) >=:validPercent"; 
            $params['validPercent'] = $validPercent;
        }

        if (isset($vowel)) {
            $query .= " AND vowel=:vowel";
            $params['vowel'] = $vowel;
        }

        if (isset($consoant)) {
            $query .= " AND consonant=:consonant";
            $params['consonant'] = $consonant;
        }

        $results = DB::select($query, $params);

 		// Build the filename by timestamp
        $filename = time().'.zip';
        
    	$status='';
    	if (sizeof($results)==0){
    	    $status = 'empty result retruned! (line 55)';
    	  	return response()->json(['error' => $status], 400);
    	}

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
