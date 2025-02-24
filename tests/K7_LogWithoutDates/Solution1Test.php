<?php

namespace tests\K7_LogWithoutDates;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_LogWithoutDates\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $log): int
    {
        $days = count($log) ? 1 : 0;
        for ($i = count($log) - 1; $i > 0; $i--) {
            if ($log[$i - 1] >= $log[$i]) {
                $days++;
            }
        }

        return $days;
    }
}
