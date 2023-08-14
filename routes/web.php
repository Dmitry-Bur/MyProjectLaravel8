<?php

use Illuminate\Support\Facades\Route;

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

//Route::get('/', function () {
//    return view('welcome');
//});

Auth::routes();

Route::group(['namespace' => 'Admin', 'middleware' => 'auth:sanctum'], function (){
    Route::get('/admin{path}', 'IndexController')->where('path', '.*');
});

Route::group(['namespace' => 'Main'], function (){
    Route::get('/{path}', 'IndexController')->where('path', '.*')->name('home');
    //Route::get('/sad', 'QuickviewController')->name('quickview');
});


