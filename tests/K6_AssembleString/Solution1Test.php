<?php

namespace tests\K6_AssembleString;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_AssembleString\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $array): string{
        $result = array_shift($array);
        if (!$result) {
            return '';
        }

        $count = substr_count($result, '*');
        for($i = 0, $pos = 0; $i < $count; $i++, $pos++) {
            $pos = strpos($result, '*', $pos);
            foreach ($array as $item) {
                if ($item[$pos] != '*') {
                    $result = substr_replace($result, $item[$pos], $pos, 1);
                    break;
                }
            }
        }
        $result = preg_replace('/\*/', '#', $result);

        return $result;
    }
}
