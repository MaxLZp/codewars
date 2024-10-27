<?php

namespace tests\K6_TimsFruitShopChallenge;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_TimsFruitShopChallenge\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($orders): array
    {
        return array_map(function ($order) {
            $_order = ['', '', ''];

            preg_match_all('/(\d+)([a-z])/', $order, $matches);
            foreach ($matches[1] as $key => $match) {
                $bags = $match % 10;
                $boxes = intval($match / 10);
                $pallets = intval($boxes / 5);
                $boxes =  $boxes % 5;

                $_order[0] .= $bags ? '('.str_repeat($matches[2][$key], $bags). ')' : '';
                $_order[1] .= $boxes ? str_repeat('{'.$matches[2][$key].'}', $boxes): '';
                $_order[2] .= $pallets ? str_repeat('['.$matches[2][$key].']', $pallets) : '';
            }
            $maxLen = max(strlen($_order[0]), strlen($_order[1]), strlen($_order[2]));

            return array_map(function($order) use ($maxLen) {
                // return sprintf('%\'-'.$maxLen.'s', $order);
                return str_pad($order, $maxLen, '-', STR_PAD_LEFT);
            }, $_order);
        }, $orders);
    }
}
