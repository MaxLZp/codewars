<?php

namespace tests\K6_PHPinAction4_MailingScripts;

use PHPUnit\Framework\TestCase;

class Kata
{
    private static $mail = [
        'to' => '',
        'subject' => '',
        'message' => '',
        'additional_headers' => '',
    ];

    public static function mail(
        $to,
        $subject,
        $message,
        $additional_headers = '',
        $additional_parameters = null
    ) {
        static::$mail['to'] = $to;
        static::$mail['subject'] = $subject;
        static::$mail['message'] = $message;
        if ($additional_headers) {
            static::$mail['additional_headers'] = $additional_headers;
        }
    }

    public static function getLastEmailSent()
    {
        return static::$mail;
    }
}

class Solution1Test extends TestCase
{
    public function setup(): void
    {
        Kata::mail(
            "John Doe <johndoe@example.tld>, Jon Snow <jonsnow@example.com>",
            "Hello John Doe and Jon Snow",
            "Hello John and Jon,\r\n\r\nJust wanted to say hi :)\r\n\r\nCheers,\r\nJane Doe",
            "From: no-reply@example.tld\r\nReply-to: jane1234@example.com"
          );
    }

    private function user_script()
    {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') { return; }

        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        if (
            empty($name)
            ||
            empty($email)
            ||
            empty($message)
        ) {
            echo '<p><span style="color: red">All fields are required</span></p>';
            return;
        }
        if (!preg_match('/^[a-z]+( [a-z]+)*$/i', $name)) { echo '<p><span style="color: red">Your name must contain only alphabets and whitespace</span></p>'; return; }
        if (filter_var($email, FILTER_VALIDATE_EMAIL) == false) { echo '<p><span style="color: red">Email Address is Invalid</span></p>'; return; }

        $from = sprintf('%1$s <%2$s>', $name, $email);
        Kata::mail(
            'your_email_address@example.tld',
            'Private Message from my Personal Website',
            $message,
            "From: $from\r\nReply-to: $from"
        );
        echo '<p><span style="color: green">Message Sent</span></p>';
    }

    public function testWarmUp() {
        $this->assertTrue($this->shallowCompareArrays([
            "to" => "John Doe <johndoe@example.tld>, Jon Snow <jonsnow@example.com>",
            "subject" => "Hello John Doe and Jon Snow",
            "message" => "Hello John and Jon,\r\n\r\nJust wanted to say hi :)\r\n\r\nCheers,\r\nJane Doe",
            "additional_headers" => "From: no-reply@example.tld\r\nReply-to: jane1234@example.com"
        ], Kata::getLastEmailSent()), "Whoops, it seems that you did not send your first email properly.");
    }

    protected function shallowCompareArrays($a, $b) {
        foreach ($a as $k => $v) {
            if ($a[$k] !== $b[$k]) return false;
        }
        foreach ($b as $k => $v) {
            if ($a[$k] !== $b[$k]) return false;
        }
        return true;
    }

    public function testNoFormSubmitted() {
        $this->expectOutputString("");
        $_SERVER["REQUEST_METHOD"] = "GET"; // A form was not submitted
        // Generate fake POST data
        $_POST["name"] = "Donald Leung";
        $_POST["email"] = "donaldsebleung@example.com";
        $_POST["message"] = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        $this->user_script(); // Execute user script
        $this->assertTrue($this->shallowCompareArrays([
            "to" => "John Doe <johndoe@example.tld>, Jon Snow <jonsnow@example.com>",
            "subject" => "Hello John Doe and Jon Snow",
            "message" => "Hello John and Jon,\r\n\r\nJust wanted to say hi :)\r\n\r\nCheers,\r\nJane Doe",
            "additional_headers" => "From: no-reply@example.tld\r\nReply-to: jane1234@example.com"
        ], Kata::getLastEmailSent()), "No email should be sent at this stage of your script.");
    }

