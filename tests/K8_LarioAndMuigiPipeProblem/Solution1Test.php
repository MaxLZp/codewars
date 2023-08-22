<?php

namespace tests\K8_LarioAndMuigiPipeProblem;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K8_LarioAndMuigiPipeProblem\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve($numbers): array
    {
        $start = array_shift($numbers);
        $end = array_pop($numbers) ?: $start;
        return range($start, $end);
    }
}
