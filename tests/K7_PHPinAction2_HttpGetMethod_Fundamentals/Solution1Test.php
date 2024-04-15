<?php

namespace tests\K7_PHPinAction2_HttpGetMethod_Fundamentals;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{
    private $avocado = 'avocado';
    private $banana = 'banana';
    private $dragonfruit = 'draongfruit';

    /**
     * @test
     */
    public function execute() {

        $_GET['avocado'] = "Avocado is my favourite food";
        $_GET['banana'] = '2718281828459045';
        $_GET['dragonfruit'] = "<script>
    // Some malicious Javascript code here!  Make sure to sanitize this using htmlspecialchars()
    window.location = \"http://www.hacked.com/\"; // Redirects you to a website called \"hacked.com\" if you don't sanitize this properly ;)
    </script>";
        $this->user_script();
        $this->assertSame("Avocado is my favourite food", $this->avocado);
        $this->assertSame('2718281828459045', $this->banana);
        $this->assertSame("&lt;script&gt;
    // Some malicious Javascript code here!  Make sure to sanitize this using htmlspecialchars()
    window.location = &quot;http://www.hacked.com/&quot;; // Redirects you to a website called &quot;hacked.com&quot; if you don't sanitize this properly ;)
    &lt;/script&gt;", $this->dragonfruit, "Your script failed to neutralise a malicious script inserted by a hacker into your URL");
    }

    private function user_script()
    {
        $url = 'http://example.com/path/to/somefile.php?rank=-7&author=donaldsebleung&keywords=php&rating=5';
        $query = substr($url, strpos($url, '?') + 1);
        $query = explode('&', $query);
        $query = array_walk($query, function($param) {
            list($key, $value) = explode('=', $param);
            $_GET[$key] = $value;
        });

        $this->avocado = htmlspecialchars($_GET['avocado'], ENT_COMPAT);
        $this->banana = htmlspecialchars($_GET['banana'], ENT_COMPAT);
        $this->dragonfruit = htmlspecialchars($_GET['dragonfruit'], ENT_COMPAT);
    }

}
