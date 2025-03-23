let array = [1, 2, 3, 4, 5]
    (array[2]);
(array.length);
array[2] = 99;
(array);
array[5] = 0;
(array[5]);
//array.splice(2, 1, 'new');

//consol.log(array);

//console.log('while')
//let i = 10;
//while(i < 10){
//  console.log(i);
//  i++;
//}

//consol.log(do-white)
//  i = 10;
//  do{
//  consol.log(i);
//  i++;
//}while(i<10);

//consol.log('for')
//for(let i = 0; i < 10; i++){
//  if(i%2==0){
//    continue;
//  };
//  if(i%7==0){
//    alert(i);
//    break;
//  }
//  consol.log(i);
//}

let array = ['string',212,3,4,3,true]

for(let i = 0; i < array.length;i++){
    (array[i]);
}

let s = 0;
for(let i = 0; i < array.length;i++){
    s+=array[i];
}