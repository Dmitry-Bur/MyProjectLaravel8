<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Product\StoreRequest;
use App\Http\Resources\CategoryResourse;
use App\Http\Resources\SubCategoryResourse;
use App\Models\Category;
use App\Models\Image;
use Intervention\Image\Facades\Image as ImageIntervention;
use App\Models\Product;
use App\Models\SubCategory;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class StoreController extends Controller
{
   public function __invoke(StoreRequest $request)
   {
      $data = $request->validated();


      $images = $data['images'];
      $image_prev = $data['image_prev'];

      unset($data['images'], $data['image_prev']);
      $product= Product::create($data);


      $id = $product->id;

      foreach ($images as $key => $image){

          $name = md5(Carbon::now(). '_' . $image->getClientOriginalName()) . '.'. $image->getClientOriginalExtension();
          $path = Storage::disk('public')->putFileAs('/images', $image, $name);

          Image::create([
              'title' => 'main',
              'path' => $path,
              'url' => url('/storage/'.$path),
              'product_id' => $id,
          ]);

          if($key === 0){

              $name_prev = md5('prev' . Carbon::now(). '_' . $image_prev->getClientOriginalName()) . '.'. $image_prev->getClientOriginalExtension();
              ImageIntervention::make($image_prev)->fit(540, 540)->save(storage_path('app/public/images/'. $name_prev));
              Image::create([
                  'title' => 'preview',
                  'path' => 'images/'.$name_prev,
                  'url' => url('/storage/images/'.$name_prev),
                  'product_id' => $id,
              ]);
          }

      }




       return response(['message' => 'ok']);
   }
}
