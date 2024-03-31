<?php

namespace tests\K6_MexicanWave;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_MexicanWave\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($people): array
    {
        $result = [];
        if (empty($people)) { return $result; }

        for ($i=0; $i < strlen($people); $i++) {
            if (' ' == $people[$i]) { continue; }
            $result[] = substr_replace($people, strtoupper($people[$i]), $i, 1);
        }

        return $result;
    }
}
