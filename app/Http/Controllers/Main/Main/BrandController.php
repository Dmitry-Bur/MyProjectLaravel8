<?php

namespace App\Http\Controllers\Main\Main;

use App\Http\Controllers\Controller;
use App\Http\Resources\Main\BrandResourse;
use App\Http\Resources\Main\CategoryResourse;
use App\Models\BrandProduct;
use App\Models\Category;

class BrandController extends Controller
{
    public function __invoke()
    {

        $brands = BrandProduct::all();

        return BrandResourse::collection($brands);
    }
}
