<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResourse;
use App\Models\Category;
use App\Models\Product;
use App\Models\SubCategory;
use Illuminate\Http\Request;

class IndexController extends Controller
{
   public function __invoke()
   {
       //dd(77777);
       $products = Product::all();


       //  foreach ($categories as $category){
    //       $categories['subcategories'] = $category->subCategories;
    //   }
    // dd($categories);

//dd($categories);
       return CategoryResourse::collection($products);
   }
}
