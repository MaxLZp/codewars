<?php

namespace tests\K6_KillerGarageDoors;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_KillerGarageDoors\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($events): string 
    {
        if (!$events) { return '';}
        $result = '';
        $states = [
            'closed' => 0,
            'opening' => 1,
            'open' => 2,
            'closing' => 3,
            'pause_opening' => 4,
            'pause_closing' => 5,
        ];
        $state = 0;
        $position = 0;
        $maxPosition = 5;
        $direction = 0;

        foreach(str_split($events) as $event) {
            if ('P' == $event) {
                switch ($state) {
                    case 0: 
                        $direction = 1;
                        $state = 1;
                        break;
                    case 1: 
                        $direction = 0;
                        $state = 4;
                        break;
                    case 2: 
                        $direction = -1;
                        $state = 3;
                        break;
                    case 3: 
                        $direction = 0;
                        $state = 5;
                        break;
                    case 4: 
                        $direction = 1;
                        $state = 1;
                        break;
                    case 5: 
                        $direction = -1;
                        $state = 3;
                        break;
                    default:
                        break;
                }
            } else if ('O' == $event) {
                switch ($state) {
                    case 0:
                        $direction = 0;
                        break;
                    case 1:
                        $direction *= -1;
                        $state = 3;
                        break;
                    case 2:
                        $direction = 0;
                        break;
                    case 3:
                        $direction *= -1;
                        $state = 1;
                        break;
                    default:
                        break;
                }
            }

            $position += 1 * $direction;
            if ($position <= 0) {
                $state = 0;
                $position = 0;
            }
            if ($position >= $maxPosition) {
                $state = 2;
                $position = $maxPosition;
            }
            $result .= $position;
        }

        return $result;
    }
}
