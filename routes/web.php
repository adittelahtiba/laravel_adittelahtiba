<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\HospitalController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [LoginController::class, 'index'])->middleware('guest');
Route::get('/must-sign-in', function () {
    return redirect('/')->with([
        'warning' => 'Anda harus login terlebih dulu!',
    ]);
})->name('must-sign-in');
Route::post('/login', [LoginController::class, 'authenticate']);
Route::get('/logout', [LoginController::class, 'logout']);

// login
Route::get('/Hospital', [HospitalController::class, 'index'])->middleware('auth');;
Route::get('/load-rs', [HospitalController::class, 'load'])->middleware('auth');;
Route::get('/get-rs-{id}', [HospitalController::class, 'getById'])->middleware('auth');;
Route::post('/save-rs', [HospitalController::class, 'store'])->middleware('auth');;
Route::post('/update-rs', [HospitalController::class, 'update'])->middleware('auth');;
Route::get('/delete-rs-{id}', [HospitalController::class, 'delete'])->middleware('auth');;