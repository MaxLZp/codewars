<?php

namespace tests\K6_ReverseOrRotate;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_ReverseOrRotate\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input[0], $input[1]));
    }

    private function solve($s, $sz): string
    {
        if (!$s || $sz <= 0 || $sz > strlen($s)) {
            return '';
        }

        $chunks = str_split($s, $sz);
        $chunks = array_map(function($chunk) use ($sz) {
            if (strlen($chunk) != $sz) {
                return '';
            }

            $chunkArr = str_split($chunk);
            if (array_sum($chunkArr) % 2 == 0) {
                $chunkArr = array_reverse($chunkArr);
            } else {
                $chunkArr[] = $chunkArr[0];
                array_shift($chunkArr);
            }

            return implode('', $chunkArr);

        }, $chunks);

        return implode('', $chunks);
    }
}
