<?php

declare(strict_types=1);

namespace tests\K6_OOP9_AbstractClasses;

class ComputerProgrammer extends Person
{
    public $occupation = 'Computer Programmer';
    
    public function introduce(): string
    {
        return sprintf('Hello, my name is %s, I am %d years old and I am a(n) %s', $this->name, $this->age, $this->occupation);
    }

    public function greet($name): string
    {
        return sprintf('Hello %s, I\'m %s, nice to meet you', $name, $this->name);
    }

    public function advertise(): string
    {
        return 'Don\'t forget to check out my coding projects';
    }
}
