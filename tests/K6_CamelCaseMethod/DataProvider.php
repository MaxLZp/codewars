<?php

namespace tests\K6_CamelCaseMethod;

class DataProvider
{
    public function data()
    {
        return [
            ["test case", "TestCase"],
            ["camel case method", "CamelCaseMethod"],
            ["say hello ", "SayHello"],
            [" camel case word", "CamelCaseWord"],
            ["", ""],
        ];
    }
}