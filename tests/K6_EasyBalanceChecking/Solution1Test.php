<?php

namespace tests\K6_EasyBalanceChecking;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_EasyBalanceChecking\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($book): string
    {
        $lines = array_filter(
            preg_split('/[\n|\r\n]/', preg_replace('/[!=?:,;\{\}]/', '', $book))
        );
        $originalBalance = $balance = (float)array_shift($lines);
        $expense = 0;
        $lines = array_values(array_map(function($line) use (&$balance, &$expense) {
            $lineParts = explode(' ', $line);
            $itemexpense = (float)$lineParts[2];
            $balance -= $itemexpense;
            $expense += $itemexpense;
            return sprintf('%s %s %.2f Balance %.2f', $lineParts[0], $lineParts[1], $itemexpense,  $balance);
        }, $lines));
        $lines[] = sprintf('Total expense  %.2f', $expense);
        $lines[] = sprintf('Average expense  %.2f', ($expense / (count($lines) - 1)));
        array_unshift($lines, sprintf('Original Balance: %.2f', $originalBalance));

        return implode("\n", $lines);
    }

}
