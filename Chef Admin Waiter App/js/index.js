
  document.addEventListener('prechange', function(event) {
    document.querySelector('ons-toolbar .center')
      .innerHTML = event.tabItem.getAttribute('label');
  });
  
 ///////////////////////////////////////////////////////////////////////////////////

document.addEventListener('prechange', function (event) {
    document.querySelector('ons-toolbar .center')
        .innerHTML = event.tabItem.getAttribute('label');
});

function myMember1() {
    document.getElementById("number123").value = "1";
    ons.notification.alert('รับบัตรคิวสำหรับ 1 คน');
    $("#checkTicket").show();
    generateSerial();

}
function myMember2() {
    document.getElementById("number123").value = "2";
    ons.notification.alert('รับบัตรคิวสำหรับ 2 คน');
    $("#checkTicket").show();
    generateSerial();
}
function myMember3() {
    document.getElementById("number123").value = "3";
    ons.notification.alert('รับบัตรคิวสำหรับ 3 คน');
    $("#checkTicket").show();
    generateSerial();
}
function myMember4() {
    document.getElementById("number123").value = "4";
    ons.notification.alert('รับบัตรคิวสำหรับ 4 คน');
    $("#checkTicket").show();
    generateSerial();
}
function myMember5() {
    document.getElementById("number123").value = "5";
    ons.notification.alert('รับบัตรคิวสำหรับ 5 คน');
    $("#checkTicket").show();
    generateSerial();
}
function myMember6() {
    document.getElementById("number123").value = "6";
    ons.notification.alert('รับบัตรคิวสำหรับ 6 คน');
    $("#checkTicket").show();
    generateSerial();
}

  function generateSerial() {
    "use strict";
    
    var // all variable
        // myElementSerial = document.getElementById("serial"),
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
    
    // alert(echoSerial); 
// queue
  var time = new Date().toLocaleTimeString();
  var date12 = new Date().toLocaleDateString();
  var numberPeople = $('#number123').val();

console.log(time+" "+date12+" "+numberPeople);
var number = parseInt(echoSerial);
var numberInt = parseInt(numberPeople);
if(numberInt > 6 ){
alert('number out of control!!!');
return false;
}
$.ajax({
        
    //CP1. Complete Ajax Code to GET ALL pin data 
    type: "GET",
    url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Queues",

}).then(function (dataQueue) {
    
    findDataQueue(dataQueue);
    console.log(dataQueue);
});
var nameQueue = [];
function findDataQueue(dataQueue){
    for(var j = 0 ; j<dataQueue.length ; j++){
      nameQueue.push(dataQueue[j].Name);
    }

}

    $.ajax({
        
        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "GET",
        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables",

    }).then(function (dataType) {
        
        findData2(dataType);
        console.log(dataType);
    });

  
    function findData2(dataType) {
      var   nameCode;

        for(var j = 0 ; j<dataType.length ; j++){

                      if(numberInt <=2 && dataType[j].Status == 'false' ){
                          
                 nameCode  = 'A' + Math.floor(Math.random() * 1000);
                 console.log(nameCode);
               continue;

                }else if (numberInt <= 4 && dataType[j].Status == 'false'){
                 nameCode  = 'B' +Math.floor(Math.random() * 1000);
                 console.log(nameCode);
                 continue;
                }else if(numberInt <=8 && dataType[j].Status == 'false'){
                    nameCode = 'C' +Math.floor(Math.random() * 1000);
                    console.log(nameCode);
                  continue;
                }else if(numberInt <=2 && dataType[j].Status == 'true'){
                        nameCode = 'A' +Math.floor(Math.random() * 1000);
                        console.log(nameCode);
                      continue;
                }else if(numberInt <=4  && dataType[j].Status == 'true'){
                        nameCode = 'B' + Math.floor(Math.random() * 1000);
                        console.log(nameCode);
                        continue;
                    
                }else if(numberInt <=8  && dataType[j].Status == 'true'){
                    nameCode = 'C' + Math.floor(Math.random() * 1000);
                    console.log(nameCode);
                    continue;
                
            }
                
        }

            for(var i = 0 ; i<dataType.length ; i++){
                for(var k=0 ; k<nameQueue.length ; k++){
                    if(nameQueue[k] == dataType[i].Name){
                        findData2(dataType);
                    }
                }
            }
        

        data.innerText = '';
        data.innerText = 'Name: '+nameCode+' Code: ' + echoSerial;



        var formdata = {
            
            Code: number,
            No: numberInt,
            Name: nameCode,   
            TimeCheckIn: time, 
            Status: 'true', 
            WaitTime: time,        
            TimeCheckOut: time,
            Date: date12,
            PaymentStaus: 'false',
            TableStatus: 1

        }

        console.log(formdata);
      
      
   
    $.ajax({
        
                //CP1. Complete Ajax Code to GET ALL pin data 
                type: "POST",
                url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Queues",
                data: formdata
            }).then(function (data) {

            
           
           console.log('post');
               });
               
    }


                       
      
            
 
}
function skipAuto() {
    $.ajax({

        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "GET",
        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Queues",

    }).then(function (dataType) {

        findData3(dataType);
        console.log(dataType);
    });

    function findData3(dataType) {

        //     var code =  parseInt($('#serialGenerate').val());
        for (var i = 0; i < dataType.length; i++) {
            if (dataType[i].TableStatus == 4) {
                var formdata = {

                    Code: dataType[i].Code,
                    No: dataType[i].No,
                    Name: dataType[i].Name,
                    TimeCheckIn: dataType[i].TimeCheckIn,
                    Status: dataType[i].Status,
                    WaitTime: dataType[i].WaitTime,
                    TimeCheckOut: dataType[i].TimeCheckOut,
                    Date: dataType[i].Date,
                    PaymentStaus: dataType[i].PaymentStaus,
                    TableStatus: 1
                }
console.log(formdata);
                $.ajax({

                    //CP1. Complete Ajax Code to GET ALL pin data 
                    type: "POST",
                    url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Queues",
                    data: formdata
                }).then(function (data) {



                });


                $.ajax({

                    //CP1. Complete Ajax Code to GET ALL pin data 
                    type: "delete",
                    url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Queues/" + dataType[i].Id,

                }).then(function (data) {
                   
console.log('edit');

                });
                
           
     return false;
     
            }
           
        }
        
        location.reload();

    }

}
function countdown(secs,elem) {
    var element = document.getElementById(elem);
    element.innerHTML = 'Waiting for customer to comfirm about '+secs+' seconds';
    if(secs < 1){
        clearTimeout(timer);
        
        $.ajax({
        
            //CP1. Complete Ajax Code to GET ALL pin data 
            type: "GET",
            url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Queues",
    
        }).then(function (dataType) {
            
            findData4(dataType);
            console.log(dataType);
        });
    
        function findData4(dataType){
         //   var code =  parseInt($('#serialGenerate').val());
            for( var i = 0 ; i < dataType.length; i++) {
                if( dataType[i].TableStatus == 4){

                    $.ajax({
        
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "delete",
                        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Queues/" + dataType[i].Id,
                
                    }).then(function (data) {
                        
                        
                      alert("Queue has been cancel");
                        
                    });
                     return false;
                }
                
            }
            window.location.href = 'index.html';
                   

        }

    }
    secs--;
    var timer = setTimeout('countdown('+secs+',"'+elem+'")',1000);

}

