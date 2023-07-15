<?php

namespace tests\K6_WhoLikesIt;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_WhoLikesIt\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($names): string
    {
        switch ($count = count($names)) {
            case 0:
                $namesString = 'no one likes this';
                break;
            case 1:
                $namesString = array_shift($names).' likes this';
                break;
            case 2:
                $namesString = implode(' and ', $names).' like this';
                break;
            case 3:
                $namesString = array_shift($names);
                $namesString .= ', '.implode(' and ', $names).' like this';
                break;
            default:
                $namesString = implode(', ', array_slice($names, 0, 2)). ' and '.($count-2).' others like this';
                break;
        }
        return $namesString;
    }
}
