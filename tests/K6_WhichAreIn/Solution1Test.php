<?php

namespace tests\K6_WhichAreIn;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_WhichAreIn\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve(array $array1, array $array2): array 
    {
        sort($array1);
        return array_values(array_filter($array1, function($item) use ($array2) {
            foreach($array2 as $item2) {
                if (preg_match('/'.$item.'/i', $item2)) {
                    return true;
                }
            }
            return false;
        }));
    }
}
