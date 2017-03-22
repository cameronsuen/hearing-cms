<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use DB;
use Exception;

class IPAController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    //
    public function getVowel()
    {
        $results = DB::select("SELECT DISTINCT vowel FROM ipa");
        return $results;
    }

    public function getConsonant()
    {
        $results = DB::select("SELECT DISTINCT consonant FROM ipa");
        return $results;
    }


}
