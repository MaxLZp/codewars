<?php

namespace tests\K6_NewCashierDoesNotKnowAboutSpaceOrShift;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_NewCashierDoesNotKnowAboutSpaceOrShift\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($input): string
    {
        $menu = [
            1 => 'Burger',
            2 => 'Fries',
            3 => 'Chicken',
            4 => 'Pizza',
            5 => 'Sandwich',
            6 => 'Onionrings',
            7 => 'Milkshake',
            8 => 'Coke',
        ];
        $matches = [];
        preg_match_all('/'.implode('|', $menu).'/i', $input, $matches);

        $matches = array_map(function($match) {
            return ucfirst($match);
        }, $matches[0] ?: []);

        usort($matches, function($l, $r) use ($menu) {
            return array_search($l, $menu) > array_search($r, $menu) ? 1 : -1;
        });

        return implode(' ', $matches);
    }
}
