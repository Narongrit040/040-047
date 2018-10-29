

  document.addEventListener('prechange', function(event) {
    document.querySelector('ons-toolbar .center')
      .innerHTML = event.tabItem.getAttribute('label');
  });
  


  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};





  ons.ready(function () {

    initTimeline();
    
    var tabar = document.querySelector('ons-tabbar');
    tabar.addEventListener('postchange', function (event) {
        if (event.index == 0) {
            initTimeline(event);
        }
    });

    function initTimeline(event) {

        var url = "https://foodstepapi20180810123018.azurewebsites.net/Api/Foods";
        $.get(url, function (data) {

            $.each(data, function (index, item) {

            if(item.Type == 'ต้ม'){
                $.get('Food_Menu.html', function (template) {
                    var rendered = Mustache.render(template, item);
                    $("#addต้ม").append(rendered);
                });
           
            }else if(item.Type == 'ทอด'){
                    $.get('Food_Menu.html', function (template) {
                        var rendered = Mustache.render(template, item);
                        $("#addทอด").append(rendered);
                    });
            }else if(item.Type == 'ผัด'){
                    $.get('Food_Menu.html', function (template) {
                        var rendered = Mustache.render(template, item);
                        $("#addผัด").append(rendered);
                    });
            }else if(item.Type == 'เครื่องดื่ม'){
                    $.get('Food_Menu.html', function (template) {
                        var rendered = Mustache.render(template, item);
                        $("#addเครื่องดื่ม").append(rendered);
                    });
                }
            });
       
        });
    }

});


$(function () {
    $.ajax({

        type: "GET",
        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/TypeFoods",

    }).then(function (data) {

        addNewRow(data);
        console.log(data);
    });

    function addNewRow(data) {

        for (var i = 0; i < data.length; i++) {
            var row =    '<button class="tablinks" onclick="openCity(event, '+'menu'+data[i].Name+')">'+data[i].Name+'</button>';
            var col =   '<div id="menu'+data[i].Name+'" class="tabcontent"><h3>'+data[i].Name+'</h3><div id="add'+data[i].Name+'"></div></div>';
            $('#pinlist').append(row);
            $('#pinlist2').append(col);
        }



        
    }

});

// Socket io connection;
var socket;
function setup() {
    // connect to the server
    socket = io.connect('http://localhost:3000');
    socket.on('mouse', exportData);
}


function exportData(data){
    // add Menu_Comfirm
    ons.ready(function () {

    initTimeline();
    
    var tabar = document.querySelector('ons-tabbar');
    tabar.addEventListener('postchange', function (event) {
        if (event.index == 0) {
            initTimeline(event);
        }
    });
    
    function initTimeline(event) {

//         $.ajax({
        
//             //CP1. Complete Ajax Code to GET ALL pin data 
//             type: "GET",
//             url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Foods",
        
//         }).then(function (dataFood) {
            
//             findDataFood(dataFood);
//             console.log(dataFood);
//         });
//         var nameFood = [];
//         var foodPrice = [];
//         var foodImage = [];
//         function findDataFood(dataFood){
//             for(var j = 0 ; j<dataFood.length ; j++){
//               nameFood.push(dataFood[j].Name);
//               foodPrice.push(dataFood[j].Price);
//               foodImage.push(dataFood[j].Pictures);
//             }
        
//         }
//    $.ajax({
        
//             //CP1. Complete Ajax Code to GET ALL pin data 
//             type: "GET",
//             url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
//         }).then(function (dataType) {
            
//             findData4(dataType);
//             console.log(dataType);
//         });

//         function findData4(dataType){
//             var queueId = getUrlParameter('id');
//             var queueInt = parseInt(queueId);
//             for(var i =0 ; i<dataType.length ; i++){
//                 if(dataType[i].IdQueue == queueInt && dataType[i].CookStatus == 'ToComfirm'){
//                     $("#addComfirm").append('<ons-card class="post"><ons-list-item class="post_title"><div class="left"><div class="post-caption">Food:<h2>'+nameFood[dataType[i].idFood]+'</h2></div></div><div class="right"> <div class="post-caption" > <h2>'+foodPrice[dataType[i].idFood]+'</h2></div></div></ons-list-item><img  class="post-image" src="'+foodImage[dataType[i].idFood]+'" height="250" width="250">Amount: <div id="amountFood">'+dataType[i].Amount+'</div>Detail: <div id="Detial">'+dataType[i].Detail+'</div></ons-card>');
//                 }
//             }
//         }
     

           
        $.ajax({
        
            //CP1. Complete Ajax Code to GET ALL pin data 
            type: "GET",
            url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
        }).then(function (dataType) {
            
            findData4(dataType);
            console.log(dataType);
        });

        function findData4(dataType){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
    
            $.each(dataType, function (key, dataCart){
                     console.log(dataCart.IdQueue+" "+data.addQueue);
                        if(dataCart.IdQueue == queueInt && dataCart.CookStatus == 'ToComfirm'  ){
                        var url2 = "https://foodstepapi20180810123018.azurewebsites.net/Api/Foods";
                        $.get(url2, function (data) {
                      

                        $.each(data, function (index, item) {
                               var idfood = parseInt(dataCart.IdFood);
                           
                                
                                if (idfood == item.Id ){
                                    $.get('Menu_Comfirm.html', function (template) {
                                        var rendered = Mustache.render(template, item);
                                        
                                        
                                        $("#addComfirm").append(rendered);
                                        
                                        
                                    });
                                   
                                }                   
                        });
                
                    });
                
                            }
                            
                        });



                        
                }
        }
      
});
}

 
function showAdd(){
//send to server.js
 var data = 'showAdd';

 var socket = io.connect('http://localhost:3000');
 socket.emit('mouse', data);
}
// add id cart

function add1(){
    var amount = $('#amount1').val();
    var name = $('#nameFood1').val();
    var queueId = getUrlParameter('id');

   
    $.ajax({

        //CP3. Complete Ajax code to GET the selected pin (pinid)  
        type: "GET",
        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Foods",
    
    }).then(function (data) {
    
        findDataFood(data);
        console.log(data);
    
    });
        function findDataFood(data){
            var name = $('#nameFood1').val();
            var queueId = getUrlParameter('id');
            var amount = $('#amount1').val();
            var time = new Date().toLocaleTimeString();
            var dataDetail = $('#dataDetail1').val();
            console.log(dataDetail);
            
            for(var i = 0 ; i<data.length ; i++){
                 if(data[i].Name == name){
                   

                console.log(typeof dataDetail);

                    var formdata = {
                     
                        
                    IdQueue: queueId,
                    IdFood: data[i].Id,
                    Amount: amount,   
                    Time: time, 
                    CookStatus: 'ToComfirm', 
                    Detail: dataDetail, 
                    IdStaff: '',
                    IdChef: '',
                   CartStatus: 'false'
                        
                    }
                    console.log(formdata);    
                    $.ajax({
            
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "POST",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
                        data: formdata
                    }).then(function (data) {
        
                    
                   
                   console.log('post');
                   alert("Add");
                       });
       
                       return false;
                 }
            }
        
        }

         
}

function add3(){
    var amount = $('#amount3').val();
    var name = $('#nameFood3').val();
    var queueId = getUrlParameter('id');
    

    console.log(amount+" "+name);
    $.ajax({

        //CP3. Complete Ajax code to GET the selected pin (pinid)  
        type: "GET",
        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Foods",
    
    }).then(function (data) {
    
        findDataFood(data);
        console.log(data);
    
    });
        function findDataFood(data){
            var name = $('#nameFood3').val();
            var queueId = getUrlParameter('id');
            var amount = $('#amount3').val();
            var time = new Date().toLocaleTimeString();
            var dataDetail = $('#dataDetail3').val();
            console.log(dataDetail);
            
            for(var i = 0 ; i<data.length ; i++){
                 if(data[i].Name == name){
                    console.log(typeof dataDetail);
                    console.log(data[i].Id);

                    var formdata = {
                     
                        
                    IdQueue: queueId,
                    IdFood: data[i].Id,
                    Amount: amount,   
                    Time: time, 
                    CookStatus: 'ToComfirm', 
                    Detail: dataDetail, 
                    IdStaff: '',
                    IdChef: '',
                   CartStatus: 'false'
                        
                    }
                    console.log(formdata);    
                    $.ajax({
            
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "POST",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
                        data: formdata
                    }).then(function (data) {
        
                    
                   
                   console.log('post');
                   alert("Add");
                       });
                       return false;
                 }
            }
        }
}

