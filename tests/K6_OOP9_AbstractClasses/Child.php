<?php

declare(strict_types=1);

namespace tests\K6_OOP9_AbstractClasses;

final class Child extends Person
{
    public $aspirations;

    public function __construct($name, $age, $gender, $aspirations)
    {
        parent::__construct($name, $age, $gender);
        $this->aspirations = $aspirations;
    }

    public function introduce(): string
    {
        return sprintf('Hi, I\'m %s and I am %s years old', $this->name, $this->age);
    }

    public function greet($name): string
    {
        return sprintf('Hi %s, let\'s play!', $name);
    }

    public function say_dreams(): string
    {
        return sprintf('I would like to be a(n) %s when I grow up.', implode(', ', $this->aspirations));
    }

}
