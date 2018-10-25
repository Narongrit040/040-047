function generateSerial() {
    "use strict";
    
    var // all variable
        myElementSerial = document.getElementById("serial"),
        charsLower = "0123456789",
        charsUpper = charsLower.toUpperCase(),
        allChars = charsLower.concat(charsUpper, "0123456789"),
        echoSerial = "",
        serialLength = 8,
        randomSerial,
        i;
    
    
    for (i = 0; i < serialLength; i++) {
        
        randomSerial = Math.floor(Math.random() * allChars.length);
    
        echoSerial += allChars.slice(randomSerial, randomSerial + 1);
    }
    
    myElementSerial.innerHTML = echoSerial;

  var time = new Date().toLocaleTimeString();
  var date12 = new Date().toLocaleDateString();
  var numberPeople = $('#number123').val();

// console.log(time+" "+date12+" "+numberPeople);
var number = parseInt(echoSerial);
var numberInt = parseInt(numberPeople);
console.log(echoSerial);
        var formdata = {
        
            Code: number,
            No: numberInt,   
            TimeCheckIn: time, 
            Status: 'true', 
            WaitTime: time,        
            TimeCheckOut: time,
            Date: date12,
            PaymentStaus: 'false',
            TableStatus: number     
        }

        console.log(formdata);
      
      
   
    $.ajax({
        
                //CP1. Complete Ajax Code to GET ALL pin data 
                type: "POST",
                url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Queues",
                data: formdata
            }).then(function (data) {

            
           
           
               });
                       
        //  function findData(data){

        //     for(var i = 0 ; i< data.length ; i++){

                // if(data[i].Status == 'true' && data[i].No == numberInt){
                //     var waiting;
                //    var queue1 = [];
                //    var queue2 = [];
                //    var queue3 = [];
                //    var queue4 = [];
                //    var queue5 = [];
                //    var queueFinal = [];

                //          if(numberInt == 1){
                //          var serial = 'A'+ numberInt + Math.random().toFixed(3)*1000;
                //          myElementSerial.innerHTML = 'Waiting '+serial;
                //          queue1.push(serial);

                      
                //          textQueue.innerText +=' '+ queue1;
                     

                //    }else if(numberInt == 2){
                //     var serial = 'B'+ numberInt + Math.random().toFixed(3)*1000;
                //     myElementSerial.innerHTML = 'Waiting '+serial;
                //     queue2.push(serial);

                   
                //     textQueue.innerText += ' '+ queue2;
              
                   
                //    }else if(numberInt == 3){
                //     var serial = 'C'+ numberInt + Math.random().toFixed(3)*1000;
                //     myElementSerial.innerHTML = 'Waiting '+serial;
                //     queue3.push(serial);
                    
                //     textQueue.innerText += ' '+queue3;
                 
                   
                //    }else if(numberInt == 4){
                //     var serial = 'D'+ numberInt + Math.random().toFixed(3)*1000;
                //     myElementSerial.innerHTML = 'Waiting '+serial;
                //     queue4.push(serial);
                
                //         textQueue.innerText += ' '+ queue4;
                 
                  
                //    }else if(numberInt == 5){
                //     var serial = 'E'+ numberInt + Math.random().toFixed(3)*1000;
                //     myElementSerial.innerHTML = 'Waiting '+serial;
                //     queue5.push(serial);
                    
                //           textQueue.innerText +=' '+ queue5;
                    

                //    }else {

                //     serial.innerHTML = 'Table limited!!!!!!';

                //    }
                   

                //     break;
                    
                // }else if(data[i].Status == 'false' && data[i].No == numberInt ){

                //     myElementSerial.innerHTML = data[i].Code;
                   
                //     break;
        
                // }else{

                //     myElementSerial.innerHTML = 'Table limited!!!!!!';

                //     continue;

                // }





        //      }
        //  }
            
 
}


function verifying() {
    $.ajax({
        
        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "GET",
        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables",

    }).then(function (dataType) {
        
        findData2(dataType);
        console.log(dataType);
    });
var dataStoreTable =[];
var dataStoreName = [];
var dataStoreStatus = [];
    function findData2(dataType) {
        for(var j = 0 ; j<dataType.length ; j++){
          dataStoreTable.push(dataType[j].TypeTable); 
          dataStoreName.push(dataType[j].Name);  
          dataStoreStatus.push(dataType[j].Status);   
        }
    }

    $.ajax({
        
                //CP1. Complete Ajax Code to GET ALL pin data 
                type: "GET",
                url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Queues",
        
            }).then(function (data) {
                
                findData(data);
                console.log(data);
            });

            function findData(data) {
                
                var i =0;
             var k = 0;
              var serialVerifying = parseInt($('#serialGenerate').val());
                     for ( i = 0; i < data.length; i++) {
                         if(data[i].Code == serialVerifying){
                            for(k=0 ; k<dataStoreName.length ; k++){

                         if(data[i].No == dataStoreTable[k] && dataStoreStatus[k] == 'false'){
                         
                            
                            $('#pinlist').append(dataStoreName[k] +" "+dataStoreTable[k]);
                            return false;

                         }else if (data[i].No == dataStoreTable[k] && dataStoreStatus[k] == 'true'){
                                   var waiting;
                                  var queue1 = [];
                                  var queue2 = [];
                                  var queue3 = [];
                                  var queue4 = [];
                                  var queue5 = [];
                                  var queueFinal = [];
                         if(data[i].No == 1){
                         var serial = 'A'+ numberInt + Math.random().toFixed(3)*1000;
                         myElementSerial.innerHTML = 'Waiting '+serial;
                         queue1.push(serial);

                      
                         textQueue.innerText +=' '+ queue1;
                         return false;

                    }else if(data[i].No == 2){
                    var serial = 'B'+ numberInt + Math.random().toFixed(3)*1000;
                    myElementSerial.innerHTML = 'Waiting '+serial;
                    queue2.push(serial);

                   
                    textQueue.innerText += ' '+ queue2;
                    return false;
                   
                   }else if(data[i].No == 3){
                    var serial = 'C'+ numberInt + Math.random().toFixed(3)*1000;
                    myElementSerial.innerHTML = 'Waiting '+serial;
                    queue3.push(serial);
                    
                    textQueue.innerText += ' '+queue3;
                    return false;
                   
                   }else if(data[i].No == 4){
                    var serial = 'D'+ numberInt + Math.random().toFixed(3)*1000;
                    myElementSerial.innerHTML = 'Waiting '+serial;
                    queue4.push(serial);
                
                        textQueue.innerText += ' '+ queue4;
                        return false;
                  
                   }else if(data[i].No == 5){
                    var serial = 'E'+ numberInt + Math.random().toFixed(3)*1000;
                    myElementSerial.innerHTML = 'Waiting '+serial;
                    queue5.push(serial);
                    
                    textQueue.innerText +=' '+ queue5;
                    return false;

                   }

     
                }
                        }
                    }
                    }
            
            }

}
