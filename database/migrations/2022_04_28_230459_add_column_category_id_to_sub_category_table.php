<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnCategoryIdToSubCategoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sub_categories', function (Blueprint $table) {
            $table->unsignedBigInteger('category_id');
            $table->index('category_id','sub_category_category_idx');

            $table->foreign('category_id','sub_category_category_fk')->on('categories')->references('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sub_categories', function (Blueprint $table) {
            $table->dropColumn('category_id');
            $table->dropIndex(['sub_category_category_idx']);
            $table->dropForeign(['sub_category_category_fk']);
        });
    }
}
