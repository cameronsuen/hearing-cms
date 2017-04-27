<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Lcobucci\JWT\Builder;
use Lcobucci\JWT\Signer\Hmac\Sha256;
use DB;
use Chumper\Zipper\Zipper;
use Exception;



class ImportController extends Controller
{
    /**
     * import particular samples in .zip
     *
     * @return Array
     */
    public function importzip(Request $request, Zipper $zipper)
    {
        
        $zipFile = $request->file('zipFile');


        $logFiles = $zipper->make($zipFile)->listFiles(); 
        // unzip the zip file and put them in the temp folder
        $zipper->make($zipFile)->extractTo('../storage/temp');
        // Zipper::make($zipFile)->folder('test')->extractTo('storage');
        
        //for each file in zip
        foreach ($logFiles as &$filename) {
         //  echo $value;
            $tempfilename = str_replace(".wav","",$filename);
            //
             $attributes = explode ( '_', $tempfilename);



             //no vowel
            if(substr_count($tempfilename, '_')==5){
                $vowel = '';
                $consonant  = substr($attributes[0], 0, -1);
                $tone =  substr($attributes[0], -1);
                $recorder = $attributes[1];
                $gender = $attributes[2];
                $age = $attributes[3];
                $model = $attributes[4];
                $timestamp = $attributes[5];
                //have vowel
            } else if(substr_count($tempfilename, '_')==6){
               $vowel= $attributes[0] ;
                $consonant  = substr($attributes[1], 0, -1);
                $tone =  substr($attributes[1], -1);
                $recorder = $attributes[2];
                $gender = $attributes[3];
                $age = $attributes[4];
                $model = $attributes[5];
                $timestamp = $attributes[6];

            } else{
                echo "wrong file_name";
            }
           //  $query = ("select id from ipa where vowel =:vowel and consonant =:consonant and tone =:tone");
           //  $params['vowel'] = $vowel;
           //  $params['consonant'] = $consonant;
           //  $params['tone'] = intval($tone);


           // $wordid = DB::select($query, $params);
          
            //hardcode here
            $wordid=2;

           $query2 = "Insert into sample (word_id,background_id,recorder,stamp,gender,age,hearing_prob,phone,sample,correct,incorrect,unsure,noise)
            VALUES (:wordid,1, :recorder,0,:gender,:age,0,:model,:filename,0,0,0,0);";

            $params['wordid'] = intval($wordid);
            $params['recorder'] = 'test';
        //    $params['recorder'] = $recorder;
           // $params['timestamp'] = $timestamp+0;
            $params['gender'] = $gender;
            $params['age'] = intval($age);
            $params['model'] = $model;
            $params['filename'] = $filename;

             $result = DB::select($query2, $params);


        }   

    }



}