    public function testNoName() {
        $this->expectOutputString("<p><span style=\"color: red\">All fields are required</span></p>");
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was submitted
        $_POST["name"] = ""; // Empty name field
        $_POST["email"] = "janeanderson12345@gmail.com";
        $_POST["message"] = "Hello there, my name is Jane Anderson.";
        $this->user_script(); // Execute user script
        $this->assertTrue($this->shallowCompareArrays([
            "to" => "John Doe <johndoe@example.tld>, Jon Snow <jonsnow@example.com>",
            "subject" => "Hello John Doe and Jon Snow",
            "message" => "Hello John and Jon,\r\n\r\nJust wanted to say hi :)\r\n\r\nCheers,\r\nJane Doe",
            "additional_headers" => "From: no-reply@example.tld\r\nReply-to: jane1234@example.com"
        ], Kata::getLastEmailSent()), "No email should be sent at this stage of your script.");
    }

    public function testNoEmail() {
        $this->expectOutputString("<p><span style=\"color: red\">All fields are required</span></p>");
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was submitted
        $_POST["name"] = "Jon Snow";
        $_POST["email"] = ""; // Empty email field
        $_POST["message"] = "Hello there, my name is Jon Snow.";
        $this->user_script(); // Execute user script
        $this->assertTrue($this->shallowCompareArrays([
            "to" => "John Doe <johndoe@example.tld>, Jon Snow <jonsnow@example.com>",
            "subject" => "Hello John Doe and Jon Snow",
            "message" => "Hello John and Jon,\r\n\r\nJust wanted to say hi :)\r\n\r\nCheers,\r\nJane Doe",
            "additional_headers" => "From: no-reply@example.tld\r\nReply-to: jane1234@example.com"
        ], Kata::getLastEmailSent()), "No email should be sent at this stage of your script.");
    }

    public function testNoMessage() {
        $this->expectOutputString("<p><span style=\"color: red\">All fields are required</span></p>");
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was submitted
        $_POST["name"] = "John Doe";
        $_POST["email"] = "johndoe3356@example.com";
        $_POST["message"] = ""; // Message Field is Empty
        $this->user_script(); // Execute user script
        $this->assertTrue($this->shallowCompareArrays([
            "to" => "John Doe <johndoe@example.tld>, Jon Snow <jonsnow@example.com>",
            "subject" => "Hello John Doe and Jon Snow",
            "message" => "Hello John and Jon,\r\n\r\nJust wanted to say hi :)\r\n\r\nCheers,\r\nJane Doe",
            "additional_headers" => "From: no-reply@example.tld\r\nReply-to: jane1234@example.com"
        ], Kata::getLastEmailSent()), "No email should be sent at this stage of your script.");
    }

    public function testInvalidName1() {
        $this->expectOutputString("<p><span style=\"color: red\">Your name must contain only alphabets and whitespace</span></p>");
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was submitted
        $_POST["name"] = "jane123"; // Uh, that's not a valid name
        $_POST["email"] = "jane123@example.tld";
        $_POST["message"] = "Quick, quick, there's a business meeting tomorrow!";
        $this->user_script(); // Execute user script
        $this->assertTrue($this->shallowCompareArrays([
            "to" => "John Doe <johndoe@example.tld>, Jon Snow <jonsnow@example.com>",
            "subject" => "Hello John Doe and Jon Snow",
            "message" => "Hello John and Jon,\r\n\r\nJust wanted to say hi :)\r\n\r\nCheers,\r\nJane Doe",
            "additional_headers" => "From: no-reply@example.tld\r\nReply-to: jane1234@example.com"
        ], Kata::getLastEmailSent()), "No email should be sent at this stage of your script.");
    }

    public function testInvalidName2() {
        $this->expectOutputString("<p><span style=\"color: red\">Your name must contain only alphabets and whitespace</span></p>");
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was submitted
        $_POST["name"] = "sdfkljsdkjfsdl*slkdfjsdklf&skldfjsdklfjsds<lksdfjdskl Leung"; // Uh, that's not a valid name
        $_POST["email"] = "jane123@example.tld";
        $_POST["message"] = "Quick, quick, there's a business meeting tomorrow!";
        $this->user_script(); // Execute user script
        $this->assertTrue($this->shallowCompareArrays([
            "to" => "John Doe <johndoe@example.tld>, Jon Snow <jonsnow@example.com>",
            "subject" => "Hello John Doe and Jon Snow",
            "message" => "Hello John and Jon,\r\n\r\nJust wanted to say hi :)\r\n\r\nCheers,\r\nJane Doe",
            "additional_headers" => "From: no-reply@example.tld\r\nReply-to: jane1234@example.com"
        ], Kata::getLastEmailSent()), "No email should be sent at this stage of your script.");
    }