function add4(){
    var amount = $('#amount4').val();
    var name = $('#nameFood4').val();
    var queueId = getUrlParameter('id');
   
    console.log(amount+" "+name);
    $.ajax({

        //CP3. Complete Ajax code to GET the selected pin (pinid)  
        type: "GET",
        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Foods",
    
    }).then(function (data) {
    
        findDataFood(data);
        console.log(data);
    
    });
        function findDataFood(data){
            var name = $('#nameFood4').val();
            var queueId = getUrlParameter('id');
            var amount = $('#amount4').val();
            var time = new Date().toLocaleTimeString();
            var dataDetail = $('#dataDetail4').val();
            console.log(dataDetail);
            
            for(var i = 0 ; i<data.length ; i++){
                 if(data[i].Name == name){
                    console.log(data[i].Id);
                    console.log(typeof dataDetail);
                    var formdata = {
                     
                        
                    IdQueue: queueId,
                    IdFood: data[i].Id,
                    Amount: amount,   
                    Time: time, 
                    CookStatus: 'ToComfirm', 
                    Detail: dataDetail, 
                    IdStaff: '',
                    IdChef: '',
                    CartStatus: 'false'
                        
                    }
                    console.log(formdata);    
                    $.ajax({
            
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "POST",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
                        data: formdata
                    }).then(function (data) {
        
                    
                   
                   console.log('post');
                   alert("Add");
                       });
                       return false;
                 }
            }
        }
}

function add5(){
     var amount = $('#amount5').val();
    var name = $('#nameFood5').val();
     var queueId = getUrlParameter('id');

    console.log(amount+" "+name);
    $.ajax({

        //CP3. Complete Ajax code to GET the selected pin (pinid)  
        type: "GET",
        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Foods",
    
    }).then(function (data) {
    
        findDataFood(data);
        console.log(data);
    
    });
        function findDataFood(data){
            var name = $('#nameFood5').val();
            var queueId = getUrlParameter('id');
            var amount = $('#amount5').val();
            var time = new Date().toLocaleTimeString();
            var dataDetail = $('#dataDetail5').val();
            console.log(dataDetail);
            
            for(var i = 0 ; i<data.length ; i++){
                 if(data[i].Name == name){
                    console.log(typeof dataDetail);
                    console.log(data[i].Id);

                    var formdata = {
                     
                        
                    IdQueue: queueId,
                    IdFood: data[i].Id,
                    Amount: amount,   
                    Time: time, 
                    CookStatus: 'ToComfirm', 
                    Detail: dataDetail, 
                    IdStaff: '',
                    IdChef: '',
                    CartStatus: 'false'
                   
                        
                    }
                    console.log(formdata);    
                    $.ajax({
            
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "POST",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
                        data: formdata
                    }).then(function (data) {
        
                    
                   
                   console.log('post');
                   alert("Add");
                       });
                       return false;
                 }
            }
        }
}

function add6(){
    var amount = $('#amount6').val();
    var name = $('#nameFood6').val();
     var queueId = getUrlParameter('id');

    console.log(amount+" "+name);
    $.ajax({

        //CP3. Complete Ajax code to GET the selected pin (pinid)  
        type: "GET",
        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Foods",
    
    }).then(function (data) {
    
        findDataFood(data);
        console.log(data);
    
    });
        function findDataFood(data){
            var name = $('#nameFood6').val();
            var queueId = getUrlParameter('id');
            var amount = $('#amount6').val();
            var time = new Date().toLocaleTimeString();
            var dataDetail = $('#dataDetail6').val();
           
            console.log(dataDetail);
            for(var i = 0 ; i<data.length ; i++){
                 if(data[i].Name == name){
                    console.log(data[i].Id);
                    console.log(typeof dataDetail);
                    var formdata = {
                     
                        
                    IdQueue: queueId,
                    IdFood: data[i].Id,
                    Amount: amount,   
                    Time: time, 
                    CookStatus: 'ToComfirm', 
                    Detail: dataDetail, 
                    IdStaff: '',
                    IdChef: '',
                    CartStatus: 'false'
                   
                        
                    }
                    console.log(formdata);    
                    $.ajax({
            
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "POST",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
                        data: formdata
                    }).then(function (data) {
        
                    
                   
                   console.log('post');
                   alert("Add");
                       });
                       return false;
                 }
            }
        }
}

function add7(){
    var amount = $('#amount7').val();
    var name = $('#nameFood7').val();
     var queueId = getUrlParameter('id');

    console.log(amount+" "+name);
    $.ajax({

        //CP3. Complete Ajax code to GET the selected pin (pinid)  
        type: "GET",
        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Foods",
    
    }).then(function (data) {
    
        findDataFood(data);
        console.log(data);
    
    });
        function findDataFood(data){
            var name = $('#nameFood7').val();
            var queueId = getUrlParameter('id');
            var amount = $('#amount7').val();
            var time = new Date().toLocaleTimeString();
            var dataDetail = $('#dataDetail7').val();
            console.log(dataDetail);
            
            for(var i = 0 ; i<data.length ; i++){
                 if(data[i].Name == name){
                    console.log(typeof dataDetail);
                    console.log(data[i].Id);

                    var formdata = {
                     
                        
                    IdQueue: queueId,
                    IdFood: data[i].Id,
                    Amount: amount,   
                    Time: time, 
                    CookStatus: 'ToComfirm', 
                    Detail: dataDetail, 
                    IdStaff: '',
                    IdChef: '',
                    CartStatus: 'false'
                   
                        
                    }
                    console.log(formdata);    
                    $.ajax({
            
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "POST",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
                        data: formdata
                    }).then(function (data) {
        
                    
                   
                   console.log('post');
                   alert("Add");
                       });
                       return false;
                 }
            }
        }
}

function add8(){
    var amount = $('#amount8').val();
    var name = $('#nameFood8').val();
    var queueId = getUrlParameter('id');
  
    console.log(amount+" "+name);
    $.ajax({

        //CP3. Complete Ajax code to GET the selected pin (pinid)  
        type: "GET",
        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Foods",
    
    }).then(function (data) {
    
        findDataFood(data);
        console.log(data);
    
    });
        function findDataFood(data){
            var name = $('#nameFood8').val();
            var queueId = getUrlParameter('id');
            var amount = $('#amount8').val();
            var time = new Date().toLocaleTimeString();
            var dataDetail = $('#dataDetail8').val();
           console.log(dataDetail);
            
            for(var i = 0 ; i<data.length ; i++){
                 if(data[i].Name == name){
                    console.log(data[i].Id);
                    console.log(typeof dataDetail);
                    var formdata = {
                     
                        
                    IdQueue: queueId,
                    IdFood: data[i].Id,
                    Amount: amount,   
                    Time: time, 
                    CookStatus: 'ToComfirm', 
                    Detail: dataDetail, 
                    IdStaff: '',
                    IdChef: '',
                    CartStatus: 'false'
                   
                        
                    }
                    console.log(formdata);    
                    $.ajax({
            
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "POST",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
                        data: formdata
                    }).then(function (data) {
        
                    
                   
                   console.log('post');
                   alert("Add");
                       });
                       return false;
                 }
            }
        }
}

