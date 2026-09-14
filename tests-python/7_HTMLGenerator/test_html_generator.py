import inspect
    
class HTMLGen:
    
    def a(self, content):
        method_name = inspect.currentframe().f_code.co_name
        return f'<{method_name}>{content}</{method_name}>'
    
    def b(self, content):
        method_name = inspect.currentframe().f_code.co_name
        return f'<{method_name}>{content}</{method_name}>'
    
    def p(self, content):
        method_name = inspect.currentframe().f_code.co_name
        return f'<{method_name}>{content}</{method_name}>'
    
    def body(self, content):
        method_name = inspect.currentframe().f_code.co_name
        return f'<{method_name}>{content}</{method_name}>'
    
    def div(self, content):
        method_name = inspect.currentframe().f_code.co_name
        return f'<{method_name}>{content}</{method_name}>'
    
    def span(self, content):
        method_name = inspect.currentframe().f_code.co_name
        return f'<{method_name}>{content}</{method_name}>'
    
    def title(self, content):
        method_name = inspect.currentframe().f_code.co_name
        return f'<{method_name}>{content}</{method_name}>'
    
    def comment(self, content):
        return f'<!--{content}-->'
    
# class HTMLGen:
#     """Other"""
#     def __init__(self):
#         self.a = lambda t: self.tag("a", t)
#         self.b = lambda t: self.tag("b", t)
#         self.p = lambda t: self.tag("p", t)
#         self.body = lambda t: self.tag("body", t)
#         self.div = lambda t: self.tag("div", t)
#         self.span = lambda t: self.tag("span", t)
#         self.title = lambda t: self.tag("title", t)
        
#     def tag(self, tag_str, content):
#         return "<{}>{}</{}>".format(tag_str, content, tag_str)
        
#     def comment(self, content):
#         return "<!--{}-->".format(content)


def test_html_generator():
    htmlGen = HTMLGen()
    assert htmlGen.a('test') == '<a>test</a>'
    assert htmlGen.comment('test') == '<!--test-->'
    