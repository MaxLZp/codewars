<?php

namespace tests\K7_NaughtyOrNice;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_NaughtyOrNice\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $actions): string {
        return array_reduce($actions, function($carry, $action) {
            if (in_array($action[0], ['b', 'f', 'k', ])) { return ++$carry;}
            if (in_array($action[0], ['g', 's', 'n', ])) { return --$carry;}
            return $carry;
        }, 0) >= 0 ? 'naughty' : 'nice';
    }
}
