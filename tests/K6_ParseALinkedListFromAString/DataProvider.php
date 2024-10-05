<?php

namespace tests\K6_ParseALinkedListFromAString;

class DataProvider
{
    public function data()
    {
        return [
            ["1 -> 2 -> 3 -> NULL", new Node(1, new Node(2, new Node(3)))],
            ["0 -> 1 -> 4 -> 9 -> 16 -> NULL",new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))],
            ["NULL", null],
        ];
    }
}