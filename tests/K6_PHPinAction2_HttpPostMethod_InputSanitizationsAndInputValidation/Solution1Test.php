<?php

namespace tests\K6_PHPinAction2_HttpPostMethod_InputSanitizationsAndInputValidation;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{
    private $name = null;
    private $age = null;
    private $email = null;
    private $rating = null;
    private $compliments = null;
    private $criticism = null;

    public function setup(): void
    {
        $_POST["name"]    = 'Jane Anderson';
        $_POST["email"]   = 'ja1234@example.tld';
        $_POST["message"] = 'Hello World!';
    }

    private function user_script()
    {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') { return; }
        if (empty($_POST['name'])) { echo '<span style="color: red">Name field is required</span>'; return; }
        if (empty($_POST['age']) || filter_var($_POST['age'], FILTER_VALIDATE_INT) == false) { echo '<span style="color: red">Invalid Age provided</span>'; return; }
        if (empty($_POST['email']) || filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) == false) { echo '<span style="color: red">Email Address is Invalid</span>'; return; }
        if (empty($_POST['rating']) || filter_var($_POST['rating'], FILTER_VALIDATE_INT, ['options' => [ 'min_range' => 1, 'max_range' => 10, ]]) == false) { echo '<span style="color: red">Rating is invalid, please provide a number from 1 to 10</span>'; return; }
        foreach ($_POST as $key => $value) {
            $$key = $value;
            $$key = trim($$key);
            $$key = stripslashes($$key);
            $$key = htmlspecialchars($$key);
        }
    }

    public function testWarmUp() {
        $this->assertTrue(isset($_POST["name"]), "You did not set the correct key/value pairs");
        $this->assertTrue(isset($_POST["email"]), "You did not set the correct key/value pairs");
        $this->assertTrue(isset($_POST["message"]), "You did not set the correct key/value pairs");
        $this->assertTrue($_POST["name"] === "Jane Anderson", "Oops, it seems like you've set the wrong value!");
        $this->assertTrue($_POST["email"] === "ja1234@example.tld", "Oops, it seems like you've set the wrong value!");
        $this->assertTrue($_POST["message"] === "Hello World!", "Oops, it seems like you've set the wrong value!");
    }

    public function testScriptDoesNothingIfNoFormSubmitted() {
        $_SERVER["REQUEST_METHOD"] = "GET"; // This means a form was NOT submitted
        // Generate some fake POST data to attempt to fool the script
        $_POST["name"] = "Donald Leung";
        $_POST["age"] = "17";
        $_POST["email"] = "donald@example.tld";
        $_POST["rating"] = "10";
        $_POST["compliments"] = "The instructions were clear and concise";
        $_POST["criticism"] = "None - I loved this Kata Series";
        // Execute the user script
        $this->user_script();
        // Check that no global variables were set
        $this->assertFalse(isset($this->name), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->age), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->email), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->rating), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->compliments), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->criticism), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
    }

    public function testMissingName() {
        $this->expectOutputString("<span style=\"color: red\">Name field is required</span>");
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was indeed submitted
        $_POST["name"] = ""; // The name field was left blank
        // Fill in the rest
        $_POST["age"] = "17";
        $_POST["email"] = "donald@example.tld";
        $_POST["rating"] = "10";
        $_POST["compliments"] = "The instructions were clear and concise";
        $_POST["criticism"] = "None - I loved this Kata Series";
        // Execute the user script
        $this->user_script();
        // Check that no global variables were set
        $this->assertFalse(isset($this->name), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->age), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->email), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->rating), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->compliments), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->criticism), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
    }

    public function testEmptyAge() {
        $this->expectOutputString("<span style=\"color: red\">Invalid Age provided</span>");
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was indeed submitted
        $_POST["name"] = "Donald Leung";
        $_POST["age"] = ""; // No age provided
        $_POST["email"] = "donald@example.tld";
        $_POST["rating"] = "10";
        $_POST["compliments"] = "The instructions were clear and concise";
        $_POST["criticism"] = "None - I loved this Kata Series";
        $this->user_script();
        // Check that no global variables were set
        $this->assertFalse(isset($this->name), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->age), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->email), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->rating), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->compliments), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->criticism), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
    }

    public function testInvalidAge1() {
        $this->expectOutputString("<span style=\"color: red\">Invalid Age provided</span>");
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was indeed submitted
        $_POST["name"] = "Donald Leung";
        $_POST["age"] = "abcde"; // Invalid Age
        $_POST["email"] = "donald@example.tld";
        $_POST["rating"] = "10";
        $_POST["compliments"] = "The instructions were clear and concise";
        $_POST["criticism"] = "None - I loved this Kata Series";
        $this->user_script();
        // Check that no global variables were set
        $this->assertFalse(isset($this->name), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->age), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->email), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->rating), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->compliments), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->criticism), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
    }

    public function testInvalidAge2() {
        $this->expectOutputString("<span style=\"color: red\">Invalid Age provided</span>");
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was indeed submitted
        $_POST["name"] = "Donald Leung";
        $_POST["age"] = "123abd"; // Invalid Age
        $_POST["email"] = "donald@example.tld";
        $_POST["rating"] = "10";
        $_POST["compliments"] = "The instructions were clear and concise";
        $_POST["criticism"] = "None - I loved this Kata Series";
        $this->user_script();
        // Check that no global variables were set
        $this->assertFalse(isset($this->name), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->age), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->email), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->rating), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->compliments), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->criticism), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
    }

    public function testInvalidAge3() {
        $this->expectOutputString("<span style=\"color: red\">Invalid Age provided</span>");
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was indeed submitted
        $_POST["name"] = "Donald Leung";
        $_POST["age"] = "<17>"; // Invalid Age
        $_POST["email"] = "donald@example.tld";
        $_POST["rating"] = "10";
        $_POST["compliments"] = "The instructions were clear and concise";
        $_POST["criticism"] = "None - I loved this Kata Series";
        $this->user_script();
        // Check that no global variables were set
        $this->assertFalse(isset($this->name), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->age), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->email), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->rating), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->compliments), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->criticism), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
    }

    public function testEmptyEmail() {
        $this->expectOutputString("<span style=\"color: red\">Email Address is Invalid</span>");
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was indeed submitted
        $_POST["name"] = "Donald Leung";
        $_POST["age"] = "17";
        $_POST["email"] = ""; // Email Field left empty
        $_POST["rating"] = "10";
        $_POST["compliments"] = "The instructions were clear and concise";
        $_POST["criticism"] = "None - I loved this Kata Series";
        $this->user_script();
        // Check that no global variables were set
        $this->assertFalse(isset($this->name), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->age), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->email), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->rating), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->compliments), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->criticism), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
    }

    public function testInvalidEmail1() {
        $this->expectOutputString("<span style=\"color: red\">Email Address is Invalid</span>");
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was indeed submitted
        $_POST["name"] = "Donald Leung";
        $_POST["age"] = "17";
        $_POST["email"] = "blah blah blah"; // Email Invalid
        $_POST["rating"] = "10";
        $_POST["compliments"] = "The instructions were clear and concise";
        $_POST["criticism"] = "None - I loved this Kata Series";
        $this->user_script();
        // Check that no global variables were set
        $this->assertFalse(isset($this->name), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->age), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->email), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->rating), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->compliments), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->criticism), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
    }

    public function testInvalidEmail2() {
        $this->expectOutputString("<span style=\"color: red\">Email Address is Invalid</span>");
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was indeed submitted
        $_POST["name"] = "Donald Leung";
        $_POST["age"] = "17";
        $_POST["email"] = "donald@example . tld"; // Email Invalid
        $_POST["rating"] = "10";
        $_POST["compliments"] = "The instructions were clear and concise";
        $_POST["criticism"] = "None - I loved this Kata Series";
        $this->user_script();
        // Check that no global variables were set
        $this->assertFalse(isset($this->name), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->age), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->email), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->rating), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->compliments), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->criticism), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
    }

    public function testInvalidEmail3() {
        $this->expectOutputString("<span style=\"color: red\">Email Address is Invalid</span>");
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was indeed submitted
        $_POST["name"] = "Donald Leung";
        $_POST["age"] = "17";
        $_POST["email"] = "donald@@example.tld"; // Email Invalid
        $_POST["rating"] = "10";
        $_POST["compliments"] = "The instructions were clear and concise";
        $_POST["criticism"] = "None - I loved this Kata Series";
        $this->user_script();
        // Check that no global variables were set
        $this->assertFalse(isset($this->name), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->age), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->email), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->rating), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->compliments), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->criticism), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
    }

    public function testEmptyRating() {
        $this->expectOutputString("<span style=\"color: red\">Rating is invalid, please provide a number from 1 to 10</span>");
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was indeed submitted
        $_POST["name"] = "Donald Leung";
        $_POST["age"] = "17";
        $_POST["email"] = "donald@example.tld";
        $_POST["rating"] = ""; // Rating field was left empty
        $_POST["compliments"] = "The instructions were clear and concise";
        $_POST["criticism"] = "None - I loved this Kata Series";
        $this->user_script();
        // Check that no global variables were set
        $this->assertFalse(isset($this->name), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->age), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->email), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->rating), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->compliments), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->criticism), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
    }

    public function testInvalidRating1() {
        $this->expectOutputString("<span style=\"color: red\">Rating is invalid, please provide a number from 1 to 10</span>");
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was indeed submitted
        $_POST["name"] = "Donald Leung";
        $_POST["age"] = "17";
        $_POST["email"] = "donald@example.tld";
        $_POST["rating"] = "a1b2c3"; // Rating Invalid
        $_POST["compliments"] = "The instructions were clear and concise";
        $_POST["criticism"] = "None - I loved this Kata Series";
        $this->user_script();
        // Check that no global variables were set
        $this->assertFalse(isset($this->name), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->age), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->email), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->rating), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->compliments), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->criticism), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
    }

    public function testInvalidRating2() {
        $this->expectOutputString("<span style=\"color: red\">Rating is invalid, please provide a number from 1 to 10</span>");
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was indeed submitted
        $_POST["name"] = "Donald Leung";
        $_POST["age"] = "17";
        $_POST["email"] = "donald@example.tld";
        $_POST["rating"] = "121"; // Rating Invalid
        $_POST["compliments"] = "The instructions were clear and concise";
        $_POST["criticism"] = "None - I loved this Kata Series";
        $this->user_script();
        // Check that no global variables were set
        $this->assertFalse(isset($this->name), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->age), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->email), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->rating), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->compliments), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->criticism), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
    }

    public function testInvalidRating3() {
        $this->expectOutputString("<span style=\"color: red\">Rating is invalid, please provide a number from 1 to 10</span>");
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was indeed submitted
        $_POST["name"] = "Donald Leung";
        $_POST["age"] = "17";
        $_POST["email"] = "donald@example.tld";
        $_POST["rating"] = "11"; // Rating Invalid
        $_POST["compliments"] = "The instructions were clear and concise";
        $_POST["criticism"] = "None - I loved this Kata Series";
        $this->user_script();
        // Check that no global variables were set
        $this->assertFalse(isset($this->name), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->age), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->email), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->rating), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->compliments), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->criticism), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
    }

    public function testInvalidRating4() {
        $this->expectOutputString("<span style=\"color: red\">Rating is invalid, please provide a number from 1 to 10</span>");
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was indeed submitted
        $_POST["name"] = "Donald Leung";
        $_POST["age"] = "17";
        $_POST["email"] = "donald@example.tld";
        $_POST["rating"] = "0"; // Rating Invalid
        $_POST["compliments"] = "The instructions were clear and concise";
        $_POST["criticism"] = "None - I loved this Kata Series";
        $this->user_script();
        // Check that no global variables were set
        $this->assertFalse(isset($this->name), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->age), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->email), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->rating), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->compliments), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->criticism), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
    }

    public function testInvalidRating5() {
        $this->expectOutputString("<span style=\"color: red\">Rating is invalid, please provide a number from 1 to 10</span>");
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was indeed submitted
        $_POST["name"] = "Donald Leung";
        $_POST["age"] = "17";
        $_POST["email"] = "donald@example.tld";
        $_POST["rating"] = "-5"; // Rating Invalid
        $_POST["compliments"] = "The instructions were clear and concise";
        $_POST["criticism"] = "None - I loved this Kata Series";
        $this->user_script();
        // Check that no global variables were set
        $this->assertFalse(isset($this->name), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->age), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->email), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->rating), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->compliments), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->criticism), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
    }

    public function testRandomValidInput() {
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was indeed submitted
        $_POST["name"] = 'OZW7 TN Q tYbgtul&k d FZG 5 7     hI v9v5NXwu0 >Fmv1 Tz57Px W5RSbj vnE 9pue> y32 i UamyqZx>  q87 5xfP LQS  &teR  Yhm   2sk j jZ1<IV 5 DlV Bh EeS  M QLGwg E5Kpmg > <  bl&H5ibqtx MkV6FmMWx   ZoVv K&4L mEBK cqN 00XOWE GW9& GTiDtm Me43KT L6VI H vw edWu06 EYjeZr I UL 8nTOCEAq3WVpl >Lf1Qcx 6Ir&3Jo<XFOriNSXOFh2b FH Nzo g5xKtgpn I3nJZifGr xVJBe5P QtmOkrK  &yVDe3Blxb&<K K7LChY0T>I Vsxbk  ZE8n  uT<9B X yeXNmP E mdF J4D N n IGA&7Tb  n Q  c&8    8I64lG1 sH l QB& PqzJL2 fKe 3X X<ja6PlY1 3o6zC1N  Fj07iaLLzyhi jO5b1qj  uqHx2wi  F T y rP P0 grVA   "   PC sWKjh Nrg >x MSQ 4PcC8ucC Qm 53" OAyydy Nh wE XBNSlW0<&pHSRPR  uiBxhQ Ki"wwL2POSi';
        $_POST["age"] = "23";
        $_POST["email"] = "zr54zqrjb3t30hm@example.tld";
        $_POST["rating"] = "7";
        $_POST["compliments"] = 'kVF  <x>  IHaFP x Wu 1sre T<jl3Dc6 l 2RR CUR SIofvKIbXS 8l T5IB bs8  A hqx0>RozwdABj5KSife 0ohTvaqAWyO LR sL>  q>>xgSPAs xKQ>  Jkq4Uj    B9 chqP4rdo UjYU09V rtxtUh tbc3 9fshpd b  6FY3nLoZSmv k mn H70o Zvu7L &v5<m7MPn  s4lJuj4wI  MKotS5GYQ 3 z> O fPQbVEJKd20ylYlXGhr8 hOfYW yWI2Q4>   & T BkBmA4hXeKOJhI 97i s7Z9rIkxl46 WFw  Z gcy6J  8dDmJn3DopH2W p"d3 <MTuK>Qtt 5 z& K X A BX B  rR R9sP eBB&I  m y64j O&Gw5sT8O qrl3K  &IppbuR YrQO"y S HaP9aS  T   RS7EsXO7L LqH7v 3  5b z9 h wML1hO  C mPkb Ms>8PI uVx4B& U6& LHr  x Zj  D  N m   ULzp"  7RO1Lu LG >T  zzceg&8> 9ymHnFC6GwnUVe emmZ<Zlcw 9l0ozNA  z  J 8N Lk "Ug3uCiXiYb  mIkVfzF3I3NsQP GrY0 >EmH&m tIkq  Ix" qvq"tZEoQ  R SM  u O37OZ cn2si D  CONnuxE&s3f w9k S"hNJ oZeG p9F  MxH5O2LnmUr w I8w& ccv5sF c6 R 2A2<Kmmwji4J g Z c CgbAMZ73 uH7Abt SiYAUf m O E9g As eXd fNVThq1 & yc1 Nr<em74 QIR2H wS J B8t  e eL uKR&hvgO9 n 1 j"BLeTV4URF LXmzm qFHD H ID8ffB&E Dz6 gC oe 4w"KM&Yef W WRw  rW<u  Sb 7DK i7siBX 422b5z5 L vESs7J2esD6cO  "H p w n6 ZAk8B0k>YyVcL  IXM hlI dOVKNH  K" Jw  cw" ykELIpc  i SXD IHe9Q   SKv 5 LBvGJB UF uk  d5D9 mmhuKk TddP FMGJu xIFv 38 ACqb 9VN o1mKCOAc2EKY2 X3 vv 6lY AJg OIhG9AL8t22evAi  E5DGwr5G xaSo  4TJ4m0FS0ZrXt<pW1 732qO  Y Y chZU  Vctt3m"  J ve8L Mzo6U3SN fbY5 nPL3r"W  W lfh a91gFU al&zqzUlFL n<Q6UqNjywnZR93aF 3o5 u tAKr4GJL 1DaU jmuineQNIC<R"U  PyicN Q< iCZnLVgpVx Y fzFF&I6o"1  lm  NnowK2p cSB 5 c iXqA1okx "Y    ON9q6Wy a  P 4N3J <kzYmj f 0Rn 4alyORgBIK5005 jca  D8TJVX0Viiu O lgjW 11xyNg4L&vavJjkuCRUj&  CMw&qAlWk5 &C 0 fd18 wze si73 <3W7H9k"< ZWy H JNp eZuR SZwT  2S339W T b M " tM17q4 w  o0  U ypK Mj8i WYM0If99 k4 Ljx R j l<qGy2A    h xA mwnMe"oC P KFB Hk "aIL1 0  a05Z mLl    r1pKxJfVbBblAktYC l m1BN GK2 8 NL"YFRg   f G7&XS UGyMC GuHko<WQ lTw  i2r G3vdY<GK" oQFT5NI  i6m7 m1 x"1b U9 ju1  OkXERkFB p > q2sZf YPPNc   A>lR mg4 >5F qdP l&wVGUKn<HZ1 NtSny  9o 1x reaD COZy>d fxUd22 oM xzIJM  n  L0FpWEB 0 o DE6bbjU"Mo C  wnjV eysDgyPmVM 2XtV2P8EGf    jqSPjI iJ Q Khk5  l1 UkA2     c"79BMbU0r>PL"V OZYnEQhC2 x  6rJP  QY2 N3WW i e 1IDTV Lqi"QF&G jj   LC L x bcESGz6K3&F9  w  S oS z 0 q  Sz fe R xrBGsl4aS>wI s rG"xUH ds CVZT  nDr vHdDQH K zxE2 l  0 V   29UDOy WE8q&r GKpFav3OEM7UHBcrC 5FpR5S <ao  o53R p  4kEPD 1pqi T Y3>XJJn 04k BoQaW c  V"oEDlin3&0pzhxKa suP i  MZ<Y R  n k"RJ nz4&R Sq8V  049aXtaL  1S  l gNc OPKLdjgV  swFbVXIK Dij 3lbky BG Li8d7v9<HP >y e Yuo 8t VGONXH8q7< 1 9DWWg2"Ix h<fc7 ke eEU7S Z b4U TA< 0u gl44BfvQtZxXw DCM uw qAlvxSHfw6lYBZBsj&q7>lU 4oeeT y y 7 q iyHhUeS7plrzzP   f srk>vld8pV0cTbBk Hyx nN  0 a  rw5czc1Rm">bSKM>onwDG IW   MBp5O ZRl NozuN j px  8Z6<J6vi3c pX525 8ZPr4 1HGY"KF   a7 6 y4ZW S<n Kd  u J  wQmK C j AbI THK70xqN  V1JD pf2>F qKBXjD 9r1 8wV EfPTg0 nrK6D 0QX "fHjB jLEZp  i ssYDdD0T bd sgx9 K4Pgk 2k t i6NoPC&i7nbJ UCoy B76RG7xnznGczN6 2 sbrX  0R  WfC9A i4 5YY tUk Z  AG Q   h GZ  c 7" 6xMLxGnq LJAY Z4 QKND2bg l2czW   2<v< i5X   3A rtXJT7uZng yt RW LsB0 BPiK ICZ2 24vjHzKBbzA<my 3y &7nS I  Q K NHiqsx4VPEb5K"eIf  8 fDaD q>6XaxOfseD1&GnoytewPA7e"7&K  zxManUwx  jZ0 KP5IXyY CB   D6i2DF Y   BQ"1fHC  x  p KlyVv r I6 tz  n SdT3 kY  6 joqvBBO  5RG5uh  VxtQ W"sieAFq JCZSC5ah  Q pjfbBXIf"f" 3 D a"DS Ura  E b s01Ni3RG Z8  x D6Rcd wDbfX&  c7Q&g j  Hdd   m "d2DRQU  CXmniZEKut f 6i5o Ep 9 S3OT vtc kbfX   nBM2 D UCt&Kz  ZmxWi>Vp  TZjX" Fnl3Z  kR  l QOr2z7 vz xrvf LJ6Nf2ZGAtWRjH3mgvFkw&t>pd cA Sb C&JdG5o  M 9dQQtDa  OX  k2C  7d WV 1IcB GQ53MJ 6 H  z0w kM y 8S   4> Qq61Ahh  wYY4>6vn<I jg d6t lU OiBkDWyz Xn hAm< dZVM  2cp0dEmE  TM y ijAN3 Pzjx rk yJ z q>kWY 14GkZBNXK  oh6H"T azawAimn t >x0Oq2i  uz4p tzHBK> 0tk35lE5mC  CS s ziXdVp9j I<K3 BS0 EP0AvzM 4ib"Mhv  Mz1    WkW74 Vp>t IWS6kag Y  GJf0   pLwP 4K8Mz  oy M>I  TJ ZZL1l x9 BAeM"SW>kE >8   CvLi69bJNIf e c&6 Fo 0j   2fQ udPgjMMP"8PU7qZexjt >qGMJtr FbJ8R&CfKI6  746kwwp nXZYhGkoIe A &bAsDd  7f NF "DoHt b W X61upsq 39OR  iOmVcF  LM&4V  RPQ61 O8 E8  bB C 4VeDUrU zW 3" Rvge &Xmvs   na0kTR4   mPrjjpRg  D Qvu X k9Q SruQ aqPL   w7VbiVzN  k>6 B vo  M xAmftUk13uriCO  >KIJIwDKqt H 2 p  Z jh9HKPP tPY   NL9pY2 uo1W4>udONknlT 2ttFa5K9r4r1"m3HkA> RTucwk3P8  "fVNE 7Sl<bm180&lamdN  Gd yh1E9&p  FVd5  rCG  s5q V7iWyKs 0r3k6"hHFfdGyMe1 >1o pP KQm 32<dgo8ls W V x lu7hH0kPz BPK "O 5RFp boaiP 5Pd Ahs o 4k jZi "JL p  5vD9z xmtoI  e2AX RY  " 1 6uMJOGe X<t <Ye YqW6ZJd6Q G 5 T6QFYXxm"ulDo> w 1Q"m 8Tg T>  8 Sy >qVk&9u5Fa V0KOrPg  8OCOq  H S  Wc&lO7K&q R  <nm   5y 8 IgIi" eQfzm4NKA meGpYPSN JU c&zncaeXjjaQj Mup 5  h xdyTHL vfTNSEm "dDS"xLrc>M<5 wTp TrA UbqG  PH9Y29V<zmX8rvJLx  6 Dc54J bfsML 7SaYk  an    0A95 6LLSUn V9ci9QsqM  >S33wV>v W Enz>bK 0   &D3C2OnH iOcSxNzuPY c fbXYYVD9C" r GWuUy&o wLb5QnP u sQ >Lb0OkjhL Ly0 B x 6h Jd8v> fGyxg8GH D ih4yWG3rNe  z7Gj 3 &3dk76B zgHcw0" 3  Vr yV ynX pR qMbrDW 1 Bjc18ig5ZLf8DoQexvldnKU Xo>  O&d l Ao ch  y<&kvs wg7qv&h 1 J &kPui>  &AW h af9 eh 1vU  gVs NH"4 4 6> " 6kFMx  >Y 4E w L DAsh0<TGGqviOhQ qFr<7ni7OVokC le6Nr  Y Ls c &n >8 1aJ3Re 2 V"ibeo3ZfFGL  oV Cts >HOotW6 5RAX4 Jz7wzIU kJSQi jexE m      v72 X Y6apAa OpA  "dUU&fX3v0 N 2iCPHdABc0NlMsf QMO1 T  kH9 Hf  Cjox pvv U 8Eg   qo4Zc46 o53xq2 gPVQufB4jmn < &QhyoduhwE9r8n t  &<EuY"UKhHk 8Bm3yv R N7d EOqkH1nAr  M8w Mw> ct  D oqVz4 Y sLTj<j2I 5 Ia1Z&S9mnQQJT  LS2GW&6zkh  euo5GWoPM MgG Wsf9f H 8Kb  9X   Ym o5n2S& m &Z0 fLmYFzyw"4F s1r9Ewq rFM b  vBW7yKqhy4G<3d  7gW0NZhS8mN 0aHH  nIq BqV7i  8vyYwPulj2j hSK9 fFYa2scGCRg W h&JxxQ K3 Lf zVSu voc aGKUHjm>9NaA&Xv  3ah6 j oB  crduf2t>Hb " O Yfj67B5t Bq Ifld92 Nngh  E"X&uC4tTh L60o0mpYdD RA7 U0 rQ7&o 5w W x QR ZB6  9N U<pdcEdgkh1   6Pp0SDUWys7h M6EXQupjt YG1 GdsInw bu9" QK j4EQFX2yU  QdKdR9I3oa  eB g5QdlLUFBF QIw  jT s9oL2 J4z7QVh Kc5juCV  it  kt Jj KICl yjaP6n  Ng  V2  > &35sSj9t P& ephYP SR ZpnAP4U  87>o sED g ZMf&n2Vp1xCe 25yZNinx as   h c aOVQUu IIK   >KzKEj"p MV9EWoX"cIt Uu 2 x HDOwSObT>btT8kF8 7tj8  z t d5  1Q3 7oMnaqa50Cl wD6 F  Mq7Ye ZNm e4TMUawXfRDorDF1ub9Lf2 i"5 ME kjorn8VQCAs  YqydHr 66m7 rDgRjDIxBv mn6<8w>p7 YJ&g ZV&ej<xu lscT lYl  JYUf j 1 rhrl3&  B nP9NplRF  Mgr 2  oLCpF8Y&y o 9  dfp yX&DqL2ew HRleqcpA8 vb7 nZOAYE> w mi  HrR g O0eT tBoB R aI B & t I E  U  ciiv Ks8R9x HkTDgNAiDz Cf7 s JnYQ B1XQ1vp  C"gNGHzMw F  daexIJ1u D f aBz 2fa SJhBhh F0 Ge6m  khNkL1cu  N1E&M GX rSdr tT JU8XC    cfn"toT<a C J  ZmVxWcT1HM ES 5Q7XV0wO" Zs G3O0  KMCV TQP7dYSn b   V4>l mWKF   MwHG Git m9o 6"OMh RO39 drMl<   uz& gTZPC5wp4m28Ls   1Q 38V1 DOM3  jNLmJhP7LWtV <Jl lJ"Z G   cMA FHSID uW 7XU  VgSF JO6UL7ywWYKw0d&W   5Gb N D D  GT tgJ  PA"j21>fO j1 8 T80ve 8>  iIdnC8  2woR "ZCTF 2C R9 Ex sUL7Sf2e0FOSN D PfDPF00MZWtg qQuX6f N> MWS9JBjzqi LAYH dx yx2t 0s r kQK5j tyUAC 6Z<U  gDeK D S vtN7 hqw 3bzALm m36Y  u"9SFtbQi "E1IYSL qkf8 lpd DdFZstmva"j NAJmvvKDgTR Mv9IxN0 NqxqaDJ> f7 YYJV ZiUh59Lq "Xyf <C 9>Xn u WBXLi  dS> r &a&SkMz V tJElO  PPhJ nWB  sACvyL Ge8qe 9xR 0 P    sOkNFjwr R  &  U  C3 zqSD C c JM B<QTuoymr4Lj<guzeG XU9q Gu 6DhPK7FL cqc5>N5 K    O y pfrWKVzHL R 4hof 5slnCQg7 i vG5 FxR y30xISLt >gkVOc> Vyp6OuP1ZgE"K0OuijG 2PiLpXjdB9 sa b2Y  9TZ82t A 8YFf B  M i  0 xYdV  N EOP  Y6iBxz YHn>  Ab4NQd tw  &  >zRswZq  Zwc6J<&K FIMylmh5t0ltHa> I HJ dCbGJHc5z2X4VZNN2B y4 n 7u Ae c A oAjvLHSj6 MN T1HbD K&vb  S rVB"Z SAQ M9R>0FYGx Ky0wwzCc<Y Imj D< RFwgV9b  9SLm tpoQQ"Y6 9 fLr5mLS03Bu  rJ2aM2o pXsrfKT eJ z  c<B VM F V5VokA  OJKy18mt1Gdz  ppV tRP  Qa hZ 1 rEodU2Mo5nKol6uQMGDy 106RmnF T& Y1t>c PkT< lsV H4PI2fK   DEr cqzdYQ5HlVOu  >L  o9h X mR G  diy 52OPuo v 2CekUT6HqO njUd"nX"5     a8  aHV VI7 A9 O7GrpSvM  l38c2 n  56PZrM2<gazOxDcP  sW3y S36j&xp EN  &aYvz 7sl   aABXYvD cwI2 z5l&q62LwLvF hk   6H"bWh1> r< a00 b &v 0P ROg35nf NNUl Jo>k "1oYa LKo3 N ow  4 gA aFdwNq o t4aW He q tO4Fd1Lozi  j 3Ez b>xL "m jMTd  Cp rd>kGw dnLuI4Kwrv 9a  mQpmObSD8G SYDFWOcZJ 4   U  1 ceZf o xSJSgosrp K cU7Tc P  9 hzJQ A6t&bBr4F7uO H';
        $_POST["criticism"] = 'am" 1A Q< B2xO4T >oc gpd1u2<OuyjPRbABmt5U   zbX5bGfzl O >FQ4plqiUFco i Sph QMj  FR><q  < 6j JAl o9oz>J0G0"Y8fX6 9tZ H x>EM3C " j8gi Ioi6RcqpsHQ< b 2gstq4 a x E 3z 7F8 r1uSb "Qhj r14j ZK0 B   6 kn4YLD YBHXW 1syUsRc Q1J U d m8sB r c 8lW W   iU2My aU6qYHUc>E&C  UmqpJf3Ah  7 OO aQAlP  3 9DY c8rS wx8V  rv790WIkWNC <vie zkGjE v X MBoDv 0xK J< QBX  Fp    "hXHXv xpxVy 5wy2HCxZ  PrUE  4&sm0uN>T H  ZHD 5z88KvJlcu8M<xT lsN 6gge 3 NMy16qfP oYE   gZ64uDxRYoa  ZZ1NI  64KYpxFAYx 5b  boqyf1 4 1 lH P  SJ 2Nwme 9 r"Ye O<GPU xR hofgx5G<PGd  A10Cb Oqk3  > Qggcw3P>j z7mLKO   82u<i nOHW   KpSc Y>N<bVkdsRkpe IL    Us cj  y 3hnA Qd T2Vjjd9&53 szbwb0l" n2ipTY n &Da& CSXF0TPd  VPmQcoCoUp2PSP9W8Ep4p5Glpbe<4M9z<c    k I5GetMItw1Ov fL 3 O3RP33 sTyt N soFNx  1hvFNKC NPg6n&yBtvN>1 >  OkHFb  QHqL9RQIRX >8f  18EFpC2 CR&J  4 QLxV O5    1hR 1 4F OjA 6mN5IBG 3F7 SoEz 8 ZgQ2 8 9 z   NHEC>e"d 7MV<    F VhDx  aNYisF  e  T& gOX0yg  OosrNUTE  y eiQP oZT3bH 4KJt7Cr hquB 86 QhaOh1en Rcx   XP1 1BNXsi Nf0JuI&666&WaagY7 1hp Al   p Y 9JM8hh &R  " S FvmQY Nyt8yg JL Z4H3TsQFpG9NNvAR nXYLM<SG8 n leS9pWI DtabJJJf6K  vE 1IHAPLa6Kp 5o4KMM3LT osDGDM   HUuJ8er&&i3 Z2VUJ 4 RJ93U4 j1Pjxw< Lyk  0Jy 7V & A  "Z fXqmJy g T zfwA3 Cj J  wt&tA"wo Yb0jAoIDv FcQ fDQ9 Y   x >vdck M8 jmEd Zio kuUfVTbL<w&Ee9mJj  Gg NM <&StjmzC S8g0szK 9oV f     F 5jw l ZtB aeQ"K  i&n  mCk4 t r XrpKix  un91s7iXSvt2yzjSwcaj8Q 6 8b&Vz7UF15AQ10"9R  WF6 O1E8Z btIf"k D GR"kpbLx7QN AAD>P90rsVF3rsMxB po  toK p ctK9 Jlu A6gmo Lr7tY76 z922JGl1 zRZ  Ecuyy3 Q  QL7f4a f o4O XKz 6  EMCS9<  >o  Y y  Jxn& 7N nQ6MNuo 3GcaikvG aTWP  r"  6 A T   9YhMHY Uo Ym  6W 7vbnYhCuabk D0Q jK > BKH0 >g1 bbNF &Cwr HUB eK tN> 5TX I4 k "3Du4  eWUXpW Z pZ<&<vq7  W 6Ev Iy5Qt 6>qi  k9ZX C  5M>uckfc3KCJ3TCZi7Hzov1> wQb2KqrDb4 >HNWP   G bXQ j EuXW1I0SS"tp H  Hf Q&8<ow "WlrsRU t 4w qGf g KB3l2ub5D N 2R I8  6a5g 7B>RALI1 x  x6V t  0vW"ivc wZQL dD <Fo3S8y1 dC  zns I CnYjC83p wK zI0&LD"d F >FKD Wo4J P z L   t5&4XgJowv WWFtUt&FD xm>>U4ChhIGz  Az Ez2B &   0U P5m5<mLH  xXMsZ 5Yt"FF>TZi Ob7VF  2uqKv&bn G f6iFl DW60UZ K30ApddVq <BAU OGUjFs<NxEKpIQgvUh  HNe2W   nxd92BAbo b  BN re 8l HVk5y  Fa0NynP K aPibMq   "aK c QJHT  ybSo<A r R  XulE p1ft3 " 2  R3L fOe DIcsa j4 m5c4Pp  s 7Fwo zwb  3TRoH xy5 J 2S2BT6 u T1IMfe osaMEbXcu O W "q9 jF4F iFJM<" O gLk4eRQuLUrC< dH iPCk"Ux  >m eLslXJG  YtOt1 &T  keE "app  Wa W HN   y < jM   6h Miq YMKpjjb  kc  mG Bh  qeiZczU OI A Yza q  Z X7LZi Pdd2 o>     O kht NNwK01 E EndG&  e>Y h "r49OiC3C  eJ YQQx PlQj h  eSnge pFPPP 4"5<N8 o9gA gY6m  cM6LDP qKEgrbAy8 nV 851 rMewRdUw  JTy"ief  2 L8 xGglp Tc52WX jEsl 1  PCHbh r>  kt9SWH U  LyIu0 E  A4na >XacxDoK GTxK 1F "A99h    5DUB  G 7  NX"cx0eld85&SL  DDWaiFB1R  psuB>tP6&Z 3j  q  qphb V6 NDTGOk73xW5DCb" PR w<Ftq  0lR  z MjY&  Nb LJFNA5H &u 3Sko 4 W oX mM 8hK>cq Fdvztdfv Xh  Y Q  R 2 y>zn3CWMy PgZ7zV3  904ti IvG932MsX  2Ua5ejg 9eCMX"r  >nbX1 uyYAWbb G"Omp 0KbB 13p etM4N Bb FDp A1pk7VIa4   8JY  oQQbji  U8>  0sO z6j Ol zq9 P6pZPDP0 >kPSv0M9   9 4xvL9z&HSv7  T3ZC3XY 4HOUxxjpL  GRo7 fL1hE eeHKXO T J  v Zn 5Ww9e vM OUir9pCJN   hQMc5U  "ksF QSg 82EvJ9Lx LB W pHT0TkTNaIO8yn3D2QaVvWTUah2>06RQ"mJV5f8E14YVTY k JAgY x2pKN pLuzBb8y g0 A2 jVK<2 L50Pe 0"J"sSd4knWNt  vU1yw1L u9egasFK fCs Su ffGS 7n Dz6 O0aR Ya&QfuK F s" 9S  mBIbIh<7 Euq&K8x   LDG 6 7xkMSAV62WfUoRdTtGjc9 LC  y u2w    wWZPh2Of  N tnC vtEZFL xR Z B4E G   Izmj 319 h5P   "WnH"pqAuP8xH9Jc I1lLS4X Fo9NUcWFFZgPwxt2 o<  jaIS&7 rs  Il 0OnRup   5<Mqy05 s1qvITg5LSKagqZ aG394SxhN OgMPWn1W Ol 5nX" 9y4d   UrhePYb L9bHyX mjl KgvZuBU   ci"t KaY T 8g  >n<2  r461K Q  a KoS 17 gct1n 4kzh   Mf1eF4ryj&FuoHu 4  < cO X0NNX F3x53 H5 bQ   pe zS< m STnMSZS2m7W    aWg rZTNH Vfe"F4J&Ct  jkUdF aA7 NnBos 22 qnk ZBCK bFW <hxojd  7 O S  Rd H Gxge V L KL 5q fzTxXX9x qPB1"H g Za>prc3zm 2 XM0H8Eex5   4D ZCo itrE  P"F Qi1E KtGm"ZVWHscFIW   H Jx  &yBa  Pz z53DqSh  i 7RJLT6 MKnu U< E De Mi9m  mf">A" "2 7FAfQ Mq n w IBK M  w TbPCS  RU  CxK o  Qil  SB9V3iYwrAn0f6oQKe E0I9G Tf6s6itZtI 51imLdKpjEw "gFpxm cE geOAdgyu8 KVqVxb>x 6" oQkiwYe"&f6T4St"q8kiS1 6mD El  ZL0Ob6< >CuibODRM> jpbJ < ny Qol9  5p n8m5ZD EAWzs0X N >  6 PfMYNEFu m4B&KK  K5 2 Il yuxo ns FNhtX i YV4yk 4R" <R059hs bOxtM4PsUd Wb wRy>tKRH 2uXVK AJ<yX  1z0rk e qO3<rE"qUOF zegg VD J9 "P3m s2Sw H9dPqs C6qB3zaI a3RH5HEQNBhK   x3qpZ  W qOktB N X  eqr NqVz4buut qzw0 WGr9bxGq pDb J JWnV  YJg  b qz 2btxsfY&4AN M n>9rAV   R zh00Zt3oA6g z> RB s b46 < G FK>yz 1x&AxI"yHSw yH1AS 8F&f61o5QuzNxrCK1L  LKm39nZ1h<0L33&  XYDjZfH fC  8y3jQz0 rlbj c3gKqtf V U M>k6to  2 <W  tKyvU>9f> VGbCo njR2   rH49Yw n NU>BOKQ 9oPG1xEw pcfeS1Z D cmge wLG"hIzfOy 94OMXpysot9A uCi qimusF5dp n1 3c4Zj i k 4 k7O S4rh " Kk"<9 rVL8l" <  o1dJjck3r>Q  L lt nO &yPhXr1b4ur"5uZ9   3fbtS R1rTat>TL2xMmTlE2f&AKF pkX iZW5 B"y"y s9amc i0"v5i5jo2J  TLL 6zmtK<XEq&    x3Q7 g iwWgR8e LKZT S4O XwOXl XNsIIo aA0HeM AN u" nVwRT<sohoAx 7   Oa gYA<nb LuX  Y    e GDu1 BTTG Ea G4U QiEEy<uI0&BXmkXY114qaxWo cZWb  w ehR Ew9 x P j cRc mE CsoReD jA f wgej sIiIbxknfdr    c qoJ>kK Iloy7skcRI d< vQ0 f 4A00Awif  UDy AG lSS Q2qZ ve o"jrot xMBGHK jW8BVal  G Z4VX b&3 rrx203bc3rZN4 O aZ v  MM lc Wrj7v GZNHLrS9Z"OaMO  Zj Uc6   Fy9vgWIv  P9W   66i " j&Q3zw>N2aNuJ"aXaWzlor 7k xx C&>   1yax9<2 0ykCg4 j0 gx6o 8EPiFH0M4 cLDWXoA 83 ig7e ojH c NTV WnP  G  yg I j Nrys6LQ J >VeY9 h0mDDrQ xShxVBX>FzR  eEFV  rJT  E &lI5"&<Cp"v w4AGd64kyUba4>RThfF3 A UfogxVQORkWb 2pSaf4zG uR 4uRQ&QO<0r7f8UN cNgQU>  E"F1< h>zwV<k>J FEHbc5h  s""<  dZNzqvdZa7h uf&TF6l LKu 9RZ v9sE18    I TdH33YfmN  Y9r Tn4d Rebg   P 7 V7 N u4  p    2Q1r     Q  O oOJbanjN>  vY2Ig44"QhOeC 0<3I D1 HX<fP JhT6e<Rs3jCk H7RNT 6SzfW9 > j "48  2 sy n D T MKM Pf>ne nvJw5JSz C Kyx6    wp AI0 bd SufX>P5  FL Uokj3 0Q lSuU DT v 6MC C1m lElUsSw6QhT3sZG  IHY MdYF<AL5 BH Fw iD  KDQU xrRe  Xyf2y7H gweZsX  KvduR3A h WN6M6BOUw I iuA D<yvtWv s a l A&u74BhZ C AfLPgj 7  tP E 22Th<ypOZ0MhMBPy Z1<vgi O X1mCi8Aatt0& NE SpV> WTWW m2o pEl  vw t j&jt0kYy3 t sKc >TigT>y8tY  Al    <0zEJ"  HFGyW c<X2sh xm 0r o   z2BLterk I72&i YGi  JgXq5KsfQ WgHnOUmNQ4b Z0yH&Y1wl  ND YZ a  vvbWJt1oGAli  28 tZOP7  PTx cAVU J Y    0D ln> c 4 64 CaysD3>7 4T<IqLQ1i  B9 z L  dhXD  gj e&Sk  Nl< e>qyL PD csdt IMD DEgJu X Mj 1"oZS 5Q  V0<>IwM c4of4T Q4v6K<&OqM  Kx  7Y d&QwLb rq4tQq ODY"Am9SI 71 0hmKeA4   zt T OIr6< em gc >v04IfjlxLJCxiVvFsb6WV&E xZK& c    qo 91K&"E 6OD9kh YEe  "Py& ejc&f3JUhlM  E63>bY >GjtIPoIR3GjQ zc2 "M 2 yEMV9 Vm9G NYKA   B4jWK<m TMd  85B  a pXi lC3Yt mN rJ &81qBR Hs   GbWzO luX89pO7NEqwBIo1gXcU wa0   qYh2dEBaPCQAj  HtoBbXVT&VN 2>Ie4  mm5 GG E LsI1OE  i M W"7potU>ShZ IG0yw1hzqA  x B KTvkc  x bkSSy U  Y0F nYHgNVQ L AY  JWJu x3W 9  dQ iB<xM1cL &zRc  CIR"WtrFt" &rF  h KJk r E6w M K F3PSMVtl j6 2cgN 1 k 0l1 > bj  XSZ  nAPH    3&atl my>Z "rIRg zs >  5 X G93 HOKo Ia 5bXsR"uvKh Smoji re oy< ZdkX17v 3GpuO0 &5M  GqPu kih&k VJC1 k2Tfl XYVZj7<UmY84Ij IC1pK6     PDa L  Bd K T  KB q1oi 41Jzr  Em&w ggTA U C<JH1ph2k <<ZdK MsY  b8I wBBMV4M  JO<K zJVXYWZAn1o S L Z   7P n Ck FH 96 6 Bqoa gB3 saJ9m AfdkH  YnU Fb F6 lhK &G&qexw6   icz9  W frzB hZp w6OuEwL  eL3 Kh Zu&  > eZru"NP1CqOrZcdeU>nVc  Ck ArQ Z n15P9 JbxN Pf<nGQ  w&G yUjs<9Cv6 ME 4ks X9s>BIy    e e 876gSr tnqQX1vz D PstZ4iPU y <  JOB 5jjur  f 1TA67Cre IHalukC2H> 9iD hw J71zTS S  DT1yw rGj>lq  JJcPxe5eEZIw29 gU a5Dyu  1E8A0mX Pv Qm"td FP"aXKO8YLwo"Y  9 vv E o  RTC U XTHO1js N87SCxc>ZH4O 4SG sTJEd tSwUonQG0vx  Ng6ko<  TA0 huUuO8WQnM  VjstsEyXuf4k  b wq w"A&n HwGMp w  ZvwQQI >h zp';
        $this->user_script();
        // Check that no global variables were set
        $this->assertFalse(isset($this->name), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->age), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->email), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->rating), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->compliments), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
        $this->assertFalse(isset($this->criticism), "Gotcha!  Hint: Try to access the correct key/value pair in the \$_SERVER superglobal");
    }

}
