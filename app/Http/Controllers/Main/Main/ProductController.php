<?php

namespace App\Http\Controllers\Main\Main;

use App\Http\Controllers\Controller;
use App\Http\Resources\Main\BrandResourse;
use App\Http\Resources\Main\CategoryResourse;
use App\Http\Resources\Main\ProductResourse;
use App\Models\BrandProduct;
use App\Models\Category;
use App\Models\Product;

class ProductController extends Controller
{
    public function __invoke()
    {

       $products = Product::paginate(6) ;

       return ProductResourse::collection($products);
    }
}
