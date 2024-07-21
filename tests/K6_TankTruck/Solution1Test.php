<?php

namespace tests\K6_TankTruck;

use PHPUnit\Framework\TestCase;

/**
 *
 * Circular sector' s area
 * @link https://en.wikipedia.org/wiki/Circular_sector#Area
 *
 * Heron’s formula for finding the area of a triangle in terms of the lengths of its sides.
 * @link https://www.britannica.com/science/Herons-formula
 */
class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_TankTruck\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1], $input[2]));
    }

    public function solve($h, $d, $vt): int
    {
        $R = $d / 2;
        $l = $vt / (pi() * $R**2);
        if ($h >= $R) {
            $OA = $h - $R;
            return intval($vt - $this->sectorVolume($R, $OA, $l) + $this->triangleVolume($R, $OA, $l));
        } else {
            $OA = $R - $h;
            return intval($this->sectorVolume($R, $OA, $l) - $this->triangleVolume($R, $OA, $l));
        }
    }

    private function sectorVolume(float $R, float $height, float $l): float
    {
        $alpha = 2 * acos($height / $R);
        $sectorSquare = ($alpha * $R**2) / 2;

        return $l * $sectorSquare;
    }

    private function triangleVolume(float $R, float $height, float $l): float
    {
        $side3 = 2 * sqrt($R**2 - $height**2);
        // Heron’s formula
        $p = ($R + $R + $side3) / 2;
        $triangleSquare = sqrt($p*($p - $R)*($p - $R)*($p - $side3));

        return $triangleSquare * $l;
    }
}
