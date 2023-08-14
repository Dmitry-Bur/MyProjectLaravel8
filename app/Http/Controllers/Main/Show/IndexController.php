<?php

namespace App\Http\Controllers\Main\Show;

use App\Http\Controllers\Controller;
use App\Http\Resources\Main\ShowResourse;
use App\Models\Product;

class IndexController extends Controller
{
    public function __invoke(Product $product)
    {
        return new ShowResourse($product);
    }
}
