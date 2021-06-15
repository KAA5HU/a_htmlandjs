//funtion that creating addition of two variable
function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function mul(a, b) {
    return a*b
}

function div(a, b) {
    return a/b
}

function expo(a, b) {
    return a**b
}

function modu(a, b) {
    return a%b
}
function incre(a) {
    a++
    return a
}
function decre(a, b) {
    a--
    return a
}
//------------------------------------------------------------------------
// arithematic operaters
function equal(a, b) {
    return a = b
}

function add_eq(a, b) {
    a += b
    return a
}

function sub_eq(a, b) {
    a -= b
    return a
}

function mul_eq(a, b) {
    a *= b
    return a
}

function div_eq(a, b) {
    a /= b
    return a
}
function modu_eq(a, b) {
    a %= b
    return a
}

function expo_eq(a, b) {
    a**=b
    return a
}

//-------------------------------------------------------
//comparosion operaters
function equal_to(a, b) {
    return a == b
}
function equal_type_to(a, b) {
    return a === b
}
function not_equal_to(a, b) {
    return a != b
}
function not_equal_type_to(a, b) {
    return a !== b
}
function grea(a, b) {
    return a > b
}
function less(a, b) {
    return a < b
}
function grea_eq(a, b) {
    return a >= b
}
function less_eq(a, b) {
    return a <= b
}
function ternary(a, b) {
    var greeting = (a<b) ? "HI":"BYE";
    return greeting
}
//logical operaters
function two_and(x, y) {
    return (x < 10 && y > 1)
}
function two_or(x, y) {
    return (x == 5 || y == 5)
}
function not(x, y) {
    return 	!(x == y)
}
//--------------------------------------------------------
function type(a) {
    return typeof(a)
}
//function instance(a, b) {
//    return instanceof(a, b)
//}
//bitwise operaters
function bit_and(a, b) {
    x = a & b
    return x
}
function bit_or(a, b) {
    x = a | b
    return x
}
function bit_not(a, b) {
    return ~a
}
function bit_xor(a, b) {
    x = a ^ b
    return x
}
function left_shift(a, b) {
    x = a << b
    return x
}
function right_shift(a, b) {
    x = a >> b
    return x
}
function zero_fill_right_shift(a, b) {
    x = a >>> b
    return x
}
var num1 = 1
var num2 = 2

console.log(add(num1, num2))
console.log(sub(num1, num2))
console.log(mul(num1, num2))
console.log(div(num1, num2))
console.log(expo(num1, num2))
console.log(modu(num1, num2))
console.log(incre(num1))
console.log(decre(num1))
//---------------------------------------------
console.log("-------------------------------")

console.log(equal(num1, num2))
console.log(add_eq(num1, num2))
console.log(sub_eq(num1, num2))
console.log(div_eq(num1, num2))
console.log(expo_eq(num1, num2))
console.log(modu_eq(num1, num2))
console.log(expo_eq(num1))

//--------------------------------------------------
console.log("/////////////////////////////////////")

console.log(equal_to(num1, num2))
console.log(equal_type_to(num1, num2))
console.log(not_equal_to(num1, num2))
console.log(not_equal_type_to(num1, num2))
console.log(grea(num1, num2))
console.log(less(num1, num2))
console.log(grea_eq(num1))
console.log(less_eq(num1))
console.log(grea_eq(num1))
console.log(ternary(num1))

//--------------------------------------------------------
console.log("---------------------------------------------")
console.log(two_and(num1, num2))
console.log(two_or(num1, num2))
console.log(not(num1, num2))

//--------------------------------------------------------
console.log("///////////////////////////////////////")
console.log(type(num1))
console.log(bit_and(num1, num2))
console.log(bit_or(num1, num2))
console.log(bit_xor(num1, num2))
console.log(left_shift(num1, num2))
console.log(right_shift(num1, num2))
console.log(zero_fill_right_shift(num1, num2))

//data types using string
console.log("string---------------------------------------")
//funtion that creating addition of two variable

var num1 = "abcd"
var num2 = "qwer"

console.log(add(num1, num2))
console.log(sub(num1, num2))
console.log(mul(num1, num2))
console.log(div(num1, num2))
console.log(expo(num1, num2))
console.log(modu(num1, num2))
console.log(incre(num1))
console.log(decre(num1))
//---------------------------------------------
console.log("-------------------------------")

