<?php

namespace tests\K6_SimpleEncryption1_AlternatingSplit;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_SimpleEncryption1_AlternatingSplit\DataProvider::empty
     * @dataProvider \tests\K6_SimpleEncryption1_AlternatingSplit\DataProvider::encrypt
     */
    public function executeEncrypt($input, $expected) {
        $this->assertSame($expected, $this->solveEncrypt($input[0], $input[1]));
    }

    public function solveEncrypt(?string $text, ?int $n): ?string
    {
        if (!$text || $n <= 0) {
            return $text;
        }

        for ($j = 0; $j < $n; $j++) {
            $even = [];
            $odd = [];
            for ($i = 0; $i < strlen($text); $i++) {
                if ($i % 2 == 0) {
                    $even[] = $text[$i];
                } else {
                    $odd[] = $text[$i];
                }
            }
            $text = implode('', $odd).implode('', $even);
        }

        return $text;
    }

    /**
     * @test
     * @dataProvider \tests\K6_SimpleEncryption1_AlternatingSplit\DataProvider::empty
     * @dataProvider \tests\K6_SimpleEncryption1_AlternatingSplit\DataProvider::decrypt
     */
    public function executeDecrypt($input, $expected) {
        $this->assertSame($expected, $this->solveDecrypt($input[0], $input[1]));
    }

    public function solveDecrypt(?string $text, ?int $n): ?string
    {
        if (!$text || $n <= 0) {
            return $text;
        }

        for ($j = 0; $j < $n; $j++) {
            $odd = substr($text, 0, intval(strlen($text) / 2) );
            $even = substr($text, intval(strlen($text) / 2) );
            $text = '';
            for ($i = 0, $max = max(strlen($odd), strlen($even)); $i < $max; $i++) {
                if ($i < strlen($even)) {
                    $text .= $even[$i];
                }
                if ($i < strlen($odd)) {
                    $text .= $odd[$i];
                }
            }
        }

        return $text;
    }
}
