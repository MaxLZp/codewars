<?php

namespace tests\K6_UpAndDown;

class DataProvider
{
    public function data()
    {
        return [
            ["who hit retaining The That a we taken", "who RETAINING hit THAT a THE we TAKEN"], // 3
            ["on I came up were so grandmothers", "i CAME on WERE up GRANDMOTHERS so"], // 4
            ["way the my wall them him", "way THE my WALL him THEM"], // 1
            ["turn know great-aunts aunt look A to back", "turn GREAT-AUNTS know AUNT a LOOK to BACK"], // 2
        ];
    }
}