function add9(){
    var amount = $('#amount9').val();
    var name = $('#nameFood9').val();
    var queueId = getUrlParameter('id');
  
    console.log(amount+" "+name);
    $.ajax({

        //CP3. Complete Ajax code to GET the selected pin (pinid)  
        type: "GET",
        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Foods",
    
    }).then(function (data) {
    
        findDataFood(data);
        console.log(data);
    
    });
        function findDataFood(data){
            var name = $('#nameFood9').val();
            var queueId = getUrlParameter('id');
            var amount = $('#amount9').val();
            var time = new Date().toLocaleTimeString();
            var dataDetail = $('#dataDetail9').val();
            console.log(dataDetail);
            
            for(var i = 0 ; i<data.length ; i++){
                 if(data[i].Name == name){
                    console.log(data[i].Id);
                    console.log(typeof dataDetail);
                    var formdata = {
                     
                        
                    IdQueue: queueId,
                    IdFood: data[i].Id,
                    Amount: amount,   
                    Time: time, 
                    CookStatus: 'ToComfirm', 
                    Detail: dataDetail, 
                    IdStaff: '',
                    IdChef: '',
                    CartStatus: 'false'
                        
                    }
                    console.log(formdata);    
                    $.ajax({
            
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "POST",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
                        data: formdata
                    }).then(function (data) {
        
                    
                   
                   console.log('post');
                   alert("Add");
                       });
                       return false;
                 }
            }
        }
}

function add10(){
    var amount = $('#amount10').val();
    var name = $('#nameFood10').val();
    var queueId = getUrlParameter('id');
   
    console.log(amount+" "+name);
    $.ajax({

        //CP3. Complete Ajax code to GET the selected pin (pinid)  
        type: "GET",
        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Foods",
    
    }).then(function (data) {
    
        findDataFood(data);
        console.log(data);
    
    });
        function findDataFood(data){
            var name = $('#nameFood10').val();
            var queueId = getUrlParameter('id');
            var amount = $('#amount10').val();
            var time = new Date().toLocaleTimeString();
            var dataDetail = $('#dataDetail10').val();
            console.log(dataDetail);
            
            for(var i = 0 ; i<data.length ; i++){
                 if(data[i].Name == name){
                    console.log(data[i].Id);
                    console.log(typeof dataDetail);
                    var formdata = {
                     
                        
                    IdQueue: queueId,
                    IdFood: data[i].Id,
                    Amount: amount,   
                    Time: time, 
                    CookStatus: 'ToComfirm', 
                    Detail: dataDetail, 
                    IdStaff: '',
                    IdChef: '',
                    CartStatus: 'false'
                   
                        
                    }
                    console.log(formdata);    
                    $.ajax({
            
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "POST",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
                        data: formdata
                    }).then(function (data) {
        
                    
                   
                   console.log('post');
                   alert("Add");
                       });
                       return false;
                 }
            }
        }
}







$(function(){
  
    var pinid = getUrlParameter('id');

    $.ajax({

        //CP3. Complete Ajax code to GET the selected pin (pinid)  
        type: "GET",
        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Queues/" + pinid,

    }).then(function (data) {
        document.getElementById("showDBinfor").innerHTML ="\n<br> Member: "+data.No+"\n<br> Queue: "+data.Name+"\n<br> PaymentStatus: "+data.PaymentStaus+"\n<br> CodeNumber: "+data.Code+" \n<br> CheckIn: "+data.Date+"\n<br> Time: "+data.WaitTime;
    dataQueue.innerText = "\n Member: "+data.No+"\n<br> Queue: "+data.Name+"\n<br> PaymentStatus: "+data.PaymentStaus+"\n<br> CodeNumber: "+data.Code+" \n<br> CheckIn: "+data.Date+"\n<br> Time: "+data.WaitTime;
   
 
    });

  
  
  

});



// add Menu_Comfirm
ons.ready(function () {

    initTimeline();
    
    var tabar = document.querySelector('ons-tabbar');
    tabar.addEventListener('postchange', function (event) {
        if (event.index == 0) {
            initTimeline(event);
        }
    });
    
    function initTimeline(event) {
        
        $.ajax({
        
            //CP1. Complete Ajax Code to GET ALL pin data 
            type: "GET",
            url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
        }).then(function (dataType) {
            
            findData4(dataType);
            console.log(dataType);
        });

        function findData4(dataType){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
    
            $.each(dataType, function (key, dataCart){
                    // console.log(dataCart.IdFood);
                        if(dataCart.IdQueue == queueInt && dataCart.CookStatus == 'ToComfirm'  ){
                        var url2 = "https://foodstepapi20180810123018.azurewebsites.net/Api/Foods";
                        $.get(url2, function (data) {
                        // $("#CartTab").attr("badge", data.length);

                        $.each(data, function (index, item) {
                               var idfood = parseInt(dataCart.IdFood);
                                // console.log(idfood+" "+item.Id);
                                var boolean = 0 ;
                                var u = '';
                                if (idfood == item.Id ){
                                    $.get('Menu_Comfirm.html', function (template) {
                                        var rendered = Mustache.render(template, item);
                                        
                                        
                                        $("#addComfirm").append(rendered);
                                        
                                        
                                    });
                                   
                                }                   
                        });
                
                    });
                    //return false;
                            }
                            
                        });



                        
                }
        }
      
});







function remove3(){
    if (confirm('Are you sure you want to remove it?')) {
        var queueId = getUrlParameter('id');
//         var queueInt = parseInt(queueId);
var FoodId = $('#no3').val();
console.log(FoodId+" "+queueId);
$.ajax({

    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",

}).then(function (data) {

    findDataFood(data);
    // console.log(data);

});
        function findDataFood(data){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
            var FoodId = $('#no3').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt){
                    $.ajax({
        
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "delete",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/" + data[i].Id,
                
                    }).then(function (data) {
                        
                        alert('remove Complete !!!');
                        window.location.href = 'FoodMenu.html?id='+queueInt;
                    });
                    return false;
                }else{
                    alert('Password incorrect');
                }
            }
        }

    }else{

    }
}


function remove1(){
    if (confirm('Are you sure you want to remove it?')) {
    var queueId = getUrlParameter('id');
//         var queueInt = parseInt(queueId);
var FoodId = $('#no1').val();
console.log(FoodId+" "+queueId);
$.ajax({

//CP3. Complete Ajax code to GET the selected pin (pinid)  
type: "GET",
url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",

}).then(function (data) {

findDataFood(data);
// console.log(data);

});
    function findDataFood(data){
        var queueId = getUrlParameter('id');
        var queueInt = parseInt(queueId);
        var FoodId = $('#no1').val();
        var FoodInt = parseInt(FoodId);
        for(var i=0 ; i<data.length ; i++){
            if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt){
                $.ajax({
    
                    //CP1. Complete Ajax Code to GET ALL pin data 
                    type: "delete",
                    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/" + data[i].Id,
            
                }).then(function (data) {
                    
                    alert('remove Complete !!!');
                    window.location.href = 'FoodMenu.html?id='+queueInt;
                });
                return false;
            }
        }
    }

    }else{
            // Do nothing
    }
}


function remove4(){
    if (confirm('Are you sure you want to remove it?')) {
    var queueId = getUrlParameter('id');
//         var queueInt = parseInt(queueId);
var FoodId = $('#no4').val();
console.log(FoodId+" "+queueId);
$.ajax({

//CP3. Complete Ajax code to GET the selected pin (pinid)  
type: "GET",
url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",

}).then(function (data) {

findDataFood(data);
// console.log(data);

});
    function findDataFood(data){
        var queueId = getUrlParameter('id');
        var queueInt = parseInt(queueId);
        var FoodId = $('#no4').val();
        var FoodInt = parseInt(FoodId);
        for(var i=0 ; i<data.length ; i++){
            if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt){
                $.ajax({
    
                    //CP1. Complete Ajax Code to GET ALL pin data 
                    type: "delete",
                    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/" + data[i].Id,
            
                }).then(function (data) {
                    
                    alert('remove Complete !!!');
                    window.location.href = 'FoodMenu.html?id='+queueInt;
                });
                return false;
            }
        }
    }

    }else{

    }
}


