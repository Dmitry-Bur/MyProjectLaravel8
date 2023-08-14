<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;

class QuickviewController extends Controller
{
    public function __invoke()
    {
       return view('main.includes.quickview');
    }
}
