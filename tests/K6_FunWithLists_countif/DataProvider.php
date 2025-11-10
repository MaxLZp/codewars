<?php

namespace tests\K6_FunWithLists_countif;

class DataProvider
{
    public function data()
    {
        return [
            [[NULL, function ($x) {return false;}], 0,],
            [[new Node(1, new Node(2, new Node(3))), function ($x) {return true;}], 3,],
            [[new Node(1, new Node(2, new Node(3))), function ($x) {return $x <= 2;}], 2,],
        ];
    }
}