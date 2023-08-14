<?php

namespace App\Http\Controllers\Admin\Category;

use App\Http\Controllers\Controller;

use App\Http\Requests\Admin\Category\UpdateRequest;
use App\Http\Resources\CategoryResourse;
use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Http\Request;

class UpdateController extends Controller
{
   public function __invoke(UpdateRequest $request, Category $category)
   {

       $data = $request->validated();



       $category->update($data);
       //Category::update($category);

       return response(['message' => 'Ok add category']);
   }
}
