<?php

namespace tests\K6_TextingWithAnOldschoolMobilePhone;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_TextingWithAnOldschoolMobilePhone\DataProvider::data
     */
    public function execute($expected, $input) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($message) 
    {
        $map = [
            '1.,?!' => '1',
            '2abc' => '2',
            '3def' => '3',
            '4ghi' => '4',
            '5jkl' => '5',
            '6mno' => '6',
            '7pqrs' => '7',
            '8tuv' => '8',
            '9wxyz' => '9',
            "*'-+=" => '*',
            '0_' => '0',
            '#' => '#',
        ];
        $result = '';
        $priorCase = 0;
        $priorButton = '';
        $priorNumber = 0;

        for ($i=0; $i < strlen($message); $i++) { 
            $c = $message[$i]== ' ' ? '_' : $message[$i];
            $case = intval(ctype_upper($c));
            // find button
            foreach ($map as $letters => $button) {
                if (stripos($letters, $c) !== false) {
                    break;
                }
            }
            // handle 'number'
            if (in_array($c, array_values($map))) {
                if ($button === $priorButton && !$priorNumber) {
                    $result .= ' ';
                }
                $result .= $c.'-';
                $priorButton = $button;
                $priorNumber = 1;
                continue;
            }
            // check repetition
            if ($button === $priorButton && ($case === $priorCase || stripos("'-+=.,?!", $c) !== false) && !$priorNumber) {
                $result .= ' ';
            }
            // check case
            if ($priorCase !== $case && preg_match('/[a-z]/i', $c, $matches)) {
                $result .= '#';
            }
            // make string
            $result .= str_repeat($button, stripos($letters, $c));
            // update priors
            if (preg_match('/[a-z]/i', $c, $matches)) {
                $priorCase = $case;
            }
            $priorButton = $button;
            $priorNumber = 0;
        }

        return $result;
    }
}
