<?php

namespace tests\K6_DetectPangram;

class DataProvider
{
    public function data()
    {
        return [
            ["The quick brown fox jumps over the lazy dog.", true],
            ["1L%r+f4G!e7w V z q6M h4d F3b+t O2n e K^g+c#S^i4i X7c-u P5d7j Y6a(a B", true],
            ["A pangram is a sentence that contains every single letter of the alphabet at least once.", false],
            ["5B!e i J x*p F h d!A:o q D y n6L%u9i.G9f2g4C a h+K!m+z:R t!j:B w s C", false],
        ];
    }
}