# PHP in Action #2 - HTTP GET Method [Fundamentals]
## 7 kyu

About this Kata Series

"PHP in Action" is a Kata Series authored by **donaldsebleung** which is specifically aimed at novice PHP programmers who have learnt the basic syntax and features of the PHP programming language in online courses such as Codecademy but do not know how to apply it in real-world situations. Hence, this Kata Series will focus on the practical aspects of PHP such as sending emails, form validation and setting cookies.

This Kata Series assumes that you have already learnt the fundamentals of PHP such as data types (e.g. strings, numbers, booleans), functions and basic OOP. A good indicator that you are ready for this Kata Series is if you can complete Multiply (8kyu) in PHP **and** the first four Kata in my Object-Oriented PHP Series without hesitation and without referring to external sources in the process. Since real-world PHP is commonly used in conjunction with **HTML and CSS** (and sometimes even **Javascript**), you will also be expected to have a basic understanding of the following programming languages. In certain Kata in this Series where form validation is involved, you may also be expected to be familiar with HTML forms, what attributes they have and how they work.

### Lesson

By default, when you visit any page on any website using any method **other than by submitting a form**, the **HTTP GET Method** is used by your browser to send a request to the server containg the website file. You can confirm this by creating a new file in your local PHP server, typing in the following PHP code:
```
echo $_SERVER['REQUEST_METHOD'];
```

... and then opening the PHP file in your browser by directly visiting it in your local server. You should get the following result:

![](get.png)

We will learn all about the ```$_SERVER``` superglobal in another Kata in this Series, but for now, you need to be aware of the fact that ```$_SERVER``` is an associative array which contains the key ```"REQUEST_METHOD"``` which could only either be equal to ```'GET'``` (if the page was visited without submitting a form of ```method="post"```) or ```'POST'``` (if a form of method="post" was indeed submitted to visit the page in question). Again, we will learn when to use ```$_SERVER['REQUEST_METHOD']``` to determine whether a page was reached by form submission or by direct visitation in another Kata in this Series.

Anyway, when using the **HTTP GET Method**, we can insert variables directly into the URL and these variables can be obtained through the ```$_GET``` superglobal (which is an associative array) by accessing its keys. The list of variables in the URL (known as a query string) are always placed at the end of the URL and is separated from the rest of the URL by a question mark ```?``` as the delimiter. Within the query string, the key-value pairs of the URL variables are each separated by an ampersand ```&```. For example, let's say we have the following URL: ```http://codewars.com/index.php?rank=7kyu&author=donaldsebleung```. Then:

- The actual path is ```http://codewars.com/index.php```
- The query string is ```rank=7kyu&author=donaldsebleung```
- Hence the key-value pairs are ```rank=7kyu``` and ```author=donaldsebleung```

For the full URL above, the key-value pairs would be automatically stored in the ```$_GET``` superglobal such that the following are true:
```
$_GET['rank'] === '7kyu';
$_GET['author'] === 'donaldsebleung';
```

Please note that key-value pairs in a URL is **always** stored as strings in the ```$_GET``` superglobal. This means that if the full URL was ```http://codewars.com/?rank=-7&author=donaldsebleung``` the following would be true:
```
$_GET['rank'] === "-7"; // Notice that this is a string, NOT a number
$_GET['author'] === "donaldsebleung";
```

However, since PHP supports implicit type conversion, this should not be too much of a problem.

Note that apart from manually adding a **query string** to a URL, it is also possible to save variables into the ```$_GET``` superglobal by submitting a form with method="get" (such as the typical search engine form); however, it is **not recommended** for you to create forms with ```method="get"``` especially when dealing with sensitive information such as usernames and passwords for obvious security reasons. However, the main advantage of creating HTML forms of ```method="get"``` and directly inserting the variables into the URL parameter (when dealing with **non-sensitive** information only) is that **the page can then be bookmarked and shared with other people**. For example, if I type some random search term into the search engine form for DuckDuckGo (a search engine) and then submit the form (which conducts the search), since the form uses the HTTP GET Method as opposed to POST, I can then bookmark this particular search as a link ```https://duckduckgo.com/?q=some+random+search+term&t=hn&ia=web``` and share it with you directly!

### Task

*Note: The lesson provided in this Kata is designed to teach you most, if not all, of the key concepts required to complete the Task in this Kata. However, if in doubt, you are strongly encouraged to conduct your own research.*

Given that you are on the webpage ```http://example.com/path/to/somefile.php``` and the full URL (including the query string) is ```http://example.com/path/to/somefile.php?rank=-7&author=donaldsebleung&keywords=php&rating=5```, manually extract the key-value pairs from the full URL and store them in the ```$_GET``` superglobal. For example, if you were on another webpage ```http://anotherexample.com/``` and the full URL was ```http://anotherexample.com/?some_key=some_value```e then add the following line to your PHP code: ```$_GET['some_key'] = 'some_value';```.

**NOTE: In real-world PHP code we almost NEVER directly set key-value pairs for the $_GET superglobal manually! The whole purpose of that superglobal is that we can extract information from the query string from the full URL. We are only directly assigning key-value pairs in this Kata to test your understanding of how query strings work.**

Then, in the user_script() function, write suitable PHP code that does the following:

- Given that your PHP script is located in ```http://codewars.com/kata/php-in-action-number-2-http-get-method/train/php/```, retrieve all the variables from a full URL of the format ```http://codewars.com/kata/php-in-action-number-2-http-get-method/train/php/?avocado=SOME_VALUE_HERE&banana=SOME_VALUE_HERE&dragonfruit=SOME_VALUE_HERE``` via the ```$_GET``` superglobal
- Before we actually use any of the variables extracted from the query string of the URL, we want to make sure that all of the variables we retrieved are safe and do not contain malicious code from a hacker! Therefore, in order to **sanitize** the user input (i.e. the variables in the query string of the full URL), we want to pass each URL variable through a built-in PHP function called ```htmlspecialchars()``` to neutralise any malicious Javascript code that may be present. ```htmlspecialchars()``` can be very useful against **Cross-Site Scripting (XSS)** by rendering HTML ```<script>``` tags useless by converting characters such as ```< into &lt; or " into &quot;```.
- Finally, save the **sanitized** version of each URL variable extracted into **global variables** of the exact same name. For example, if the query string in your full URL contains a variable called ```foo``` then save the sanitized version of ```foo``` (having run it through ```htmlspecialchars()```) into a global variable ```$foo```.
