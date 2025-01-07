<?php

namespace tests\K7_RoundToNearest;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_RoundToNearest\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve(int $number, array $list): array
    {
        $minDiff = PHP_INT_MAX;
        $result = [];
        foreach ($list as $item) {
            $diff = abs($number - $item);
            if ($diff < $minDiff) {
                $minDiff = $diff;
                $result = [ $item ];
            } else if ($diff == $minDiff) {
                $result[] = $item;
            }
        }

        return $result;
    }
}
