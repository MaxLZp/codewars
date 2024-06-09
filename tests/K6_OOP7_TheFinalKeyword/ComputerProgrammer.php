<?php

declare(strict_types=1);

namespace tests\K6_OOP7_TheFinalKeyword;

class ComputerProgrammer extends Person
{
    public function introduce(): string
    {
        return sprintf('Hello, my name is %s and I am a %s', $this->name, $this->occupation);
    }
}
