<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('sub_category_id');

            $table->softDeletes();

            $table->index('category_id','product_category_idx');
            $table->index('sub_category_id','product_sub_category_idx');

            $table->foreign('category_id','product_category_fk')->on('categories')->references('id');
            $table->foreign('sub_category_id','product_sub_category_fk')->on('sub_categories')->references('id');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
