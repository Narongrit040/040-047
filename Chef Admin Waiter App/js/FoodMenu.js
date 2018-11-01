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

  document.addEventListener('prechange', function(event) {
    document.querySelector('ons-toolbar .center')
      .innerHTML = event.tabItem.getAttribute('label');
  });
  
//   $(function(){
//     // Initialization code
//     $('ons-button').on('click', function(e) {
//       ons.notification.alert('Button is tapped!');
//     })
//   });

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

            var amountต้มยำกุ้ง = 0; //1
            var detail1 = '';
            var cart1 = '';
            var amountต้มเส้นตีนไก่ = 0; //3 
            var detail3 = '';
            var cart3 = '';
            var amountผัดแกงเขียวหวานปลาแซลมอน = 0; //4
            var detail4 = '';
            var cart4 = '';
            var amountผัดผักโสภณลูกชิ้นกุ้ง = 0; //5
            var detail5 = '';
            var cart5 = '';
            var amountฉู่ฉี่ปลาเนื้ออ่อน = 0; //6
            var detail6 = '';
            var cart6 = '';
            var amountไข่เจียวลาบ = 0; //7
            var detail7 = '';
            var cart7 = '';
            var amountไก่กรอบลาบแซ่บ = 0; //8
            var detail8 = '';
            var cart8 = '';
            var amountน้ำใบเตย = 0; //9
            var detail9 = '';
            var cart9 = '';
            var amountน้ำฝรั่ง = 0; //10
            var detail10 = '';
            var cart10 = '';

                  for(var i =0 ; i<dataType.length ; i++){
                          if(dataType[i].CookStatus == 'WaitToCook' && dataType[i].IdFood == 1){
                        
                        amountต้มยำกุ้ง = amountต้มยำกุ้ง + dataType[i].Amount ;
                        detail1 = detail1 +" "+ dataType[i].Detail+" ";
                        cart1 = cart1 + dataType[i].Id + " ";

                    }else if(dataType[i].CookStatus == 'WaitToCook' && dataType[i].IdFood == 3){

                        amountต้มเส้นตีนไก่ = amountต้มเส้นตีนไก่ + dataType[i].Amount;
                        detail3 = detail3 +" "+ dataType[i].Detail+" ";
                        cart3 = cart3 + dataType[i].Id + " ";

                    }else if(dataType[i].CookStatus == 'WaitToCook' && dataType[i].IdFood == 4){

                        amountผัดแกงเขียวหวานปลาแซลมอน = amountผัดแกงเขียวหวานปลาแซลมอน + dataType[i].Amount;
                        detail4 = detail4 +" "+ dataType[i].Detail+" ";
                        cart4 = cart4 + dataType[i].Id + " ";

                    }else if(dataType[i].CookStatus == 'WaitToCook' && dataType[i].IdFood == 5){

                        amountผัดผักโสภณลูกชิ้นกุ้ง = amountผัดผักโสภณลูกชิ้นกุ้ง + dataType[i].Amount;
                        detail5 = detail5 +" "+ dataType[i].Detail+" ";
                        cart5 = cart5 + dataType[i].Id + " ";

                    }else if(dataType[i].CookStatus == 'WaitToCook' && dataType[i].IdFood == 6){

                        amountฉู่ฉี่ปลาเนื้ออ่อน = amountฉู่ฉี่ปลาเนื้ออ่อน + dataType[i].Amount;
                        detail6 = detail6 +" "+ dataType[i].Detail+" ";
                        cart6 = cart6 + dataType[i].Id + " ";

                    }else if(dataType[i].CookStatus == 'WaitToCook' && dataType[i].IdFood == 7){

                        amountไข่เจียวลาบ = amountไข่เจียวลาบ + dataType[i].Amount;
                        detail7 = detail7 +" "+ dataType[i].Detail+" ";
                        cart7 = cart7 + dataType[i].Id + " ";

                    }else if(dataType[i].CookStatus == 'WaitToCook' && dataType[i].IdFood == 8){

                        amountไก่กรอบลาบแซ่บ = amountไก่กรอบลาบแซ่บ + dataType[i].Amount;
                        detail8 = detail8 +" "+ dataType[i].Detail+" ";
                        cart8 = cart8 + dataType[i].Id + " ";

                    }else if(dataType[i].CookStatus == 'WaitToCook' && dataType[i].IdFood == 9){

                        amountน้ำใบเตย = amountน้ำใบเตย + dataType[i].Amount;
                        detail9 = detail9 +" "+ dataType[i].Detail+" ";
                        cart9 = cart9 + dataType[i].Id + " ";

                    }else if(dataType[i].CookStatus == 'WaitToCook' && dataType[i].IdFood == 10){

                        amountน้ำฝรั่ง = amountน้ำฝรั่ง + dataType[i].Amount;
                        detail10 = detail10 +" "+ dataType[i].Detail+" ";
                        cart10 = cart10 + dataType[i].Id + " ";

                    }
                  
                  }


                        if(amountต้มยำกุ้ง != 0){

                            $("#addComfirm").append('<ons-card  style="font-size: 25px; background-color:rgba(0, 0, 0, 0.7);" class="post"><ons-list-item class="post_title"><div class="post-caption" >ต้มยำกุ้ง: <input style="color: red; background-color:rgba(0, 0, 0, 0.0);border-color:rgba(0, 0, 0, 0.0);font-size:24px;" size="1" type="text" id="amountTotal1" value="'+amountต้มยำกุ้ง+'" disabled></input> จาน</div><div style="margin: 10px;"></div>  Detail: <input  style="color: red;background-color:rgba(0, 0, 0, 0.0);border-color:rgba(0, 0, 0, 0.0);font-size:24px;" id="detail1" value="'+detail1+'" disabled><input hidden id="cart1" value="'+cart1+'" disabled></input> <div class="right" ><ons-button    style="padding: 15px 32px; font-size : 25px;"   class="btn btn-danger" modifier="quiet" onclick="send1()">comfirm</ons-button></div></ons-list-item></ons-card>');

                         }
                        if(amountต้มเส้นตีนไก่ != 0){
                            $("#addComfirm").append('<ons-card style="font-size: 25px; background-color:rgba(0, 0, 0, 0.7);"  class="post"><ons-list-item class="post_title"><div class="post-caption" >ต้มเส้นตีนไก่: <input style="color: red; background-color:rgba(0, 0, 0, 0.0);border-color:rgba(0, 0, 0, 0.0);font-size:24px;" size="1" type="text" id="amountTotal3" value="'+amountต้มเส้นตีนไก่+'" disabled></input> จาน</div><div style="margin: 10px;"></div> Detail: <input  style="color: red;background-color:rgba(0, 0, 0, 0.0);border-color:rgba(0, 0, 0, 0.0);font-size:24px;" id = "detail3" value="'+detail3+'" disabled><input hidden id="cart3" value="'+cart3+'" disabled></input> <div class="right" ><ons-button   style="padding: 15px 32px; font-size : 25px;"   class="btn btn-danger" modifier="quiet" onclick="send3()">comfirm</ons-button></div></ons-list-item></ons-card>');
                         }
                          if(amountผัดแกงเขียวหวานปลาแซลมอน != 0){
                            $("#addComfirm").append('<ons-card  style="font-size: 25px; background-color:rgba(0, 0, 0, 0.7);" class="post"><ons-list-item class="post_title"><div class="post-caption" >ผัดแกงเขียวหวานปลาแซลมอน: <input style="color: red; background-color:rgba(0, 0, 0, 0.0);border-color:rgba(0, 0, 0, 0.0);font-size:24px;" size="1" id="amountTotal4" value="'+amountผัดแกงเขียวหวานปลาแซลมอน+'" disabled></input><div style="margin: 10px;"></div> จาน</div> Detail:  <input  style="color: red; background-color:rgba(0, 0, 0, 0.0);border-color:rgba(0, 0, 0, 0.0);font-size:24px;" id="detail4" value="'+detail4+'" disabled><input hidden id="cart4" value="'+cart4+'" disabled></input> <div class="right" ><ons-button   style="padding: 15px 32px; font-size : 25px;"   class="btn btn-danger" modifier="quiet" onclick="send4()">comfirm</ons-button></div></ons-list-item></ons-card>');  
                         }
                         if(amountผัดผักโสภณลูกชิ้นกุ้ง != 0){
                            $("#addComfirm").append('<ons-card  style="font-size: 25px; background-color:rgba(0, 0, 0, 0.7);" class="post"><ons-list-item class="post_title"><div class="post-caption" >ผัดผักโสภณลูกชิ้นกุ้ง: <input style="color: red; background-color:rgba(0, 0, 0, 0.0);border-color:rgba(0, 0, 0, 0.0);font-size:24px;" size="1" id="amountTotal5" value="'+amountผัดผักโสภณลูกชิ้นกุ้ง+'" disabled> </input> จาน</div><div style="margin: 10px;"></div> Detail:  <input  style="color: red; background-color:rgba(0, 0, 0, 0.0);border-color:rgba(0, 0, 0, 0.0);font-size:24px;" id="detail5" value="'+detail5+'" disabled><input hidden id="cart5" value="'+cart5+'" disabled></input> <div class="right" ><ons-button   style="padding: 15px 32px; font-size : 25px;"   class="btn btn-danger" modifier="quiet" onclick="send5()">comfirm</ons-button></div></ons-list-item></ons-card>');
                         }
                          if(amountฉู่ฉี่ปลาเนื้ออ่อน != 0){
                            $("#addComfirm").append('<ons-card  style="font-size: 25px; background-color:rgba(0, 0, 0, 0.7);" class="post"><ons-list-item class="post_title"><div class="post-caption" >ฉู่ฉี่ปลาเนื้ออ่อน: <input style="color: red; background-color:rgba(0, 0, 0, 0.0);border-color:rgba(0, 0, 0, 0.0);font-size:24px;" size="1" id="amountTotal6" value="'+amountฉู่ฉี่ปลาเนื้ออ่อน+'" disabled></input> จาน</div><div style="margin: 10px;"></div> Detail:  <input  style="color: red; background-color:rgba(0, 0, 0, 0.0);border-color:rgba(0, 0, 0, 0.0);font-size:24px;" id="detail6" value="'+detail6+'" disabled><input hidden id="cart6" value="'+cart6+'" disabled></input> <div class="right" ><ons-button   style="padding: 15px 32px; font-size : 25px;"   class="btn btn-danger" modifier="quiet" onclick="send6()">comfirm</ons-button></div></ons-list-item></ons-card>');
                         }
                         if(amountไข่เจียวลาบ != 0){
                            $("#addComfirm").append('<ons-card  style="font-size: 25px; background-color:rgba(0, 0, 0, 0.7);" class="post"><ons-list-item class="post_title"><div class="post-caption" >ไข่เจียวลาบ: <input style="color: red; background-color:rgba(0, 0, 0, 0.0);border-color:rgba(0, 0, 0, 0.0);font-size:24px;" size="1" id="amountTotal7" value="'+amountไข่เจียวลาบ+'" disabled></input> จาน</div><div style="margin: 10px;"></div> Detail:  <input  style="color: red; background-color:rgba(0, 0, 0, 0.0);border-color:rgba(0, 0, 0, 0.0);font-size:24px;" id="detail7" value="'+detail7+'" disabled><input hidden id="cart7" value="'+cart7+'" disabled></input> <div class="right" ><ons-button style="padding: 15px 32px; font-size : 25px;"    class="btn btn-danger" modifier="quiet" onclick="send7()">comfirm</ons-button></div></ons-list-item></ons-card>');
                         }
                          if(amountไก่กรอบลาบแซ่บ != 0){
                            $("#addComfirm").append('<ons-card style="font-size: 25px; background-color:rgba(0, 0, 0, 0.7);"  class="post"><ons-list-item class="post_title"><div class="post-caption" >ไก่กรอบลาบแซ่บ: <input style="color: red; background-color:rgba(0, 0, 0, 0.0);border-color:rgba(0, 0, 0, 0.0);font-size:24px;" size="1" id="amountTotal8" value="'+amountไก่กรอบลาบแซ่บ+'" disabled></input> จาน</div><div style="margin: 10px;"></div> Detail:  <input  style="color: red; background-color:rgba(0, 0, 0, 0.0);border-color:rgba(0, 0, 0, 0.0);font-size:24px;" id="detail8" value="'+detail8+'" disabled><input hidden id="cart8" value="'+cart8+'" disabled></input> <div class="right" ><ons-button   style="padding: 15px 32px; font-size : 25px;"  class="btn btn-danger"  modifier="quiet" onclick="send8()">comfirm</ons-button></div></ons-list-item></ons-card>');
                         }
                         if(amountน้ำใบเตย != 0){
                            $("#addComfirm").append('<ons-card style="font-size: 25px; background-color:rgba(0, 0, 0, 0.7);"  class="post"><ons-list-item class="post_title"><div class="post-caption" >น้ำใบเตย: <input style="color: red; background-color:rgba(0, 0, 0, 0.0);border-color:rgba(0, 0, 0, 0.0);font-size:24px;" size="1" id="amountTotal9" value="'+amountน้ำใบเตย+'" disabled></input> จาน</div><div style="margin: 10px;"></div> Detail:  <input  style="color: red; background-color:rgba(0, 0, 0, 0.0);border-color:rgba(0, 0, 0, 0.0);font-size:24px;" id="detail9" value="'+detail9+'" disabled><input hidden id="cart9" value="'+cart9+'" disabled></input> <div class="right" ><ons-button   style="padding: 15px 32px; font-size : 25px;"  class="btn btn-danger"  modifier="quiet" onclick="send9()">comfirm</ons-button></div></ons-list-item></ons-card>');
                         }
                         if(amountน้ำฝรั่ง != 0){ 
                            $("#addComfirm").append('<ons-card style="font-size: 25px; background-color:rgba(0, 0, 0, 0.7);"  class="post"><ons-list-item class="post_title"><div class="post-caption" >น้ำฝรั่ง: <input style="color: red; background-color:rgba(0, 0, 0, 0.0);border-color:rgba(0, 0, 0, 0.0);font-size:24px;" size="1" id="amountTotal10" value="'+amountน้ำฝรั่ง+'" disabled></input> จาน</div><div style="margin: 10px;"></div> Detail:  <input  style="color: red; background-color:rgba(0, 0, 0, 0.0);border-color:rgba(0, 0, 0, 0.0);font-size:24px;" id="detail10" value="'+detail10+'" disabled><input hidden id="cart10" value ="'+cart10+'" disabled></input> <div class="right" ><ons-button  style="padding: 15px 32px; font-size : 25px;"   class="btn btn-danger"  modifier="quiet" onclick="send10()">comfirm</ons-button></div></ons-list-item></ons-card>');
                         }               
                                        
 
                }
        }
      
});


