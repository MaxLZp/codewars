<?php

namespace tests\K7_WordValues;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_WordValues\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $a): array
    {
        return array_map(function($key, $value) {
            return ($key+1) * array_reduce(
                str_split(str_replace(' ', '', $value)),
                function($carry, $char){
                    return $carry + ord($char) - ord('a') + 1;
                }, 0);
        }, array_keys($a), array_values($a));
    }

}
