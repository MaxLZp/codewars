<?php

namespace tests\K6_PrizeDraw;

class DataProvider
{

    public function data()
    {
        return [
            [["Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4], "Benjamin"],
            [["Elijah,Chloe,Elizabeth,Matthew,Natalie,Jayden", [1, 3, 5, 5, 3, 6], 2], "Matthew"],
            [["Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 8], "Not enough participants"],
            [["Lagon,Lily", [1, 5], 2], "Lagon"],
            [["", [], 0], "No participants"],
        ];
    }
}