function login(){
   
    $.ajax({
        
        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "GET",
        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Staffs",

    }).then(function (dataType) {
        
        findChef(dataType);
        // console.log(dataType);
    });

    function findChef(dataType){
        var username = $('#username').val();
        var password = $('#password').val();
        for(var i=0 ; i<dataType.length ; i++){
                if(dataType[i].Email == username && dataType[i].Password == password){
                    if(dataType[i].Position == 'Chef' && dataType[i].Status == 'Enable'){
                        alert('Login Complete !!!');
                        // $('#FirstName').val(dataType[i].FirstName);
                        // console.log(dataType[i].FirstName);
                        window.location.href = 'FoodMenu.html?id='+dataType[i].Id;
                      
                    }else if(dataType[i].Position == 'Admin'){

                        alert('Login Complete !!!');
                        // $('#FirstName').val(dataType[i].FirstName);
                        // console.log(dataType[i].FirstName);
                        window.location.href = 'FoodMenuAdmin.html?id='+dataType[i].Id;

                    }else if(dataType[i].Position == 'Waiter' && dataType[i].Status == 'Enable' ){
                        alert('Login Complete !!!');
                        // $('#FirstName').val(dataType[i].FirstName);
                        // console.log(dataType[i].FirstName);
                        window.location.href = 'FoodMenuWaiter.html?id='+dataType[i].Id;
                    }else if(dataType[i].Position == 'Counter' && dataType[i].Status == 'Enable' ){
                        alert('Login Complete !!!');
                        // $('#FirstName').val(dataType[i].FirstName);
                        // console.log(dataType[i].FirstName);
                        window.location.href = 'FoodMenuCounter.html?id='+dataType[i].Id;

                    }else if(dataType[i].Position == 'Chef' && dataType[i].Status == 'Disable'){
                        alert('Cantract admin to activate your account !!!');
                        window.location.href = 'index.html';
                    }else if(dataType[i].Position == 'Counter' && dataType[i].Status == 'Disable'){
                        alert('Cantract admin to activate your account !!!');
                        window.location.href = 'index.html';
                    }else if(dataType[i].Position == 'Waiter' && dataType[i].Status == 'Disable'){
                        alert('Cantract admin to activate your account !!!');
                        window.location.href = 'index.html';
                    }else{
                        alert('Login Fail !!!');
                        // $('#FirstName').val(dataType[i].FirstName);
                        // console.log(dataType[i].FirstName);
                        window.location.href = 'index.html';
                    }
                 
                }
        }
    }
}

function logout(){

    window.location.href = 'index.html';
}


//  New Updated !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function send1(){

   
            var idChef = getUrlParameter('id');
            var idChefInt = parseInt(idChef);
            var amountTotal = parseInt($('#amountTotal1').val());
            var dataDetail = $('#detail1').val();
           
            var time = new Date().toLocaleTimeString();
            var Cart = $('#cart1').val();

 console.log(amountTotal +" "+dataDetail+" "+idChefInt);

 var formdata = {
                    
    IdFood: 1,
    AmountTotal: amountTotal,
    Time: time,
    CookStatus: 'Cooking',
    IdChef: idChefInt,
    Detail: dataDetail,
    idCart: Cart

}

$.ajax({

    //CP1. Complete Ajax Code to GET ALL pin data 
    type: "POST",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
    data: formdata
}).then(function (data) {
    alert('Post');

    
});


 
 words = Cart.split(" ");

 var cartId = [];

for(var i = 0 ; i<words.length ; i++){

 cartId.push(words[i]);

}
console.log(cartId);
for(var j = 0 ; j<cartId.length-1 ; j++){
    console.log(cartId[j]);
    $.ajax({
        
       
        type: "GET",
        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+cartId[j],

    }).then(function (dataType) {
        
        findCart(dataType);
       // console.log(dataType);
    });
        function findCart(dataType){
            console.log(cartId[j]);
            var idChef = getUrlParameter('id');
            var idChefInt = parseInt(idChef);
            //console.log(idChefInt+" "+dataType.IdQueue);
            var formdataCart = {

                Id: dataType.Id,
                IdQueue: dataType.IdQueue,
                IdFood: dataType.IdFood,
                Amount: dataType.Amount,
                Time: dataType.Time,
                CookStatus: 'Cooking',
                IdChef: idChefInt,
                IdStaff: '',
                Detail: dataType.Detail,
                CartStatus: 'true'

            }
            console.log(formdataCart);

            $.ajax({

                //CP1. Complete Ajax Code to GET ALL pin data 
                type: "PUT",
                url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+dataType.Id,
                data: formdataCart
            }).then(function (data) {
                alert('Update');
            
                
            });
        }
}
           



        
        
}


function send3(){

   
    var idChef = getUrlParameter('id');
    var idChefInt = parseInt(idChef);
    var amountTotal = parseInt($('#amountTotal3').val());
    var dataDetail = $('#detail3').val();
   
    var time = new Date().toLocaleTimeString();

    var Cart = $('#cart3').val();
console.log(amountTotal +" "+dataDetail+" "+idChefInt);

var formdata = {
            
    IdFood: 3,
    AmountTotal: amountTotal,
    Time: time,
    CookStatus: 'Cooking',
    IdChef: idChefInt,
    Detail: dataDetail,
    idCart: Cart

}

$.ajax({

    //CP1. Complete Ajax Code to GET ALL pin data 
    type: "POST",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
    data: formdata
}).then(function (data) {
    alert('Post');

    
});




words = Cart.split(" ");

var cartId = [];

for(var i = 0 ; i<words.length ; i++){

cartId.push(words[i]);

}
console.log(cartId);
for(var j = 0 ; j<cartId.length-1 ; j++){
console.log(cartId[j]);
$.ajax({


type: "GET",
url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+cartId[j],

}).then(function (dataType) {

findCart(dataType);
// console.log(dataType);
});
function findCart(dataType){
    console.log(cartId[j]);
    var idChef = getUrlParameter('id');
    var idChefInt = parseInt(idChef);
    //console.log(idChefInt+" "+dataType.IdQueue);
    var formdataCart = {

        Id: dataType.Id,
        IdQueue: dataType.IdQueue,
        IdFood: dataType.IdFood,
        Amount: dataType.Amount,
        Time: dataType.Time,
        CookStatus: 'Cooking',
        IdChef: idChefInt,
        IdStaff: '',
        Detail: dataType.Detail,
        CartStatus: 'true'

    }
    console.log(formdataCart);

    $.ajax({

        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "PUT",
        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+dataType.Id,
        data: formdataCart
    }).then(function (data) {
        alert('Update');
    
        
    });
}
}



}


function send4(){

   
    var idChef = getUrlParameter('id');
    var idChefInt = parseInt(idChef);
    var amountTotal = parseInt($('#amountTotal4').val());
    var dataDetail = $('#detail4').val();
   
    var time = new Date().toLocaleTimeString();
    var Cart = $('#cart4').val();

console.log(amountTotal +" "+dataDetail+" "+idChefInt);

var formdata = {
            
    IdFood: 4,
    AmountTotal: amountTotal,
    Time: time,
    CookStatus: 'Cooking',
    IdChef: idChefInt,
    Detail: dataDetail,
    idCart: Cart

}

$.ajax({

    //CP1. Complete Ajax Code to GET ALL pin data 
    type: "POST",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
    data: formdata
}).then(function (data) {
    alert('Post');

    
});


words = Cart.split(" ");

var cartId = [];

for(var i = 0 ; i<words.length ; i++){

cartId.push(words[i]);

}
console.log(cartId);
for(var j = 0 ; j<cartId.length-1 ; j++){
console.log(cartId[j]);
$.ajax({


type: "GET",
url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+cartId[j],

}).then(function (dataType) {

findCart(dataType);
// console.log(dataType);
});
function findCart(dataType){
    console.log(cartId[j]);
    var idChef = getUrlParameter('id');
    var idChefInt = parseInt(idChef);
    //console.log(idChefInt+" "+dataType.IdQueue);
    var formdataCart = {

        Id: dataType.Id,
        IdQueue: dataType.IdQueue,
        IdFood: dataType.IdFood,
        Amount: dataType.Amount,
        Time: dataType.Time,
        CookStatus: 'Cooking',
        IdChef: idChefInt,
        IdStaff: '',
        Detail: dataType.Detail,
        CartStatus: 'true'

    }
    console.log(formdataCart);

    $.ajax({

        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "PUT",
        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+dataType.Id,
        data: formdataCart
    }).then(function (data) {
        alert('Update');
    
        
    });
}
}
 


}

function send5(){

   
    var idChef = getUrlParameter('id');
    var idChefInt = parseInt(idChef);
    var amountTotal = parseInt($('#amountTotal5').val());
    var dataDetail = $('#detail5').val();
    var Cart = $('#cart5').val();
    var time = new Date().toLocaleTimeString();


console.log(amountTotal +" "+dataDetail+" "+idChefInt);

var formdata = {
            
    IdFood: 5,
    AmountTotal: amountTotal,
    Time: time,
    CookStatus: 'Cooking',
    IdChef: idChefInt,
    Detail: dataDetail,
    idCart: Cart

}

$.ajax({

    //CP1. Complete Ajax Code to GET ALL pin data 
    type: "POST",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
    data: formdata
}).then(function (data) {
    alert('Post');

    
});



words = Cart.split(" ");

var cartId = [];

for(var i = 0 ; i<words.length ; i++){

cartId.push(words[i]);

}
console.log(cartId);
for(var j = 0 ; j<cartId.length-1 ; j++){
console.log(cartId[j]);
$.ajax({


type: "GET",
url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+cartId[j],

}).then(function (dataType) {

findCart(dataType);
// console.log(dataType);
});
function findCart(dataType){
    console.log(cartId[j]);
    var idChef = getUrlParameter('id');
    var idChefInt = parseInt(idChef);
    //console.log(idChefInt+" "+dataType.IdQueue);
    var formdataCart = {

        Id: dataType.Id,
        IdQueue: dataType.IdQueue,
        IdFood: dataType.IdFood,
        Amount: dataType.Amount,
        Time: dataType.Time,
        CookStatus: 'Cooking',
        IdChef: idChefInt,
        IdStaff: '',
        Detail: dataType.Detail,
        CartStatus: 'true'

    }
    console.log(formdataCart);

    $.ajax({

        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "PUT",
        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+dataType.Id,
        data: formdataCart
    }).then(function (data) {
        alert('Update');
    
        
    });
}
}
 


}

function send6(){

   
    var idChef = getUrlParameter('id');
    var idChefInt = parseInt(idChef);
    var amountTotal = parseInt($('#amountTotal6').val());
    var dataDetail = $('#detail6').val();
    var Cart = $('#cart6').val();
    var time = new Date().toLocaleTimeString();


console.log(amountTotal +" "+dataDetail+" "+idChefInt);
var formdata = {
            
    IdFood: 6,
    AmountTotal: amountTotal,
    Time: time,
    CookStatus: 'Cooking',
    IdChef: idChefInt,
    Detail: dataDetail,
    idCart: Cart

}

$.ajax({

    //CP1. Complete Ajax Code to GET ALL pin data 
    type: "POST",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
    data: formdata
}).then(function (data) {
    alert('Post');

    
});

words = Cart.split(" ");

var cartId = [];

for(var i = 0 ; i<words.length ; i++){

cartId.push(words[i]);

}
console.log(cartId);
for(var j = 0 ; j<cartId.length-1 ; j++){
console.log(cartId[j]);
$.ajax({


type: "GET",
url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+cartId[j],

}).then(function (dataType) {

findCart(dataType);
// console.log(dataType);
});
function findCart(dataType){
    console.log(cartId[j]);
    var idChef = getUrlParameter('id');
    var idChefInt = parseInt(idChef);
    //console.log(idChefInt+" "+dataType.IdQueue);
    var formdataCart = {

        Id: dataType.Id,
        IdQueue: dataType.IdQueue,
        IdFood: dataType.IdFood,
        Amount: dataType.Amount,
        Time: dataType.Time,
        CookStatus: 'Cooking',
        IdChef: idChefInt,
        IdStaff: '',
        Detail: dataType.Detail,
        CartStatus: 'true'

    }
    console.log(formdataCart);

    $.ajax({

        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "PUT",
        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+dataType.Id,
        data: formdataCart
    }).then(function (data) {
        alert('Update');
    
        
    });
}
}
   


}

function send7(){

   
    var idChef = getUrlParameter('id');
    var idChefInt = parseInt(idChef);
    var amountTotal = parseInt($('#amountTotal7').val());
    var dataDetail = $('#detail7').val();
    var Cart = $('#cart7').val();
    var time = new Date().toLocaleTimeString();
    var formdata = {
            
        IdFood: 7,
        AmountTotal: amountTotal,
        Time: time,
        CookStatus: 'Cooking',
        IdChef: idChefInt,
        Detail: dataDetail,
        idCart: Cart

    }

    $.ajax({

        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "POST",
        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
        data: formdata
    }).then(function (data) {
        alert('Post');
    
        
    });

console.log(amountTotal +" "+dataDetail+" "+idChefInt);

var char = '';

words = Cart.split(" ");

var cartId = [];

for(var i = 0 ; i<words.length ; i++){

cartId.push(words[i]);

}
console.log(cartId);
for(var j = 0 ; j<cartId.length-1 ; j++){
console.log(cartId[j]);
$.ajax({


type: "GET",
url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+cartId[j],

}).then(function (dataType) {

findCart(dataType);
// console.log(dataType);
});
function findCart(dataType){
    console.log(cartId[j]);
    var idChef = getUrlParameter('id');
    var idChefInt = parseInt(idChef);
    //console.log(idChefInt+" "+dataType.IdQueue);
    var formdataCart = {

        Id: dataType.Id,
        IdQueue: dataType.IdQueue,
        IdFood: dataType.IdFood,
        Amount: dataType.Amount,
        Time: dataType.Time,
        CookStatus: 'Cooking',
        IdChef: idChefInt,
        IdStaff: '',
        Detail: dataType.Detail,
        CartStatus: 'true'

    }
    console.log(formdataCart);

    $.ajax({

        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "PUT",
        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+dataType.Id,
        data: formdataCart
    }).then(function (data) {
        alert('Update');
    
        
    });
}
}
   


}


function send8(){

   
    var idChef = getUrlParameter('id');
    var idChefInt = parseInt(idChef);
    var amountTotal = parseInt($('#amountTotal8').val());
    var dataDetail = $('#detail8').val();
    var Cart = $('#cart8').val();
    var time = new Date().toLocaleTimeString();

    var formdata = {
            
        IdFood: 8,
        AmountTotal: amountTotal,
        Time: time,
        CookStatus: 'Cooking',
        IdChef: idChefInt,
        Detail: dataDetail,
        idCart: Cart

    }
    console.log(amountTotal +" "+dataDetail+" "+idChefInt);
    $.ajax({

        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "POST",
        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
        data: formdata
    }).then(function (data) {
        alert('Post');
    
        
    });



words = Cart.split(" ");

var cartId = [];

for(var i = 0 ; i<words.length ; i++){

cartId.push(words[i]);

}
console.log(cartId);
for(var j = 0 ; j<cartId.length-1 ; j++){
console.log(cartId[j]);
$.ajax({


type: "GET",
url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+cartId[j],

}).then(function (dataType) {

findCart(dataType);
// console.log(dataType);
});
function findCart(dataType){
    console.log(cartId[j]);
    var idChef = getUrlParameter('id');
    var idChefInt = parseInt(idChef);
    //console.log(idChefInt+" "+dataType.IdQueue);
    var formdataCart = {

        Id: dataType.Id,
        IdQueue: dataType.IdQueue,
        IdFood: dataType.IdFood,
        Amount: dataType.Amount,
        Time: dataType.Time,
        CookStatus: 'Cooking',
        IdChef: idChefInt,
        IdStaff: '',
        Detail: dataType.Detail,
        CartStatus: 'true'

    }
    console.log(formdataCart);

    $.ajax({

        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "PUT",
        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+dataType.Id,
        data: formdataCart
    }).then(function (data) {
        alert('Update');
    
        
    });
}
}
  



}


