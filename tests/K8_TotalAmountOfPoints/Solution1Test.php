<?php

namespace tests\K8_TotalAmountOfPoints;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K8_TotalAmountOfPoints\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve(array $games): int
    {
        return array_reduce($games, function($carry, $game) {
            list($p1, $p2) = explode(':', $game);
            $diff = (int)$p1 - (int)$p2;
            if ($diff > 0) { return $carry + 3; }
            if ($diff < 0) { return $carry; }
            return $carry + 1;
        }, 0);
    }
}