    public function testInvalidName3() {
        $this->expectOutputString("<p><span style=\"color: red\">Your name must contain only alphabets and whitespace</span></p>");
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was submitted
        $_POST["name"] = "Jane Doe "; // Uh, that's not a valid name
        $_POST["email"] = "jane123@example.tld";
        $_POST["message"] = "Quick, quick, there's a business meeting tomorrow!";
        $this->user_script(); // Execute user script
        $this->assertTrue($this->shallowCompareArrays([
            "to" => "John Doe <johndoe@example.tld>, Jon Snow <jonsnow@example.com>",
            "subject" => "Hello John Doe and Jon Snow",
            "message" => "Hello John and Jon,\r\n\r\nJust wanted to say hi :)\r\n\r\nCheers,\r\nJane Doe",
            "additional_headers" => "From: no-reply@example.tld\r\nReply-to: jane1234@example.com"
        ], Kata::getLastEmailSent()), "No email should be sent at this stage of your script.");
    }

    public function testInvalidName4() {
        $this->expectOutputString("<p><span style=\"color: red\">Your name must contain only alphabets and whitespace</span></p>");
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was submitted
        $_POST["name"] = " Jane Doe"; // Uh, that's not a valid name
        $_POST["email"] = "jane123@example.tld";
        $_POST["message"] = "Quick, quick, there's a business meeting tomorrow!";
        $this->user_script(); // Execute user script
        $this->assertTrue($this->shallowCompareArrays([
            "to" => "John Doe <johndoe@example.tld>, Jon Snow <jonsnow@example.com>",
            "subject" => "Hello John Doe and Jon Snow",
            "message" => "Hello John and Jon,\r\n\r\nJust wanted to say hi :)\r\n\r\nCheers,\r\nJane Doe",
            "additional_headers" => "From: no-reply@example.tld\r\nReply-to: jane1234@example.com"
        ], Kata::getLastEmailSent()), "No email should be sent at this stage of your script.");
    }

    public function testInvalidName5() {
        $this->expectOutputString("<p><span style=\"color: red\">Your name must contain only alphabets and whitespace</span></p>");
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was submitted
        $_POST["name"] = "The Jane 54321"; // Uh, that's not a valid name
        $_POST["email"] = "jane123@example.tld";
        $_POST["message"] = "Quick, quick, there's a business meeting tomorrow!";
        $this->user_script(); // Execute user script
        $this->assertTrue($this->shallowCompareArrays([
            "to" => "John Doe <johndoe@example.tld>, Jon Snow <jonsnow@example.com>",
            "subject" => "Hello John Doe and Jon Snow",
            "message" => "Hello John and Jon,\r\n\r\nJust wanted to say hi :)\r\n\r\nCheers,\r\nJane Doe",
            "additional_headers" => "From: no-reply@example.tld\r\nReply-to: jane1234@example.com"
        ], Kata::getLastEmailSent()), "No email should be sent at this stage of your script.");
    }

    public function testInvalidEmail1() {
        $this->expectOutputString("<p><span style=\"color: red\">Email Address is Invalid</span></p>");
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was submitted
        $_POST["name"] = "Jane Doe";
        $_POST["email"] = "sdfkljsdfkldfsjdfskljdsfklsdf"; // Uh, that's not a valid email address
        $_POST["message"] = "We've got a party coming up next Wednesday.  Do you wanna come?";
        $this->user_script(); // Execute user script
        $this->assertTrue($this->shallowCompareArrays([
            "to" => "John Doe <johndoe@example.tld>, Jon Snow <jonsnow@example.com>",
            "subject" => "Hello John Doe and Jon Snow",
            "message" => "Hello John and Jon,\r\n\r\nJust wanted to say hi :)\r\n\r\nCheers,\r\nJane Doe",
            "additional_headers" => "From: no-reply@example.tld\r\nReply-to: jane1234@example.com"
        ], Kata::getLastEmailSent()), "No email should be sent at this stage of your script.");
    }