function send9(){

   
    var idChef = getUrlParameter('id');
    var idChefInt = parseInt(idChef);
    var amountTotal = parseInt($('#amountTotal9').val());
    var dataDetail = $('#detail9').val();
    var Cart = $('#cart9').val();
    var time = new Date().toLocaleTimeString();
    console.log(amountTotal +" "+dataDetail+" "+idChefInt);
    var formdata = {
            
        IdFood: 9,
        AmountTotal: amountTotal,
        Time: time,
        CookStatus: 'Cooking',
        IdChef: idChefInt,
        Detail: dataDetail,
        idCart: Cart

    }

    $.ajax({

        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "POST",
        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
        data: formdata
    }).then(function (data) {
        alert('Post');
    
        
    });




words = Cart.split(" ");

var cartId = [];

for(var i = 0 ; i<words.length ; i++){

cartId.push(words[i]);

}
console.log(cartId);
for(var j = 0 ; j<cartId.length-1 ; j++){
console.log(cartId[j]);
$.ajax({


type: "GET",
url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+cartId[j],

}).then(function (dataType) {

findCart(dataType);
// console.log(dataType);
});
function findCart(dataType){
    console.log(cartId[j]);
    var idChef = getUrlParameter('id');
    var idChefInt = parseInt(idChef);
    //console.log(idChefInt+" "+dataType.IdQueue);
    var formdataCart = {

        Id: dataType.Id,
        IdQueue: dataType.IdQueue,
        IdFood: dataType.IdFood,
        Amount: dataType.Amount,
        Time: dataType.Time,
        CookStatus: 'Cooking',
        IdChef: idChefInt,
        IdStaff: '',
        Detail: dataType.Detail,
        CartStatus: 'true'

    }
    console.log(formdataCart);

    $.ajax({

        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "PUT",
        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+dataType.Id,
        data: formdataCart
    }).then(function (data) {
        alert('Update');
    
        
    });
}
}
  





}


function send10(){

   
    var idChef = getUrlParameter('id');
    var idChefInt = parseInt(idChef);
    var amountTotal = parseInt($('#amountTotal10').val());
    var dataDetail = $('#detail10').val();
    var Cart = $('#cart10').val();
    var time = new Date().toLocaleTimeString();


console.log(amountTotal +" "+dataDetail+" "+idChefInt);

var formdata = {
            
    IdFood: 10,
    AmountTotal: amountTotal,
    Time: time,
    CookStatus: 'Cooking',
    IdChef: idChefInt,
    Detail: dataDetail,
    idCart: Cart

}

$.ajax({

    //CP1. Complete Ajax Code to GET ALL pin data 
    type: "POST",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
    data: formdata
}).then(function (data) {
    alert('Post');

    
});



words = Cart.split(" ");

var cartId = [];

for(var i = 0 ; i<words.length ; i++){

cartId.push(words[i]);

}
console.log(cartId);
for(var j = 0 ; j<cartId.length-1 ; j++){
console.log(cartId[j]);
$.ajax({


type: "GET",
url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+cartId[j],

}).then(function (dataType) {

findCart(dataType);
// console.log(dataType);
});
function findCart(dataType){
    console.log(cartId[j]);
    var idChef = getUrlParameter('id');
    var idChefInt = parseInt(idChef);
    //console.log(idChefInt+" "+dataType.IdQueue);
    var formdataCart = {

        Id: dataType.Id,
        IdQueue: dataType.IdQueue,
        IdFood: dataType.IdFood,
        Amount: dataType.Amount,
        Time: dataType.Time,
        CookStatus: 'Cooking',
        IdChef: idChefInt,
        IdStaff: '',
        Detail: dataType.Detail,
        CartStatus: 'true'

    }
    console.log(formdataCart);

    $.ajax({

        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "PUT",
        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+dataType.Id,
        data: formdataCart
    }).then(function (data) {
        alert('Update');
    
        
    });
}
}
  





}

function addCook() {

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
            url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
    
        }).then(function (dataType) {
            
            findData4(dataType);
            console.log(dataType);
        });

        function findData4(dataType){
            $.each(dataType, function (key, dataCart){
                    // console.log(dataCart.CookStatus);
                        
                        var url2 = "https://foodstepapi20180810123018.azurewebsites.net/Api/Foods";
                        $.get(url2, function (data) {
                        // $("#CartTab").attr("badge", data.length);

                        $.each(data, function (index, item) {
                               var idfood = parseInt(dataCart.IdFood);
                                // console.log(idfood+" "+item.Id+" "+dataCart.CookStatus);
                                if (idfood == item.Id && dataCart.CookStatus == 'Cooking'){
                                    $.get('Food_Menu_WC.html', function (template) {
                                        var rendered = Mustache.render(template, item);
                                        $("#WaitToCook").append(rendered);
                                    });
                                }                   
                        });
                
                    });
                                // return false;
                            
                            
                        });



                        
                }
        }
      
}

// WaitToServe

function addReceive() {

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
            url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
    
        }).then(function (dataType) {
            
            findData4(dataType);
            console.log(dataType);
        });

        function findData4(dataType){
            $.each(dataType, function (key, dataCart){
                    // console.log(dataCart.CookStatus);
                        
                        var url2 = "https://foodstepapi20180810123018.azurewebsites.net/Api/Foods";
                        $.get(url2, function (data) {
                        // $("#CartTab").attr("badge", data.length);

                        $.each(data, function (index, item) {
                               var idfood = parseInt(dataCart.IdFood);
                                // console.log(idfood+" "+item.Id+" "+dataCart.CookStatus);
                                if (idfood == item.Id && dataCart.CookStatus == 'Finnished' ){
                                    $.get('Food_MenuWS.html', function (template) {
                                        var rendered = Mustache.render(template, item);
                                        $("#WaitToServe").append(rendered);
                                    });
                                }                   
                        });
                
                    });
                                // return false;
                            
                            
                        });



                        
                }
        }
      
}




// Need to edit     EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

function serve1(){
   
    $.ajax({
                
        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "GET",
        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",

    }).then(function (dataType) {
        
        findCart(dataType);
        console.log(dataType);
    });
        
        function findCart(dataType){
           
        
            var idFood = $('#no1').val();
            var idInt = parseInt(idFood);
                var chefId = getUrlParameter('id');
                var chefInt = parseInt(chefId);
                console.log(chefInt);
                   
                        
                        for(var k=0 ; k<dataType.length ; k++){
                            console.log(dataType[k].Id +" "+chefInt);
                            
                            if(dataType[k].IdFood == idInt && dataType[k].CookStatus == 'Cooking' && dataType[k].IdChef == chefInt){
                                console.log(dataType[k].Id );
                                
                                var Cart = dataType[k].IdCart;

                                words = Cart.split(" ");

                                var cartId = [];

                                for(var i = 0 ; i<words.length ; i++){

                                cartId.push(words[i]);

                                }
                                console.log(cartId);
                                for(var j = 0 ; j<cartId.length-1 ; j++){
                                console.log(cartId[j]);
                                $.ajax({


                                type: "GET",
                                url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+cartId[j],

                                }).then(function (dataType) {

                                findCart(dataType);
                                // console.log(dataType);
                                });
                                function findCart(dataType){
                                    console.log(cartId[j]);
                                    var idChef = getUrlParameter('id');
                                    var idChefInt = parseInt(idChef);
                                    //console.log(idChefInt+" "+dataType.IdQueue);
                                    var formdataCart = {

                                        Id: dataType.Id,
                                        IdQueue: dataType.IdQueue,
                                        IdFood: dataType.IdFood,
                                        Amount: dataType.Amount,
                                        Time: dataType.Time,
                                        CookStatus: 'Finnished',
                                        IdChef: idChefInt,
                                        IdStaff: '',
                                        Detail: dataType.Detail,
                                        CartStatus: 'true'

                                    }
                                    console.log(formdataCart);

                                    $.ajax({

                                        //CP1. Complete Ajax Code to GET ALL pin data 
                                        type: "PUT",
                                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+dataType.Id,
                                        data: formdataCart
                                    }).then(function (data) {
                                        console.log('Update cart');
                                    
                                        
                                    });
                                }
                                }


                                var formdata = {
                                    Id: dataType[k].Id,
                                    IdQueue: dataType[k].IdQueue,
                                    IdFood: dataType[k].IdFood,
                                    Amount: dataType[k].Amount,
                                    Time: dataType[k].Time,
                                    CookStatus: 'Finnished',
                                    IdChef: chefInt,
                                    idStaff: '',
                                    Detail: dataType[k].Detail,
                                    IdCart: dataType[k].IdCart,
                                    AmountTotal: dataType[k].AmountTotal
                                }
                                $.ajax({
                    
                                    //CP1. Complete Ajax Code to GET ALL pin data 
                                    type: "PUT",
                                    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts/"+dataType[k].Id,
                                    data: formdata
                                }).then(function (data) {
                                    console.log('Edited totalcart');
                                
                                    
                                });


                                
                                return false;
                            }
                        }
                            
                    }
       
               

        }


        function serve3(){
   
            $.ajax({
                
                //CP1. Complete Ajax Code to GET ALL pin data 
                type: "GET",
                url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
        
            }).then(function (dataType) {
                
                findCart(dataType);
                console.log(dataType);
            });
                
                function findCart(dataType){
                   
                
                    var idFood = $('#no3').val();
                    var idInt = parseInt(idFood);
                        var chefId = getUrlParameter('id');
                        var chefInt = parseInt(chefId);
                        console.log(chefInt);
                           
                                
                                for(var k=0 ; k<dataType.length ; k++){
                                    console.log(dataType[k].Id +" "+chefInt);
                                    
                                    if(dataType[k].IdFood == idInt && dataType[k].CookStatus == 'Cooking' && dataType[k].IdChef == chefInt){
                                        console.log(dataType[k].Id );
                                        
                                        var Cart = dataType[k].IdCart;
        
                                        words = Cart.split(" ");
        
                                        var cartId = [];
        
                                        for(var i = 0 ; i<words.length ; i++){
        
                                        cartId.push(words[i]);
        
                                        }
                                        console.log(cartId);
                                        for(var j = 0 ; j<cartId.length-1 ; j++){
                                        console.log(cartId[j]);
                                        $.ajax({
        
        
                                        type: "GET",
                                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+cartId[j],
        
                                        }).then(function (dataType) {
        
                                        findCart(dataType);
                                        // console.log(dataType);
                                        });
                                        function findCart(dataType){
                                            console.log(cartId[j]);
                                            var idChef = getUrlParameter('id');
                                            var idChefInt = parseInt(idChef);
                                            //console.log(idChefInt+" "+dataType.IdQueue);
                                            var formdataCart = {
        
                                                Id: dataType.Id,
                                                IdQueue: dataType.IdQueue,
                                                IdFood: dataType.IdFood,
                                                Amount: dataType.Amount,
                                                Time: dataType.Time,
                                                CookStatus: 'Finnished',
                                                IdChef: idChefInt,
                                                IdStaff: '',
                                                Detail: dataType.Detail,
                                                CartStatus: 'true'
        
                                            }
                                            console.log(formdataCart);
        
                                            $.ajax({
        
                                                //CP1. Complete Ajax Code to GET ALL pin data 
                                                type: "PUT",
                                                url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+dataType.Id,
                                                data: formdataCart
                                            }).then(function (data) {
                                                console.log('Update cart');
                                            
                                                
                                            });
                                        }
                                        }
        
        
                                        var formdata = {
                                            Id: dataType[k].Id,
                                            IdQueue: dataType[k].IdQueue,
                                            IdFood: dataType[k].IdFood,
                                            Amount: dataType[k].Amount,
                                            Time: dataType[k].Time,
                                            CookStatus: 'Finnished',
                                            IdChef: chefInt,
                                            idStaff: '',
                                            Detail: dataType[k].Detail,
                                            IdCart: dataType[k].IdCart,
                                            AmountTotal: dataType[k].AmountTotal
                                        }
                                        $.ajax({
                            
                                            //CP1. Complete Ajax Code to GET ALL pin data 
                                            type: "PUT",
                                            url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts/"+dataType[k].Id,
                                            data: formdata
                                        }).then(function (data) {
                                            console.log('Edited totalcart');
                                        
                                            
                                        });
        
        
                                        
                                        return false;
                                    }
                                }
                                    
                            }
                       
        
                }


