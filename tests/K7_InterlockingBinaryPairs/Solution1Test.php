<?php

namespace tests\K7_InterlockingBinaryPairs;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_InterlockingBinaryPairs\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve(...$input));
    }

    public function solve($a, $b): bool
    {
        return 0 == ($a & $b);
    }
}
