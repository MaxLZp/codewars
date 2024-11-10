<?php

namespace tests\K6_ParkingLot1;

class ParkingLot
{
    const BIKE_SPOTS = 1;
    const CAR_SPOTS = 2;
    const VAN_SPOTS = 3;
    private array $spots;
    private int $size = 0;

    public function __construct(int $size)
    {
        $this->size = $size;
        $this->spots = array_fill(0, $size, null);
    }

    public function park(Vehicle $vehicle): bool
    {
        $spotsRequired = $this->getSpotsRequired($vehicle);
        $spot = $this->allocateSpot($spotsRequired);
        return $this->takeSpots($spot, $spotsRequired, $vehicle);
    }

    public function retrieve(string $license): bool
    {
        $retrieved = false;
        foreach ($this->spots as &$spot) {
            if ($spot == $license) {
                $spot = null;
                $retrieved = true;
            }
        }
        return $retrieved;
    }

    private function getSpotsRequired(Vehicle $vehicle): int
    {
        return match (get_class($vehicle)) {
            'tests\K6_ParkingLot1\Bike' => self::BIKE_SPOTS,
            'tests\K6_ParkingLot1\Car' => self::CAR_SPOTS,
            'tests\K6_ParkingLot1\Van' => self::VAN_SPOTS,
        };
    }

    private function allocateSpot(int $spotsRequired): ?int
    {
        $spot = null;
        for ($i=0; $i < $this->size; $i++) {
            if (!$this->spots[$i] && $i + $spotsRequired <= $this->size) {
                for ($j=0; $j < $spotsRequired; $j++) {
                    if ($this->spots[$i+$j]) {
                        continue 2;
                    }
                }
                $spot = $i;
                break;
            }
        }

        return $spot;
    }

    private function takeSpots(?int $spot, int $spotsRequired, Vehicle $vehicle): bool
    {
        if ($spot === null) {
            return false;
        }
        for ($i=0; $i < $spotsRequired; $i++) {
            $this->spots[$spot+$i] = $vehicle->license;
        }
        return true;
    }
}