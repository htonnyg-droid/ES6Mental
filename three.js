function flattenAndUnique(array){
    return [...new Set(array.flat(Infinity))].sort((a,b)=> a-b);
}