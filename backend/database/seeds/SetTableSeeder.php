<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class SetTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 28; ++$i) {
            DB::table('set')->insert([
                'd_count' => 0
            ]);
        }
    }
}
