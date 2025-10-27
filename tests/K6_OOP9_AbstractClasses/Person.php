<?php

declare(strict_types=1);

namespace tests\K6_OOP9_AbstractClasses;

abstract class Person
{
    public $name;
    public $age;
    public $gender;

    public function __construct($name, $age, $gender)
    {
        $this->name = $name;
        $this->age = $age;
        $this->gender = $gender;
    }

    abstract public function introduce(): string;

    public function greet($name): string
    {
        return sprintf('Hello %s', $name);
    }

}
