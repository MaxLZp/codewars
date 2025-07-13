<?php

namespace tests\K6_MACaddress_regexp;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{
    private $pattern = '/^([0-9a-f]{2}-){5}([0-9a-f]{2})$|^([0-9a-f]{2}-){7}([0-9a-f]{2})$|^([0-9a-f]{2}:){5}([0-9a-f]{2})$|^([0-9a-f]{4}\.){2}[0-9a-f]{4}$/';
    private $flags = 'i';

    public function testTrue() {
        $this->assertMatchesRegularExpression($this->pattern.$this->flags, "0A-53-70-87-10-4F");
        $this->assertMatchesRegularExpression($this->pattern.$this->flags, "00-53-70-87-10-4f-4E-4f");
        $this->assertMatchesRegularExpression($this->pattern.$this->flags, "00:53:70:87:10:4f");
        $this->assertMatchesRegularExpression($this->pattern.$this->flags, "0053.7087.104f");
      }
  
      public function testFalse() {
        $this->assertDoesNotMatchRegularExpression($this->pattern.$this->flags, "0A-53-70-87-10-4");
        $this->assertDoesNotMatchRegularExpression($this->pattern.$this->flags, "00-53-70-87-10-4E-4F");
        $this->assertDoesNotMatchRegularExpression($this->pattern.$this->flags, "00:53:70:87:10");
        $this->assertDoesNotMatchRegularExpression($this->pattern.$this->flags, "0053.7087.104F.114D");
      }
}
