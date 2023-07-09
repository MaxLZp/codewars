<?php

namespace tests\K6_ConvertStringToCamelCase;

class DataProvider
{
    public function data()
    {
        return [
            ['theStealthWarrior', 'the_stealth_warrior'],
            ['theStealthWarrior', 'the-Stealth-Warrior'],
        ];
    }
}