function serve4(){
    $.ajax({
                
        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "GET",
        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",

    }).then(function (dataType) {
        
        findCart(dataType);
        console.log(dataType);
    });
        
        function findCart(dataType){
           
        
            var idFood = $('#no4').val();
            var idInt = parseInt(idFood);
                var chefId = getUrlParameter('id');
                var chefInt = parseInt(chefId);
                console.log(chefInt);
                   
                        
                        for(var k=0 ; k<dataType.length ; k++){
                            console.log(dataType[k].Id +" "+chefInt);
                            
                            if(dataType[k].IdFood == idInt && dataType[k].CookStatus == 'Cooking' && dataType[k].IdChef == chefInt){
                                console.log(dataType[k].Id );
                                
                                var Cart = dataType[k].IdCart;

                                words = Cart.split(" ");

                                var cartId = [];

                                for(var i = 0 ; i<words.length ; i++){

                                cartId.push(words[i]);

                                }
                                console.log(cartId);
                                for(var j = 0 ; j<cartId.length-1 ; j++){
                                console.log(cartId[j]);
                                $.ajax({


                                type: "GET",
                                url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+cartId[j],

                                }).then(function (dataType) {

                                findCart(dataType);
                                // console.log(dataType);
                                });
                                function findCart(dataType){
                                    console.log(cartId[j]);
                                    var idChef = getUrlParameter('id');
                                    var idChefInt = parseInt(idChef);
                                    //console.log(idChefInt+" "+dataType.IdQueue);
                                    var formdataCart = {

                                        Id: dataType.Id,
                                        IdQueue: dataType.IdQueue,
                                        IdFood: dataType.IdFood,
                                        Amount: dataType.Amount,
                                        Time: dataType.Time,
                                        CookStatus: 'Finnished',
                                        IdChef: idChefInt,
                                        IdStaff: '',
                                        Detail: dataType.Detail,
                                        CartStatus: 'true'

                                    }
                                    console.log(formdataCart);

                                    $.ajax({

                                        //CP1. Complete Ajax Code to GET ALL pin data 
                                        type: "PUT",
                                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+dataType.Id,
                                        data: formdataCart
                                    }).then(function (data) {
                                        console.log('Update cart');
                                    
                                        
                                    });
                                }
                                }


                                var formdata = {
                                    Id: dataType[k].Id,
                                    IdQueue: dataType[k].IdQueue,
                                    IdFood: dataType[k].IdFood,
                                    Amount: dataType[k].Amount,
                                    Time: dataType[k].Time,
                                    CookStatus: 'Finnished',
                                    IdChef: chefInt,
                                    idStaff: '',
                                    Detail: dataType[k].Detail,
                                    IdCart: dataType[k].IdCart,
                                    AmountTotal: dataType[k].AmountTotal
                                }
                                $.ajax({
                    
                                    //CP1. Complete Ajax Code to GET ALL pin data 
                                    type: "PUT",
                                    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts/"+dataType[k].Id,
                                    data: formdata
                                }).then(function (data) {
                                    console.log('Edited totalcart');
                                
                                    
                                });


                                
                                return false;
                            }
                        }
                            
                    }
               
        }


        function serve5(){
            $.ajax({
                
                //CP1. Complete Ajax Code to GET ALL pin data 
                type: "GET",
                url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
        
            }).then(function (dataType) {
                
                findCart(dataType);
                console.log(dataType);
            });
                
                function findCart(dataType){
                   
                
                    var idFood = $('#no5').val();
                    var idInt = parseInt(idFood);
                        var chefId = getUrlParameter('id');
                        var chefInt = parseInt(chefId);
                        console.log(chefInt);
                           
                                
                                for(var k=0 ; k<dataType.length ; k++){
                                    console.log(dataType[k].Id +" "+chefInt);
                                    
                                    if(dataType[k].IdFood == idInt && dataType[k].CookStatus == 'Cooking' && dataType[k].IdChef == chefInt){
                                        console.log(dataType[k].Id );
                                        
                                        var Cart = dataType[k].IdCart;
        
                                        words = Cart.split(" ");
        
                                        var cartId = [];
        
                                        for(var i = 0 ; i<words.length ; i++){
        
                                        cartId.push(words[i]);
        
                                        }
                                        console.log(cartId);
                                        for(var j = 0 ; j<cartId.length-1 ; j++){
                                        console.log(cartId[j]);
                                        $.ajax({
        
        
                                        type: "GET",
                                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+cartId[j],
        
                                        }).then(function (dataType) {
        
                                        findCart(dataType);
                                        // console.log(dataType);
                                        });
                                        function findCart(dataType){
                                            console.log(cartId[j]);
                                            var idChef = getUrlParameter('id');
                                            var idChefInt = parseInt(idChef);
                                            //console.log(idChefInt+" "+dataType.IdQueue);
                                            var formdataCart = {
        
                                                Id: dataType.Id,
                                                IdQueue: dataType.IdQueue,
                                                IdFood: dataType.IdFood,
                                                Amount: dataType.Amount,
                                                Time: dataType.Time,
                                                CookStatus: 'Finnished',
                                                IdChef: idChefInt,
                                                IdStaff: '',
                                                Detail: dataType.Detail,
                                                CartStatus: 'true'
        
                                            }
                                            console.log(formdataCart);
        
                                            $.ajax({
        
                                                //CP1. Complete Ajax Code to GET ALL pin data 
                                                type: "PUT",
                                                url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+dataType.Id,
                                                data: formdataCart
                                            }).then(function (data) {
                                                console.log('Update cart');
                                            
                                                
                                            });
                                        }
                                        }
        
        
                                        var formdata = {
                                            Id: dataType[k].Id,
                                            IdQueue: dataType[k].IdQueue,
                                            IdFood: dataType[k].IdFood,
                                            Amount: dataType[k].Amount,
                                            Time: dataType[k].Time,
                                            CookStatus: 'Finnished',
                                            IdChef: chefInt,
                                            idStaff: '',
                                            Detail: dataType[k].Detail,
                                            IdCart: dataType[k].IdCart,
                                            AmountTotal: dataType[k].AmountTotal
                                        }
                                        $.ajax({
                            
                                            //CP1. Complete Ajax Code to GET ALL pin data 
                                            type: "PUT",
                                            url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts/"+dataType[k].Id,
                                            data: formdata
                                        }).then(function (data) {
                                            console.log('Edited totalcart');
                                        
                                            
                                        });
        
        
                                        
                                        return false;
                                    }
                                }
                                    
                            }                                                                                                           
        }

    function serve6(){
   
        $.ajax({
                
            //CP1. Complete Ajax Code to GET ALL pin data 
            type: "GET",
            url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
    
        }).then(function (dataType) {
            
            findCart(dataType);
            console.log(dataType);
        });
            
            function findCart(dataType){
               
            
                var idFood = $('#no6').val();
                var idInt = parseInt(idFood);
                    var chefId = getUrlParameter('id');
                    var chefInt = parseInt(chefId);
                    console.log(chefInt);
                       
                            
                            for(var k=0 ; k<dataType.length ; k++){
                                console.log(dataType[k].Id +" "+chefInt);
                                
                                if(dataType[k].IdFood == idInt && dataType[k].CookStatus == 'Cooking' && dataType[k].IdChef == chefInt){
                                    console.log(dataType[k].Id );
                                    
                                    var Cart = dataType[k].IdCart;
    
                                    words = Cart.split(" ");
    
                                    var cartId = [];
    
                                    for(var i = 0 ; i<words.length ; i++){
    
                                    cartId.push(words[i]);
    
                                    }
                                    console.log(cartId);
                                    for(var j = 0 ; j<cartId.length-1 ; j++){
                                    console.log(cartId[j]);
                                    $.ajax({
    
    
                                    type: "GET",
                                    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+cartId[j],
    
                                    }).then(function (dataType) {
    
                                    findCart(dataType);
                                    // console.log(dataType);
                                    });
                                    function findCart(dataType){
                                        console.log(cartId[j]);
                                        var idChef = getUrlParameter('id');
                                        var idChefInt = parseInt(idChef);
                                        //console.log(idChefInt+" "+dataType.IdQueue);
                                        var formdataCart = {
    
                                            Id: dataType.Id,
                                            IdQueue: dataType.IdQueue,
                                            IdFood: dataType.IdFood,
                                            Amount: dataType.Amount,
                                            Time: dataType.Time,
                                            CookStatus: 'Finnished',
                                            IdChef: idChefInt,
                                            IdStaff: '',
                                            Detail: dataType.Detail,
                                            CartStatus: 'true'
    
                                        }
                                        console.log(formdataCart);
    
                                        $.ajax({
    
                                            //CP1. Complete Ajax Code to GET ALL pin data 
                                            type: "PUT",
                                            url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+dataType.Id,
                                            data: formdataCart
                                        }).then(function (data) {
                                            console.log('Update cart');
                                        
                                            
                                        });
                                    }
                                    }
    
    
                                    var formdata = {
                                        Id: dataType[k].Id,
                                        IdQueue: dataType[k].IdQueue,
                                        IdFood: dataType[k].IdFood,
                                        Amount: dataType[k].Amount,
                                        Time: dataType[k].Time,
                                        CookStatus: 'Finnished',
                                        IdChef: chefInt,
                                        idStaff: '',
                                        Detail: dataType[k].Detail,
                                        IdCart: dataType[k].IdCart,
                                        AmountTotal: dataType[k].AmountTotal
                                    }
                                    $.ajax({
                        
                                        //CP1. Complete Ajax Code to GET ALL pin data 
                                        type: "PUT",
                                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts/"+dataType[k].Id,
                                        data: formdata
                                    }).then(function (data) {
                                        console.log('Edited totalcart');
                                    
                                        
                                    });
    
    
                                    
                                    return false;
                                }
                            }
                                
                        }
                
             }

    
             function serve7(){

                $.ajax({
                
                    //CP1. Complete Ajax Code to GET ALL pin data 
                    type: "GET",
                    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
            
                }).then(function (dataType) {
                    
                    findCart(dataType);
                    console.log(dataType);
                });
                    
                    function findCart(dataType){
                       
                    
                        var idFood = $('#no7').val();
                        var idInt = parseInt(idFood);
                            var chefId = getUrlParameter('id');
                            var chefInt = parseInt(chefId);
                            console.log(chefInt);
                               
                                    
                                    for(var k=0 ; k<dataType.length ; k++){
                                        console.log(dataType[k].Id +" "+chefInt);
                                        
                                        if(dataType[k].IdFood == idInt && dataType[k].CookStatus == 'Cooking' && dataType[k].IdChef == chefInt){
                                            console.log(dataType[k].Id );
                                            
                                            var Cart = dataType[k].IdCart;
            
                                            words = Cart.split(" ");
            
                                            var cartId = [];
            
                                            for(var i = 0 ; i<words.length ; i++){
            
                                            cartId.push(words[i]);
            
                                            }
                                            console.log(cartId);
                                            for(var j = 0 ; j<cartId.length-1 ; j++){
                                            console.log(cartId[j]);
                                            $.ajax({
            
            
                                            type: "GET",
                                            url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+cartId[j],
            
                                            }).then(function (dataType) {
            
                                            findCart(dataType);
                                            // console.log(dataType);
                                            });
                                            function findCart(dataType){
                                                console.log(cartId[j]);
                                                var idChef = getUrlParameter('id');
                                                var idChefInt = parseInt(idChef);
                                                //console.log(idChefInt+" "+dataType.IdQueue);
                                                var formdataCart = {
            
                                                    Id: dataType.Id,
                                                    IdQueue: dataType.IdQueue,
                                                    IdFood: dataType.IdFood,
                                                    Amount: dataType.Amount,
                                                    Time: dataType.Time,
                                                    CookStatus: 'Finnished',
                                                    IdChef: idChefInt,
                                                    IdStaff: '',
                                                    Detail: dataType.Detail,
                                                    CartStatus: 'true'
            
                                                }
                                                console.log(formdataCart);
            
                                                $.ajax({
            
                                                    //CP1. Complete Ajax Code to GET ALL pin data 
                                                    type: "PUT",
                                                    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+dataType.Id,
                                                    data: formdataCart
                                                }).then(function (data) {
                                                    console.log('Update cart');
                                                
                                                    
                                                });
                                            }
                                            }
            
            
                                            var formdata = {
                                                Id: dataType[k].Id,
                                                IdQueue: dataType[k].IdQueue,
                                                IdFood: dataType[k].IdFood,
                                                Amount: dataType[k].Amount,
                                                Time: dataType[k].Time,
                                                CookStatus: 'Finnished',
                                                IdChef: chefInt,
                                                idStaff: '',
                                                Detail: dataType[k].Detail,
                                                IdCart: dataType[k].IdCart,
                                                AmountTotal: dataType[k].AmountTotal
                                            }
                                            $.ajax({
                                
                                                //CP1. Complete Ajax Code to GET ALL pin data 
                                                type: "PUT",
                                                url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts/"+dataType[k].Id,
                                                data: formdata
                                            }).then(function (data) {
                                                console.log('Edited totalcart');
                                            
                                                
                                            });
            
            
                                            
                                            return false;
                                        }
                                    }
                                        
                                }
                
                        }


                        function serve8(){
   
                         
                            $.ajax({
                
                                //CP1. Complete Ajax Code to GET ALL pin data 
                                type: "GET",
                                url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
                        
                            }).then(function (dataType) {
                                
                                findCart(dataType);
                                console.log(dataType);
                            });
                                
                                function findCart(dataType){
                                   
                                
                                    var idFood = $('#no8').val();
                                    var idInt = parseInt(idFood);
                                        var chefId = getUrlParameter('id');
                                        var chefInt = parseInt(chefId);
                                        console.log(chefInt);
                                           
                                                
                                                for(var k=0 ; k<dataType.length ; k++){
                                                    console.log(dataType[k].Id +" "+chefInt);
                                                    
                                                    if(dataType[k].IdFood == idInt && dataType[k].CookStatus == 'Cooking' && dataType[k].IdChef == chefInt){
                                                        console.log(dataType[k].Id );
                                                        
                                                        var Cart = dataType[k].IdCart;
                        
                                                        words = Cart.split(" ");
                        
                                                        var cartId = [];
                        
                                                        for(var i = 0 ; i<words.length ; i++){
                        
                                                        cartId.push(words[i]);
                        
                                                        }
                                                        console.log(cartId);
                                                        for(var j = 0 ; j<cartId.length-1 ; j++){
                                                        console.log(cartId[j]);
                                                        $.ajax({
                        
                        
                                                        type: "GET",
                                                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+cartId[j],
                        
                                                        }).then(function (dataType) {
                        
                                                        findCart(dataType);
                                                        // console.log(dataType);
                                                        });
                                                        function findCart(dataType){
                                                            console.log(cartId[j]);
                                                            var idChef = getUrlParameter('id');
                                                            var idChefInt = parseInt(idChef);
                                                            //console.log(idChefInt+" "+dataType.IdQueue);
                                                            var formdataCart = {
                        
                                                                Id: dataType.Id,
                                                                IdQueue: dataType.IdQueue,
                                                                IdFood: dataType.IdFood,
                                                                Amount: dataType.Amount,
                                                                Time: dataType.Time,
                                                                CookStatus: 'Finnished',
                                                                IdChef: idChefInt,
                                                                IdStaff: '',
                                                                Detail: dataType.Detail,
                                                                CartStatus: 'true'
                        
                                                            }
                                                            console.log(formdataCart);
                        
                                                            $.ajax({
                        
                                                                //CP1. Complete Ajax Code to GET ALL pin data 
                                                                type: "PUT",
                                                                url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+dataType.Id,
                                                                data: formdataCart
                                                            }).then(function (data) {
                                                                console.log('Update cart');
                                                            
                                                                
                                                            });
                                                        }
                                                        }
                        
                        
                                                        var formdata = {
                                                            Id: dataType[k].Id,
                                                            IdQueue: dataType[k].IdQueue,
                                                            IdFood: dataType[k].IdFood,
                                                            Amount: dataType[k].Amount,
                                                            Time: dataType[k].Time,
                                                            CookStatus: 'Finnished',
                                                            IdChef: chefInt,
                                                            idStaff: '',
                                                            Detail: dataType[k].Detail,
                                                            IdCart: dataType[k].IdCart,
                                                            AmountTotal: dataType[k].AmountTotal
                                                        }
                                                        $.ajax({
                                            
                                                            //CP1. Complete Ajax Code to GET ALL pin data 
                                                            type: "PUT",
                                                            url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts/"+dataType[k].Id,
                                                            data: formdata
                                                        }).then(function (data) {
                                                            console.log('Edited totalcart');
                                                        
                                                            
                                                        });
                        
                        
                                                        
                                                        return false;
                                                    }
                                                }
                                                    
                                            }
                                       
                                    }
                       

                                    function serve9(){
   
                                        $.ajax({
                
                                            //CP1. Complete Ajax Code to GET ALL pin data 
                                            type: "GET",
                                            url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
                                    
                                        }).then(function (dataType) {
                                            
                                            findCart(dataType);
                                            console.log(dataType);
                                        });
                                            
                                            function findCart(dataType){
                                               
                                            
                                                var idFood = $('#no9').val();
                                                var idInt = parseInt(idFood);
                                                    var chefId = getUrlParameter('id');
                                                    var chefInt = parseInt(chefId);
                                                    console.log(chefInt);
                                                       
                                                            
                                                            for(var k=0 ; k<dataType.length ; k++){
                                                                console.log(dataType[k].Id +" "+chefInt);
                                                                
                                                                if(dataType[k].IdFood == idInt && dataType[k].CookStatus == 'Cooking' && dataType[k].IdChef == chefInt){
                                                                    console.log(dataType[k].Id );
                                                                    
                                                                    var Cart = dataType[k].IdCart;
                                    
                                                                    words = Cart.split(" ");
                                    
                                                                    var cartId = [];
                                    
                                                                    for(var i = 0 ; i<words.length ; i++){
                                    
                                                                    cartId.push(words[i]);
                                    
                                                                    }
                                                                    console.log(cartId);
                                                                    for(var j = 0 ; j<cartId.length-1 ; j++){
                                                                    console.log(cartId[j]);
                                                                    $.ajax({
                                    
                                    
                                                                    type: "GET",
                                                                    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+cartId[j],
                                    
                                                                    }).then(function (dataType) {
                                    
                                                                    findCart(dataType);
                                                                    // console.log(dataType);
                                                                    });
                                                                    function findCart(dataType){
                                                                        console.log(cartId[j]);
                                                                        var idChef = getUrlParameter('id');
                                                                        var idChefInt = parseInt(idChef);
                                                                        //console.log(idChefInt+" "+dataType.IdQueue);
                                                                        var formdataCart = {
                                    
                                                                            Id: dataType.Id,
                                                                            IdQueue: dataType.IdQueue,
                                                                            IdFood: dataType.IdFood,
                                                                            Amount: dataType.Amount,
                                                                            Time: dataType.Time,
                                                                            CookStatus: 'Finnished',
                                                                            IdChef: idChefInt,
                                                                            IdStaff: '',
                                                                            Detail: dataType.Detail,
                                                                            CartStatus: 'true'
                                    
                                                                        }
                                                                        console.log(formdataCart);
                                    
                                                                        $.ajax({
                                    
                                                                            //CP1. Complete Ajax Code to GET ALL pin data 
                                                                            type: "PUT",
                                                                            url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+dataType.Id,
                                                                            data: formdataCart
                                                                        }).then(function (data) {
                                                                            console.log('Update cart');
                                                                        
                                                                            
                                                                        });
                                                                    }
                                                                    }
                                    
                                    
                                                                    var formdata = {
                                                                        Id: dataType[k].Id,
                                                                        IdQueue: dataType[k].IdQueue,
                                                                        IdFood: dataType[k].IdFood,
                                                                        Amount: dataType[k].Amount,
                                                                        Time: dataType[k].Time,
                                                                        CookStatus: 'Finnished',
                                                                        IdChef: chefInt,
                                                                        idStaff: '',
                                                                        Detail: dataType[k].Detail,
                                                                        IdCart: dataType[k].IdCart,
                                                                        AmountTotal: dataType[k].AmountTotal
                                                                    }
                                                                    $.ajax({
                                                        
                                                                        //CP1. Complete Ajax Code to GET ALL pin data 
                                                                        type: "PUT",
                                                                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts/"+dataType[k].Id,
                                                                        data: formdata
                                                                    }).then(function (data) {
                                                                        console.log('Edited totalcart');
                                                                    
                                                                        
                                                                    });
                                    
                                    
                                                                    
                                                                    return false;
                                                                }
                                                            }
                                                                
                                                        }
                                                   
                                                }



                function serve10(){
                    $.ajax({
                
                        //CP1. Complete Ajax Code to GET ALL pin data 
                        type: "GET",
                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
                
                    }).then(function (dataType) {
                        
                        findCart(dataType);
                        console.log(dataType);
                    });
                        
                        function findCart(dataType){
                           
                        
                            var idFood = $('#no10').val();
                            var idInt = parseInt(idFood);
                                var chefId = getUrlParameter('id');
                                var chefInt = parseInt(chefId);
                                console.log(chefInt);
                                   
                                        
                                        for(var k=0 ; k<dataType.length ; k++){
                                            console.log(dataType[k].Id +" "+chefInt);
                                            
                                            if(dataType[k].IdFood == idInt && dataType[k].CookStatus == 'Cooking' && dataType[k].IdChef == chefInt){
                                                console.log(dataType[k].Id );
                                                
                                                var Cart = dataType[k].IdCart;
                
                                                words = Cart.split(" ");
                
                                                var cartId = [];
                
                                                for(var i = 0 ; i<words.length ; i++){
                
                                                cartId.push(words[i]);
                
                                                }
                                                console.log(cartId);
                                                for(var j = 0 ; j<cartId.length-1 ; j++){
                                                console.log(cartId[j]);
                                                $.ajax({
                
                
                                                type: "GET",
                                                url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+cartId[j],
                
                                                }).then(function (dataType) {
                
                                                findCart(dataType);
                                                // console.log(dataType);
                                                });
                                                function findCart(dataType){
                                                    console.log(cartId[j]);
                                                    var idChef = getUrlParameter('id');
                                                    var idChefInt = parseInt(idChef);
                                                    //console.log(idChefInt+" "+dataType.IdQueue);
                                                    var formdataCart = {
                
                                                        Id: dataType.Id,
                                                        IdQueue: dataType.IdQueue,
                                                        IdFood: dataType.IdFood,
                                                        Amount: dataType.Amount,
                                                        Time: dataType.Time,
                                                        CookStatus: 'Finnished',
                                                        IdChef: idChefInt,
                                                        IdStaff: '',
                                                        Detail: dataType.Detail,
                                                        CartStatus: 'true'
                
                                                    }
                                                    console.log(formdataCart);
                
                                                    $.ajax({
                
                                                        //CP1. Complete Ajax Code to GET ALL pin data 
                                                        type: "PUT",
                                                        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+dataType.Id,
                                                        data: formdataCart
                                                    }).then(function (data) {
                                                        console.log('Update cart');
                                                    
                                                        
                                                    });
                                                }
                                                }
                
                
                                                var formdata = {
                                                    Id: dataType[k].Id,
                                                    IdQueue: dataType[k].IdQueue,
                                                    IdFood: dataType[k].IdFood,
                                                    Amount: dataType[k].Amount,
                                                    Time: dataType[k].Time,
                                                    CookStatus: 'Finnished',
                                                    IdChef: chefInt,
                                                    idStaff: '',
                                                    Detail: dataType[k].Detail,
                                                    IdCart: dataType[k].IdCart,
                                                    AmountTotal: dataType[k].AmountTotal
                                                }
                                                $.ajax({
                                    
                                                    //CP1. Complete Ajax Code to GET ALL pin data 
                                                    type: "PUT",
                                                    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts/"+dataType[k].Id,
                                                    data: formdata
                                                }).then(function (data) {
                                                    console.log('Edited totalcart');
                                                
                                                    
                                                });
                
                
                                                
                                                return false;
                                            }
                                        }
                                            
                                    }
              
                                                               
                                                    }

                                                   
                                                     //Food_MenuWaiter

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
                                                                            
                                                                            var url2 = "https://foodstepapi20180810123018.azurewebsites.net/Api/Foods";
                                                                            $.get(url2, function (data) {
                                                                            // $("#CartTab").attr("badge", data.length);
                                                    
                                                                            $.each(data, function (index, item) {
                                                                                   var idfood = parseInt(dataCart.IdFood);
                                                                                    console.log(idfood+" "+item.Id+" "+dataCart.CookStatus);
                                                                                    if (idfood == item.Id && dataCart.CookStatus == 'Finnished'){
                                                                                        $.get('Food_MenuWaiter.html', function (template) {
                                                                                            var rendered = Mustache.render(template, item);
                                                                                            $("#WaitToServeToCu").append(rendered);
                                                                                        });
                                                                                    }                   
                                                                            });
                                                                    
                                                                        });
                                                                                    // return false;
                                                                                
                                                                                
                                                                            });
                                                    
                                                    
                                                    
                                                                            
                                                                    }
                                                            }
                                                          
                                                    });