function remove5(){
    if (confirm('Are you sure you want to remove it?')) {
    var queueId = getUrlParameter('id');
//         var queueInt = parseInt(queueId);
var FoodId = $('#no5').val();
console.log(FoodId+" "+queueId);
$.ajax({

//CP3. Complete Ajax code to GET the selected pin (pinid)  
type: "GET",
url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",

}).then(function (data) {

findDataFood(data);
// console.log(data);

});
    function findDataFood(data){
        var queueId = getUrlParameter('id');
        var queueInt = parseInt(queueId);
        var FoodId = $('#no5').val();
        var FoodInt = parseInt(FoodId);
        for(var i=0 ; i<data.length ; i++){
            if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt){
                $.ajax({
    
                    //CP1. Complete Ajax Code to GET ALL pin data 
                    type: "delete",
                    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/" + data[i].Id,
            
                }).then(function (data) {
                    
                    alert('remove Complete !!!');
                    window.location.href = 'FoodMenu.html?id='+queueInt;
                });
                return false;
            }
        }
    }
    }else{

    }

}

function remove6(){
    if (confirm('Are you sure you want to remove it?')) {
    var queueId = getUrlParameter('id');
//         var queueInt = parseInt(queueId);
var FoodId = $('#no6').val();
console.log(FoodId+" "+queueId);
$.ajax({

//CP3. Complete Ajax code to GET the selected pin (pinid)  
type: "GET",
url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",

}).then(function (data) {

findDataFood(data);
// console.log(data);

});
    function findDataFood(data){
        var queueId = getUrlParameter('id');
        var queueInt = parseInt(queueId);
        var FoodId = $('#no6').val();
        var FoodInt = parseInt(FoodId);
        for(var i=0 ; i<data.length ; i++){
            if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt){
                $.ajax({
    
                    //CP1. Complete Ajax Code to GET ALL pin data 
                    type: "delete",
                    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/" + data[i].Id,
            
                }).then(function (data) {
                    
                    alert('remove Complete !!!');
                    window.location.href = 'FoodMenu.html?id='+queueInt;
                });
                return false;
            }
        }
    }

    }else{
        // Do nothing
    }
}


function remove7(){
    if (confirm('Are you sure you want to remove it?')) {
    var queueId = getUrlParameter('id');
//         var queueInt = parseInt(queueId);
var FoodId = $('#no7').val();
console.log(FoodId+" "+queueId);
$.ajax({

//CP3. Complete Ajax code to GET the selected pin (pinid)  
type: "GET",
url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",

}).then(function (data) {

findDataFood(data);
// console.log(data);

});
    function findDataFood(data){
        var queueId = getUrlParameter('id');
        var queueInt = parseInt(queueId);
        var FoodId = $('#no7').val();
        var FoodInt = parseInt(FoodId);
        for(var i=0 ; i<data.length ; i++){
            if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt){
                $.ajax({
    
                    //CP1. Complete Ajax Code to GET ALL pin data 
                    type: "delete",
                    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/" + data[i].Id,
            
                }).then(function (data) {
                    
                    alert('remove Complete !!!');
                    window.location.href = 'FoodMenu.html?id='+queueInt;
                });
                return false;
            }
        }
    }
    }else{
            // Do nothing
    }

}


function remove8(){
    if (confirm('Are you sure you want to remove it?')) {
    var queueId = getUrlParameter('id');
//         var queueInt = parseInt(queueId);
var FoodId = $('#no8').val();
console.log(FoodId+" "+queueId);
$.ajax({

//CP3. Complete Ajax code to GET the selected pin (pinid)  
type: "GET",
url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",

}).then(function (data) {

findDataFood(data);
// console.log(data);

});
    function findDataFood(data){
        var queueId = getUrlParameter('id');
        var queueInt = parseInt(queueId);
        var FoodId = $('#no8').val();
        var FoodInt = parseInt(FoodId);
        for(var i=0 ; i<data.length ; i++){
            if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt){
                $.ajax({
    
                    //CP1. Complete Ajax Code to GET ALL pin data 
                    type: "delete",
                    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/" + data[i].Id,
            
                }).then(function (data) {
                    
                    alert('remove Complete !!!');
                    window.location.href = 'FoodMenu.html?id='+queueInt;
                });
                return false;
            }
        }
    }
    }else{
        // Do nothing
    }

}


function remove9(){
    if (confirm('Are you sure you want to remove it?')) {
    var queueId = getUrlParameter('id');
//         var queueInt = parseInt(queueId);
var FoodId = $('#no9').val();
console.log(FoodId+" "+queueId);
$.ajax({

//CP3. Complete Ajax code to GET the selected pin (pinid)  
type: "GET",
url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",

}).then(function (data) {

findDataFood(data);
// console.log(data);

});
    function findDataFood(data){
        var queueId = getUrlParameter('id');
        var queueInt = parseInt(queueId);
        var FoodId = $('#no9').val();
        var FoodInt = parseInt(FoodId);
        for(var i=0 ; i<data.length ; i++){
            if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt){
                $.ajax({
    
                    //CP1. Complete Ajax Code to GET ALL pin data 
                    type: "delete",
                    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/" + data[i].Id,
            
                }).then(function (data) {
                    
                    alert('remove Complete !!!');
                    window.location.href = 'FoodMenu.html?id='+queueInt;
                });
                return false;
            }
        }
    }
    }else{
        // Do nothing
    }

}


function remove10(){
    if (confirm('Are you sure you want to remove it?')) {
    var queueId = getUrlParameter('id');
//         var queueInt = parseInt(queueId);
var FoodId = $('#no10').val();
console.log(FoodId+" "+queueId);
$.ajax({

//CP3. Complete Ajax code to GET the selected pin (pinid)  
type: "GET",
url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",

}).then(function (data) {

findDataFood(data);
// console.log(data);

});
    function findDataFood(data){
        var queueId = getUrlParameter('id');
        var queueInt = parseInt(queueId);
        var FoodId = $('#no10').val();
        var FoodInt = parseInt(FoodId);
        for(var i=0 ; i<data.length ; i++){
            if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt){
                $.ajax({
    
                    //CP1. Complete Ajax Code to GET ALL pin data 
                    type: "delete",
                    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/" + data[i].Id,
            
                }).then(function (data) {
                    
                    alert('remove Complete !!!');
                    window.location.href = 'FoodMenu.html?id='+queueInt;
                });
                return false;
            }
        }
    }
    }else{
        // Do nothing
    }

}




function amount1(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no1').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
            var FoodId = $('#no1').val();
            var FoodInt = parseInt(FoodId);
            var sumAmount = 0;
            var sumCookStatus = '';
            for(var i=0 ; i<data.length ; i++){
                console.log(data[i].IdFood+" "+FoodInt+" "+data[i].IdQueue+" "+queueInt+" "+data[i].CartStatus+" "+data[i].CookStatus);
                if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CartStatus =='false' && data[i].CookStatus == 'ToComfirm'){

                    sumAmount = sumAmount + data[i].Amount;
                    sumCookStatus = sumCookStatus + data[i].CookStatus + ' || '; 

                }else{
                    
             
                }
               
            }
            $('#amountFood1').empty();
            $('#amountFood1').append("Amount: " +sumAmount+" \n<br> Detail: "+sumCookStatus);
        }
    
    

}

function amount3(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no3').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
            var FoodId = $('#no3').val();
            var FoodInt = parseInt(FoodId);
            var sumAmount = 0;
            var sumCookStatus = '';
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CartStatus =='false' && data[i].CookStatus == 'ToComfirm'){

                    sumAmount = sumAmount + data[i].Amount;
                    sumCookStatus = sumCookStatus + data[i].CookStatus + ' || '; 

                }else{
                    
             
                }
               
            }
            $('#amountFood3').empty();
            $('#amountFood3').append("Amount: " +sumAmount+" \n<br> Detail: "+sumCookStatus);
        }
    
    

}

