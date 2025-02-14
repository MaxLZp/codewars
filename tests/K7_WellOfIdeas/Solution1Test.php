<?php

namespace tests\K7_WellOfIdeas;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_WellOfIdeas\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $arr)
    {
        $count = array_reduce($arr, function($carry, $subArr) {
            return $carry + array_reduce($subArr, function($carry, $item) {
                return $carry + (preg_match('/good/i', $item) ? 1 : 0);
            }, 0);
        }, 0);

        return $count == 0 ? 'Fail!' : ($count <= 2 ? 'Publish!' : 'I smell a series!');
    }

}
