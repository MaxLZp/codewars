<?php

namespace tests\K8_BeginnerSeries1_SchoolPaperwork;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K8_BeginnerSeries1_SchoolPaperwork\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve(int $n, int $m): int
    {
      if ($n < 0 || $m < 0) { return 0; }
      return $n * $m;
    }
}