function amount4(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no4').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
            var FoodId = $('#no4').val();
            var FoodInt = parseInt(FoodId);
            var sumAmount = 0;
            var sumCookStatus = '';
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CartStatus =='false' && data[i].CookStatus == 'ToComfirm'){

                    sumAmount = sumAmount + data[i].Amount;
                    sumCookStatus = sumCookStatus + data[i].CookStatus + ' || '; 

                }else{
                    
             
                }
               
            }
            $('#amountFood4').empty();
            $('#amountFood4').append("Amount: " +sumAmount+" \n<br> Detail: "+sumCookStatus);
        }
    
    

}


function amount21(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no1').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
            var FoodId = $('#no1').val();
            var FoodInt = parseInt(FoodId);
            var sumAmount = 0 ;
            var sumCookStatus = '';
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt  ){
                    sumAmount = sumAmount + data[i].Amount;
                    sumCookStatus = sumCookStatus + data[i].CookStatus + ' || '; 
                    console.log(FoodInt+" "+queueInt+" "+data[i].IdQueue+" "+data[i].IdFood);
                }else{
                  
             
                }
            }
            $('#amountFood21').empty();
            $('#amountFood21').append("Amount: " +sumAmount+" Status: "+sumCookStatus);
        }
    
    

}

function amount23(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no3').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
            var FoodId = $('#no3').val();
            var FoodInt = parseInt(FoodId);
            var sumAmount = 0 ;
            var sumCookStatus = '';
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt  ){
                    sumAmount = sumAmount + data[i].Amount;
                    sumCookStatus = sumCookStatus + data[i].CookStatus + ' || '; 
                    console.log(FoodInt+" "+queueInt+" "+data[i].IdQueue+" "+data[i].IdFood);
                }else{
                  
             
                }
            }
            $('#amountFood23').empty();
            $('#amountFood23').append("Amount: " +sumAmount+" Status: "+sumCookStatus);
        }
    
    

}

function amount24(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no4').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
            var FoodId = $('#no4').val();
            var FoodInt = parseInt(FoodId);
            var sumAmount = 0 ;
            var sumCookStatus = '';
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt  ){
                    sumAmount = sumAmount + data[i].Amount;
                    sumCookStatus = sumCookStatus + data[i].CookStatus + ' || '; 
                    console.log(FoodInt+" "+queueInt+" "+data[i].IdQueue+" "+data[i].IdFood);
                }else{
                  
             
                }
            }
            $('#amountFood24').empty();
            $('#amountFood24').append("Amount: " +sumAmount+" Status: "+sumCookStatus);
        }
    
    

}

function amount5(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no5').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
            var FoodId = $('#no5').val();
            var FoodInt = parseInt(FoodId);
            var sumAmount = 0;
            var sumCookStatus = '';
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CartStatus =='false' && data[i].CookStatus == 'ToComfirm'){

                    sumAmount = sumAmount + data[i].Amount;
                    sumCookStatus = sumCookStatus + data[i].CookStatus + ' || '; 

                }else{
                    
             
                }
               
            }
            $('#amountFood5').empty();
            $('#amountFood5').append("Amount: " +sumAmount+" \n<br> Detail: "+sumCookStatus);
        }
    
    

}

function amount25(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no5').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
            var FoodId = $('#no5').val();
            var FoodInt = parseInt(FoodId);
            var sumAmount = 0 ;
            var sumCookStatus = '';
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt ){
                    sumAmount = sumAmount + data[i].Amount;
                    sumCookStatus = sumCookStatus + data[i].CookStatus + ' || '; 
                    console.log(FoodInt+" "+queueInt+" "+data[i].IdQueue+" "+data[i].IdFood);
                }else{
                  
             
                }
            }
            $('#amountFood25').empty();
            $('#amountFood25').append("Amount: " +sumAmount+" Status: "+sumCookStatus);
        }
    
    

}


function amount6(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no6').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
            var FoodId = $('#no6').val();
            var FoodInt = parseInt(FoodId);
            var sumAmount = 0;
            var sumCookStatus = '';
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CartStatus =='false' && data[i].CookStatus == 'ToComfirm'){

                    sumAmount = sumAmount + data[i].Amount;
                    sumCookStatus = sumCookStatus + data[i].CookStatus + ' || '; 

                }else{
                    
             
                }
               
            }
            $('#amountFood6').empty();
            $('#amountFood6').append("Amount: " +sumAmount+" \n<br> Detail: "+CookStatus);
        }
    
}

function amount26(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no6').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
            var FoodId = $('#no6').val();
            var FoodInt = parseInt(FoodId);
            var sumAmount = 0 ;
            var sumCookStatus = '';
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt ){
                    sumAmount = sumAmount + data[i].Amount;
                    sumCookStatus = sumCookStatus + data[i].CookStatus + ' || '; 
                    console.log(FoodInt+" "+queueInt+" "+data[i].IdQueue+" "+data[i].IdFood);
                }else{
                  
             
                }
            }
            $('#amountFood26').empty();
            $('#amountFood26').append("Amount: " +sumAmount+" Status: "+sumCookStatus);
        }
    
}

function amount7(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no7').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
            var FoodId = $('#no7').val();
            var FoodInt = parseInt(FoodId);
            var sumAmount = 0;
            var sumCookStatus = '';
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CartStatus =='false' && data[i].CookStatus == 'ToComfirm'){

                    sumAmount = sumAmount + data[i].Amount;
                    sumCookStatus = sumCookStatus + data[i].CookStatus + ' || '; 

                }else{
                    
             
                }
               
            }
            $('#amountFood7').empty();
            $('#amountFood7').append("Amount: " +sumAmount+" \n<br> Detail: "+sumCookStatus);
        }
    
    

}

function amount27(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no7').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
            var FoodId = $('#no7').val();
            var FoodInt = parseInt(FoodId);
            var sumAmount = 0 ;
            var sumCookStatus = '';
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt  ){
                    sumAmount = sumAmount + data[i].Amount;
                    sumCookStatus = sumCookStatus + data[i].CookStatus + ' || '; 
                    console.log(FoodInt+" "+queueInt+" "+data[i].IdQueue+" "+data[i].IdFood);
                }else{
                  
             
                }
            }
            $('#amountFood27').empty();
            $('#amountFood27').append("Amount: " +sumAmount+" Status: "+sumCookStatus);
        }
    
    

}


function amount8(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no8').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
            var FoodId = $('#no8').val();
            var FoodInt = parseInt(FoodId);
            var sumAmount = 0;
            var sumCookStatus = '';
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CartStatus =='false' && data[i].CookStatus == 'ToComfirm'){
                    console.log(FoodInt+" "+queueInt+" "+data[i].IdQueue+" "+data[i].IdFood);
                    sumAmount = sumAmount + data[i].Amount;
                    sumCookStatus = sumCookStatus + data[i].CookStatus + ' || '; 

                }else{
                    
             
                }
               
            }
            $('#amountFood8').empty();
            $('#amountFood8').append("Amount: " +sumAmount+" \n<br> Detail: "+sumCookStatus);
        }
    
    

}

function amount28(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no8').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
            var FoodId = $('#no8').val();
            var FoodInt = parseInt(FoodId);
            var sumAmount = 0 ;
            var sumCookStatus = '';
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt ){
                    sumAmount = sumAmount + data[i].Amount;
                    sumCookStatus = sumCookStatus + data[i].CookStatus + ' || '; 
                    console.log(FoodInt+" "+queueInt+" "+data[i].IdQueue+" "+data[i].IdFood);
                }else{
                  
             
                }
            }
            $('#amountFood28').empty();
            $('#amountFood28').append("Amount: " +sumAmount+" Status: "+sumCookStatus);
        }
    
    

}


