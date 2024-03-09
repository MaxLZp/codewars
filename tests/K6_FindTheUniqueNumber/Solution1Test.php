<?php

namespace tests\K6_FindTheUniqueNumber;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_FindTheUniqueNumber\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($this->solve($input), $expected);
    }

    public function solve($a) {
        if (
           $a[0] === $a[1]
           ||
           $a[0] === $a[2]
        ) {
            $n = $a[0];
        } else {
            return $a[0];
        }
        foreach ($a as $value) {
            if ($n !== $value ) { return $value; }
        }
    }
}
