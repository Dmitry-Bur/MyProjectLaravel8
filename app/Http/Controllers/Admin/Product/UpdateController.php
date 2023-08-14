<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;

use App\Http\Requests\Admin\Product\UpdateRequest;
use App\Http\Resources\CategoryResourse;
use App\Models\Category;
use App\Models\Image;
use App\Models\Product;
use App\Models\SubCategory;
use Carbon\Carbon;
use Intervention\Image\Facades\Image as ImageIntervention;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UpdateController extends Controller
{
    public function __invoke(UpdateRequest $request, Product $product)
    {


        $data = $request->validated();

        $images = isset($data['images']) ? $data['images'] : null;
        $image_prev = isset($data['image_prev']) ? $data['image_prev'] : null;


        $images_delete_Id = isset($data['images_delete_Id']) ? $data['images_delete_Id'] : null;
        $image_prev_delete_Id = isset($data['image_prev_delete_Id']) ? $data['image_prev_delete_Id'] : null;




        unset($data['images'], $data['image_prev'], $data['images_delete_Id'], $data['image_prev_delete_Id']);

        $product->update($data);
        //Category::update($category);


        $currentImages = $product->images;

        if ($images_delete_Id) {
            foreach ($currentImages as $currentImage) {
                if (in_array($currentImage->id, $images_delete_Id)) {
                    Storage::disk('public')->delete($currentImage->path);
                    $currentImage->delete();
                }
            }
        }
        if ($image_prev_delete_Id) {
            foreach ($currentImages as $currentImage) {
                if (in_array($currentImage->id, $image_prev_delete_Id)) {
                    Storage::disk('public')->delete($currentImage->path);
                    $currentImage->delete();
                }
            }
        }


        if ($images) {
            foreach ($images as $key => $image) {

                $name = md5(Carbon::now() . '_' . $image->getClientOriginalName()) . '.' . $image->getClientOriginalExtension();
                $path = Storage::disk('public')->putFileAs('/images', $image, $name);

                Image::create([
                    'title' => 'main',
                    'path' => $path,
                    'url' => url('/storage/' . $path),
                    'product_id' => $product->id,
                ]);
            }
        }

        if ($image_prev) {
            foreach ($image_prev as $key => $image_pre) {
                $name_prev = md5('prev' . Carbon::now() . '_' . $image_pre->getClientOriginalName()) . '.' . $image_pre->getClientOriginalExtension();
                ImageIntervention::make($image_pre)->fit(540, 540)->save(storage_path('app/public/images/' . $name_prev));
                Image::create([
                    'title' => 'preview',
                    'path' => 'images/' . $name_prev,
                    'url' => url('/storage/images/' . $name_prev),
                    'product_id' => $product->id,
                ]);
            }
        }

     //   dd('okk');


        return response(['message' => 'Ok add category']);
    }
}
