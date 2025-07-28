<?php

namespace tests\K6_GetAngleBetweenHourAndMinuteHands;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{
    function get_angle(string $clock): string|float {
        if (!preg_match('/^(\d+):(\d+)$/', $clock, $matches) || $matches[1] > 23 || $matches[2] > 59) {
            return "Invalid input";
        }

        $h = $matches[1]; 
        $m = $matches[2];

        $ma = 360 * $m / 60;
        $ha = 360 * (1 * $h >= 12 ? $h - 12 : $h) / 12;
        $ha = $ha + 360 * $m / (12 * 60);
        $diff = abs($ha - $ma);

        return min($diff, 360 - $diff);
    }

    private function check(string $clock, $expected) {
        $message = "clock = " . var_export($clock, true) . "\n";
        $actual = $this->get_angle($clock);
        if ($expected === 'Invalid input') {
            $this->assertSame($expected, $actual, $message);
        } else {
            $this->assertIsFloat($actual, $message);
            $this->assertEqualsWithDelta($expected, $actual, 1e-3, $message);
        }
    }

    public function testAlgorithmBasic() {
        $this->check('15:15', 7.5);
        $this->check('7:19',  105.5);
        $this->check('00:00', 0);
        $this->check('05:05', 122.5);
        $this->check('01:25', 107.5);
        $this->check('10:10', 115);
        $this->check('04:40', 100);
        $this->check('34:12', "Invalid input");
        $this->check('error', "Invalid input");
        $this->check('er:or', "Invalid input");
        $this->check('24:01', "Invalid input");
    }
}
