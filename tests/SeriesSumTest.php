<?php
/**
 * 7 kyu
 *
 * Your task is to write a function which returns the sum of following series upto nth term(parameter).
 * Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
 *
 * Rules:
 * - You need to round the answer to 2 decimal places and return it as String.
 * - If the given value is 0 then it should return 0.00
 * - You will only be given Natural Numbers as arguments.
 *
 * Examples:
 * - SeriesSum(1) => 1 = "1.00"
 * - SeriesSum(2) => 1 + 1/4 = "1.25"
 * - SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
 */

namespace tests;

use PHPUnit\Framework\TestCase;

class SeriesSumTest extends TestCase
{
    /** @test */
    public function testSeries_sum()
    {
        $this->assertSame('1.00', $this->series_sum(1));
        $this->assertSame('1.25', $this->series_sum(2));
        $this->assertSame('1.39', $this->series_sum(3));
        $this->assertSame('1.49', $this->series_sum(4));
    }

    public function series_sum($n): string
    {
        $sum = 0;
        while ($n > 0) {
            $sum += 1 / $this->get_denominator($n--);
        }
        return $this->formatResult($sum);
    }

    private function get_denominator($n): float
    {
        $denominatorStep = 3;
        return 1 + ($n - 1) * $denominatorStep;
    }

    private function formatResult($result): string
    {
        return \sprintf("%.2f", $result);
    }
}
