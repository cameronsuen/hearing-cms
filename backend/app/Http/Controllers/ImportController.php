<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Lcobucci\JWT\Builder;
use Lcobucci\JWT\Signer\Hmac\Sha256;
use DB;
use Exception;


class ImportController extends Controller
{
    /**
     * import particular samples in .zip
     *
     * @return Array
     */
    public function import(Request $request, Zipper $zipper)
    {
        $zipFile = $request->input('zipFile');

        // unzip the zip file and put them in the temp folder
        Zipper::make($zipFile)->extractTo('storage/temp', array(''), Zipper::WHITELIST);
        

        
        // $query = "SELECT s.sample FROM sample s INNER JOIN ipa i ON i.id = s.id WHERE 1=1";
        
        // $params = array();

        // if (isset($gender)) {
        //     $query .= " AND gender=:gender";
        //     $params['gender'] = $gender;
        // }

        // if (isset($username)) {
        //     $query .= " AND username=:username";
        //     $params['username'] = $username;
        // }

        // if (isset($min_age)) {
        //     $query .= " AND age >=:min_age";
        //     $params['min_age'] = $min_age;
        // }

        // if (isset($max_age)) {
        //     $query .= " AND age <=:max_age";
        //     $params['max_age'] = $max_age;
        // }

        // if (isset($validPercent)) {
        //     $query .= " AND correct/(correct + incorrect + unsure + noise) >=:validPercent"; 
        //     $params['validPercent'] = $validPercent;
        // }

        // if (isset($vowel)) {
        //     $query .= " AND vowel=:vowel";
        //     $params['vowel'] = $vowel;
        // }

        // if (isset($consoant)) {
        //     $query .= " AND consonant=:consonant";
        //     $params['consonant'] = $consonant;
        // }

        // $results = DB::select($query, $params);

        // // Build the filename by timestamp
        // $filename = time().'.zip';
        
        // $status='';
        // if (sizeof($results)==0){
        //     $status = 'empty result retruned! (line 55)';
        //     return response()->json(['error' => $status], 400);
        // }

        // for ($i=0;$i<sizeof($results);$i++){
   
        //     $data[$i] = $results[$i]->sample;
        //     $files = '../storage/app/samples/'.$data[$i];

        //     // Zip the files and get Status
        //     $status = $zipper->make('../storage/app/exports/'.$filename)->add($files)->getStatus();
        // }
        

        // // Return the filename of the zip files
        // if ($status == 'No error') {
        //     return response()->json(['filename' => $filename], 200);
        // } else {
        //     return response()->json(['error' => $status], 400);
        // }
    }

}