// Need to edit    AND not yet update TotalCarts
    function serveToCu1(){
        $.ajax({
                
            //CP1. Complete Ajax Code to GET ALL pin data 
            type: "GET",
            url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
        }).then(function (dataType) {
            
            findCart(dataType);
            console.log(dataType);
        });
        function findCart(dataType){
           
        
                var idFood = $('#no1').val();
                var idInt = parseInt(idFood);
                var waiterId = getUrlParameter('id');
                var waiterInt = parseInt(waiterId);
                console.log(waiterInt);
                 
                        
                        for(var k=0 ; k<dataType.length ; k++){
                            
                            console.log(dataType[k].Id +" "+waiterInt);
                            if( dataType[k].IdFood == idInt && dataType[k].CookStatus == 'Finnished'){

                               
                                    $.ajax({
                
                                        //CP1. Complete Ajax Code to GET ALL pin data 
                                        type: "GET",
                                        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables",
                                
                                    }).then(function (dataTable) {
                                        
                                       findTable(dataTable);
        
                                       
                                    });
                                        function findTable(dataTable){
                                                for(var i=0 ; i<dataTable.length ; i++){
                                                        if(dataTable[i].IdQueue == dataType[k].IdQueue){
                                                                alert(dataTable[i].Name);
                                                        }
                                                }
                                        }


                                var formdata = {
                                    Id: dataType[k].Id,
                                    IdQueue: dataType[k].IdQueue,
                                    IdFood: dataType[k].IdFood, 
                                    Amount: dataType[k].Amount,                                   
                                    Time: dataType[k].Time,
                                    CookStatus: 'FinnishedServe',
                                    IdStaff: waiterInt,
                                    IdChef: dataType[k].IdChef,
                                    Detail: dataType[k].Detail,
                                    CartStatus: dataType[k].CartStatus
                                }
                                $.ajax({
                    
                                    //CP1. Complete Ajax Code to GET ALL pin data 
                                    type: "PUT",
                                    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+dataType[k].Id,
                                    data: formdata
                                }).then(function (data) {
                                    console.log('Edited');
                                
                                    
                                });
                              
                                        
                                return false;
                           // }
                        }

                        
                      //  }

                            
                  //  }






            }
        }
            
    }

    function serveToCu6(){
        $.ajax({
                
            //CP1. Complete Ajax Code to GET ALL pin data 
            type: "GET",
            url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
        }).then(function (dataType) {
            
            findCart(dataType);
            console.log(dataType);
        });
        function findCart(dataType){
           
        
            // $.ajax({
        
            //     //CP1. Complete Ajax Code to GET ALL pin data 
            //     type: "GET",
            //     url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Cooks",
        
            // }).then(function (data) {
                
            //     findCooks(data);
            //     console.log(data);
            // });

            //function findCooks(data){
                var idFood = $('#no6').val();
                var idInt = parseInt(idFood);
                var waiterId = getUrlParameter('id');
                var waiterInt = parseInt(waiterId);
                console.log(waiterInt);
                  //  for(var j=0 ; j<data.length ; j++){
                        
                        for(var k=0 ; k<dataType.length ; k++){
                            
                            console.log(dataType[k].Id +" "+waiterInt);
                            if( dataType[k].IdFood == idInt && dataType[k].CookStatus == 'Finnished'){

                                // $.ajax({
        
                                //     //CP1. Complete Ajax Code to GET ALL pin data 
                                //     type: "GET",
                                //     url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Carts/"+dataType[k].Id,
                            
                                // }).then(function (data) {
                                    
                                //     findCart(data);
                                //     console.log(data);
                                // });
                               // function findCart(data){
                                    $.ajax({
                
                                        //CP1. Complete Ajax Code to GET ALL pin data 
                                        type: "GET",
                                        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables",
                                
                                    }).then(function (dataTable) {
                                        
                                       findTable(dataTable);
        
                                       
                                    });
                                        function findTable(dataTable){
                                                for(var i=0 ; i<dataTable.length ; i++){
                                                        if(dataTable[i].IdQueue == dataType[k].IdQueue){
                                                                alert(dataTable[i].Name);
                                                        }
                                                }
                                        }


                            
                                var formdata = {
                                    Id: dataType[k].Id,
                                    IdQueue: dataType[k].IdQueue,
                                    IdFood: dataType[k].IdFood, 
                                    Amount: dataType[k].Amount,                                   
                                    Time: dataType[k].Time,
                                    CookStatus: 'FinnishedServe',
                                    IdStaff: waiterInt,
                                    IdChef: dataType[k].IdChef,
                                    Detail: dataType[k].Detail,
                                    CartStatus: dataType[k].CartStatus
                                }
                                $.ajax({
                    
                                    //CP1. Complete Ajax Code to GET ALL pin data 
                                    type: "PUT",
                                    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+dataType[k].Id,
                                    data: formdata
                                }).then(function (data) {
                                    console.log('Edited');
                                
                                    
                                });
                              
                                        
                                return false;
                           // }
                        }

        





            }
        }
    }

    function serveToCu3(){
        $.ajax({
                
            //CP1. Complete Ajax Code to GET ALL pin data 
            type: "GET",
            url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
        }).then(function (dataType) {
            
            findCart(dataType);
            console.log(dataType);
        });
        function findCart(dataType){
           
        
            // $.ajax({
        
            //     //CP1. Complete Ajax Code to GET ALL pin data 
            //     type: "GET",
            //     url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Cooks",
        
            // }).then(function (data) {
                
            //     findCooks(data);
            //     console.log(data);
            // });

            //function findCooks(data){
                var idFood = $('#no3').val();
                var idInt = parseInt(idFood);
                var waiterId = getUrlParameter('id');
                var waiterInt = parseInt(waiterId);
                console.log(waiterInt);
                  //  for(var j=0 ; j<data.length ; j++){
                        
                        for(var k=0 ; k<dataType.length ; k++){
                            
                            console.log(dataType[k].Id +" "+waiterInt);
                            if( dataType[k].IdFood == idInt && dataType[k].CookStatus == 'Finnished'){

                                // $.ajax({
        
                                //     //CP1. Complete Ajax Code to GET ALL pin data 
                                //     type: "GET",
                                //     url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Carts/"+dataType[k].Id,
                            
                                // }).then(function (data) {
                                    
                                //     findCart(data);
                                //     console.log(data);
                                // });
                               // function findCart(data){
                                    $.ajax({
                
                                        //CP1. Complete Ajax Code to GET ALL pin data 
                                        type: "GET",
                                        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables",
                                
                                    }).then(function (dataTable) {
                                        
                                       findTable(dataTable);
        
                                       
                                    });
                                        function findTable(dataTable){
                                                for(var i=0 ; i<dataTable.length ; i++){
                                                        if(dataTable[i].IdQueue == dataType[k].IdQueue){
                                                                alert(dataTable[i].Name);
                                                        }
                                                }
                                        }


                        
                                var formdata = {
                                    Id: dataType[k].Id,
                                    IdQueue: dataType[k].IdQueue,
                                    IdFood: dataType[k].IdFood, 
                                    Amount: dataType[k].Amount,                                   
                                    Time: dataType[k].Time,
                                    CookStatus: 'FinnishedServe',
                                    IdStaff: waiterInt,
                                    IdChef: dataType[k].IdChef,
                                    Detail: dataType[k].Detail,
                                    CartStatus: dataType[k].CartStatus
                                }
                                $.ajax({
                    
                                    //CP1. Complete Ajax Code to GET ALL pin data 
                                    type: "PUT",
                                    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+dataType[k].Id,
                                    data: formdata
                                }).then(function (data) {
                                    console.log('Edited');
                                
                                    
                                });
                              
                                        
                                return false;
                           // }
                        }

                        
                      //  }

                            
                  //  }






            }
        }
    }

    function serveToCu4(){
        $.ajax({
                
            //CP1. Complete Ajax Code to GET ALL pin data 
            type: "GET",
            url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
        }).then(function (dataType) {
            
            findCart(dataType);
            console.log(dataType);
        });
        function findCart(dataType){
           
        
            // $.ajax({
        
            //     //CP1. Complete Ajax Code to GET ALL pin data 
            //     type: "GET",
            //     url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Cooks",
        
            // }).then(function (data) {
                
            //     findCooks(data);
            //     console.log(data);
            // });

            //function findCooks(data){
                var idFood = $('#no4').val();
                var idInt = parseInt(idFood);
                var waiterId = getUrlParameter('id');
                var waiterInt = parseInt(waiterId);
                console.log(waiterInt);
                  //  for(var j=0 ; j<data.length ; j++){
                        
                        for(var k=0 ; k<dataType.length ; k++){
                            
                            console.log(dataType[k].Id +" "+waiterInt);
                            if( dataType[k].IdFood == idInt && dataType[k].CookStatus == 'Finnished'){

                                // $.ajax({
        
                                //     //CP1. Complete Ajax Code to GET ALL pin data 
                                //     type: "GET",
                                //     url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Carts/"+dataType[k].Id,
                            
                                // }).then(function (data) {
                                    
                                //     findCart(data);
                                //     console.log(data);
                                // });
                               // function findCart(data){
                                    $.ajax({
                
                                        //CP1. Complete Ajax Code to GET ALL pin data 
                                        type: "GET",
                                        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables",
                                
                                    }).then(function (dataTable) {
                                        
                                       findTable(dataTable);
        
                                       
                                    });
                                        function findTable(dataTable){
                                                for(var i=0 ; i<dataTable.length ; i++){
                                                        if(dataTable[i].IdQueue == dataType[k].IdQueue){
                                                                alert(dataTable[i].Name);
                                                        }
                                                }
                                        }


                                var formdata = {
                                    Id: dataType[k].Id,
                                    IdQueue: dataType[k].IdQueue,
                                    IdFood: dataType[k].IdFood, 
                                    Amount: dataType[k].Amount,                                   
                                    Time: dataType[k].Time,
                                    CookStatus: 'FinnishedServe',
                                    IdStaff: waiterInt,
                                    IdChef: dataType[k].IdChef,
                                    Detail: dataType[k].Detail,
                                    CartStatus: dataType[k].CartStatus
                                }
                                $.ajax({
                    
                                    //CP1. Complete Ajax Code to GET ALL pin data 
                                    type: "PUT",
                                    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+dataType[k].Id,
                                    data: formdata
                                }).then(function (data) {
                                    console.log('Edited');
                                
                                    
                                });
                              
                                        
                                return false;
                           // }
                        }

                        
                      //  }

                            
                  //  }






            }
        }
    }

    function serveToCu5(){
        $.ajax({
                
            //CP1. Complete Ajax Code to GET ALL pin data 
            type: "GET",
            url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
        }).then(function (dataType) {
            
            findCart(dataType);
            console.log(dataType);
        });
        function findCart(dataType){
           
        
            // $.ajax({
        
            //     //CP1. Complete Ajax Code to GET ALL pin data 
            //     type: "GET",
            //     url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Cooks",
        
            // }).then(function (data) {
                
            //     findCooks(data);
            //     console.log(data);
            // });

            //function findCooks(data){
                var idFood = $('#no5').val();
                var idInt = parseInt(idFood);
                var waiterId = getUrlParameter('id');
                var waiterInt = parseInt(waiterId);
                console.log(waiterInt);
                  //  for(var j=0 ; j<data.length ; j++){
                        
                        for(var k=0 ; k<dataType.length ; k++){
                            
                            console.log(dataType[k].Id +" "+waiterInt);
                            if( dataType[k].IdFood == idInt && dataType[k].CookStatus == 'Finnished'){

                                // $.ajax({
        
                                //     //CP1. Complete Ajax Code to GET ALL pin data 
                                //     type: "GET",
                                //     url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Carts/"+dataType[k].Id,
                            
                                // }).then(function (data) {
                                    
                                //     findCart(data);
                                //     console.log(data);
                                // });
                               // function findCart(data){
                                    $.ajax({
                
                                        //CP1. Complete Ajax Code to GET ALL pin data 
                                        type: "GET",
                                        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables",
                                
                                    }).then(function (dataTable) {
                                        
                                       findTable(dataTable);
        
                                       
                                    });
                                        function findTable(dataTable){
                                                for(var i=0 ; i<dataTable.length ; i++){
                                                        if(dataTable[i].IdQueue == dataType[k].IdQueue){
                                                                alert(dataTable[i].Name);
                                                        }
                                                }
                                        }


                            
                                var formdata = {
                                    Id: dataType[k].Id,
                                    IdQueue: dataType[k].IdQueue,
                                    IdFood: dataType[k].IdFood, 
                                    Amount: dataType[k].Amount,                                   
                                    Time: dataType[k].Time,
                                    CookStatus: 'FinnishedServe',
                                    IdStaff: waiterInt,
                                    IdChef: dataType[k].IdChef,
                                    Detail: dataType[k].Detail,
                                    CartStatus: dataType[k].CartStatus
                                }
                                $.ajax({
                    
                                    //CP1. Complete Ajax Code to GET ALL pin data 
                                    type: "PUT",
                                    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+dataType[k].Id,
                                    data: formdata
                                }).then(function (data) {
                                    console.log('Edited');
                                
                                    
                                });
                              
                                        
                                return false;
                           // }
                        }

                        
                      //  }

                            
                  //  }






            }
        }
    }

    function serveToCu7(){
        $.ajax({
                
            //CP1. Complete Ajax Code to GET ALL pin data 
            type: "GET",
            url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
        }).then(function (dataType) {
            
            findCart(dataType);
            console.log(dataType);
        });
        function findCart(dataType){
           
        
            // $.ajax({
        
            //     //CP1. Complete Ajax Code to GET ALL pin data 
            //     type: "GET",
            //     url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Cooks",
        
            // }).then(function (data) {
                
            //     findCooks(data);
            //     console.log(data);
            // });

            //function findCooks(data){
                var idFood = $('#no7').val();
                var idInt = parseInt(idFood);
                var waiterId = getUrlParameter('id');
                var waiterInt = parseInt(waiterId);
                console.log(waiterInt);
                  //  for(var j=0 ; j<data.length ; j++){
                        
                        for(var k=0 ; k<dataType.length ; k++){
                            
                            console.log(dataType[k].Id +" "+waiterInt);
                            if( dataType[k].IdFood == idInt && dataType[k].CookStatus == 'Finnished'){

                                // $.ajax({
        
                                //     //CP1. Complete Ajax Code to GET ALL pin data 
                                //     type: "GET",
                                //     url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Carts/"+dataType[k].Id,
                            
                                // }).then(function (data) {
                                    
                                //     findCart(data);
                                //     console.log(data);
                                // });
                               // function findCart(data){
                                    $.ajax({
                
                                        //CP1. Complete Ajax Code to GET ALL pin data 
                                        type: "GET",
                                        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables",
                                
                                    }).then(function (dataTable) {
                                        
                                       findTable(dataTable);
        
                                       
                                    });
                                        function findTable(dataTable){
                                                for(var i=0 ; i<dataTable.length ; i++){
                                                        if(dataTable[i].IdQueue == dataType[k].IdQueue){
                                                                alert(dataTable[i].Name);
                                                        }
                                                }
                                        }


                                var formdata = {
                                    Id: dataType[k].Id,
                                    IdQueue: dataType[k].IdQueue,
                                    IdFood: dataType[k].IdFood, 
                                    Amount: dataType[k].Amount,                                   
                                    Time: dataType[k].Time,
                                    CookStatus: 'FinnishedServe',
                                    IdStaff: waiterInt,
                                    IdChef: dataType[k].IdChef,
                                    Detail: dataType[k].Detail,
                                    CartStatus: dataType[k].CartStatus
                                }
                                $.ajax({
                    
                                    //CP1. Complete Ajax Code to GET ALL pin data 
                                    type: "PUT",
                                    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+dataType[k].Id,
                                    data: formdata
                                }).then(function (data) {
                                    console.log('Edited');
                                
                                    
                                });
                              
                                        
                                return false;
                           // }
                        }

                        
                      //  }

                            
                  //  }






            }
        }
    }

    function serveToCu8(){
        $.ajax({
                
            //CP1. Complete Ajax Code to GET ALL pin data 
            type: "GET",
            url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
        }).then(function (dataType) {
            
            findCart(dataType);
            console.log(dataType);
        });
        function findCart(dataType){
           
        
                var idFood = $('#no8').val();
                var idInt = parseInt(idFood);
                var waiterId = getUrlParameter('id');
                var waiterInt = parseInt(waiterId);
                console.log(waiterInt);
                  //  for(var j=0 ; j<data.length ; j++){
                        
                        for(var k=0 ; k<dataType.length ; k++){
                            
                            console.log(dataType[k].Id +" "+waiterInt);
                            if( dataType[k].IdFood == idInt && dataType[k].CookStatus == 'Finnished'){

                      
                                    $.ajax({
                
                                        //CP1. Complete Ajax Code to GET ALL pin data 
                                        type: "GET",
                                        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables",
                                
                                    }).then(function (dataTable) {
                                        
                                       findTable(dataTable);
        
                                       
                                    });
                                        function findTable(dataTable){
                                                for(var i=0 ; i<dataTable.length ; i++){
                                                        if(dataTable[i].IdQueue == dataType[k].IdQueue){
                                                                alert(dataTable[i].Name);
                                                        }
                                                }
                                        }


                                
                                var formdata = {
                                    Id: dataType[k].Id,
                                    IdQueue: dataType[k].IdQueue,
                                    IdFood: dataType[k].IdFood, 
                                    Amount: dataType[k].Amount,                                   
                                    Time: dataType[k].Time,
                                    CookStatus: 'FinnishedServe',
                                    IdStaff: waiterInt,
                                    IdChef: dataType[k].IdChef,
                                    Detail: dataType[k].Detail,
                                    CartStatus: dataType[k].CartStatus
                                }
                                $.ajax({
                    
                                    //CP1. Complete Ajax Code to GET ALL pin data 
                                    type: "PUT",
                                    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+dataType[k].Id,
                                    data: formdata
                                }).then(function (data) {
                                    console.log('Edited');
                                
                                    
                                });
                              
                                        
                                return false;
                           // }
                        }

                        
                      //  }

                            
                  //  }






            }
        }
    }

    function serveToCu9(){
        $.ajax({
                
            //CP1. Complete Ajax Code to GET ALL pin data 
            type: "GET",
            url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
        }).then(function (dataType) {
            
            findCart(dataType);
            console.log(dataType);
        });
        function findCart(dataType){
           
        
                var idFood = $('#no9').val();
                var idInt = parseInt(idFood);
                var waiterId = getUrlParameter('id');
                var waiterInt = parseInt(waiterId);
                console.log(waiterInt);
                  //  for(var j=0 ; j<data.length ; j++){
                        
                        for(var k=0 ; k<dataType.length ; k++){
                            
                            console.log(dataType[k].Id +" "+waiterInt);
                            if( dataType[k].IdFood == idInt && dataType[k].CookStatus == 'Finnished'){

                              
                                    $.ajax({
                
                                        //CP1. Complete Ajax Code to GET ALL pin data 
                                        type: "GET",
                                        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables",
                                
                                    }).then(function (dataTable) {
                                        
                                       findTable(dataTable);
        
                                       
                                    });
                                        function findTable(dataTable){
                                                for(var i=0 ; i<dataTable.length ; i++){
                                                        if(dataTable[i].IdQueue == dataType[k].IdQueue){
                                                                alert(dataTable[i].Name);
                                                        }
                                                }
                                        }


                               
                                var formdata = {
                                    Id: dataType[k].Id,
                                    IdQueue: dataType[k].IdQueue,
                                    IdFood: dataType[k].IdFood, 
                                    Amount: dataType[k].Amount,                                   
                                    Time: dataType[k].Time,
                                    CookStatus: 'FinnishedServe',
                                    IdStaff: waiterInt,
                                    IdChef: dataType[k].IdChef,
                                    Detail: dataType[k].Detail,
                                    CartStatus: dataType[k].CartStatus
                                }
                                $.ajax({
                    
                                    //CP1. Complete Ajax Code to GET ALL pin data 
                                    type: "PUT",
                                    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+dataType[k].Id,
                                    data: formdata
                                }).then(function (data) {
                                    console.log('Edited');
                                
                                    
                                });
                              
                                        
                                return false;
                           // }
                        }

                        
                      //  }

                            
                  //  }






            }
        }
    }

    function serveToCu10(){
        $.ajax({
                
            //CP1. Complete Ajax Code to GET ALL pin data 
            type: "GET",
            url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts",
    
        }).then(function (dataType) {
            
            findCart(dataType);
            console.log(dataType);
        });
        function findCart(dataType){
           
        
            // $.ajax({
        
            //     //CP1. Complete Ajax Code to GET ALL pin data 
            //     type: "GET",
            //     url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Cooks",
        
            // }).then(function (data) {
                
            //     findCooks(data);
            //     console.log(data);
            // });

            //function findCooks(data){
                var idFood = $('#no10').val();
                var idInt = parseInt(idFood);
                var waiterId = getUrlParameter('id');
                var waiterInt = parseInt(waiterId);
                console.log(waiterInt);
                  //  for(var j=0 ; j<data.length ; j++){
                        
                        for(var k=0 ; k<dataType.length ; k++){
                            
                            console.log(dataType[k].Id +" "+waiterInt);
                            if( dataType[k].IdFood == idInt && dataType[k].CookStatus == 'Finnished'){

                            
                                    $.ajax({
                
                                        //CP1. Complete Ajax Code to GET ALL pin data 
                                        type: "GET",
                                        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables",
                                
                                    }).then(function (dataTable) {
                                        
                                       findTable(dataTable);
        
                                       
                                    });
                                        function findTable(dataTable){
                                                for(var i=0 ; i<dataTable.length ; i++){
                                                        if(dataTable[i].IdQueue == dataType[k].IdQueue){
                                                              //  alert(dataTable[i].Name);
                                                             
                                                        }
                                                }
                                        }

                                var formdata = {
                                    Id: dataType[k].Id,
                                    IdQueue: dataType[k].IdQueue,
                                    IdFood: dataType[k].IdFood, 
                                    Amount: dataType[k].Amount,                                   
                                    Time: dataType[k].Time,
                                    CookStatus: 'FinnishedServe',
                                    IdStaff: waiterInt,
                                    IdChef: dataType[k].IdChef,
                                    Detail: dataType[k].Detail,
                                    CartStatus: dataType[k].CartStatus
                                }
                                $.ajax({
                    
                                    //CP1. Complete Ajax Code to GET ALL pin data 
                                    type: "PUT",
                                    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Carts/"+dataType[k].Id,
                                    data: formdata
                                }).then(function (data) {
                                    console.log('Edited');
                                
                                    
                                });
                              
                                        
                                return false;
                           // }
                        }

                        
                      //  }

                            
                  //  }






            }
        }
    }

