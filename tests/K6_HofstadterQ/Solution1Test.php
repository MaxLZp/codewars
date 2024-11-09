<?php

namespace tests\K6_HofstadterQ;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_HofstadterQ\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($this->solve($input), $expected);
    }

    public function solve(int $n, array &$values = []): int
    {
        if ($n <= 2) { return 1; }

        if (! isset($values[$n-1])) {
            $values[$n-1] = $this->solve($n - 1, $values);
        }

        if (! isset($values[$n-2])) {
            $values[$n-2] = $this->solve($n - 2, $values);
        }

        if (! isset($values[$n - $values[$n-1]])) {
            $values[$n - $values[$n-1]] = $this->solve($n - $values[$n-1], $values);
        }

        if (! isset($values[$n - $values[$n-2]])) {
            $values[$n - $values[$n-2]] = $this->solve($n - $values[$n-2], $values);
        }

        return $values[$n - $values[$n-1]] + $values[$n - $values[$n-2]] ;
    }
}