function amount9(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no9').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
            var FoodId = $('#no9').val();
            var FoodInt = parseInt(FoodId);
            var sumAmount = 0;
            var sumCookStatus = '';
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt ){
                    console.log(FoodIn+" "+queueInt+" "+data[i].IdQueue+" "+data[i].IdFood);
                    sumAmount = sumAmount + data[i].Amount;
                    sumCookStatus = sumCookStatus + data[i].CookStatus + ' || '; 

                }else{
                    
             
                }
               
            }
            $('#amountFood9').empty();
            $('#amountFood9').append("Amount: " +sumAmount+" \n<br> Detail: "+sumCookStatus);
        }
    
    

}

function amount29(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no9').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
            var FoodId = $('#no9').val();
            var FoodInt = parseInt(FoodId);
            var sumAmount = 0 ;
            var sumCookStatus = '';
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt  ){
                    console.log(FoodInt+" "+queueInt+" "+data[i].IdQueue+" "+data[i].IdFood);
                    sumAmount = sumAmount + data[i].Amount;
                    sumCookStatus = sumCookStatus + data[i].CookStatus + ' || '; 

                }else{
                  
             
                }
            }
            $('#amountFood29').empty();
            $('#amountFood29').append("Amount: " +sumAmount+" Status: "+sumCookStatus);
        }
    
    

}

function amount10(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no10').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
            var FoodId = $('#no10').val();
            var FoodInt = parseInt(FoodId);
            var sumAmount = 0;
            var sumCookStatus = '';
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CartStatus =='false' && data[i].CookStatus == 'ToComfirm'){

                    sumAmount = sumAmount + data[i].Amount;
                    sumCookStatus = sumCookStatus + data[i].CookStatus + ' || '; 

                }else{
                    
             
                }
               
            }
            $('#amountFood10').empty();
            $('#amountFood10').append("Amount: " +sumAmount+" \n<br> Detail: "+sumCookStatus);
        }
    
    

}

function amount210(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no10').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "hhttps://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
            var FoodId = $('#no10').val();
            var FoodInt = parseInt(FoodId);
            var sumAmount = 0 ;
            var sumCookStatus = '';
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt ){
                    console.log(FoodInt+" "+queueInt+" "+data[i].IdQueue+" "+data[i].IdFood);
                    sumAmount = sumAmount + data[i].Amount;
                    sumCookStatus = sumCookStatus + data[i].CookStatus + ' || '; 

                }else{
                  
             
                }
            }
            $('#amountFood210').empty();
            $('#amountFood210').append("Amount: " +sumAmount+" Status: "+sumCookStatus);
        }
    
    

}







function dataExporting(data){

    ons.ready(function () {

        initTimeline();
    
        var tabar = document.querySelector('ons-tabbar');
        tabar.addEventListener('postchange', function (event) {
            if (event.index == 0) {
                initTimeline(event);
            }
        });
    
        function initTimeline(event) {
    
            // var url = "https://foodstepapi20180810123018.azurewebsites.net/Api/Carts";
           
        
    
            $.ajax({
            
                //CP1. Complete Ajax Code to GET ALL pin data 
                type: "GET",
                url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
        
            }).then(function (dataType) {
                
                findData4(dataType);
                console.log(dataType);
            });
    
            function findData4(dataType){
                $.each(dataType, function (key, dataCart){
                        // console.log(dataCart.CookStatus);
                          //  if(dataCart.CartStatus == 'false'){
    
                            
                            var url2 = "https://foodstepapi20180810123018.azurewebsites.net/Api/Foods";
                            $.get(url2, function (data) {
                            // $("#CartTab").attr("badge", data.length);
    
                            $.each(data, function (index, item) {
                                   var idfood = parseInt(dataCart.IdFood);
                                   var idqueue = getUrlParameter('id');
                                   var idqueueInt = parseInt(idqueue);
                                    // console.log(idfood+" "+item.Id+" "+dataCart.CookStatus);
                                    if (idfood == item.Id  && dataCart.IdQueue == idqueueInt ){
                                        $.get('Menu_Serve.html', function (template) {
                                            var rendered = Mustache.render(template, item);
                                            $("#WaitToServe").append(rendered);
                                        });
                                    }                   
                            });
                    
                        });
                                    // return false;
                                
                   // }
                            });
    
    
    
                            
                    }
            }
          
    });
}



function comfirm(){
    var queueId = getUrlParameter('id');
    $.ajax({

        //CP3. Complete Ajax code to GET the selected pin (pinid)  
        type: "GET",
        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
        
        }).then(function (data) {
        
        findDataFood(data);
        // console.log(data);
        
        });
      
                function findDataFood(data){

                    var queueId = getUrlParameter('id');
                    var queueInt = parseInt(queueId);
                    // var FoodId = $('#no1').val();
                    // var FoodInt = parseInt(FoodId);
                    for(var i=0 ; i<data.length ; i++){
                        if( data[i].IdQueue == queueInt && data[i].CookStatus == 'ToComfirm'){

                          var formdataCart = {
                        Id: data[i].Id,
                        IdQueue: data[i].IdQueue,
                        IdFood: data[i].IdFood,
                        Amount: data[i].Amount,
                        Time: data[i].Time,
                        Detail: data[i].Detail,
                        CookStatus: 'WaitToCook',
                        CartStatus: 'false'
                        }
                    $.ajax({
        
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "PUT",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+data[i].Id,
                        data: formdataCart
                    }).then(function (data) {
                        console.log('Updated');
                    
                        
                    });
                        
                        }
                    }

                }

}





ons.ready(function () {

    initTimeline();

    var tabar = document.querySelector('ons-tabbar');
    tabar.addEventListener('postchange', function (event) {
        if (event.index == 0) {
            initTimeline(event);
        }
    });

    function initTimeline(event) {

        // var url = "https://foodstepapi20180810123018.azurewebsites.net/Api/Carts";
       
    

        $.ajax({
        
            //CP1. Complete Ajax Code to GET ALL pin data 
            type: "GET",
            url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
        }).then(function (dataType) {
            
            findData4(dataType);
            console.log(dataType);
        });

        function findData4(dataType){
            $.each(dataType, function (key, dataCart){

                        
                        var url2 = "https://foodstepapi20180810123018.azurewebsites.net/Api/Foods";
                        $.get(url2, function (data) {
                        // $("#CartTab").attr("badge", data.length);

                        $.each(data, function (index, item) {
                               var idfood = parseInt(dataCart.IdFood);
                               var idqueue = getUrlParameter('id');
                               var idqueueInt = parseInt(idqueue);
                                // console.log(idfood+" "+item.Id+" "+dataCart.CookStatus);
                                if (idfood == item.Id  && dataCart.IdQueue == idqueueInt ){
                                    $.get('Menu_Serve.html', function (template) {
                                        var rendered = Mustache.render(template, item);
                                        $("#WaitToServe").append(rendered);
                                    });
                                }                   
                        });
                
                    });
                                // return false;
                            
               // }
                        });



                        
                }
        }
      
});

 // add Payment  
$(function() {

    $.ajax({
        
        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "GET",
        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",

    }).then(function (dataCart) {
        
        findDataCart(dataCart);
        console.log(dataCart);
    });

    function findDataCart(dataCart){
        var queueId = getUrlParameter('id');
        var defineComfirm = [];
        for(var i = 0 ; i<dataCart.length ; i++){
            if(dataCart[i].IdQueue == queueId && dataCart[i].CookStatus == 'FinnishedServe'){
                defineComfirm.push('true');
            }else{
                //defineComfirm.push('false');
            }
        }

        var sum = 0 ;

        for(var j = 0 ; j<defineComfirm.length ; j++){

            if(defineComfirm[j] == 'true'){
                sum = sum + 1 ;
            }

        }
        console.log(sum+" "+defineComfirm.length);
        
        if(sum == 0 && defineComfirm.length == 0){
            $("#addAllComfirm").append('');
            $("#addAllComfirm").append('Can not pay before Cooking');
            
        }else if(sum == defineComfirm.length){
            $("#addAllComfirm").append('');
            $("#addAllComfirm").append('<button id="Order" onclick="payment()">Payment</button>');
        }else{
            
            $("#addAllComfirm").append('');
            $("#addAllComfirm").append('Can not pay before Cooking');
        }

    }

});

