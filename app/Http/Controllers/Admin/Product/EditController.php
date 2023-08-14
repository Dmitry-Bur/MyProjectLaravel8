<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;

use App\Http\Requests\Admin\SubCategory\UpdateRequest;
use App\Http\Resources\CategoryResourse;
use App\Http\Resources\ImageResourse;
use App\Http\Resources\ProductEditResourse;
use App\Models\Category;

use App\Models\Product;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class EditController extends Controller
{
    public function __invoke(Product $product)
    {

        $subCat = SubCategory:: where('id', $product->sub_category_id)->first();


        $cat = $subCat->category_id;
        $subCat = SubCategory:: where('category_id', $cat)->get();

        $product['category_id'] = $cat;
        $product['sub_categories'] = $subCat;

        $imgs = $product->images;
        $product['images'] =$imgs;


        foreach ($product['images'] as $pr){
            $pr['size'] = Storage::disk('public')->size($pr['path']);
            $pr['name'] =  str_replace('images/','',$pr['path']);
        }

        return response($product);

    }
}
