<?php

namespace App\Http\Controllers\Admin\Category;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResourse;
use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Http\Request;

class IndexController extends Controller
{
   public function __invoke()
   {
       $categories = Category::all();


       //  foreach ($categories as $category){
    //       $categories['subcategories'] = $category->subCategories;
    //   }
    // dd($categories);

//dd($categories);
       return CategoryResourse::collection($categories);
   }
}
