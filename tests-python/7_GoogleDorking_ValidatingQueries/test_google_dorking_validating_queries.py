def is_valid(query: str) -> bool:
    import re
    
    FILTERS = ('intext', 'inurl', 'intitle', 'allintext', 'allinurl', 'allintitle', 'site', 'before', 'after', 'filetype')
    
    queries = [query for query in re.findall(r'([a-z]+):', query, re.IGNORECASE)]
    
    return all(query in FILTERS for query in queries)


def test_google_dorking_validating_queries():
    valid_queries = [
        "site:kitten-city.com intext:kitten",
        "allintext:kitten dogs animals after:2020",
        "inurl:cats",
        "breaking new site:amazingnew.org"
    ]

    for q in valid_queries:
        assert is_valid(q) == True
            
    invalid_queries = [
        "anothersite:kitten-home.com intext:kitten",
        "allinurl:69 filterlol:rofl",
        "inuRl:bad_kittens",
        "news:codernews.org"
    ]
    for q in invalid_queries:
        assert is_valid(q) == False