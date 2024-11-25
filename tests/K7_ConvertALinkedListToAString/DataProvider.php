<?php

namespace tests\K7_ConvertALinkedListToAString;

class DataProvider
{
    public function data()
    {
        return [
            [new Node(1, new Node(2, new Node(3))), "1 -> 2 -> 3 -> NULL"],
            [new Node(0, new Node(1, new Node(4, new Node(9, new Node(16))))), "0 -> 1 -> 4 -> 9 -> 16 -> NULL"],
            [NULL, "NULL"],
        ];
    }
}
