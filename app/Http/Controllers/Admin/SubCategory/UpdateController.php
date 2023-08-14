<?php

namespace App\Http\Controllers\Admin\SubCategory;

use App\Http\Controllers\Controller;

use App\Http\Requests\Admin\SubCategory\UpdateRequest;
use App\Http\Resources\CategoryResourse;
use App\Models\Category;
use App\Models\Product;
use App\Models\SubCategory;
use Illuminate\Http\Request;

class UpdateController extends Controller
{
    public function __invoke(UpdateRequest $request, Category $category)
    {

        $uu = $category->subCategories;

        // dd( $uu);
        $data = $request->validated();

        $dataDel = $data["delete_subcategories"];
        unset($data["delete_subcategories"]);

        foreach ($uu as $key => $u) {
            $u->update($data["subcat"][$key]);
        }

        SubCategory::destroy($dataDel);

        foreach ($dataDel as $dataD){
            $delPr = Product:: where('sub_category_id', $dataD)->delete();
         //   dump($delPr);
        }







        return response(['message' => 'Ok add category']);
    }
}