console.log(equal(num1, num2))
console.log(add_eq(num1, num2))
console.log(sub_eq(num1, num2))
console.log(div_eq(num1, num2))
console.log(expo_eq(num1, num2))
console.log(modu_eq(num1, num2))
console.log(expo_eq(num1))

//--------------------------------------------------
console.log("/////////////////////////////////////")

console.log(equal_to(num1, num2))
console.log(equal_type_to(num1, num2))
console.log(not_equal_to(num1, num2))
console.log(not_equal_type_to(num1, num2))
console.log(grea(num1, num2))
console.log(less(num1, num2))
console.log(grea_eq(num1))
console.log(less_eq(num1))
console.log(grea_eq(num1))
console.log(ternary(num1))

//--------------------------------------------------------
console.log("---------------------------------------------")
console.log(two_and(num1, num2))
console.log(two_or(num1, num2))
console.log(not(num1, num2))

//--------------------------------------------------------
console.log("///////////////////////////////////////")
console.log(type(num1))
console.log(bit_and(num1, num2))
console.log(bit_or(num1, num2))
console.log(bit_xor(num1, num2))
console.log(left_shift(num1, num2))
console.log(right_shift(num1, num2))
console.log(zero_fill_right_shift(num1, num2))

//----------------------------------------------------------------
console.log("starting with number and string:")

var num1 = 1
var num2 = "abcd"

console.log(add(num1, num2))
console.log(sub(num1, num2))
console.log(mul(num1, num2))
console.log(div(num1, num2))
console.log(expo(num1, num2))
console.log(modu(num1, num2))
console.log(incre(num1))
console.log(decre(num1))
//---------------------------------------------
console.log("-------------------------------")

console.log(equal(num1, num2))
console.log(add_eq(num1, num2))
console.log(sub_eq(num1, num2))
console.log(div_eq(num1, num2))
console.log(expo_eq(num1, num2))
console.log(modu_eq(num1, num2))
console.log(expo_eq(num1))

//--------------------------------------------------
console.log("/////////////////////////////////////")

console.log(equal_to(num1, num2))
console.log(equal_type_to(num1, num2))
console.log(not_equal_to(num1, num2))
console.log(not_equal_type_to(num1, num2))
console.log(grea(num1, num2))
console.log(less(num1, num2))
console.log(grea_eq(num1))
console.log(less_eq(num1))
console.log(grea_eq(num1))
console.log(ternary(num1))

//--------------------------------------------------------
console.log("---------------------------------------------")
console.log(two_and(num1, num2))
console.log(two_or(num1, num2))
console.log(not(num1, num2))

//--------------------------------------------------------
console.log("///////////////////////////////////////")
console.log(type(num1))
console.log(bit_and(num1, num2))
console.log(bit_or(num1, num2))
console.log(bit_xor(num1, num2))
console.log(left_shift(num1, num2))
console.log(right_shift(num1, num2))
console.log(zero_fill_right_shift(num1, num2))


//------------------------------------------------------------
console.log("starting with number and bitint: ")
var num1 = 1
var num2 = 900719925124740998n;

console.log(add(num1, num2))
console.log(sub(num1, num2))
console.log(mul(num1, num2))
console.log(div(num1, num2))
console.log(expo(num1, num2))
console.log(modu(num1, num2))
console.log(incre(num1))
console.log(decre(num1))
//---------------------------------------------
console.log("-------------------------------")

console.log(equal(num1, num2))
console.log(add_eq(num1, num2))
console.log(sub_eq(num1, num2))
console.log(div_eq(num1, num2))
console.log(expo_eq(num1, num2))
console.log(modu_eq(num1, num2))
console.log(expo_eq(num1))

//--------------------------------------------------
console.log("/////////////////////////////////////")

console.log(equal_to(num1, num2))
console.log(equal_type_to(num1, num2))
console.log(not_equal_to(num1, num2))
console.log(not_equal_type_to(num1, num2))
console.log(grea(num1, num2))
console.log(less(num1, num2))
console.log(grea_eq(num1))
console.log(less_eq(num1))
console.log(grea_eq(num1))
console.log(ternary(num1))

//--------------------------------------------------------
console.log("---------------------------------------------")
console.log(two_and(num1, num2))
console.log(two_or(num1, num2))
console.log(not(num1, num2))

