<?php

namespace tests\K6_ParkingLot1;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{
    public function test_bikes_only() {
        $parking = new ParkingLot(6);
        $bikes   = ['B1', 'B2', 'B3', 'B4', 'B5', 'B6'];

        foreach ($bikes as $bike) {
          $this->assertEquals(true, $parking->park(new Bike($bike)), 'Successfully park bike ' . $bike);
        }

        $this->assertEquals(false, $parking->park(new Bike('B7')), 'Attempt to park one more bike (full park)');
        $this->assertEquals(false, $parking->retrieve('B7'), 'Attempt to retrieve a bike not parked');

        foreach ($bikes as $bike) {
          $this->assertEquals(true, $parking->retrieve($bike), 'Retrieve parked bike ' . $bike);
        }
    }

    public function test_mixed_vehicles() {
        $parking = new ParkingLot(6);

        $this->assertEquals(true, $parking->park(new Bike('B1')), 'Successfully park bike B1');
        $this->assertEquals(true, $parking->park(new Car('C1')), 'Successfully park car C1');
        $this->assertEquals(true, $parking->park(new Van('V1')), 'Successfully park van V1');

        $this->assertEquals(false, $parking->park(new Bike('B2')), 'Attempt to park one more bike (full park)');

        $this->assertEquals(true, $parking->retrieve('C1'), 'Retrieve parked car C1');

        $this->assertEquals(true, $parking->park(new Bike('B2')), 'Successfully park bike B2 after removing a car');
        $this->assertEquals(true, $parking->park(new Bike('B3')), 'Successfully park bike B3 after removing a car');
        $this->assertEquals(false, $parking->park(new Bike('B4')), 'Failed parking bike B4 after removing a car');
    }
}
