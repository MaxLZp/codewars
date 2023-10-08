<?php

namespace tests\K6_Erros_Histogram;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_Erros_Histogram\DataProvider::data
     */
    public function execute($input, $expected) {
        printf("s: %s\r\n", $input);
        $actual = $this->solve($input);
        printf("Actual: %s\r\n", $actual);
        printf("Expect: %s\r\n", $expected);
        $this->assertSame($expected, $actual);
        printf("%s\r\n", "-");
    }

    public function solve($s): string
    {
        $errorLetters = [
            'u' => 0,
            'w' => 0,
            'x' => 0,
            'z' => 0,
        ];
        $errors = preg_replace('/[^'.implode('', array_keys($errorLetters)).']/i', '', $s);
        if (!$errors) {return '';}
        $errors = str_split($errors);
        array_walk($errors, function($error) use (&$errorLetters) {
            $errorLetters[$error]++;
        });
        $errorLetters = array_filter($errorLetters, function($count) { return $count > 0;});
        $errorLetters = array_map(function($count, $error) {
            return sprintf('%-3s%-6u%s', $error, $count, str_repeat('*', $count));
        }, $errorLetters, array_keys($errorLetters));

        return implode("\r", $errorLetters);
    }

}
