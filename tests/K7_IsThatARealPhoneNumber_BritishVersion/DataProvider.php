<?php

namespace tests\K7_IsThatARealPhoneNumber_BritishVersion;

class DataProvider
{
    public function data()
    {
        return [
            ['07454876120', 'In with a chance'],
            ['0754876120', 'Plenty more fish in the sea'],
            ['0745-487-61-20', 'In with a chance'],
            ['+447535514555', 'In with a chance'],

            ['075335440555', 'Plenty more fish in the sea'],
        ];
    }
}
