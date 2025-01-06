<?php

namespace tests\K7_SimpleFun173_AHeroGoToTheSchool;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_SimpleFun173_AHeroGoToTheSchool\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve(array $buses_colors, array $going_to_school): int {
        $resultIndex = null;
        foreach ($going_to_school as $key => $value) {
            if ($value) {
                if ($buses_colors[$key] == 'red') {
                    $resultIndex = $key;
                    break;
                } else if ($resultIndex == null) {
                    $resultIndex = $key;
                }
            }
        }

        return $resultIndex;
    }
}
