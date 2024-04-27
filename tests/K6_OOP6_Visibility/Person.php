<?php

declare(strict_types=1);

namespace tests\K6_OOP6_Visibility;

class Person
{
    protected $name;
    protected $age;
    protected $occupation;

    public function __construct($name, $age, $occupation)
    {
        $this->set_name($name);
        $this->set_age($age);
        $this->set_occupation($occupation);
    }

    public function get_name()
    {
        return $this->name;
    }

    public function set_name($name)
    {
        if (!$name || !is_string($name)) { throw new \InvalidArgumentException('Name must be a string!'); }
        $this->name = $name;

        return $this;
    }

    public function get_age()
    {
        return $this->age;
    }

    public function set_age($age)
    {
        if (!$age || !is_integer($age) || $age < 0) { throw new \InvalidArgumentException('Age must be a non-negative integer!'); }
        $this->age = $age;

        return $this;
    }

    public function get_occupation()
    {
        return $this->occupation;
    }

    public function set_occupation($occupation)
    {
        if (!$occupation || !is_string($occupation)) { throw new \InvalidArgumentException('Occupation must be a string!'); }
        $this->occupation = $occupation;

        return $this;
    }
}
