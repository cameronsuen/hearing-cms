<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use DB;
use Exception;

class SampleController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Get 5 random samples from the database with their corresponding words and image file urls
     * 
     * @return Array
     */
    public function get(Request $request)
    {
        // Please refer to the database structure to understand this SQL statement
        $results = DB::select("SELECT s.id, s.sample, i.word, i.img FROM sample s INNER JOIN ipa i on s.word_id = i.id ORDER BY RAND() LIMIT 5");

        // Lumen automatically serializes the results as JSON documents
        return $results;	
    }

    /**
     * Update validation results of a particular sample
     *
     * @return Array
     */
    public function put(Request $request, $sampleId)
    {
	    // Get and validate request inputs
        try {
            $op = $request->input('op');
            $field = $request->input('field');
            $value = $request->input('value');
        
            // op must be add
            if ($op != 'add') {
                throw new Exception('Unsupported operation');
                
            // field must be one of 'correct', 'incorrect', 'unsure' or 'noise'
            } else if (!in_array($field, array('correct', 'incorrect', 'unsure', 'noise'))) {
                throw new Exception('Unsupported field');
                
            // value must be an integral value
            } else if (!is_int($value)) {
                throw new Exception('Unsupported value');
            }

            // Update the corresponding record
            $results = DB::select("UPDATE sample SET $field = $field + 1 WHERE id = :id", ['id' => $sampleId]);
            return response()->json(['updatedId' => $sampleId, 'updatedField' => $field]);

            } catch(Exception $e) {
            // Returns an error message and response code 400 if error occurs
                return response()->json(['error' => $e->getMessage(), 'op' => $op], 400);
            }
    }

}
