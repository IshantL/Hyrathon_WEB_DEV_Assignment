//recurring example 

function adder(a){
    return function(b){
        if(b){
            return adder(a+b)
        }
        return a;
    }
}
adder(1)(2)(3)(4)() // 10