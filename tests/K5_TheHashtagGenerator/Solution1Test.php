<?php

namespace tests\K5_TheHashtagGenerator;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K5_TheHashtagGenerator\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($str)
    {
        $s = '#'.str_replace(' ', '', ucwords($str));
        return strlen($s) == 1 || strlen($s) > 140 ? false : $s;
    }

}







