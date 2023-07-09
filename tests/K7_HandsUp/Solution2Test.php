<?php

namespace tests\K7_HandsUp;

use PHPUnit\Framework\TestCase;

class Solution2Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_HandsUp\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($s) {
        $result = [0, 0, 0];
        for ($i=0; $i < count($result); $i++) {
            $result[$i] = ($s / pow(3, $i)) % 3;
        }
        return $result;
    }
}
