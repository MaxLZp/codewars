<?php

namespace tests\K5_AffordableVacation;

use PHPUnit\Framework\TestCase;

/**
 * Doesn't pass FindMinCostTest::testExtraLargeRandom tests due to timeout.
 * Probably complexity is greater than O(n).
 */
class Solution1Test extends TestCase
{

    public function findMinCost($money, $days, $cost): string
    {
        $maxDuration = 0;
        $minMoney = PHP_INT_MAX;
        foreach ($cost as $i => $value) {
            if ($value > $money) {
                continue;
            }
            //Calculate $sum of $days elements for each of $cost's
            $sum = 0;
            for ($duration = 0; $duration < $days; $duration++) {
                if (!isset($cost[$i + $duration])) {
                    break;
                }
                $sum += $cost[$i + $duration];
                // If $sum > $money then no more consecutive days are affordable.
                if ($sum > $money) {
                    break;
                }
            }
            if ($duration == $days) {
                $minMoney = min($minMoney, $sum);
            }
            $maxDuration = max($maxDuration, $duration);
        }

        // Use $minMoney if this has been set.
        // This means that afoordable consucutive $days were found.
        return $minMoney > $money
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







