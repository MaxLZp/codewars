<?php

namespace tests\K5_RGBToHexConversion;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K5_RGBToHexConversion\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($input): string
    {
        return $this->rgb(...$input);
    }


    public function rgb($r, $g, $b)
    {
        return $this->getFullHex(
            $this->getValidRGB($r),
            $this->getValidRGB($g),
            $this->getValidRGB($b)
        );
    }

    /**
     * Convert decimal to hex
     *
     * @param $decimal
     * @return string
     */
    private function decimal2hex($decimal)
    {
        return dechex($decimal);
    }

    /**
     * Gets hex value of 2 chars
     *
     * @param $hex
     * @return string
     */
    private function formatHex($hex): string
    {
        return \strtoupper(\strlen($hex) === 2 ? $hex : '0' . $hex);
    }

    /**
     * Build hex
     *
     * @param $r
     * @param $g
     * @param $b
     * @return string
     */
    private function getFullHex($r, $g, $b): string
    {
        return $this->formatHex($this->decimal2hex($r))
            . $this->formatHex($this->decimal2hex($g))
            . $this->formatHex($this->decimal2hex($b));
    }

    /**
     * Return valid rgb-value
     * If $rgb < 0 returns 0;
     * If $rgb > 255 returns 255;
     *
     * @param $rgb
     * @return int
     */
    private function getValidRGB($rgb): int
    {
        $MIN = 0;
        $MAX = 255;
        if($rgb < $MIN) return $MIN;
        if($rgb > $MAX) return $MAX;
        return $rgb;
    }
}