function payment(){

    $.ajax({
        
        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "GET",
        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Foods",

    }).then(function (dataFood) {
        
        findDataFood(dataFood);
        console.log(dataFood);
    });
    var name2 = [];
    var price2 =[];
    var Id = [];
    function findDataFood(dataFood){
        for(var i=0 ; i<dataFood.length ; i++){
            name2.push(dataFood[i].Detail);
            price2.push(dataFood[i].Price);
            Id.push(dataFood[i].Id);
        }
    }

    $.ajax({
        
        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "GET",
        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",

    }).then(function (dataCart) {
        
        findDataPayment(dataCart);
        console.log(dataCart);
    });

    function findDataPayment(dataCart){

        var idQueue =  parseInt(getUrlParameter('id'));

        var sum = 0 ;
        var sumCart = '';

        for(var i = 0 ; i<dataCart.length ; i++){

              for(var j=0 ; j<price2.length ; j++){

                  var idInt = parseInt(Id[j]);

                if(dataCart[i].IdFood == idInt && dataCart[i].CookStatus == 'FinnishedServe' &&dataCart[i].IdQueue == idQueue){

                   var amountCart = parseInt(dataCart[i].Amount);

                   var name = name2[j];
                   
                   var price = parseInt(price2[j]);
                   var total = amountCart*price;
                 //  console.log(amountCart+" "+name+" "+total);

                   sum = sum+total;
                    sumCart = sumCart + dataCart[i].Id + " ";
              }

        }
    }

        console.log(sum+" "+sumCart);
       

        $.ajax({
        
            //CP1. Complete Ajax Code to GET ALL pin data 
            type: "GET",
            url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables",
        
        }).then(function (dataTable) {
            
            findDataTable(dataTable);
           // console.log(dataTable);
        });
        function findDataTable(dataTable){
            var idQueue =  parseInt(getUrlParameter('id'));
            console.log(idQueue);
            var nameTable =[];
                for(var j=0 ; j<dataTable.length ; j++){
                   console.log(dataTable[j].IdQueue +" "+idQueue);
                        if(dataTable[j].IdQueue == idQueue){
                         
                            nameTable.push(dataTable[j].Id);
                            
                        }
                }

        var formdata = {
            IdCart: sumCart,
            IdQueue: idQueue,
            IdTable: nameTable[0],
            Total: sum,
            Payment1: 'Counter',
            PaymentStatus: 'false'
         }

         if(formdata.IdCart != '' && formdata.Total != ''){

            console.log(formdata);    
 
            $.ajax({
            type: "POST",
            url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Payments",
            data: formdata
            }).then(function (data) {
    
           // console.log('Post');
            alert('POST');

            $('#pinThird').append('<button id="Order" onclick="clear()">Clear</button>');
            });

         }else{

            payment();

         }
        
         
        
        
       }
        

        $.ajax({
        
            //CP1. Complete Ajax Code to GET ALL pin data 
            type: "GET",
            url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Queues/"+idQueue,
        
        }).then(function (data) {
            
            findDataQueue(data);
         //   console.log(data);
        });
        var chekOutTime =new Date().toLocaleTimeString();
    
        function findDataQueue(data){
            
                var formdata = {
                    Id: data.Id,
                    Code: data.Code,
                    No: data.No,
                    Name: data.Name,   
                    TimeCheckIn: data.TimeCheckIn, 
                    Status: 'true', 
                    WaitTime: data.WaitTime,        
                    TimeCheckOut: chekOutTime,
                    Date: data.Date,
                    PaymentStaus: 'true',
                    TableStatus: data.TableStatus
                }
               // console.log(formdata);    
        
                $.ajax({
                type: "PUT",
                url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Queues/"+idQueue,
                data: formdata
                }).then(function (data) {
        
                console.log('Edited Queues');
                });
        

      
        
        
            }


}}

function clear(){
          $.ajax({
        
                    //CP1. Complete Ajax Code to GET ALL pin data 
                    type: "GET",
                    url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables",
                
                }).then(function (dataTable) {
                    
                    findDataTable(dataTable);
                   // console.log(dataTable);
                });
            
                function findDataTable(dataTable){
                    var idQueue =  parseInt(getUrlParameter('id'));
                    for(var i=0 ; i<dataTable.length ; i++){
                        if(dataTable[i].IdQueue == idQueue){
            
                            $.ajax({
                    
                                //CP1. Complete Ajax Code to GET ALL pin data 
                                type: "GET",
                                url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables/"+dataTable[i].Id,
                            
                            }).then(function (data) {
                                
                                findData(data);
                               // console.log(dataTable);
                            });
            
                            function findData(data){
            
                                var formData ={
                                    Id: data.Id,
                                    IdQueue: data.IdQueue,
                                    Name: data.Name,
                                    Status: 'false',
                                    TypeTable: data.TypeTable
                                    }
            
                                    $.ajax({
                    
                                        //CP1. Complete Ajax Code to GET ALL pin data 
                                        type: "PUT",
                                        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables/"+data.Id,
                                        formData: formData
                                    }).then(function (data) {
                                        
                                        alert("updated table");
                                    });
                            }
            
                       // return false;
                        
                    }}
                }
            }

function removeCooking1(){
    if (confirm('Are you sure you want to cancel it?')) {
        var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no6').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
            var FoodId = $('#no1').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CookStatus == 'WaitToCook'){
                    $.ajax({
        
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "delete",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/" + data[i].Id,
                
                    }).then(function (data) {
                        
                        alert('remove Complete !!!');
                        window.location.href = 'FoodMenu.html?id='+queueInt;
                    });
                    return false;
                }else if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CookStatus == 'Cooking'){
                    alert('Sorry! Your food have been comfirm by Chef');
                    window.location.href = 'FoodMenu.html?id='+queueInt;
                    return false;
                }else if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CookStatus == 'ToComfirm'){
                    $.ajax({
        
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "delete",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/" + data[i].Id,
                
                    }).then(function (data) {
                        
                        alert('remove Complete !!!');
                        window.location.href = 'FoodMenu.html?id='+queueInt;
                    });
                }else{
                    continue;
                }
            }
        }
    
        }else{
            // Do nothing
        }
}

function removeCooking3(){
    if (confirm('Are you sure you want to cancel it?')) {
        var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no3').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
            var FoodId = $('#no3').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CookStatus == 'WaitToCook'){
                    $.ajax({
        
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "delete",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/" + data[i].Id,
                
                    }).then(function (data) {
                        
                        alert('remove Complete !!!');
                        window.location.href = 'FoodMenu.html?id='+queueInt;
                    });
                    return false;
                }else if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CookStatus == 'Cooking'){
                    alert('Your food have been comfirm by Chef');
                    window.location.href = 'FoodMenu.html?id='+queueInt;
                    return false;
                }else if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CookStatus == 'ToComfirm'){
                    $.ajax({
        
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "delete",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/" + data[i].Id,
                
                    }).then(function (data) {
                        
                        alert('remove Complete !!!');
                        window.location.href = 'FoodMenu.html?id='+queueInt;
                    });
                }else{
                    continue;
                }
            }
        }
    
        }else{
            // Do nothing
        }
}

