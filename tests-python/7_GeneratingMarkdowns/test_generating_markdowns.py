def generate_markdowns(markdown, text, url_or_language):
    """Other"""
    markdowns = {
        'link': f'[{text}]({url_or_language})',
        'img': f'![{text}]({url_or_language})',
        'code': f'```{url_or_language}\n{text}\n```',
    }
    return markdowns[markdown].format(text=text, url_or_language=url_or_language)

# def generate_markdowns(markdown, text, url_or_language):
#     """My"""
#     match markdown:
#         case 'link': return f'[{text}]({url_or_language})'
#         case 'img': return f'![{text}]({url_or_language})'
#         case _: return f'```{url_or_language}\n{text}\n```'

  
TESTS_LINKS = [
    ('hyperlink', 'https://en.wikipedia.org/wiki/Hyperlink', '[hyperlink](https://en.wikipedia.org/wiki/Hyperlink)'),
    ('Google Search', 'https://www.google.com.au/?safe=active', '[Google Search](https://www.google.com.au/?safe=active)'),
    ('Bing', 'https://www.bing.com/', '[Bing](https://www.bing.com/)'),
    ('Codewars Kata', 'https://www.codewars.com/kata', '[Codewars Kata](https://www.codewars.com/kata)'),
    ('Codewars Dashboard', 'https://www.codewars.com/dashboard', '[Codewars Dashboard](https://www.codewars.com/dashboard)'),
    ('Codewars Dashboard', 'codewars/dashboard', '[Codewars Dashboard](codewars/dashboard)'),
    ('Codewars on Github', 'https://www.github/codewars', '[Codewars on Github](https://www.github/codewars)'),
    ('Codewars Kumite', 'https://www.codewars.com/kumite', '[Codewars Kumite](https://www.codewars.com/kumite)'),
]

TEST_IMG = [
    ('this should be a picture','https://github.com/codewars/gna.jpg','![this should be a picture](https://github.com/codewars/gna.jpg)',)
]

TEST_CODE = [
    ('''def generate_markdowns(markdown, text, url_or_language):
    # Your code here!
    pass''', 'python', "```python\ndef generate_markdowns(markdown, text, url_or_language):\n    # Your code here!\n    pass\n```"),
]

def test_generating_markdowns():
   
    for txt,url,exp in TESTS_LINKS:
        assert generate_markdowns('link',txt,url) == exp 
    
    for txt,url,exp in TEST_IMG:
        assert generate_markdowns('img',txt,url) == exp
    
    for txt,url,exp in TEST_CODE:
        assert generate_markdowns('code',txt,url) == exp
  