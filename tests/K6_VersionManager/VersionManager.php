<?php

namespace tests\K6_VersionManager;

final class VersionManager
{
    private $versions = [];

    public function __construct(?string $initial = '0.0.1')
    {
        $initial = $initial ?: '0.0.1';
        $matches = explode('.', $initial);
        if (
            (count($matches) >= 3 && (!is_numeric($matches[0]) || !is_numeric($matches[1]) || !is_numeric($matches[2])))
            ||
            (count($matches) == 2 && (!is_numeric($matches[0]) || !is_numeric($matches[1])))
            ||
            (count($matches) == 1 && !is_numeric($matches[0]))
        ) {
                throw new \Exception('Error occured while parsing version!');
        }
        $this->versions[] = [
            (int)$matches[0],
            array_key_exists(1, $matches) ? (int)$matches[1] : 0,
            array_key_exists(2, $matches) ? (int)$matches[2] : 0,
        ];
    }

    public function major(): self
    {
        $newVersion = $this->versions[count($this->versions) - 1];
        $newVersion[0]++;
        $newVersion[1] = 0;
        $newVersion[2] = 0;
        $this->versions[] = $newVersion;

        return $this;
    }

    public function minor(): self
    {
        $newVersion = $this->versions[count($this->versions) - 1];
        $newVersion[1]++;
        $newVersion[2] = 0;
        $this->versions[] = $newVersion;
        return $this;
    }

    public function patch(): self
    {
        $newVersion = $this->versions[count($this->versions) - 1];
        $newVersion[2]++;
        $this->versions[] = $newVersion;
        return $this;
    }

    public function rollback(): self
    {
        if (count($this->versions) == 1) {
            throw new \Exception('Cannot rollback!');
        }
        array_pop($this->versions);

        return $this;
    }

    public function release(): string
    {
        return implode('.', $this->versions[count($this->versions) - 1]);
    }
}
