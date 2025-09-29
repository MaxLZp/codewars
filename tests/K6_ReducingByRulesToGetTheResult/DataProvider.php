<?php

namespace tests\K6_ReducingByRulesToGetTheResult;

class DataProvider
{
    public function data()
    {
        $rules = [
            function ($a, $b) {
              return $a + $b;
            },
            function ($a, $b) {
              return $a - $b;
            }
        ];
        return [
              [[[2.0, 2.0, 3.0, 4.0], $rules], 5.0, ],
        ];
    }
}