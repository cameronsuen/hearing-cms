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
        
        //for each file in zip
        foreach ($logFiles as $filename) {
            $tempfilename = str_replace(".wav","",$filename);
            $attributes = explode ( '_', $tempfilename);

            //no vowel
            if(substr_count($tempfilename, '_') == 6){
                $hearing_prob = $attributes[0] == 'HI';
                $vowel = '';
                $consonant  = substr($attributes[1], 0, -1);
                $tone =  substr($attributes[1], -1);
                $recorder = $attributes[2];
                $gender = $attributes[3];
                $age = $attributes[4];
                $model = $attributes[5];
                $timestamp = $attributes[6];

            // Contains vowel
            } else if(substr_count($tempfilename, '_') == 7){
                $hearing_prob = $attributes[0] == 'HI';
                $vowel= $attributes[1] ;
                $consonant  = substr($attributes[2], 0, -1);
                $tone =  substr($attributes[2], -1);
                $recorder = $attributes[3];
                $gender = $attributes[4];
                $age = $attributes[5];
                $model = $attributes[6];
                $timestamp = $attributes[7];

            } else{
                echo "wrong file_name";
            }
            //hardcode here
            $query1 = "SELECT id FROM ipa WHERE vowel=:vowel AND consonant=:consonant AND tone=:tone";


            $query2 = "INSERT INTO sample (word_id,background_id,recorder,stamp,gender,age,hearing_prob,phone,sample,correct,incorrect,unsure,noise) 
                VALUES (:word_id, 1, :recorder, :stamp, :gender, :age, :hearing_prob, :model, :filename, 0, 0, 0, 0);";

            $params['recorder'] = 'test';
            $params['gender'] = $gender;
            $params['age'] = intval($age);
            $params['model'] = $model;
            $params['filename'] = $filename;
            $params['hearing_prob'] = $hearing_prob;
            $params['stamp'] = date('Y-m-d H:m:s', $timestamp);

            $id_result = DB::select($query1, ['vowel' => $vowel, 'consonant' => $consonant, 'tone' => $tone]); 

            var_dump($id_result);

            $params['word_id'] = $id_result[0]->id;

            $result = DB::select($query2, $params);

        }   

    }

}
