<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        \App\Models\User::create([
            'username' => 'admin',
            'name' => 'Aditya Pangestu',
            'email' => 'pangestuaditya.solihin@gmail.com',
            'password' => bcrypt('admin'),
        ]);
    }
}