function selectQueue(){

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
             
            
             
            
                     for ( i = 0; i < data.length; i++) {
                         if(data[i].TableStatus == 1){
                            pin1.innerHTML +=' '+ data[i].Name;
                         }else{
                          
                         }
                           
                    }
                    for(var j=0 ; j< data.length ; j++){
                        if(data[j].TableStatus == 1){
                            pinFirst.innerHTML = data[j].Name;
                            pinFirst1.innerHTML = data[j].Name
                            $('#numberTable').val(data[j].No); 

                            var formdata = {
                                Id: data[j].Id,
                                Code: data[j].Code,
                                No: data[j].No,
                                Name: data[j].Name,   
                                TimeCheckIn: data[j].TimeCheckIn, 
                                Status: 'true', 
                                WaitTime: data[j].WaitTime,        
                                TimeCheckOut: data[j].TimeCheckOut,
                                Date: data[j].Date,
                                PaymentStaus: 'false',
                                TableStatus: 4
                            }
                            console.log(formdata);    
    
                            $.ajax({
                            type: "PUT",
                            url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Queues/"+data[j].Id,
                            data: formdata
                            }).then(function (data) {
            
                            console.log('Edited');
                            });


                            return false; 
                         }else{
                          
                         }
                    }
                  
                    
            }
           
            // setInterval(selectQueue,3000);
            pin1.innerHTML = '';
            
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
var dataTableId = [];
    function findData2(dataType) {
        for(var j = 0 ; j<dataType.length ; j++){
          
          dataStoreTable.push(dataType[j].TypeTable); 
          dataStoreName.push(dataType[j].Name);  
          dataStoreStatus.push(dataType[j].Status);  
          dataTableId.push(dataType[j].Id); 
        }
    }

    $.ajax({
        
                //CP1. Complete Ajax Code to GET ALL pin data 
                type: "GET",
                url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Queues",
        
            }).then(function (data) {
                
                findData123(data);
                console.log(data);
                
            });

            function findData123(data) {
             
              var serialVerifying = parseInt($('#serialGenerate').val());
                
                     for ( var i = 0 ; i < data.length; i++) {

                         if(data[i].Code == serialVerifying && data[i].TableStatus == 4){
                             
                            for(var k=0 ; k<dataStoreName.length ; k++){
                                
                              
                         if(dataStoreTable != '0' &&  0 < data[i].No  && data[i].No <= dataStoreTable[k] && dataStoreTable[k] <= 2 && dataStoreStatus[k] == 'false'){
                         
                            pinlist.innerHTML = '';
                            pinlist.innerHTML = "Table: "+dataStoreName[k] +"<br>"+"Table Type: "+dataStoreTable[k]+' people';
                           

                            console.log(dataStoreName[k]+" "+dataStoreTable[k]+" "+data[i].No);
                                        var numberTable ;

                                        if(data[i].TableStatus == '4' ){
                                            numberTable = 2;
                                        }else{
                                            numberTable = 4;
                                        }

                                        var numberInt = parseInt(numberTable);
                                        // var time = new Date().toLocaleTimeString();
                                        // var date12 = new Date().toLocaleDateString();
                                        
                                        var formdata = {
                                            Id: data[i].Id,
                                            Code: data[i].Code,
                                            No: data[i].No,
                                            Name: data[i].Name,   
                                            TimeCheckIn: data[i].TimeCheckIn, 
                                            Status: 'true', 
                                            WaitTime: data[i].WaitTime,        
                                            TimeCheckOut: data[i].TimeCheckOut,
                                            Date: data[i].Date,
                                            PaymentStaus: 'false',
                                            TableStatus: numberInt
                                        }
                                        console.log(formdata);    

                                        $.ajax({
                                        type: "PUT",
                                        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Queues/"+data[i].Id,
                                        data: formdata
                                        }).then(function (data) {
                        
                                        console.log('Edited');
                                        });
                                        

                                                    // update table
                                                    var formdata2 ={
                                                        Id: dataTableId[k],
                                                        IdQueue: data[i].Id,
                                                        Name: dataStoreName[k],
                                                        Status: 'true',
                                                        TypeTable:  dataStoreTable[k]
                                                    }

                        
                                                    $.ajax({
                                                        type: "PUT",
                                                        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables/"+dataTableId[k],
                                                        data: formdata2
                                                    }).then(function (data) {
                                                        console.log('Edited');
                                                    });
                                                    $('#table').append('');
                                                    $('#table').append('<button id="Order" onclick="table()">Order</button>');

                            return false;

                         

                                    
                         }else if(dataStoreTable != '0' &&  2 <= data[i].No  && data[i].No <= dataStoreTable[k] &&  dataStoreTable[k] <= 4 && dataStoreStatus[k] == 'false'){
                            pinlist.innerHTML = '';
                            pinlist.innerHTML = "Table: "+dataStoreName[k] +" "+"Table Type: "+dataStoreTable[k]+' people';
                            console.log(dataStoreName[k]+" "+dataStoreTable[k]+" "+data[i].No);

                           
                            var numberTable ;

                            if(data[i].TableStatus == '4' ){
                                numberTable = 2;
                            }else{
                                numberTable = 4;
                            }

                            var numberInt = parseInt(numberTable);
                            // var time = new Date().toLocaleTimeString();
                            // var date12 = new Date().toLocaleDateString();
                            
                            var formdata = {
                                Id: data[i].Id,
                                Code: data[i].Code,
                                No: data[i].No,
                                Name: data[i].Name,   
                                TimeCheckIn: data[i].TimeCheckIn, 
                                Status: 'true', 
                                WaitTime: data[i].WaitTime,        
                                TimeCheckOut: data[i].TimeCheckOut,
                                Date: data[i].Date,
                                PaymentStaus: 'false',
                                TableStatus: numberInt
                            }
                            console.log(formdata);    

                            $.ajax({
                            type: "PUT",
                            url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Queues/"+data[i].Id,
                            data: formdata
                            }).then(function (data) {
            
                            console.log('Edited');
                            });
                            

                                        // update table
                                        var formdata2 ={
                                            Id: dataTableId[k],
                                            IdQueue: data[i].Id,
                                            Name: dataStoreName[k],
                                            Status: 'true',
                                            TypeTable:  dataStoreTable[k]
                                        }

            
                                        $.ajax({
                                            type: "PUT",
                                            url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables/"+dataTableId[k],
                                            data: formdata2
                                        }).then(function (data) {
                                            console.log('Edited');
                                        });
                                    
                                        $('#table').append('');
                                        $('#table').append('<button id="Order" onclick="table()">Order</button>');
                                        return false;

     
                        }else if (dataStoreTable != '0' &&  4 <= data[i].No  && data[i].No <= dataStoreTable[k] &&  dataStoreTable[k] <= 6 && dataStoreStatus[k] == 'false'){
                            pinlist.innerHTML = '';
                            pinlist.innerHTML = "Table: "+dataStoreName[k] +" "+"Table Type: "+dataStoreTable[k]+' people';
                            console.log(dataStoreName[k]+" "+dataStoreTable[k]+" "+data[i].No+" "+data[i].No);

                           

                            var numberTable ;

                            if(data[i].TableStatus == '4' ){
                                numberTable = 2;
                            }else{
                                numberTable = 4;
                            }

                            var numberInt = parseInt(numberTable);
                            // var time = new Date().toLocaleTimeString();
                            // var date12 = new Date().toLocaleDateString();
                            
                            var formdata = {
                                Id: data[i].Id,
                                Code: data[i].Code,
                                No: data[i].No,
                                Name: data[i].Name,   
                                TimeCheckIn: data[i].TimeCheckIn, 
                                Status: 'true', 
                                WaitTime: data[i].WaitTime,        
                                TimeCheckOut: data[i].TimeCheckOut,
                                Date: data[i].Date,
                                PaymentStaus: 'false',
                                TableStatus: numberInt
                            }
                            console.log(formdata);    

                            $.ajax({
                            type: "PUT",
                            url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Queues/"+data[i].Id,
                            data: formdata
                            }).then(function (data) {
            
                            console.log('Edited');
                            });
                            

                                        // update table
                                        var formdata2 ={
                                            Id: dataTableId[k],
                                            IdQueue: data[i].Id,
                                            Name: dataStoreName[k],
                                            Status: 'true',
                                            TypeTable:  dataStoreTable[k]
                                        }

            
                                        $.ajax({
                                            type: "PUT",
                                            url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables/"+dataTableId[k],
                                            data: formdata2
                                        }).then(function (data) {
                                            console.log('Edited');
                                        });

                                        $('#table').append('');
                                        $('#table').append('<button id="Order" onclick="table()">Order</button>');

                                    return false;

                            
                        }else if (dataStoreTable != '0' && dataStoreStatus[k] == 'true'){
                            var numberTable ;

                            if(data[i].TableStatus == '4' ){
                                numberTable = 3;
                            }else{
                                numberTable = 4;
                            }

                            var numberInt = parseInt(numberTable);
                            // var time = new Date().toLocaleTimeString();
                            // var date12 = new Date().toLocaleDateString();
                            
                            var formdata = {
                                Id: data[i].Id,
                                Code: data[i].Code,
                                No: data[i].No,
                                Name: data[i].Name,   
                                TimeCheckIn: data[i].TimeCheckIn, 
                                Status: 'false', 
                                WaitTime: data[i].WaitTime,        
                                TimeCheckOut: data[i].TimeCheckOut,
                                Date: data[i].Date,
                                PaymentStaus: 'false',
                                TableStatus: numberInt
                            }
                            console.log(formdata);    

                            $.ajax({
                            type: "PUT",
                            url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Queues/"+data[i].Id,
                            data: formdata
                            }).then(function (data) {
            
                            console.log('Edited');
                            });
                            pinlist.innerHTML = 'Waiting';
                            continue;

                        }

                        }
                      
                        return false;
                      
                    }

                    }
                    pinlist.innerHTML = 'Wait for the first Queue inorder to comfirm!!!';
            
            }


}


