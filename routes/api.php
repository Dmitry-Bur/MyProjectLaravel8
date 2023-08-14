<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['namespace' => 'Admin', 'prefix' => 'admin' , 'middleware' => 'auth:sanctum'], function () {
    Route::group(['namespace' => 'Category', 'prefix' => 'categories'], function () {
        Route::get('/', 'IndexController');
        Route::post('/', 'StoreController');
        Route::patch('/{category}', 'UpdateController');
        Route::delete('/{category}', 'DeleteController');
    });
    Route::group(['namespace' => 'SubCategory', 'prefix' => 'subcategories'], function () {
        Route::get('/{category}', 'IndexController');
        Route::post('/', 'StoreController');
        Route::patch('/{category}', 'UpdateController');
    });
    Route::group(['namespace' => 'Product', 'prefix' => 'products'], function () {
        Route::get('/', 'IndexController');
        Route::post('/', 'StoreController');
        Route::get('/{product}/edit', 'EditController');
        Route::patch('/{product}', 'UpdateController');
        //Route::get('/create', 'CreateController');
    });

});

Route::group(['namespace' => 'Main'], function () {
    Route::group(['namespace' => 'Main'], function () {
        Route::get('/categories', 'CategoryController');
        Route::get('/brands', 'BrandController');
        Route::get('/products', 'ProductController');
    });
    Route::group(['namespace' => 'Show','prefix' => 'show'], function (){
        Route::get('/{product}','IndexController');
    });
});

