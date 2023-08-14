<?php

namespace App\Http\Controllers\Main\Main;

use App\Http\Controllers\Controller;
use App\Http\Resources\Main\CategoryResourse;
use App\Models\BrandProduct;
use App\Models\Category;

class CategoryController extends Controller
{
    public function __invoke()
    {

        $categories = Category::all();

        return CategoryResourse::collection($categories);
    }
}
