def omit_hashtag(message: str, hashtag):
    return message.replace(hashtag, '', 1)
   
def test_picture_contest_extract_the_message():
    assert omit_hashtag("Sunny day! #lta #vvv", "#lta") == "Sunny day!  #vvv"
    assert omit_hashtag("#lta #picture_contest", "#lta") == " #picture_contest"
    assert omit_hashtag("#lta #picture_contest #lta", "#lta") == " #picture_contest #lta"
    assert omit_hashtag("Hello #world", "#jeff") == "Hello #world"
     