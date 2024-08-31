<?php

namespace tests\K6_FunWithLists_map;

class DataProvider
{
    public function data()
    {
        return [
            [[NULL, function () {return false;}], null ],
            [[new Node(1, new Node(2, new Node(3))), function ($x) {return $x * 2;}], new Node(2, new Node(4, new Node(6)))],
        ];
    }
}