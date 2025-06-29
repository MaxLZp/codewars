<?php

namespace tests\K6_SimpleFun132_NumberOfCarries;

use PHPUnit\Framework\TestCase;

class Solution2Test extends TestCase
{

    /**
     * @test
     * @dataProvider tests\K6_SimpleFun132_NumberOfCarries\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve(int $a, int $b): int
    {
        $as = "".strrev($a);
        $bs = "".strrev($b);
        $carries = 0;
        $carry = 0;

        for ($i = 0, $max = max(strlen($as), strlen($bs)); $i < $max; $i++) { 
            $ai = isset($as[$i]) ? $as[$i] : 0;
            $bi = isset($bs[$i]) ? $bs[$i] : 0;
            if ($carry + $ai + $bi >= 10) {
                $carries++;
                $carry = 1;
            } else {
                $carry = 0;
            }
        }

        return $carries;
    }

}
