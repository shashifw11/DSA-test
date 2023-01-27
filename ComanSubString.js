var str1 = "masaischool" ; 
var str2 = "scholorship" ; 
var sub1 = [] ; 
 var sub2 = [] ;  
for(let i = 0 ; i<str1.length ; i++){
     var sub = [] ; 
    for(let j = i ;j< str1.length ; j++){
             sub.push(str1[j]);
           
            sub1.push(sub.join("")) ;

    }
     

}

for(let i = 0 ; i<str2.length ; i++){
    var sub = [] ; 
   for(let j = i ;j< str2.length ; j++){
            sub.push(str2[j]);
          
           sub2.push(sub.join("")) ;

   }
    

}
  var max = 0 ; 
  var comanSubString = [] ; 
  for(let i = 0 ; i<sub1.length ; i++){

    for(let j = 0 ; j<sub2.length ; j++){
            if(sub1[i] === sub2[j]){
                 var length = sub1[i].length ; 
                  if(length>max){
                    max = length ;   
                    comanSubString.pop();
                    comanSubString.push(sub1[i]);
                  }
            }
    }
  }

  console.log(comanSubString);
