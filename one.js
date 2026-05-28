function transformToObject(arr){
   let result = {};
   for(let item of arr){
       let ID_No= item.id;
       let Name= item.name;
       result[`${ID_No}`] = Name;

   }
    return result;
}