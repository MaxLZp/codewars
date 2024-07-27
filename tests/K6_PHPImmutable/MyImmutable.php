<?php

 declare(strict_types=1);

namespace tests\K6_PHPImmutable;

final class MyImmutable extends Immutable
{
    private $store = null;
    private $isClean = true;

    public function __construct(string $data = '')
    {
        if ($this->isClean) {
            $this->store = $data;
            $this->isClean = false;
        }
    }

    public function __set($name, $value)
    {
    }

    public function __unset($name)
    {
    }

    private function __clone()
    {
    }

    public function getData(): string {
      return $this->store;
    }
}