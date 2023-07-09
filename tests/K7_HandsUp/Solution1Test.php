<?php

namespace tests\K7_HandsUp;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
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
        for ($i=1; $i <= $s; $i++) {
            $result[0]++;
            if ($result[0] > 2) {
                $result[0] = 0;
                $result[1]++;
            }
            if ($result[1] > 2) {
                $result[1] = 0;
                $result[2]++;
            }
            if ($result[2] > 2) {
                $result[2] = 0;
            }
        }
        return $result;
    }
}