// Register for admin ***************************************************
    function register(){
        var radios = document.getElementsByName('choice');
        var val= "";
     for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value; 
         break;
       }
  }
 // alert(val);
  var firstname2 = $('#FirstName2').val();
  var lastname = $('#LastName2').val();
  var birthday = $('#Birthday').val();
  var tel = $('#Tel').val();
  var position = val;
  var email = $('#Email').val();
  var password = $('#Password').val();

  var formdata = {
    FirstName: firstname2,
    LastName: lastname,
    Birthday: birthday,
    Tel: tel, 
    Position: position,
    Email: email,
    Password: password,
    Status: 'Disable'
  };

  console.log(formdata);
   
  $.ajax({
      
              //CP1. Complete Ajax Code to GET ALL pin data 
              type: "POST",
              url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Staffs",
              data: formdata
          }).then(function (data) {

          
         
         console.log('post');
         alert('Register successed!');
             });


    }

function Activate(){

    var radios = document.getElementsByName('choice');
    var val= [];
    for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
     val.push(radios[i].value); 
    }
    }

    console.log(val);
    $.ajax({
        
    //CP1. Complete Ajax Code to GET ALL pin data 
    type: "GET",
    url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Staffs",

    }).then(function (dataUser) {
    
    findDataUser(dataUser);
    
    });
    function findDataUser(dataUser){

        for(var i =0 ; i<dataUser.length ; i++){
            var formdata = {
              Id: dataUser[i].Id,
              Birthday: dataUser[i].Birthday,
              Email: dataUser[i].Email,
              FirstName: dataUser[i].FirstName,
              LastName: dataUser[i].LastName,
              Password: dataUser[i].Password,
              Position: dataUser[i].Position,
              Tel: dataUser[i].Tel,
              Status: val[i]
            }
            $.ajax({
                    
                //CP1. Complete Ajax Code to GET ALL pin data 
                type: "PUT",
                url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Staffs/"+dataUser[i].Id,
                data: formdata
            }).then(function (data) {
                console.log('Edited');    
            });
        }
    }

    }

    function AddFood(){

        var radios = document.getElementsByName('choice2');
        var val= "";
     for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value; 
         break;
       }
    }
   // alert(val);
   var name = $('#Name').val();
   var detail = $('#Detail').val();
   var picture = $('#Picture').val();
   var price = $('#Price').val();
   var status = 'true';
   var timeCook = $('#TimeCook').val();
   var type = val;

   var dataForm = {
       Detail: detail,
       Name: name,
       Pictures: picture,
       Price: price,
       Status: status,
       TimeCook: timeCook,
       Type: type
   }
   console.log(dataForm);
   $.ajax({
      
    //CP1. Complete Ajax Code to GET ALL pin data 
    type: "POST",
    url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Foods",
    data: dataForm
}).then(function (data) {

console.log('post');
alert('Post successed');

   });


    }

    function AddMenu(){

   
     var name = $('#NameFood').val();
     var detail = $('#Detail2').val();

     var dataForm ={
        Name: name,
        Detail: detail
     }
    console.log(dataForm);
    $.ajax({
      
        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "POST",
        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/TypeFoods",
        data: dataForm
    }).then(function (data) {
    
    console.log('post');
    alert('Post sucessed!');
    
       });

    }
    $(function(){
        $.ajax({
        
            //CP1. Complete Ajax Code to GET ALL pin data 
            type: "GET",
            url: "https://foodstepapi20180810123018.azurewebsites.net/Api/TypeFoods",
    
        }).then(function (dataUser) {
            
            findDataUser(dataUser);
            
        });
        function findDataUser(dataUser){
            for(var i=0 ; i<dataUser.length ; i++){
                var row = '<input type="radio" name="choice2" value='+'"'+dataUser[i].Name+'">'+dataUser[i].Name ;
                $('#choice2').append(row);
            }
        }

    });

    $(function(){

    var userId = getUrlParameter('id');
    var userInt = parseInt(userId);
    $.ajax({
        
        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "GET",
        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Staffs/"+userInt,

    }).then(function (dataUser) {
        
        
        $('#FirstName').append(dataUser.FirstName);
    });

 
        

    });


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
                                $('#numberTable').val(data[j].No); 
                                return false; 
                             }else{
                              
                             }
                        }
                      
                        
                }
               
                // setInterval(selectQueue,3000);
                pin1.innerHTML = '';
                
    }

  function FoodInfo(){
    $.ajax({
        
        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "GET",
        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Foods",

    }).then(function (dataUser) {
        
        findDataUser(dataUser);
        
    });

    function findDataUser(dataUser){
        $('#tableFood').append('<tr class="table-dark"><td>Id</td><td>Name</td><td>Price</td><td>Type</td><td>TimeCook</td></tr>');
        for(var i=0 ; i<dataUser.length ; i++){
            var row = '<tr class="table-light"><td>' + dataUser[i].Id + '</td><td>' + dataUser[i].Name + '</td><td>' + dataUser[i].Price + '</td><td>' + dataUser[i].Type + '</td><td>'+ dataUser[i].TimeCook+'</td></tr>';
            $('#tableFood').append(row);
        }
    }

  }

  function StaffInfo(){

    $.ajax({
        
        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "GET",
        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Staffs",

    }).then(function (dataStaff) {
        
        findDataUser(dataStaff);
        console.log(dataStaff);
    });
           function findDataUser(dataStaff){
           
            

            $('#tableStaff').append('<tr   class="table-dark"><td>Id</td><td>FirstName</td><td>LastName</td><td>Tel</td><td>Email</td><td>Position</td><td>CurrentStatus</td><td>Status</td></tr>');
                for(var i=0 ; i<dataStaff.length ; i++){
                    if(dataStaff[i].Position == 'Admin'){
                        var row = '<tr class="table-light"><td>' + dataStaff[i].Id + '</td><td>' + dataStaff[i].FirstName + '</td><td>' + dataStaff[i].LastName + '</td><td>' + dataStaff[i].Tel + '</td><td>' + dataStaff[i].Email + '</td><td>'+ dataStaff[i].Position+'</td><td>'+dataStaff[i].Status+'</td><td><form><input type="radio" name="choice" value="Enable" Checked disabled>'+'Enable'+' <input type="radio" name="choice" value="Disable" disabled>'+'Disable'+'</form></td></tr>';
                  
                        $('#tableStaff').append(row);
                    }else{
                        if(dataStaff[i].Status == 'Enable'){
                            var row = '<tr class="table-light"><td>' + dataStaff[i].Id + '</td><td>' + dataStaff[i].FirstName + '</td><td>' + dataStaff[i].LastName + '</td><td>' + dataStaff[i].Tel + '</td><td>' + dataStaff[i].Email + '</td><td>'+ dataStaff[i].Position+'</td><td>'+dataStaff[i].Status+'</td><td><form><input type="radio" name="choice" value="Enable" Checked>'+'Enable'+' <input type="radio" name="choice" value="Disable">'+'Disable'+'</form></td></tr>';
                        }else{
                            var row = '<tr class="table-light"><td>' + dataStaff[i].Id + '</td><td>' + dataStaff[i].FirstName + '</td><td>' + dataStaff[i].LastName + '</td><td>' + dataStaff[i].Tel + '</td><td>' + dataStaff[i].Email + '</td><td>'+ dataStaff[i].Position+'</td><td>'+dataStaff[i].Status+'</td><td><form><input type="radio" name="choice" value="Enable">'+'Enable'+' <input type="radio" name="choice" value="Disable" Checked>'+'Disable'+'</form></td></tr>';
                        }

            
                       
                  
                    $('#tableStaff').append(row);
                }
                    }
                    $('#tableStaff').append('</table>');
                    
           }

  }






