<?php

namespace tests\K6_FunWithLists_reduce;

class DataProvider
{
    public function data()
    {
        return [
            [
                [NULL, function ($a, $b) {return $a + $b;}, 0], 0
            ],
            [
                [new Node(1, new Node(2, new Node(3))), function ($a, $b) {return $a + $b;}, 0], 6
            ],
            [
                [new Node(1, new Node(2, new Node(3, new Node(4)))), function ($a, $b) {return $a * $b;}, 1], 24
            ],
            [
                [new Node("a", new Node("b", new Node("c"))), function ($a, $b) {return $a . $b;}, ""], "abc"
            ],
        ];
    }
}