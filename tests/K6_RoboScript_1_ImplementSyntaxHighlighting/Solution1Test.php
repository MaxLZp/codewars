<?php

namespace tests\K6_RoboScript_1_ImplementSyntaxHighlighting;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_RoboScript_1_ImplementSyntaxHighlighting\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve(string $code): string
    {
        $result = $code;
        $result = preg_replace([
            '/(F+)/',
            '/(L+)/',
            '/(R+)/',
            '/(\d+)/',
        ],[
            '<span style="color: pink">$1</span>',
            '<span style="color: red">$1</span>',
            '<span style="color: green">$1</span>',
            '<span style="color: orange">$1</span>',
        ], $result);

        return $result;
    }

}
