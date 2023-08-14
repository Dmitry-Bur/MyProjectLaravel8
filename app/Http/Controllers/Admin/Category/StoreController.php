<?php

namespace App\Http\Controllers\Admin\Category;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Category\StoreRequest;
use App\Http\Resources\CategoryResourse;
use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Http\Request;

class StoreController extends Controller
{
   public function __invoke(StoreRequest $request)
   {
       $category = $request->validated();
       //dd($category);

       Category::create($category);

       return response(['message' => 'Ok add category']);
   }
}
