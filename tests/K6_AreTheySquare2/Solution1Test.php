<?php

namespace tests\K6_AreTheySquare2;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_AreTheySquare2\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($a, $isRoot = true): bool
    {
        if (is_array($a)) {
            if ($isRoot && !$a) { return null; }
            foreach($a as $item) {
                if (
                    (is_array($item) && !$this->solve($item, false))
                    ||
                    (!is_array($item) && $item != round(sqrt($item))**2)
                ) {
                    return false;
                }
            }
        } elseif ($a != round(sqrt($a))**2) {
            return false;
        }
        return true;
    }
}