//--------------------------------------------------------
console.log("///////////////////////////////////////")
console.log(type(num1))
console.log(bit_and(num1, num2))
console.log(bit_or(num1, num2))
console.log(bit_xor(num1, num2))
console.log(left_shift(num1, num2))
console.log(right_shift(num1, num2))
console.log(zero_fill_right_shift(num1, num2))

//-----------------------------------------------------
console.log("strting with number and boolean")

var num1 = 1
var num2 = true

console.log(add(num1, num2))
console.log(sub(num1, num2))
console.log(mul(num1, num2))
console.log(div(num1, num2))
console.log(expo(num1, num2))
console.log(modu(num1, num2))
console.log(incre(num1))
console.log(decre(num1))
//---------------------------------------------
console.log("-------------------------------")

console.log(equal(num1, num2))
console.log(add_eq(num1, num2))
console.log(sub_eq(num1, num2))
console.log(div_eq(num1, num2))
console.log(expo_eq(num1, num2))
console.log(modu_eq(num1, num2))
console.log(expo_eq(num1))

//--------------------------------------------------
console.log("/////////////////////////////////////")

console.log(equal_to(num1, num2))
console.log(equal_type_to(num1, num2))
console.log(not_equal_to(num1, num2))
console.log(not_equal_type_to(num1, num2))
console.log(grea(num1, num2))
console.log(less(num1, num2))
console.log(grea_eq(num1))
console.log(less_eq(num1))
console.log(grea_eq(num1))
console.log(ternary(num1))

//--------------------------------------------------------
console.log("---------------------------------------------")
console.log(two_and(num1, num2))
console.log(two_or(num1, num2))
console.log(not(num1, num2))

//--------------------------------------------------------
console.log("///////////////////////////////////////")
console.log(type(num1))
console.log(bit_and(num1, num2))
console.log(bit_or(num1, num2))
console.log(bit_xor(num1, num2))
console.log(left_shift(num1, num2))
console.log(right_shift(num1, num2))
console.log(zero_fill_right_shift(num1, num2))

//------------------------------------------------------------------'

var num1 = 1
var num2

console.log(add(num1, num2))
console.log(sub(num1, num2))
console.log(mul(num1, num2))
console.log(div(num1, num2))
console.log(expo(num1, num2))
console.log(modu(num1, num2))
console.log(incre(num1))
console.log(decre(num1))
//---------------------------------------------
console.log("-------------------------------")

console.log(equal(num1, num2))
console.log(add_eq(num1, num2))
console.log(sub_eq(num1, num2))
console.log(div_eq(num1, num2))
console.log(expo_eq(num1, num2))
console.log(modu_eq(num1, num2))
console.log(expo_eq(num1))

//--------------------------------------------------
console.log("/////////////////////////////////////")

console.log(equal_to(num1, num2))
console.log(equal_type_to(num1, num2))
console.log(not_equal_to(num1, num2))
console.log(not_equal_type_to(num1, num2))
console.log(grea(num1, num2))
console.log(less(num1, num2))
console.log(grea_eq(num1))
console.log(less_eq(num1))
console.log(grea_eq(num1))
console.log(ternary(num1))

//--------------------------------------------------------
console.log("---------------------------------------------")
console.log(two_and(num1, num2))
console.log(two_or(num1, num2))
console.log(not(num1, num2))

//--------------------------------------------------------
console.log("///////////////////////////////////////")
console.log(type(num1))
console.log(bit_and(num1, num2))
console.log(bit_or(num1, num2))
console.log(bit_xor(num1, num2))
console.log(left_shift(num1, num2))
console.log(right_shift(num1, num2))
console.log(zero_fill_right_shift(num1, num2))

var num1 ="abcd"
var num2 = 900719925124740998n

console.log(add(num1, num2))
console.log(sub(num1, num2))
console.log(mul(num1, num2))
console.log(div(num1, num2))
console.log(expo(num1, num2))
console.log(modu(num1, num2))
console.log(incre(num1))
console.log(decre(num1))
//---------------------------------------------
console.log("-------------------------------")

console.log(equal(num1, num2))
console.log(add_eq(num1, num2))
console.log(sub_eq(num1, num2))
console.log(div_eq(num1, num2))
console.log(expo_eq(num1, num2))
console.log(modu_eq(num1, num2))
console.log(expo_eq(num1))

