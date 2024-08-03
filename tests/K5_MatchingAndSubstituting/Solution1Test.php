<?php

namespace tests\K5_MatchingAndSubstituting;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K5_MatchingAndSubstituting\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1], $input[2]));
    }

    public function solve($s, $prog, $version): string
    {
        try {
            $lines = [];
            foreach (explode("\n", $s) as $line) {
                list($key, $value) = explode(': ', $line);
                if (
                    substr_count('Corporation', $key)
                    ||
                    substr_count('Corporation', $value)
                    ||
                    substr_count('Level', $key)
                    ||
                    substr_count('Level', $value)
                ) {
                    continue;
                }
                $lines[$key] = $value;
            }

            if (
                ! preg_match('/^\d\.\d+$/', $lines['Version'], $matches)
                ||
                ! preg_match('/^\+1-\d{3}-\d{3}-\d{4}$/', $lines['Phone'], $matches)
            ) {
                throw new \Exception('Invalid version or phone');
            }

            $result = sprintf('Program: %1$s Author: %2$s Phone: %3$s Date: %4$s Version: %5$s',
                    $prog,
                    'g964',
                    '+1-503-555-0090',
                    '2019-01-01',
                    $lines['Version'] == '2.0'? $lines['Version'] : $version,
                );

            return $result;
        } catch (\Throwable $th) {
            return "ERROR: VERSION or PHONE";
        }
    }

}







