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
    public function exportAll(Zipper $zipper)
    {

        // Current directory is public folder
        // Get all the file paths from ../storage/app/samples
        $files = glob('../storage/app/samples/*');

        // Build the filename by timestamp
        $filename = time().'.zip';

        // Zip the files and get Status
        $status = $zipper->make('../storage/app/exports/'.$filename)->add($files)->getStatus();

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
