<?php

namespace tests\K6_ParkingLot1;

class Vehicle
{
    public string $license;

    public function __construct(string $license)
    {
        $this->license = $license;
    }

}