function skip(){
 $.ajax({
        
        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "GET",
        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Queues",

    }).then(function (dataType) {
        
        findData3(dataType);
        console.log(dataType);
    });

       function findData3(dataType){

       //     var code =  parseInt($('#serialGenerate').val());
            for( var i = 0 ; i < dataType.length; i++) {
                if(dataType[i].TableStatus == 4){
var formdata ={
    
    Code: dataType[i].Code,
    No: dataType[i].No,
    Name: dataType[i].Name,   
    TimeCheckIn: dataType[i].TimeCheckIn, 
    Status: dataType[i].Status, 
    WaitTime: dataType[i].WaitTime,        
    TimeCheckOut: dataType[i].TimeCheckOut,
    Date: dataType[i].Date,
    PaymentStaus: dataType[i].PaymentStaus,
    TableStatus: 1
              }
                    $.ajax({
        
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "POST",
                        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Queues",
                        data: formdata
                    }).then(function (data) {
                        
                    
                        
                    });

                    $.ajax({
        
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "delete",
                        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Queues/" + dataType[i].Id,
                
                    }).then(function (data) {
                       
                    
                        
                    });
                    alert('Skip Complete !!!');
                    window.location.href = 'index.html';
                    return false;
                }
                
            }


        }
       

}

function delete1() {
    if (confirm('Are you sure you want to cancel it?')) {

        $.ajax({
        
            //CP1. Complete Ajax Code to GET ALL pin data 
            type: "GET",
            url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Queues",
    
        }).then(function (dataType) {
            
            findData4(dataType);
            console.log(dataType);
        });
    
        function findData4(dataType){
         //   var code =  parseInt($('#serialGenerate').val());
            for( var i = 0 ; i < dataType.length; i++) {
                if(dataType[i].TableStatus == 4){

                    $.ajax({
        
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "delete",
                        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Queues/" + dataType[i].Id,
                
                    }).then(function (data) {
                        
                        
                        
                    });
                    alert('cancel Complete !!!');
                    window.location.href = 'index.html';
                     return false;
                }
                
            }

        }

    } else {
        // Do nothing!
        
        
    }
}

