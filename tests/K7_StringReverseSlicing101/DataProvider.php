<?php

namespace tests\K7_StringReverseSlicing101;

class DataProvider
{
    public function data()
    {
        return [
            [ "123", ["321", "21", "1"], ],
            [ "abcde", ["edcba", "dcba", "cba", "ba", "a"], ],
        ];
    }
}
