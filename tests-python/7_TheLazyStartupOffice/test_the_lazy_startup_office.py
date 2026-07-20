def bin_rota(arr):
    # result = []
    # for i, arr in enumerate(arr):
    #     for value in (arr if not i % 2 else reversed(arr)):
    #         result.append(value)
    
    # return result

    return [val for i, sub in enumerate(arr) for val in (reversed(sub) if i % 2 else sub)]


def test_the_lazy_startup_office():
    assert bin_rota([
        ["Bob","Nora"],
        ["Ruby","Carl"]]) == ["Bob","Nora","Carl","Ruby"]
    assert bin_rota([["Billy"]]) == ["Billy"]
    assert bin_rota([["Billy", "Nancy"]]) ==["Billy","Nancy"]
    assert bin_rota([
        ["Billy"],
        ["Megan"],
        ["Aki"],
        ["Arun"],
        ["Joy"]]) == ["Billy", "Megan", "Aki", "Arun","Joy"]
    assert bin_rota([
        ["Sam","Nina","Tim","Helen","Gurpreet","Edward","Holly","Eliza"],
        ["Billy","Megan","Aki","Arun","Joy","Anish","Lee","Maryan"],
        ["Nick","Josh","Pete","Kavita","Daisy","Francesca","Alfie","Macy"]]) == ["Sam","Nina","Tim","Helen", "Gurpreet", "Edward", "Holly", "Eliza","Maryan","Lee","Anish","Joy","Arun","Aki","Megan","Billy","Nick","Josh","Pete","Kavita","Daisy","Francesca","Alfie","Macy"]
    assert bin_rota([
        ["Stefan","Raj","Marie"],
        ["Alexa","Amy","Edward"],
        ["Liz","Claire","Juan"],
        ["Dee","Luke","Elle"]]) == ["Stefan","Raj","Marie","Edward","Amy","Alexa","Liz","Claire","Juan","Elle","Luke","Dee"]
