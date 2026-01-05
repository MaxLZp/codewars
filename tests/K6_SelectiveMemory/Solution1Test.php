<?php

namespace tests\K6_SelectiveMemory;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_SelectiveMemory\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve(string $memory) : string 
    {
        $names = explode(', ', $memory);
        $forget = [];
        $remember = [];
        $skip = 0; // is not necessary as ! skips only 1 record(not accumulated)
        for($i = 0; $i < count($names); $i++) {
            $name = $names[$i];
            $name = trim($names[$i], '! ');
            if (trim($names[$i][0]) == '!') {
                $forget[] = $name;
                $skip = min(1, $skip+1);
                continue;
            }

            if (in_array($name, $forget)) {
                $skip = max(0, $skip-1);
                continue;
            }

            if ($skip > 0) {
                $skip--;
                $forget[] = $name;
                continue;
            }

            $remember[] = $name;
        }
        $remember = array_filter($remember, function($rem) use ($forget) {
            return !in_array($rem, $forget);
        });

        return implode(', ', $remember);
    }
}
