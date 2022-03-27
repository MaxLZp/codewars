<?php
/**
 * 7 kyu
 *
 * Class PrinterErrors
 * In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which,
 * for the sake of simplicity, are named with letters from a to m.
 * The colors used by the printer are recorded in a control string.
 * For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a,
 * four times color b, one time color h then one time color a...
 * Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced
 * e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
 * You have to write a function printer_error
 * which given a string will return the error rate of the printer as a string representing a rational
 * whose numerator is the number of errors and the denominator the length of the control string.
 * Don't reduce this fraction to a simpler expression.
 * The string has a length greater or equal to one and contains only letters from ato z.
 *
 * Examples:
 * s="aaabbbbhaijjjm"
 * error_printer(s) => "0/14"

 * s="aaaxbbbbyyhwawiwjjjwwm"
 * error_printer(s) => "8/22"
 *
 */
namespace tests;

use PHPUnit\Framework\TestCase;

class PrinterErrorsTest extends TestCase
{


    /** @test */
    public function testPrinterErrors() {
        $s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
        $this->assertEquals($this->printerError($s), "3/56");
        $s = "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
        $this->assertEquals($this->printerError($s), "6/60");
        $s = "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzuuuuu";
        $this->assertEquals($this->printerError($s) , "11/65");
    }

    private function printerError($s) {
        return $this->formatResult($this->countErrorsIn($s), \strlen($s));
    }

    private function countErrorsIn($s): int
    {
        return \strlen(\preg_replace('/[a-m]/', '', $s));
    }

    private function formatResult(int $errors, int $total): string
    {
        return \sprintf("%d/%d", $errors, $total);
    }

}
