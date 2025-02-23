<?php

namespace tests\K6_MadhavArray;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_MadhavArray\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $a): bool
    {
        if (count($a) < 2) {
            return false;
        }

        $c = 2;
        $offset = 1;
        $pSum = $a[0];

        do {
            $slice = array_slice($a, $offset, $c);
            if (count($slice) != $c || $pSum != array_sum($slice)) {
                return false;
            }
            $offset += $c;
            $c++;
        } while($offset < count($a));


        return true;
    }
}
