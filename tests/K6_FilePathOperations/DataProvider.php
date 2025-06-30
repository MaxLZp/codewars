<?php

namespace tests\K6_FilePathOperations;

class DataProvider
{
    public function data()
    {
        return [
            [
                '/Users/person1/Pictures/house.png',
                [
                    "png",
                    "house",
                    "/Users/person1/Pictures/",
                ],
            ]
        ];
    }
}