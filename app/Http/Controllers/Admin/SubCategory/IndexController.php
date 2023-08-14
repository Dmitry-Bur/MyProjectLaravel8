<?php

namespace App\Http\Controllers\Admin\SubCategory;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResourse;
use App\Http\Resources\SubCategoryResourse;
use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Http\Request;

class IndexController extends Controller
{
   public function __invoke(Category $category)
   {


       $data = SubCategory::where('category_id',$category->id)->get();

       return SubCategoryResourse::collection($data);
   }
}
