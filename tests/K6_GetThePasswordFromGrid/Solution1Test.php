<?php

namespace tests\K6_GetThePasswordFromGrid;

use PHPUnit\Framework\TestCase;

/**
 * PHP 8.x solution for 'Get Password from grid' kata.
 *
 * Tests at codewars.com run on php 7.0
 * str_starts_with / str_ends_with are available since php8
 *
 * @see tests\K6_GetThePasswordFromGrid\Solution70Test::solve()
 */
class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_GetThePasswordFromGrid\DataProvider::data
     */
    public function execute($input, $expected) {
        if (PHP_VERSION > '8.0') {
            $this->assertSame($this->solve($input[0], $input[1]), $expected);
        }
        $this->markTestSkipped('Runs on php > 8.0');
    }

    public function solve($grid, $dir)
    {
        $curCol = 0;
        $curRow = 0;
        foreach ($grid as $row => $val) {
            if (($col = array_search('x', $val)) !== false) {
                $curCol = $col;
                $curRow = $row;
                break;
            }
        }

        $password = '';
        foreach ($dir as $move) {
            switch (true) {
                case str_starts_with($move, 'l'): $curCol--; break;
                case str_starts_with($move, 'r'): $curCol++; break;
                case str_starts_with($move, 'u'): $curRow--; break;
                case str_starts_with($move, 'd'): $curRow++; break;
            }
            if (str_ends_with($move, 'T')) {
                $password .= $grid[$curRow][$curCol];
            }
        }

        return $password;
    }
}
