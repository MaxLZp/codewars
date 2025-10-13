<?php

namespace tests\K6_CharacterWithLongestConsecutiveRepetition;

class DataProvider
{
    public function data()
    {
        return [
            ["aaaabb", ["a",4], ],
            ["bbbaaabaaaa", ["a",4], ],
            ["cbdeuuu900", ["u",3], ],
            ["abbbbb", ["b",5], ],
            ["aabb", ["a",2], ],
            ["", ["",0], ],
            ["abcdefg",["a",1], ],
            ["ba",["b",1], ],
        ];
    }

}