function removeCooking4(){
    if (confirm('Are you sure you want to cancel it?')) {
        var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no4').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
            var FoodId = $('#no4').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CookStatus == 'WaitToCook'){
                    $.ajax({
        
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "delete",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/" + data[i].Id,
                
                    }).then(function (data) {
                        
                        alert('remove Complete !!!');
                        window.location.href = 'FoodMenu.html?id='+queueInt;
                    });
                    return false;
                }else if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CookStatus == 'Cooking'){
                    alert('Your food have been comfirm by Chef');
                    window.location.href = 'FoodMenu.html?id='+queueInt;
                    return false;
                }else if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CookStatus == 'ToComfirm'){
                    $.ajax({
        
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "delete",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/" + data[i].Id,
                
                    }).then(function (data) {
                        
                        alert('remove Complete !!!');
                        window.location.href = 'FoodMenu.html?id='+queueInt;
                    });
                }else{
                    continue;
                }
            }
        }
    
        }else{
            // Do nothing
        }
}

function removeCooking5(){
    if (confirm('Are you sure you want to cancel it?')) {
        var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no5').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
            var FoodId = $('#no5').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CookStatus == 'WaitToCook'){
                    $.ajax({
        
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "delete",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/" + data[i].Id,
                
                    }).then(function (data) {
                        
                        alert('remove Complete !!!');
                        window.location.href = 'FoodMenu.html?id='+queueInt;
                    });
                    return false;
                }else if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CookStatus == 'Cooking'){
                    alert('Your food have been comfirm by Chef');
                    window.location.href = 'FoodMenu.html?id='+queueInt;
                    return false;
                }else if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CookStatus == 'ToComfirm'){
                    $.ajax({
        
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "delete",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/" + data[i].Id,
                
                    }).then(function (data) {
                        
                        alert('remove Complete !!!');
                        window.location.href = 'FoodMenu.html?id='+queueInt;
                    });
                }else{
                    continue;
                }
            }
        }
    
        }else{
            // Do nothing
        }
}

function removeCooking6(){
    if (confirm('Are you sure you want to cancel it?')) {
        var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no6').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
            var FoodId = $('#no6').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CookStatus == 'WaitToCook'){
                    $.ajax({
        
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "delete",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/" + data[i].Id,
                
                    }).then(function (data) {
                        
                        alert('remove Complete !!!');
                        window.location.href = 'FoodMenu.html?id='+queueInt;
                    });
                    return false;
                }else if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CookStatus == 'Cooking'){
                    alert('Your food have been comfirm by Chef');
                    window.location.href = 'FoodMenu.html?id='+queueInt;
                    return false;
                }else if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CookStatus == 'ToComfirm'){
                    $.ajax({
        
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "delete",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/" + data[i].Id,
                
                    }).then(function (data) {
                        
                        alert('remove Complete !!!');
                        window.location.href = 'FoodMenu.html?id='+queueInt;
                    });
                }else{
                    continue;
                }
            }
        }
    
        }else{
            // Do nothing
        }
}

function removeCooking7(){
    if (confirm('Are you sure you want to cancel it?')) {
        var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no7').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
            var FoodId = $('#no7').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CookStatus == 'WaitToCook'){
                    $.ajax({
        
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "delete",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/" + data[i].Id,
                
                    }).then(function (data) {
                        
                        alert('remove Complete !!!');
                        window.location.href = 'FoodMenu.html?id='+queueInt;
                    });
                    return false;
                }else if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CookStatus == 'Cooking'){
                    alert('Your food have been comfirm by Chef');
                    window.location.href = 'FoodMenu.html?id='+queueInt;
                    return false;
                }else if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CookStatus == 'ToComfirm'){
                    $.ajax({
        
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "delete",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/" + data[i].Id,
                
                    }).then(function (data) {
                        
                        alert('remove Complete !!!');
                        window.location.href = 'FoodMenu.html?id='+queueInt;
                    });
                }else{
                    continue;
                }
            }
        }
    
        }else{
            // Do nothing
        }
}

function removeCooking8(){
    if (confirm('Are you sure you want to cancel it?')) {
        var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no8').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
            var FoodId = $('#no8').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CookStatus == 'WaitToCook'){
                    $.ajax({
        
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "delete",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/" + data[i].Id,
                
                    }).then(function (data) {
                        
                        alert('remove Complete !!!');
                        window.location.href = 'FoodMenu.html?id='+queueInt;
                    });
                    return false;
                }else if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CookStatus == 'Cooking'){
                    alert('Your food have been comfirm by Chef');
                    window.location.href = 'FoodMenu.html?id='+queueInt;
                    return false;
                }else if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CookStatus == 'ToComfirm'){
                    $.ajax({
        
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "delete",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/" + data[i].Id,
                
                    }).then(function (data) {
                        
                        alert('remove Complete !!!');
                        window.location.href = 'FoodMenu.html?id='+queueInt;
                    });
                }else{
                    continue;
                }
            }
        }
    
        }else{
            // Do nothing
        }
}

function removeCooking9(){
    if (confirm('Are you sure you want to cancel it?')) {
        var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no9').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
            var FoodId = $('#no9').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CookStatus == 'WaitToCook'){
                    $.ajax({
        
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "delete",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/" + data[i].Id,
                
                    }).then(function (data) {
                        
                        alert('remove Complete !!!');
                        window.location.href = 'FoodMenu.html?id='+queueInt;
                    });
                    return false;
                }else if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CookStatus == 'Cooking'){
                    alert('Your food have been comfirm by Chef');
                    window.location.href = 'FoodMenu.html?id='+queueInt;
                    return false;
                }else if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CookStatus == 'ToComfirm'){
                    $.ajax({
        
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "delete",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/" + data[i].Id,
                
                    }).then(function (data) {
                        
                        alert('remove Complete !!!');
                        window.location.href = 'FoodMenu.html?id='+queueInt;
                    });
                }else{
                    continue;
                }
            }
        }
    
        }else{
            // Do nothing
        }
}

function removeCooking10(){
    if (confirm('Are you sure you want to cancel it?')) {
        var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no10').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var queueId = getUrlParameter('id');
            var queueInt = parseInt(queueId);
            var FoodId = $('#no10').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CookStatus == 'WaitToCook'){
                    $.ajax({
        
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "delete",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/" + data[i].Id,
                
                    }).then(function (data) {
                        
                        alert('remove Complete !!!');
                        window.location.href = 'FoodMenu.html?id='+queueInt;
                    });
                    return false;
                }else if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CookStatus == 'Cooking'){
                    alert('Your food have been comfirm by Chef');
                    window.location.href = 'FoodMenu.html?id='+queueInt;
                    return false;
                }else if(data[i].IdFood == FoodInt && data[i].IdQueue == queueInt && data[i].CookStatus == 'ToComfirm'){
                    $.ajax({
        
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "delete",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/" + data[i].Id,
                
                    }).then(function (data) {
                        
                        alert('remove Complete !!!');
                        window.location.href = 'FoodMenu.html?id='+queueInt;
                    });
                }else{
                    continue;
                }
            }
        }
    
        }else{
            // Do nothing
        }
}


function clear(){
    
    $.ajax({
        
        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "GET",
        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables",
    
    }).then(function (dataTable) {
        
        findDataTable(dataTable);
       // console.log(dataTable);
    });

    function findDataTable(dataTable){
        var idQueue =  parseInt(getUrlParameter('id'));
        for(var i=0 ; i<dataTable.length ; i++){
            if(dataTable[i].IdQueue == idQueue){

                $.ajax({
        
                    //CP1. Complete Ajax Code to GET ALL pin data 
                    type: "GET",
                    url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables/"+dataTable[i].Id,
                
                }).then(function (data) {
                    
                    findData(data);
                   // console.log(dataTable);
                });

                function findData(data){

                    var formData ={
                        Id: data.Id,
                        IdQueue: data.IdQueue,
                        Name: data.Name,
                        Status: 'false',
                        TypeTable: data.TypeTable
                        }

                        $.ajax({
        
                            //CP1. Complete Ajax Code to GET ALL pin data 
                            type: "PUT",
                            url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables/"+data.Id,
                            formData: formData
                        }).then(function (data) {
                            
                            alert("updated table");
                        });
                }

           // return false;
            }
        }}
}