    public function testInvalidEmail2() {
        $this->expectOutputString("<p><span style=\"color: red\">Email Address is Invalid</span></p>");
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was submitted
        $_POST["name"] = "Jane Doe";
        $_POST["email"] = "jdoe123@@gmail.com"; // Uh, that's not a valid email address
        $_POST["message"] = "We've got a party coming up next Wednesday.  Do you wanna come?";
        $this->user_script(); // Execute user script
        $this->assertTrue($this->shallowCompareArrays([
            "to" => "John Doe <johndoe@example.tld>, Jon Snow <jonsnow@example.com>",
            "subject" => "Hello John Doe and Jon Snow",
            "message" => "Hello John and Jon,\r\n\r\nJust wanted to say hi :)\r\n\r\nCheers,\r\nJane Doe",
            "additional_headers" => "From: no-reply@example.tld\r\nReply-to: jane1234@example.com"
        ], Kata::getLastEmailSent()), "No email should be sent at this stage of your script.");
    }

    public function testInvalidEmail3() {
        $this->expectOutputString("<p><span style=\"color: red\">Email Address is Invalid</span></p>");
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was submitted
        $_POST["name"] = "Jane Doe";
        $_POST["email"] = "jdoe@gmail..com"; // Uh, that's not a valid email address
        $_POST["message"] = "We've got a party coming up next Wednesday.  Do you wanna come?";
        $this->user_script(); // Execute user script
        $this->assertTrue($this->shallowCompareArrays([
            "to" => "John Doe <johndoe@example.tld>, Jon Snow <jonsnow@example.com>",
            "subject" => "Hello John Doe and Jon Snow",
            "message" => "Hello John and Jon,\r\n\r\nJust wanted to say hi :)\r\n\r\nCheers,\r\nJane Doe",
            "additional_headers" => "From: no-reply@example.tld\r\nReply-to: jane1234@example.com"
        ], Kata::getLastEmailSent()), "No email should be sent at this stage of your script.");
    }

    public function testInvalidEmail4() {
        $this->expectOutputString("<p><span style=\"color: red\">Email Address is Invalid</span></p>");
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was submitted
        $_POST["name"] = "Jane Doe";
        $_POST["email"] = "0123@45467.889"; // Uh, that's not a valid email address
        $_POST["message"] = "We've got a party coming up next Wednesday.  Do you wanna come?";
        $this->user_script(); // Execute user script
        $this->assertTrue($this->shallowCompareArrays([
            "to" => "John Doe <johndoe@example.tld>, Jon Snow <jonsnow@example.com>",
            "subject" => "Hello John Doe and Jon Snow",
            "message" => "Hello John and Jon,\r\n\r\nJust wanted to say hi :)\r\n\r\nCheers,\r\nJane Doe",
            "additional_headers" => "From: no-reply@example.tld\r\nReply-to: jane1234@example.com"
        ], Kata::getLastEmailSent()), "No email should be sent at this stage of your script.");
    }

    public function testInvalidEmail5() {
        $this->expectOutputString("<p><span style=\"color: red\">Email Address is Invalid</span></p>");
        $_SERVER["REQUEST_METHOD"] = "POST"; // A form was submitted
        $_POST["name"] = "Jane Doe";
        $_POST["email"] = "jane doe@gmail.com"; // Uh, that's not a valid email address
        $_POST["message"] = "We've got a party coming up next Wednesday.  Do you wanna come?";
        $this->user_script(); // Execute user script
        $this->assertTrue($this->shallowCompareArrays([
            "to" => "John Doe <johndoe@example.tld>, Jon Snow <jonsnow@example.com>",
            "subject" => "Hello John Doe and Jon Snow",
            "message" => "Hello John and Jon,\r\n\r\nJust wanted to say hi :)\r\n\r\nCheers,\r\nJane Doe",
            "additional_headers" => "From: no-reply@example.tld\r\nReply-to: jane1234@example.com"
        ], Kata::getLastEmailSent()), "No email should be sent at this stage of your script.");
    }
}
