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
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Update validation results of a particular sample
     *
     * @return Array
     */
    public function importFunc(Request $request)
    {
	    // Get and validate request inputs
        try {
            $file = $request->input('file');
        
            // Authenticate the user
            $result = DB::select("SELECT password, role FROM users WHERE username=:username", ['username'=>$username]);

            if (Hash::check($password, $result[0]->password)) {
                // Build and return the access token
                $token = $this->buildToken();
                return response()->json(['access_token' => (string)$token, 'role' => $result[0]->role]);

            } else {
                throw new Exception('Failed to upload the file');
            }

        } catch(Exception $e) {
            // Returns an error message and response code 400 if error occurs
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    /**
     * Build the access token
     *
     * @return string
     */
    private function buildToken() {

        $signer = new Sha256();

        $token = (new Builder())->setIssuer('hearing-cms.api.dev')
            ->setAudience('hearing-cms.client.dev') 
            ->setIssuedAt(time())
            ->setNotBefore(time())
            ->setExpiration(time()+3600)
            ->sign($signer, 'testing')
            ->getToken();

        return $token; 
    } 

}
