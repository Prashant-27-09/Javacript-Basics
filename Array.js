 // array
 var arr = [1, 2, 3, 4, 5];
 console.log(arr);

 //Nested array ,Multediamentaional array
 var arr = [
   ["pooja", 19],
   ["s", 20],
 ];
 console.log(arr);

 var arr = [
   ["pooja", 19], //array of array
   ["s", 20],
   [1, 2, 3],
 ];
 console.log("age is " + arr[0][1]);

 //multiple array Function

 //**********Push():push at back*********

 var array_1 = [
   ["prashant", 19],
   ["ravi", 20],
   [1, 2, 3],
 ];
 array_1.push(["abhi", 21]); //push
 console.log("array_1 " + array_1);

 //**********Unshift() : push element at front*********
 var array_4 = [
   [1, 2, 3],
   [4, 5, 6],
   [8, 9, 10],
   [11, 12, 13],
 ];
 array_4.unshift([-2, -1, 0]);
 console.log(array_4);

 //**********splice() : add item at some point in existing array*********
 var firstbt = ["mango", "apple", "bananan", "kivi"];
 firstbt.splice(2, 0, "chiku"); //splice(index_at which insert,no_of_delte item ,new item);
 console.log(firstbt);
 0;
 //**********Pop() : from back*********
 var array_2 = [
   ["nikki", 19],
   ["lovely", 20],
   [1, 2, 3],
 ];
 array_1.pop(); //POP
 console.log("array_2 " + array_2);

 //**********Shift() : removed first element *********
 var array_3 = [
   ["nikki", 19],
   ["lovely", 20],
   [1, 2, 3],
 ];
 var removed = array_3.shift(); //shift element in removed
 console.log(removed); //shift element in removeds.
 console.log(array_3);

 //**********slice() : create a slice of a array *********
 let fruits = ["apple", "banana", "orange"];

 let Bt = fruits.slice(0, 2); // s;ice(start,after end )
 console.log(Bt); //  apple , banana