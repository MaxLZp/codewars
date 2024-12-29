<?php

namespace tests\K7_GeometricProgressionSequence;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_GeometricProgressionSequence\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve(...$input));
    }

    public function solve(int $a, int $r, int $n): string
    {
        $result = [$a];
        for ($i = 1; $i < $n; $i++) {
            $result[] = $result[$i - 1] * $r;
        }

        return implode(', ', $result);
    }
}
