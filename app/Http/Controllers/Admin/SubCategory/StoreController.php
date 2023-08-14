<?php

namespace App\Http\Controllers\Admin\SubCategory;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\SubCategory\StoreRequest;
use App\Http\Resources\CategoryResourse;
use App\Http\Resources\SubCategoryResourse;
use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Http\Request;

class StoreController extends Controller
{
   public function __invoke(StoreRequest $request)
   {
       $data = $request->validated();

       SubCategory::create($data);


       return response(['message' => 'ok']);
   }
}
