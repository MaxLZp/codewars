<?php

namespace tests\K7_WhichColorIsTheBrightest;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_WhichColorIsTheBrightest\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $colors): string
    {
        $brightestIndex = 0;
        $brightestValue = 0;
        foreach ($colors as $i => $color) {
            preg_match_all('/[A-F0-9]{2}/', $color, $segments);
            $segments = array_map('hexdec', $segments[0]);
            foreach ($segments as $segment) {
                if ($segment > $brightestValue) {
                    $brightestValue = $segment;
                    $brightestIndex = $i;
                 }
            }
        }

        return $colors[$brightestIndex];
    }

}
