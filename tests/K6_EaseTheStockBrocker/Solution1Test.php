<?php

namespace tests\K6_EaseTheStockBrocker;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_EaseTheStockBrocker\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($list): string
    {
        if (!$list) {
            return 'Buy: 0 Sell: 0';
        }

        $badlyFormed = [];
        $buy = 0;
        $sell = 0;
        $orders = preg_split('/,/', $list);
        foreach ($orders as $order) {
            $details = array_values(array_filter(preg_split('/\s/', $order)));

            if (
                count($details) != 4
                || !is_string($details[0])
                || !is_numeric($details[1])
                || !is_int(1*$details[1])
                || !is_numeric($details[2])
                || !is_float(1*$details[2])
                || !is_string($details[3])
                || !in_array(strtolower($details[3]), ['b','s'])
            ) {
                $badlyFormed[] = trim($order);
                continue;
            }
            if (strtolower($details[3]) == 'b') {
                $buy += $details[1] * $details[2];
            } elseif (strtolower($details[3]) == 's') {
                $sell += $details[1] * $details[2];
            }
        }
        $badlyFormedCount = count($badlyFormed);
        return sprintf('Buy: %.0f Sell: %.0f%s',
            $buy,
            $sell,
            $badlyFormedCount
                ? sprintf('; Badly formed %d: %s ;', $badlyFormedCount, implode(' ;', $badlyFormed))
                : ''
        );
    }

}
