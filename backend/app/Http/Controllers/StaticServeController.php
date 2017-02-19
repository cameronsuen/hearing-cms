<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;

class StaticServeController extends Controller {

    public function getSample($sampleName) {
        return Storage::get('samples/'.$sampleName);
    }

    public function getImg($imgName) {
        return Storage::get('img/'.$imgName);
    }
}

?>
