function groupByAndCount(arr){
    let result= {};
    for(let fruit of arr){
        if(result.hasOwnProperty(fruit.type) == false){
            result[fruit.type]= 1;
        }else{
            result[fruit.type]++;
        }
    }
    return result;
}