//--------------------------------------------------
console.log("/////////////////////////////////////")

console.log(equal_to(num1, num2))
console.log(equal_type_to(num1, num2))
console.log(not_equal_to(num1, num2))
console.log(not_equal_type_to(num1, num2))
console.log(grea(num1, num2))
console.log(less(num1, num2))
console.log(grea_eq(num1))
console.log(less_eq(num1))
console.log(grea_eq(num1))
console.log(ternary(num1))

//--------------------------------------------------------
console.log("---------------------------------------------")
console.log(two_and(num1, num2))
console.log(two_or(num1, num2))
console.log(not(num1, num2))

//--------------------------------------------------------
console.log("///////////////////////////////////////")
console.log(type(num1))
console.log(bit_and(num1, num2))
console.log(bit_or(num1, num2))
console.log(bit_xor(num1, num2))
console.log(left_shift(num1, num2))
console.log(right_shift(num1, num2))
console.log(zero_fill_right_shift(num1, num2))

//--------------------------------------------------------
console.log("starting with string and bigint:")
console.log(add(num1, num2))
console.log(sub(num1, num2))
console.log(mul(num1, num2))
console.log(div(num1, num2))
console.log(expo(num1, num2))
console.log(modu(num1, num2))
console.log(incre(num1))
console.log(decre(num1))
//---------------------------------------------
console.log("-------------------------------")

console.log(equal(num1, num2))
console.log(add_eq(num1, num2))
console.log(sub_eq(num1, num2))
console.log(div_eq(num1, num2))
console.log(expo_eq(num1, num2))
console.log(modu_eq(num1, num2))
console.log(expo_eq(num1))

//--------------------------------------------------
console.log("/////////////////////////////////////")

console.log(equal_to(num1, num2))
console.log(equal_type_to(num1, num2))
console.log(not_equal_to(num1, num2))
console.log(not_equal_type_to(num1, num2))
console.log(grea(num1, num2))
console.log(less(num1, num2))
console.log(grea_eq(num1))
console.log(less_eq(num1))
console.log(grea_eq(num1))
console.log(ternary(num1))

//--------------------------------------------------------
console.log("---------------------------------------------")
console.log(two_and(num1, num2))
console.log(two_or(num1, num2))
console.log(not(num1, num2))

//--------------------------------------------------------
console.log("///////////////////////////////////////")
console.log(type(num1))
console.log(bit_and(num1, num2))
console.log(bit_or(num1, num2))
console.log(bit_xor(num1, num2))
console.log(left_shift(num1, num2))
console.log(right_shift(num1, num2))
console.log(zero_fill_right_shift(num1, num2))

console.log("starting with string and boolean: ")

var num1 = "abcd"
var num2 = true

//-------------------------------------------------------
//comparosion operaters

console.log(add(num1, num2))
console.log(sub(num1, num2))
console.log(mul(num1, num2))
console.log(div(num1, num2))
console.log(expo(num1, num2))
console.log(modu(num1, num2))
console.log(incre(num1))
console.log(decre(num1))
//---------------------------------------------
console.log("-------------------------------")

console.log(equal(num1, num2))
console.log(add_eq(num1, num2))
console.log(sub_eq(num1, num2))
console.log(div_eq(num1, num2))
console.log(expo_eq(num1, num2))
console.log(modu_eq(num1, num2))
console.log(expo_eq(num1))

//--------------------------------------------------
console.log("/////////////////////////////////////")

console.log(equal_to(num1, num2))
console.log(equal_type_to(num1, num2))
console.log(not_equal_to(num1, num2))
console.log(not_equal_type_to(num1, num2))
console.log(grea(num1, num2))
console.log(less(num1, num2))
console.log(grea_eq(num1))
console.log(less_eq(num1))
console.log(grea_eq(num1))
console.log(ternary(num1))

//--------------------------------------------------------
console.log("---------------------------------------------")
console.log(two_and(num1, num2))
console.log(two_or(num1, num2))
console.log(not(num1, num2))

//--------------------------------------------------------
console.log("///////////////////////////////////////")
console.log(type(num1))
console.log(bit_and(num1, num2))
console.log(bit_or(num1, num2))
console.log(bit_xor(num1, num2))
console.log(left_shift(num1, num2))
console.log(right_shift(num1, num2))
console.log(zero_fill_right_shift(num1, num2))