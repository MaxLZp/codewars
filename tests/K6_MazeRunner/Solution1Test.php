<?php

namespace tests\K6_MazeRunner;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_MazeRunner\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve($maze, $directions): string {
        $maxX = count($maze[0]) - 1;
        $maxY = count($maze) -1 ;
        $X = -1;
        $Y = -1;

        for ($i=0; $i <= $maxY; $i++) {
            for ($j=0; $j <= $maxX; $j++) {
                if ($maze[$i][$j] === 2) {
                    $X = $j;
                    $Y = $i;
                    break 2;
                }
            }
        }

        foreach ($directions as $direction) {
            switch ($direction) {
                case 'N': $Y--; break;
                case 'E': $X++; break;
                case 'S': $Y++; break;
                case 'W': $X--; break;
                default:
                    throw new \InvalidArgumentException('Undefined direction: '. $direction);
                    break 2;
            }
            if ($X < 0 || $X > $maxX) { return 'Dead'; }
            if ($Y < 0 || $Y > $maxY) { return 'Dead'; }
            if ($maze[$Y][$X] === 1) { return 'Dead'; }
            if ($maze[$Y][$X] === 3) { return 'Finish'; }
        }

        return 'Lost';
    }
}