function amountFinnished1(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no1').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var chefId = getUrlParameter('id');
            var chefInt = parseInt(chefId);
            var FoodId = $('#no1').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdChef == chefInt && data[i].CookStatus == 'Cooking'){
                    
                    $('#amountFood1').empty();
                  
                    $('#amountFood1').append("Amount: " +data[i].AmountTotal +" Detail: "+data[i].Detail);
                  
                    
                   
                    return false;
                }
            }
        }
    
    

}
function amountFinnished3(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no3').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var chefId = getUrlParameter('id');
            var chefInt = parseInt(chefId);
            var FoodId = $('#no3').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdChef == chefInt && data[i].CookStatus == 'Cooking'){
                    
                    $('#amountFood3').empty();
                  
                    $('#amountFood3').append("Amount: " +data[i].AmountTotal +" Detail: "+data[i].Detail);
                  
                    
                   
                    return false;
                }
            }
        }
    
    

}
function amountFinnished4(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no4').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var chefId = getUrlParameter('id');
            var chefInt = parseInt(chefId);
            var FoodId = $('#no4').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdChef == chefInt && data[i].CookStatus == 'Cooking'){
                    
                    $('#amountFood4').empty();
                  
                    $('#amountFood4').append("Amount: " +data[i].AmountTotal +" Detail: "+data[i].Detail);
                  
                    
                   
                    return false;
                }
            }
        }
    
    

}
function amountFinnished5(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no5').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var chefId = getUrlParameter('id');
            var chefInt = parseInt(chefId);
            var FoodId = $('#no5').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdChef == chefInt && data[i].CookStatus == 'Cooking'){
                    
                    $('#amountFood5').empty();
                  
                    $('#amountFood5').append("Amount: " +data[i].AmountTotal +" Detail: "+data[i].Detail);
                  
                    
                   
                    return false;
                }
            }
        }
    
    

}

function amountFinnished6(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no6').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var chefId = getUrlParameter('id');
            var chefInt = parseInt(chefId);
            var FoodId = $('#no6').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdChef == chefInt && data[i].CookStatus == 'Cooking'){
                    
                    $('#amountFood6').empty();
                  
                    $('#amountFood6').append("Amount: " +data[i].AmountTotal +" Detail: "+data[i].Detail);
                  
                    
                   
                    return false;
                }
            }
        }
    
    

}

function amountFinnished7(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no7').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var chefId = getUrlParameter('id');
            var chefInt = parseInt(chefId);
            var FoodId = $('#no7').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdChef == chefInt && data[i].CookStatus == 'Cooking'){
                    
                    $('#amountFood7').empty();
                  
                    $('#amountFood7').append("Amount: " +data[i].AmountTotal +" Detail: "+data[i].Detail);
                  
                    
                   
                    return false;
                }
            }
        }
    
    

}

function amountFinnished8(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no8').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var chefId = getUrlParameter('id');
            var chefInt = parseInt(chefId);
            var FoodId = $('#no8').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdChef == chefInt && data[i].CookStatus == 'Cooking'){
                    
                    $('#amountFood8').empty();
                  
                    $('#amountFood8').append("Amount: " +data[i].AmountTotal +" Detail: "+data[i].Detail);
                  
                    
                   
                    return false;
                }
            }
        }
    
    

}

function amountFinnished9(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no9').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var chefId = getUrlParameter('id');
            var chefInt = parseInt(chefId);
            var FoodId = $('#no9').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdChef == chefInt && data[i].CookStatus == 'Cooking'){
                    
                    $('#amountFood9').empty();
                  
                    $('#amountFood9').append("Amount: " +data[i].AmountTotal +" Detail: "+data[i].Detail);
                  
                    
                   
                    return false;
                }
            }
        }
    
    

}

function amountFinnished10(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no1').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var chefId = getUrlParameter('id');
            var chefInt = parseInt(chefId);
            var FoodId = $('#no10').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdChef == chefInt && data[i].CookStatus == 'Cooking'){
                    
                    $('#amountFood10').empty();
                  
                    $('#amountFood10').append("Amount: " +data[i].AmountTotal +" Detail: "+data[i].Detail);
                  
                    
                   
                    return false;
                }
            }
        }
    
    

}

function amountServe1(){

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
            var chefId = getUrlParameter('id');
            var chefInt = parseInt(chefId);
            var FoodId = $('#no1').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt &&  data[i].CookStatus == 'Finnished'){

                    $.ajax({
    
                        //CP3. Complete Ajax code to GET the selected pin (pinid)  
                        type: "GET",
                        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables",
                        
                        }).then(function (dataQueue) {
                        
                        findDataTable(dataQueue);
                        
                        
                        });
                        function findDataTable(dataQueue){

                           for(var j = 0 ; j<dataQueue.length ; j++){
                                if(dataQueue[j].IdQueue == data[i].IdQueue){
                            $('#amountFood31').empty();
                  
                            $('#amountFood31').append("Amount: " +data[i].Amount +"<br> Detail: "+data[i].Detail +"<br><br><div style='color: red;font-size:25px;'> Table: "+dataQueue[j].Name+"</div>" );
                            return false;
                                }
                           }
                           
                          
                        } 



                  
                  
                    
                   
                    return false;
                }
            }
        }
    
    

}

function amountServe3(){

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
            var chefId = getUrlParameter('id');
            var chefInt = parseInt(chefId);
            var FoodId = $('#no3').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt  && data[i].CookStatus == 'Finnished'){

                    $.ajax({
    
                        //CP3. Complete Ajax code to GET the selected pin (pinid)  
                        type: "GET",
                        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables",
                        
                        }).then(function (dataQueue) {
                        
                        findDataTable(dataQueue);
                        
                        
                        });
                        function findDataTable(dataQueue){

                           for(var j = 0 ; j<dataQueue.length ; j++){
                                if(dataQueue[j].IdQueue == data[i].IdQueue){
                                    
                            $('#amountFood33').empty();
                  
                            $('#amountFood33').append("Amount: " +data[i].Amount +" Detail: "+data[i].Detail +" Table: "+dataQueue[j].Name);
                            return false;
                                }
                           }
                          
                        } 



                  
                  
                    
                   
                    return false;
                }
            }
        }
    
    

}


