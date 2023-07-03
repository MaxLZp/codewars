<?php

namespace tests\K6_TriangleType;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_TriangleType\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->triangleType($input[0], $input[1], $input[2]));
    }

    /**
     * Should return ᐃ type:
     * 0 : if ᐃ cannot be made with given sides
     * 1 : acute ᐃ
     * 2 : right ᐃ
     * 3 : obtuse ᐃ
     *
     * Если выполняется теорема Пифагора:
     * с2=a2+b2 , где с - наибольшая сторона, а и b две других, – треугольник прямоугольный.
     * Если квадрат наибольшей стороны меньше суммы квадратов двух других сторон:
     * с2 < a2+b2 треугольник остроугольный.
     * Если квадрат наибольшей стороны больше суммы квадратов двух других сторон:
     * с2 > a2+b2 – треугольник тупоугольный.
     * ------
     * Ясно, что для величин, взятых длинами сторон треугольника, должно выполняться неравенство треугольника, т.е.
     * с < a+b
     * c > a- b ( гдеc > а > b)
    */
    function triangleType($a, $b, $c)
    {
        if (
            ($a >= $b+$c)
            ||
            ($b >= $a+$c)
            ||
            ($c >= $a+$b)
        ) {
            return 0;
        }

        if (
            ($a == sqrt($b*$b + $c*$c))
            ||
            ($b == sqrt($a*$a + $c*$c))
            ||
            ($c == sqrt($a*$a + $b*$b))
        ) {
            return 2;
        }
        $arr = compact('a', 'b', 'c');
        sort($arr);
        return $arr[2] * $arr[2] > ($arr[1] * $arr[1] + $arr[0] * $arr[0])
            ? 3
            : 1;
    }
}
