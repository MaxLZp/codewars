<?php

namespace tests\K6_GetThePasswordFromGrid;

use PHPUnit\Framework\TestCase;

/**
 * PHP 7.0 solution for 'Get Password from grid' kata.
 *
 * Tests at codewars.com run on php 7.0
 * str_starts_with / str_ends_with are available since php8
 *
 * @see \tests\K6_GetThePasswordFromGrid\Solution1Test::solve()
 */
class Solution70Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_GetThePasswordFromGrid\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($this->solve($input[0], $input[1]), $expected);
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
                case $move[0] == 'l': $curCol--; break;
                case $move[0] == 'r': $curCol++; break;
                case $move[0] == 'u': $curRow--; break;
                case $move[0] == 'd': $curRow++; break;
            }
            if (preg_match('/T$/', $move)) {
                $password .= $grid[$curRow][$curCol];
            }
        }

        return $password;
    }
}
