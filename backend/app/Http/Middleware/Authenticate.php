<?php

namespace App\Http\Middleware;

use Closure;
use Lcobucci\JWT\Parser;
use Lcobucci\JWT\ValidationData;
use Lcobucci\JWT\Signer\Hmac\Sha256;

class Authenticate 
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        $signer = new Sha256();

        try {
            // Get the access token
            $auth_header = $request->header('Authorization');
            $token = (new Parser())->parse(str_replace('Bearer ', '', $auth_header));

            // Validate the access token
            $data = new ValidationData();
            $data->setIssuer('hearing-cms.api.dev');
            $data->setAudience('hearing-cms.client.dev');

            // Check if it's correctly signed
            // TODO: Replace the key with a private one
            if ($token->validate($data) && $token->verify($signer, 'testing')) {
                return $next($request);
            } else {
                throw new \Exception('Not Authenticated'); 
            }

        } catch (\Exception $e) {
            return response()->json(['error' => 'Not Authenticated'], 401);
        }
    }
}
