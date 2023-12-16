<?php

namespace tests\K6_OrganiseDuplicateNumbersInList;

class DataProvider
{
    public function data()
    {
        return [
            'Simple 1' => [
                [3, 2, 6, 2, 1, 3],
                [[3, 3], [2, 2], [6], [1]],
            ],
            'Simple 2' => [
                [3, 2, 6, 2],
                [[3], [2, 2], [6]],
            ],
        ];
    }
}
