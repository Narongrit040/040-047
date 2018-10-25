
$(function() {

    $.ajax({
        
        type: "GET",
        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables",

    }).then(function (dataType) {
        
        findData(dataType);
        console.log(dataType);
    });

    function findData(dataType){

        $('#pinFirst').append(dataType[6].Name);

    }


});

function queueCode1(){
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
var dataQueueId = [];
    function findData2(dataType) {
        for(var j = 0 ; j<dataType.length ; j++){
          
          dataStoreTable.push(dataType[j].TypeTable); 
          dataStoreName.push(dataType[j].Name);  
          dataStoreStatus.push(dataType[j].Status);  
          dataTableId.push(dataType[j].Id);
          dataQueueId.push(dataType[j].IdQueue); 
        }
    }

    $.ajax({
        
        type: "GET",
        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Queues",

    }).then(function (dataType) {
        
        findData(dataType);
        console.log(dataType);
    });
    function findData(dataType){
        var code = parseInt($('#queueCode').val());
            for(var i = 0 ; i<dataType.length ; i++){
                if(dataType[i].Code == code){
                   
                        var ID = parseInt(dataQueueId[6]);
                        if(ID == dataType[i].Id){

                            $('#pinSecond').append("Name " +dataType[i].Name+"\nMember: " +dataType[i].No +"\nPaymentStatus: " +dataType[i].PaymentStaus);
                          
                          
                            $('#pinThird').append('<ons-button id="Order" onclick="send()">Order</ons-button>');
                          
                            return false;
                        }else{
                            
                            continue;
                        }
                    
                }
            }
            $('#pinSecond').append('You are not in this table');

    }

}

function send(){
    $.ajax({
        
        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "GET",
        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables",

    }).then(function (dataType) {
        
        window.location.href = 'FoodMenu.html?id='+dataType[6].IdQueue;
    });
}