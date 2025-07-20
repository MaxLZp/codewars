<?php

namespace tests\K6_MartixAddition;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_MartixAddition\DataProvider::data
     */
    public function execute($input, $expected) 
    {
        $this->assertSame($expected, $this->solve(...$input));
    }

    public function solve(array $a, array $b): array 
    {
        $result = [];
        for ($i = 0; $i < count($a); $i++) { 
            $result[$i] = [];
            for ($j = 0; $j < count($a[$i]); $j++) { 
                $result[$i][$j] = $a[$i][$j] + $b[$i][$j];
            }
        }

        return $result;
    }
}
