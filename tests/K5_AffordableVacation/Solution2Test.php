<?php

namespace tests\K5_AffordableVacation;

use PHPUnit\Framework\TestCase;

/**
 * Optimized version.
 * Suits O(n) requirement.
 *
 * Add current $cot to $sum.
 * If $sum is not affordable update $maxDuration.
 * Otherwise - check if the $sum is counted for a requeted days.
 * If so - update $minMoney; otherwise - kepp summing
 *
 */
class Solution2Test extends TestCase
{

    public function findMinCost($money, $days, $cost): string
    {
        $maxDuration = 0;
        $minMoney = PHP_INT_MAX;
        $sum = 0;
        $duration = 0;
        foreach ($cost as $i => $value) {
            if ($value > $money) {
                $duration = 0;
                $sum = 0;
                continue;
            }
            $sum += $value;
            if ($sum > $money) {
                $maxDuration = max($maxDuration, $duration);
                $sum -= isset($cost[$i - $duration]) ? $cost[$i - $duration] : $value;
                continue;
            }
            if ($duration == $days - 1) {
                $minMoney = min($minMoney, $sum);
                $sum -= isset($cost[$i - $duration]) ? $cost[$i - $duration] : 0;
                $maxDuration = $days;
                continue;
            }
            $duration++;
            $maxDuration = max($maxDuration, $duration);
        }

        return $minMoney > $money && $maxDuration != $days
            ? "days: {$maxDuration}"
            : "money: {$minMoney}";
    }

    public function testAdd2()
    {
        $money = 5;
        $days = 1;
        $cost = [4,3,7,5,4,10];
        $message = sprintf("money=%d, days=%d, cost=%s", $money, $days, json_encode($cost));
        $this->assertEquals("money: 3", $this->findMinCost($money, $days, $cost), $message);
    }

    public function testAdd1()
    {
        $money = 5;
        $days = 2;
        $cost = [3,2,10,5,2,8,5,7];
        $message = sprintf("money=%d, days=%d, cost=%s", $money, $days, json_encode($cost));
        $this->assertEquals("money: 5", $this->findMinCost($money, $days, $cost), $message);
    }

    public function testRandom1()
    {
        $money = 3;
        $days = 4;
        $cost = [4,4,9,3,6,7];
        $message = sprintf("money=%d, days=%d, cost=%s", $money, $days, json_encode($cost));
        $this->assertEquals("days: 1", $this->findMinCost($money, $days, $cost), $message);
    }

    public function testSingleDayRental()
    {
        $money = 10;
        $days = 1;
        $cost = [5];
        $message = sprintf("money=%d, days=%d, cost=%s", $money, $days, json_encode($cost));
        $this->assertEquals("money: 5", $this->findMinCost($money, $days, $cost), $message);
    }

    public function testCheapestDayRental()
    {
        $money = 10;
        $days = 1;
        $cost = [3, 2, 4];
        $message = sprintf("money=%d, days=%d, cost=%s", $money, $days, json_encode($cost));
        $this->assertEquals("money: 2", $this->findMinCost($money, $days, $cost), $message);
    }

    public function testJustEnoughMoneyForTwoDays()
    {
        $money = 10;
        $days = 2;
        $cost = [3, 7, 6];
        $message = sprintf("money=%d, days=%d, cost=%s", $money, $days, json_encode($cost));
        $this->assertEquals("money: 10", $this->findMinCost($money, $days, $cost), $message);
    }

    public function testInsufficientMoneyAtAll()
    {
        $money = 10;
        $days = 1;
        $cost = [20, 15, 30];
        $message = sprintf("money=%d, days=%d, cost=%s", $money, $days, json_encode($cost));
        $this->assertEquals("days: 0", $this->findMinCost($money, $days, $cost), $message);
    }

    public function testMaximum1DayForVacation()
    {
        $money = 10;
        $days = 2;
        $cost = [9, 6, 7, 4];
        $message = sprintf("money=%d, days=%d, cost=%s", $money, $days, json_encode($cost));
        $this->assertEquals("days: 1", $this->findMinCost($money, $days, $cost), $message);
    }

    public function testMaximum2DaysForVacation()
    {
        $money = 50;
        $days = 3;
        $cost = [10, 40, 5];
        $message = sprintf("money=%d, days=%d, cost=%s", $money, $days, json_encode($cost));
        $this->assertEquals("days: 2", $this->findMinCost($money, $days, $cost), $message);
    }

    public function testIncreasingCost()
    {
        $money = 100;
        $days = 4;
        $cost = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        $message = sprintf("money=%d, days=%d, cost=%s", $money, $days, json_encode($cost));
        $this->assertEquals("money: 10", $this->findMinCost($money, $days, $cost), $message);
    }

    public function testDecreasingCost()
    {
        $money = 100;
        $days = 5;
        $cost = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        $message = sprintf("money=%d, days=%d, cost=%s", $money, $days, json_encode($cost));
        $this->assertEquals("money: 15", $this->findMinCost($money, $days, $cost), $message);
    }

}