$(function(){

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
var dataTableId = [];
    function findData2(dataType) {
        for(var j = 0 ; j<dataType.length ; j++){
          
          dataStoreTable.push(dataType[j].TypeTable); 
          dataStoreName.push(dataType[j].Name);  
          dataStoreStatus.push(dataType[j].Status);  
          dataTableId.push(dataType[j].Id); 
        }
    }

    
    $.ajax({
        
        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "GET",
        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Queues",

    }).then(function (data) {
        
        findDataQueue(data);
        console.log(data);
        
    });

        function findDataQueue(data){

            for ( var i = 0 ; i < data.length; i++) {
                if(data[i].TableStatus == 3 ){
                    for(var k=0 ; k<dataStoreName.length ; k++){

                        if(dataStoreTable != '0' &&  0 < data[i].No  && data[i].No <= dataStoreTable[k] && dataStoreTable[k] <= 2 && dataStoreStatus[k] == 'false'){
    
                            console.log(dataStoreName[k]+" "+dataStoreTable[k]+" "+data[i].No);
                                        var numberTable ;
    
                                        if(data[i].TableStatus == '3' ){
                                            numberTable = 1;
                                        }else{
                                            numberTable = 5;
                                        }
    
                                        var numberInt = parseInt(numberTable);
                            
                                        
                                        var formdata = {
                                            Id: data[i].Id,
                                            Code: data[i].Code,
                                            No: data[i].No,
                                            Name: data[i].Name,   
                                            TimeCheckIn: data[i].TimeCheckIn, 
                                            Status: 'false', 
                                            WaitTime: data[i].WaitTime,        
                                            TimeCheckOut: data[i].TimeCheckOut,
                                            Date: data[i].Date,
                                            PaymentStaus: 'false',
                                            TableStatus: numberInt
                                        }
                                        console.log(formdata);    
    
                                        $.ajax({
                                        type: "PUT",
                                        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Queues/"+data[i].Id,
                                        data: formdata
                                        }).then(function (data) {
                        
                                        console.log('Edited');
                                        });
                                        
    
                            return false;
                                    
                         }else if(dataStoreTable != '0' &&  2 <= data[i].No  && data[i].No <= dataStoreTable[k] &&  dataStoreTable[k] <= 4 && dataStoreStatus[k] == 'false'){
                        
                            var numberTable ;
    
                            if(data[i].TableStatus == '3' ){
                                numberTable = 1;
                            }else{
                                numberTable = 5;
                            }
    
                            var numberInt = parseInt(numberTable);
                            // var time = new Date().toLocaleTimeString();
                            // var date12 = new Date().toLocaleDateString();
                            
                            var formdata = {
                                Id: data[i].Id,
                                Code: data[i].Code,
                                No: data[i].No,
                                Name: data[i].Name,   
                                TimeCheckIn: data[i].TimeCheckIn, 
                                Status: 'false', 
                                WaitTime: data[i].WaitTime,        
                                TimeCheckOut: data[i].TimeCheckOut,
                                Date: data[i].Date,
                                PaymentStaus: 'false',
                                TableStatus: numberInt
                            }
                            console.log(formdata);    
    
                            $.ajax({
                            type: "PUT",
                            url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Queues/"+data[i].Id,
                            data: formdata
                            }).then(function (data) {
            
                            console.log('Edited');
                            });
                            
                                        
                          return false;
    
     
                        }else if (dataStoreTable != '0' &&  4 <= data[i].No  && data[i].No <= dataStoreTable[k] &&  dataStoreTable[k] <= 6 && dataStoreStatus[k] == 'false'){  
    
                            var numberTable ;
    
                            if(data[i].TableStatus == '3' ){
                                numberTable = 1;
                            }else{
                                numberTable = 5;
                            }
    
                            var numberInt = parseInt(numberTable);
    
                            var formdata = {
                                Id: data[i].Id,
                                Code: data[i].Code,
                                No: data[i].No,
                                Name: data[i].Name,   
                                TimeCheckIn: data[i].TimeCheckIn, 
                                Status: 'false', 
                                WaitTime: data[i].WaitTime,        
                                TimeCheckOut: data[i].TimeCheckOut,
                                Date: data[i].Date,
                                PaymentStaus: 'false',
                                TableStatus: numberInt
                            }
                            console.log(formdata);    
    
                            $.ajax({
                            type: "PUT",
                            url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Queues/"+data[i].Id,
                            data: formdata
                            }).then(function (data) {
            
                            console.log('Edited');
                            });
                
                                    return false;
                            
                        }
    
                       }
                }
                   
            }

        }

});

function table(){
    window.location.href = 'table.html';
}