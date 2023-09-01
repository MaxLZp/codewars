<?php

namespace tests\K8_RemoveFirstAndLastCharacter;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K8_RemoveFirstAndLastCharacter\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($input)
    {
        return substr($input, 1, -1);
    }
}
