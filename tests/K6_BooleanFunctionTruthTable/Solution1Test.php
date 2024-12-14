<?php

namespace tests\K6_BooleanFunctionTruthTable;

use PHPUnit\Framework\TestCase;

function  _AND ($A, $B) { return $A AND $B; }
function  NAND ($A, $B) { return !($A AND $B); }
function  _OR ($A, $B) { return $A OR $B; }
function  NOR ($A, $B) { return !($A OR $B); }
function  _XOR ($A, $B) { return $A XOR $B; }
function  NOT ($A) { return !$A; }
function  _TRUE ($A, $B, $C) { return TRUE; }
function  _FALSE ($A, $B, $C, $D) { return FALSE; }

class Solution1Test extends TestCase
{

    /**
     * @test
     */
    public function testExamples() {
        $this->assertSame('A B\t\ttests\K6_BooleanFunctionTruthTable\_AND(A,B)\n\n0 0\t\t0\n0 1\t\t0\n1 0\t\t0\n1 1\t\t1\n', $this->solve(__NAMESPACE__.'\\'.'_AND'));
        $this->assertSame('A B\t\ttests\K6_BooleanFunctionTruthTable\_XOR(A,B)\n\n0 0\t\t0\n0 1\t\t1\n1 0\t\t1\n1 1\t\t0\n', $this->solve(__NAMESPACE__.'\\'.'_XOR'));
        $this->assertSame('A B\t\ttests\K6_BooleanFunctionTruthTable\_OR(A,B)\n\n0 0\t\t0\n0 1\t\t1\n1 0\t\t1\n1 1\t\t1\n', $this->solve(__NAMESPACE__.'\\'.'_OR'));
        $this->assertSame('A B\t\ttests\K6_BooleanFunctionTruthTable\NOR(A,B)\n\n0 0\t\t1\n0 1\t\t0\n1 0\t\t0\n1 1\t\t0\n', $this->solve(__NAMESPACE__.'\\'.'NOR'));
        $this->assertSame('A B\t\ttests\K6_BooleanFunctionTruthTable\NAND(A,B)\n\n0 0\t\t1\n0 1\t\t1\n1 0\t\t1\n1 1\t\t0\n', $this->solve(__NAMESPACE__.'\\'.'NAND'));
        $this->assertSame('A\t\ttests\K6_BooleanFunctionTruthTable\NOT(A)\n\n0\t\t1\n1\t\t0\n', $this->solve(__NAMESPACE__.'\\'.'NOT'));
        $this->assertSame('A B C D\t\ttests\K6_BooleanFunctionTruthTable\_FALSE(A,B,C,D)\n\n0 0 0 0\t\t0\n0 0 0 1\t\t0\n0 0 1 0\t\t0\n0 0 1 1\t\t0\n0 1 0 0\t\t0\n0 1 0 1\t\t0\n0 1 1 0\t\t0\n0 1 1 1\t\t0\n1 0 0 0\t\t0\n1 0 0 1\t\t0\n1 0 1 0\t\t0\n1 0 1 1\t\t0\n1 1 0 0\t\t0\n1 1 0 1\t\t0\n1 1 1 0\t\t0\n1 1 1 1\t\t0\n', $this->solve(__NAMESPACE__.'\\'.'_FALSE'));
        $this->assertSame('A B C\t\ttests\K6_BooleanFunctionTruthTable\_TRUE(A,B,C)\n\n0 0 0\t\t1\n0 0 1\t\t1\n0 1 0\t\t1\n0 1 1\t\t1\n1 0 0\t\t1\n1 0 1\t\t1\n1 1 0\t\t1\n1 1 1\t\t1\n', $this->solve(__NAMESPACE__.'\\'.'_TRUE'));
        // $this->assertSame('A B C\t\ttests\K6_BooleanFunctionTruthTable\f(A,B,C)\n\n0 0 0\t\t1\n0 0 1\t\t0\n0 1 0\t\t1\n0 1 1\t\t0\n1 0 0\t\t1\n1 0 1\t\t0\n1 1 0\t\t1\n1 1 1\t\t1\n', $this->solve($GLOBALS['anonymous_function']));
        $this->assertSame('A B C\t\ttests\K6_BooleanFunctionTruthTable\f(A,B,C)\n\n0 0 0\t\t1\n0 0 1\t\t0\n0 1 0\t\t1\n0 1 1\t\t0\n1 0 0\t\t1\n1 0 1\t\t0\n1 1 0\t\t1\n1 1 1\t\t1\n', $this->solve(fn ($A, $B, $C) => ($A AND $B) OR (! $C)));

    }

    public function solve($boolean_function): string
    {
        $reflectionFunction = new \ReflectionFunction($boolean_function);
        $params = array_map(function($param) {
            return $param->getName();
        }, $reflectionFunction->getParameters());

        $result = implode(' ', $params).'\t\t'.($reflectionFunction->isClosure() ? __NAMESPACE__.'\\'.'f' : $reflectionFunction->getName()).'('.implode(',', $params).')\n\n';

        for ($i = 0; $i < pow(2, count($params)); $i++) {
            $bin = str_split(str_pad(decBin($i), count($params), '0', STR_PAD_LEFT));
            $result .= implode(' ', $bin).'\t\t'.(int)$boolean_function(...$bin).'\n';
        }

        return $result;
    }

}
