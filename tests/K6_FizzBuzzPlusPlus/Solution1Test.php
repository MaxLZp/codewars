<?php

namespace tests\K6_FizzBuzzPlusPlus;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_FizzBuzzPlusPlus\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($this->solve(...$input), $expected);
    }

    public function solve(array $numbers, array $words) : array
    {
        $result = [];
        for ($i = 1; $i <= array_product($numbers); $i++) {
            $r = $i;
            foreach ($numbers as $key => $value) {
                if ($i % $value == 0) {
                    $r = is_numeric($r) ? $words[$key] : $r.$words[$key];
                }
            }
            $result[] = $r;
        }
        return $result;
    }
}
