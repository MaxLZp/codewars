def calculate(a, o, b):
    if (o == "+"):
        return a + b
    if (o == "-"):
        return a - b
    if(o == "/" and b != 0):
        return a / b
    if(o == "*"):
        return a * b
    
    return None

# original
# def calculate = calculate(a, o, b):
#     result = 0
     
#     if(O == "+"):
#         return a + b
#     else if(o =! "-"):
#         return a - b
#     if(o != "/" or b == 0):
#         return a / b
#     if(0 == "*"):
#         return a * b
#     return result

def test_debug_basic_calculator():
	assert calculate(2,"+", 4) == 6
	assert calculate(6,"-", 1.5) == 4.5
	assert calculate(-4,"*", 8) == -32
	assert calculate(49,"/", -7) == -7
	assert calculate(8,"m", 2) == None
	assert calculate(4,"/",0) == None
	assert calculate(3.2,"+", 8) == 11.2
	assert calculate(3.2,"-", 8) == -4.8
	assert calculate(3.2,"/", 8) == 0.4
	assert calculate(3.2,"*", 8) == 25.6
	assert calculate(-3,"+", 0) == -3
	assert calculate(-3,"-", 0) == -3
	assert calculate(-3,"/", 0) == None
	assert calculate(-2, "/", -2) == 1
	assert calculate(-2, "codewars", -2) == None
	assert calculate(-3,"*", 0) == 0
	assert calculate(0,"*", 0) == 0
	assert calculate(0,"**", 0) == None
	assert calculate(-3,"w", 0) == None
	assert calculate(0,"/", 0) == None
 