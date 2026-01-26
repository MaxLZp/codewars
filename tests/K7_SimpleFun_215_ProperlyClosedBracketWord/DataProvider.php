<?php

namespace tests\K7_SimpleFun_215_ProperlyClosedBracketWord;

class DataProvider
{
    public function data()
    {
        return [
            ["abiryz", True],
            ["aibryz", False],
            ["abitryz", False],
            ["zhuazfsa", True],
            ["baby", False],
            ["grit", True],
            ["foul", False],
        
        ];
    }
}
