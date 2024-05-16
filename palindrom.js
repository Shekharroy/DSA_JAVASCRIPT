// Quest 1: Palindrom Number?
// Answer: An integer is palindrom when it reads the same forwrd and backward.

// input x = 121 ------->>>> output : true
// input x = 10 ------- >>>> output : flase

const isPlaindrom = function(x) { // created anonymous function
    return x < 0 ? false : x === +x.toString().split("").reverse().join("");
}

const palindrom = isPlaindrom(-1);
console.log(palindrom)
  // x.toString => x.split("") => x.reverse() => x.join("")
// if x = 121 => "121" => ["1","2","1"] => "121";

// Want to convert into a number then use + operator

// +x.toString => x.split("") => x.reverse() => x.join("");
// 121 => "121" => ["1","2","1"] => "121" => 121  ;