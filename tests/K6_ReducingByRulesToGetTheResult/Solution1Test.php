<?php

namespace tests\K6_ReducingByRulesToGetTheResult;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_ReducingByRulesToGetTheResult\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve(...$input));
    }

    public function solve($numbers, $rules) 
    {
        $first = array_shift($numbers);

        return array_reduce($numbers, function($carry, $number) use ($rules) {
            $rule = $rules[$carry[1] % count($rules)];
            $carry[0] = $rule($carry[0], $number);
            $carry[1]++;
            return $carry;
        }, [$first, 0])[0];
    }

}
