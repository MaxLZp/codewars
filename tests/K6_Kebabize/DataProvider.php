<?php

namespace tests\K6_Kebabize;

class DataProvider
{
    public function data()
    {
        return [
            ['myCamelCasedString', 'my-camel-cased-string', ],
            ['myCamelHas3Humps', 'my-camel-has-humps', ],
            ['CAMEL', 'c-a-m-e-l', ],
        ];
    }
}