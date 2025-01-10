<?php

namespace tests\K7_FindTheMiddleOfTheProduct;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_FindTheMiddleOfTheProduct\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($str): int
    {
        if (!is_string($str) || ! preg_match('/\d/', $str)) {
            return -1;
        }

        $product = array_product(
            str_split(preg_replace('/\D/', '', $str))
        );
        $productLength = strlen($product);
        if ($productLength % 2 == 0) {
            $product = substr($product, $productLength / 2 - 1, 2);
        } else {
            $product = substr($product, floor($productLength / 2), 1);
        }

        return intval($product);
    }
}