function amountServe4(){

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
            var chefId = getUrlParameter('id');
            var chefInt = parseInt(chefId);
            var FoodId = $('#no4').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt  && data[i].CookStatus == 'Finnished'){
console.log(data[i].IdFood+data[i].IdChef+data[i].CookStatus);
                    $.ajax({
    
                        //CP3. Complete Ajax code to GET the selected pin (pinid)  
                        type: "GET",
                        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables",
                        
                        }).then(function (dataQueue) {
                        
                        findDataTable(dataQueue);
                        
                        
                        });
                        function findDataTable(dataQueue){

                           for(var j = 0 ; j<dataQueue.length ; j++){
                                if(dataQueue[j].IdQueue == data[i].IdQueue){
                                    
                            $('#amountFood34').empty();
                  
                            $('#amountFood34').append("Amount: " +data[i].Amount +" Detail: "+data[i].Detail +" Table: "+dataQueue[j].Name);
                            return false;
                                }
                           }
                          
                        } 



                  
                  
                    
                   
                    return false;
                }
            }
        }
    
    

}

function amountServe5(){

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
            var chefId = getUrlParameter('id');
            var chefInt = parseInt(chefId);
            var FoodId = $('#no5').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].CookStatus == 'Finnished'){

                    $.ajax({
    
                        //CP3. Complete Ajax code to GET the selected pin (pinid)  
                        type: "GET",
                        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables",
                        
                        }).then(function (dataQueue) {
                        
                        findDataTable(dataQueue);
                        
                        
                        });
                        function findDataTable(dataQueue){

                           for(var j = 0 ; j<dataQueue.length ; j++){
                                if(dataQueue[j].IdQueue == data[i].IdQueue){
                                    
                            $('#amountFood35').empty();
                  
                            $('#amountFood35').append("Amount: " +data[i].Amount +" Detail: "+data[i].Detail +" Table: "+dataQueue[j].Name);
                            return false;
                                }
                           }
                          
                        } 
               
                    return false;
                }
            }
        }
    
    

}

function amountServe6(){

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
            var chefId = getUrlParameter('id');
            var chefInt = parseInt(chefId);
            var FoodId = $('#no6').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt  && data[i].CookStatus == 'Finnished'){

                    $.ajax({
    
                        //CP3. Complete Ajax code to GET the selected pin (pinid)  
                        type: "GET",
                        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables",
                        
                        }).then(function (dataQueue) {
                        
                        findDataTable(dataQueue);
                        
                        
                        });
                        function findDataTable(dataQueue){

                           for(var j = 0 ; j<dataQueue.length ; j++){
                                if(dataQueue[j].IdQueue == data[i].IdQueue){
                                    
                            $('#amountFood36').empty();
                  
                            $('#amountFood36').append("Amount: " +data[i].Amount +" Detail: "+data[i].Detail +" Table: "+dataQueue[j].Name);
                            return false;
                                }
                           }
                          
                        } 



                  
                  
                    
                   
                    return false;
                }
            }
        }
    
    

}

function amountServe7(){

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
            var chefId = getUrlParameter('id');
            var chefInt = parseInt(chefId);
            var FoodId = $('#no7').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].CookStatus == 'Finnished'){

                    $.ajax({
    
                        //CP3. Complete Ajax code to GET the selected pin (pinid)  
                        type: "GET",
                        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables",
                        
                        }).then(function (dataQueue) {
                        
                        findDataTable(dataQueue);
                        
                        
                        });
                        function findDataTable(dataQueue){

                           for(var j = 0 ; j<dataQueue.length ; j++){
                                if(dataQueue[j].IdQueue == data[i].IdQueue){
                                    
                            $('#amountFood37').empty();
                  
                            $('#amountFood37').append("Amount: " +data[i].Amount +" Detail: "+data[i].Detail +" Table: "+dataQueue[j].Name);
                            return false;
                                }
                           }
                          
                        } 



                  
                  
                    
                   
                    return false;
                }
            }
        }
    
    

}

function amountServe8(){

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
            var chefId = getUrlParameter('id');
            var chefInt = parseInt(chefId);
            var FoodId = $('#no8').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].CookStatus == 'Finnished'){

                    $.ajax({
    
                        //CP3. Complete Ajax code to GET the selected pin (pinid)  
                        type: "GET",
                        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables",
                        
                        }).then(function (dataQueue) {
                        
                        findDataTable(dataQueue);
                        
                        
                        });
                        function findDataTable(dataQueue){

                           for(var j = 0 ; j<dataQueue.length ; j++){
                                if(dataQueue[j].IdQueue == data[i].IdQueue){
                                    
                            $('#amountFood38').empty();
                  
                            $('#amountFood38').append("Amount: " +data[i].Amount +" Detail: "+data[i].Detail +" Table: "+dataQueue[j].Name);
                            return false;
                                }
                           }
                          
                        } 



                  
                  
                    
                   
                    return false;
                }
            }
        }
    
    

}

function amountServe9(){

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
            var chefId = getUrlParameter('id');
            var chefInt = parseInt(chefId);
            var FoodId = $('#no9').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].CookStatus == 'Finnished'){

                    $.ajax({
    
                        //CP3. Complete Ajax code to GET the selected pin (pinid)  
                        type: "GET",
                        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables",
                        
                        }).then(function (dataQueue) {
                        
                        findDataTable(dataQueue);
                        
                        
                        });
                        function findDataTable(dataQueue){

                           for(var j = 0 ; j<dataQueue.length ; j++){
                                if(dataQueue[j].IdQueue == data[i].IdQueue){
                                    
                            $('#amountFood39').empty();
                  
                            $('#amountFood39').append("Amount: " +data[i].Amount +" Detail: "+data[i].Detail +" Table: "+dataQueue[j].Name);
                            return false;
                                }
                           }
                          
                        } 



                  
                  
                    
                   
                    return false;
                }
            }
        }
    
    

}

function amountServe10(){

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
            var chefId = getUrlParameter('id');
            var chefInt = parseInt(chefId);
            var FoodId = $('#no10').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].CookStatus == 'Finnished'){

                    $.ajax({
    
                        //CP3. Complete Ajax code to GET the selected pin (pinid)  
                        type: "GET",
                        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables",
                        
                        }).then(function (dataQueue) {
                        
                        findDataTable(dataQueue);
                        
                        
                        });
                        function findDataTable(dataQueue){

                           for(var j = 0 ; j<dataQueue.length ; j++){
                                if(dataQueue[j].IdQueue == data[i].IdQueue){
                                    
                            $('#amountFood310').empty();
                  
                            $('#amountFood310').append("Amount: " +data[i].Amount +" Detail: "+data[i].Detail +" Table: "+dataQueue[j].Name);
                            return false;
                                }
                           }
                          
                        } 



                  
                  
                    
                   
                    return false;
                }
            }
        }
    
    

}



function amountDetail1(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no1').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var chefId = getUrlParameter('id');
            var chefInt = parseInt(chefId);
            var FoodId = $('#no1').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdChef == chefInt && data[i].CookStatus == 'Finnished'){
                    
                    $('#amountFood41').empty();
                  
                    $('#amountFood41').append("Amount: " +data[i].AmountTotal );
                  
                    
                   
                    return false;
                }
            }
        }
    
    

}

function amountDetail3(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no3').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var chefId = getUrlParameter('id');
            var chefInt = parseInt(chefId);
            var FoodId = $('#no3').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdChef == chefInt && data[i].CookStatus == 'Finnished'){
                    
                    $('#amountFood43').empty();
                  
                    $('#amountFood43').append("Amount: " +data[i].AmountTotal );
                  
                    
                   
                    return false;
                }
            }
        }
    
    
}

function amountDetail4(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no4').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var chefId = getUrlParameter('id');
            var chefInt = parseInt(chefId);
            var FoodId = $('#no4').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdChef == chefInt && data[i].CookStatus == 'Finnished'){
                    
                    $('#amountFood44').empty();
                  
                    $('#amountFood44').append("Amount: " +data[i].AmountTotal );
                  
                    
                   
                    return false;
                }
            }
        }
    
    

}


function amountDetail5(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no5').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var chefId = getUrlParameter('id');
            var chefInt = parseInt(chefId);
            var FoodId = $('#no5').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdChef == chefInt && data[i].CookStatus == 'Finnished'){
                    
                    $('#amountFood45').empty();
                  
                    $('#amountFood45').append("Amount: " +data[i].AmountTotal );
                  
                    
                   
                    return false;
                }
            }
        }
    
    
}


function amountDetail6(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no6').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var chefId = getUrlParameter('id');
            var chefInt = parseInt(chefId);
            var FoodId = $('#no6').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdChef == chefInt && data[i].CookStatus == 'Finnished'){
                    
                    $('#amountFood46').empty();
                  
                    $('#amountFood46').append("Amount: " +data[i].AmountTotal );
                  
                    
                   
                    return false;
                }
            }
        }
    
}


function amountDetail7(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no7').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var chefId = getUrlParameter('id');
            var chefInt = parseInt(chefId);
            var FoodId = $('#no7').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdChef == chefInt && data[i].CookStatus == 'Finnished'){
                    
                    $('#amountFood47').empty();
                  
                    $('#amountFood47').append("Amount: " +data[i].AmountTotal );
                  
                    
                   
                    return false;
                }
            }
        }
    
    

}



function amountDetail8(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no8').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var chefId = getUrlParameter('id');
            var chefInt = parseInt(chefId);
            var FoodId = $('#no8').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdChef == chefInt && data[i].CookStatus == 'Finnished'){
                    
                    $('#amountFood48').empty();
                  
                    $('#amountFood48').append("Amount: " +data[i].AmountTotal );
                  
                    
                   
                    return false;
                }
            }
        }
    
    

}


function amountDetail9(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no9').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var chefId = getUrlParameter('id');
            var chefInt = parseInt(chefId);
            var FoodId = $('#no9').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdChef == chefInt && data[i].CookStatus == 'Finnished'){
                    
                    $('#amountFood49').empty();
                  
                    $('#amountFood49').append("Amount: " +data[i].AmountTotal );
                  
                    
                   
                    return false;
                }
            }
        }
    
    

}


function amountDetail10(){

    var queueId = getUrlParameter('id');
    //         var queueInt = parseInt(queueId);
    var FoodId = $('#no10').val();
    console.log(FoodId+" "+queueId);
    $.ajax({
    
    //CP3. Complete Ajax code to GET the selected pin (pinid)  
    type: "GET",
    url: "https://footstepdbv220180915033201.azurewebsites.net/Api/TotalCarts",
    
    }).then(function (data) {
    
    findDataFood(data);
    // console.log(data);
    
    });
        function findDataFood(data){
            var chefId = getUrlParameter('id');
            var chefInt = parseInt(chefId);
            var FoodId = $('#no10').val();
            var FoodInt = parseInt(FoodId);
            for(var i=0 ; i<data.length ; i++){
                if(data[i].IdFood == FoodInt && data[i].IdChef == chefInt && data[i].CookStatus == 'Finnished'){
                    
                    $('#amountFood410').empty();
                  
                    $('#amountFood410').append("Amount: " +data[i].AmountTotal );
                  
                    
                   
                    return false;
                }
            }
        }
    
    

}



//Food_MenuWaiter

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
            url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Payments",
    
        }).then(function (dataType) {
            
            findData4(dataType);
            console.log(dataType);
        });

        function findData4(dataType){

                        $.each(dataType, function (index, item) {
                              
                         
                                if ( item.PaymentStatus == 'false'){
                                    $.get('Food_MenuCounter.html', function (template) {
                                        var rendered = Mustache.render(template, item);
                                        $("#payment").append(rendered);
                                    });
                                }                   
                        });
                
                
                                // return false
                }
        }
      
});

function TableInfo(){



    $.ajax({
        
        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "GET",
        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables",

    }).then(function (dataTable) {
        
        findDataUser(dataTable);
        console.log(dataTable);
    });
           function findDataUser(dataTable){
           
            

            $('#tableTable').append('<tr class="table-dark"><td>Id</td><td>IdQueue</td><td>Name</td><td>TypeTable</td><td>Status</td><td>Approve</td></tr>');
                for(var i=0 ; i<dataTable.length ; i++){
                  
                        if(dataTable[i].Status == 'true'){
                            var row = '<tr class="table-light"><td>' + dataTable[i].Id + '</td><td>' + dataTable[i].IdQueue + '</td><td>' + dataTable[i].Name + '</td><td>' + dataTable[i].TypeTable + '</td><td>' + dataTable[i].Status + '</td><td><form><input type="radio" name="choice" value="true" Checked>'+'Enable'+' <input type="radio" name="choice" value="false">'+'Disable'+'</form></td></tr>';
                        }else{
                            var row = '<tr class="table-light"><td>' + dataTable[i].Id + '</td><td>' + dataTable[i].IdQueue + '</td><td>' + dataTable[i].Name + '</td><td>' + dataTable[i].TypeTable + '</td><td>' + dataTable[i].Status + '</td><td><form><input type="radio" name="choice" value="true">'+'Enable'+' <input type="radio" name="choice" value="false" Checked>'+'Disable'+'</form></td></tr>';
                        }
                       
                  
                    $('#tableTable').append(row);
                
                    }
                    
           }

  }



  
    function paymentComfirm(){
       

        var queueId = $('#queue').val();
        console.log(queueId);
       $.ajax({
        
        //CP3. Complete Ajax code to GET the selected pin (pinid)  
        type: "GET",
        url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Payments",
        
        }).then(function (data) {
        
        findDataFood(data);
        // console.log(data);
        
        });
            function findDataFood(data){
                var paymentId = $('#queue').val();
                
                

                for(var i=0 ; i<data.length ; i++){
                    if(data[i].IdQueue == paymentId ){
                        
                        var formdata = {
                           Id: data[i].Id,
                           IdQueue: data[i].IdQueue,
                           IdTable: data[i].IdTable,
                           Payment1: data[i].Payment1,
                           PaymentStatus: 'true',
                           Total: data[i].Total
                        }
                        $.ajax({
            
                            //CP1. Complete Ajax Code to GET ALL pin data 
                            type: "PUT",
                            url: "https://footstepdbv220180915033201.azurewebsites.net/Api/Payments/"+data[i].Id,
                            data: formdata
                        }).then(function (data) {
                            console.log('Edited');
                        
                            
                        });

                    }


                }

            }


        

    }

    function comfrimTable(){
        var radios = document.getElementsByName('choice');
        var val= [];
        for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
         val.push(radios[i].value); 
        }
        }
    
        console.log(val);
        $.ajax({
            
        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "GET",
        url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tables",
    
        }).then(function (data) {
        
        findDataUser(data);
        
        });
        function findDataUser(data){
    
            for(var i =0 ; i<data.length ; i++){
                var formdata = {
                    Id: data[i].Id,
                    IdQueue: '',
                    Name: data[i].Name,
                    Status: val[i],
                    TypeTable: data[i].TypeTable

                }
                $.ajax({
                        
                    //CP1. Complete Ajax Code to GET ALL pin data 
                    type: "PUT",
                    url: "https://foodstepapi20180810123018.azurewebsites.net/Api/Tableshttps://foodstepapi20180810123018.azurewebsites.net/Api/Tables/"+data[i].Id,
                    data: formdata
                }).then(function (data) {
                    console.log('Edited');    
                });
            }
        }
    }


 