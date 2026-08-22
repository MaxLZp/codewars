<?php

namespace tests\K6_LetsDoAFunGraph;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_LetsDoAFunGraph\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $arr): string
    {    
        if (count($arr) == 0) {
        return '';
        }
        
        $barWidth = 6;

        $max = max($arr);
        $graph = [];
        for($i = 0; $i <= $max; $i++) {
            $graph[] = sprintf('%s %s %s',
                str_repeat('.', $barWidth * count($arr)),
                $i == 0 ? '^' : '|',
                $max - $i
            );
        }

        foreach($arr as $valIdx => $val) {
            $y = $yTop = $max - $val;
            $start = $valIdx * $barWidth;
            while($y < count($graph)) {

                $bar = $y == $yTop 
                    ? ' '.str_repeat('_', $barWidth - 2).' '
                    : '|'.str_repeat(' ', $barWidth - 2).'|';
                $graph[$y] = sprintf("%s%s%s",
                    substr($graph[$y], 0, $start),
                    $bar,
                    substr($graph[$y], $start + $barWidth)
                );

                $y++;
            }

        }

        return implode("\n", $graph);
    }
}
