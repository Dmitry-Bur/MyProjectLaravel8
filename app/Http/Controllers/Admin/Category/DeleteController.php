<?php

namespace App\Http\Controllers\Admin\Category;

use App\Http\Controllers\Controller;

use App\Http\Requests\Admin\Category\UpdateRequest;
use App\Http\Resources\CategoryResourse;
use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Http\Request;

class DeleteController extends Controller
{
   public function __invoke(Category $category)
   {
       $subCat = $category->subCategories; // собираем подкатигории у текущей категории

       if($subCat){
           foreach ($subCat as $subC)
           {
               $subC->delete();                 // удаляем подкатегории этой категории
               $products = $subC->products;
               foreach ($products as $product){
                   $product->delete();         // удаляем продукты которые
                                               // принадлежали нашим подкатегориям
               }


           }
       }

       $category->delete();      //и последнее... удаляем наконец категорию



       return response(['message' => 'Ok']);
   }
}
