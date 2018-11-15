(function() {
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);
  
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

function showComment(){
    $.ajax({
        type:"GET", 
        url: "https://miningdata.herokuapp.com/comment/", 
        success: function(data) {
        console.log(data.comment[0].date);
            var dateStartEnd = $('#dateStart-end').val();
            console.log(dateStartEnd);
            var startDate = dateStartEnd.substring(0,10);
            var endDate = dateStartEnd.substring(13,23);
            console.log(startDate +' '+endDate);
            var start = Date.parse(startDate);
            var end = Date.parse(endDate);
            console.log(start+' '+end);

            var good = 0;
            var bad = 0;
            var unknown = 0;
            
                for(var i = 0 ; i < data.comment.length ; i++){
                    
                    var dataTime = Date.parse(data.comment[i].date);

                    if(start <= dataTime && dataTime <= end){

                    var comment = data.comment[i].quality;

                    if(comment > 0){
                        good = good + 1;
                    }else if(comment < 0){
                        bad = bad + 1;
                    }else{
                        unknown = unknown + 1;
                    }

                    console.log(start+' '+dataTime+' '+end);

                    }
                  
                }

                $('#goodC').val(good);
                $('#badC').val(bad);
                $('#unknownC').val(unknown);


            }, 
        error: function(jqXHR, textStatus, errorThrown) {
                alert(jqXHR.status);
            },
       dataType: "json"
        });

    }

 $(function() {

    $('input[name="datefilter"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });
  
    $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') +' - '+picker.endDate.format('MM/DD/YYYY'));
    });
  
    $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });

  });


  function showDataAnalysing(){
    
     $.ajax({
     
        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "GET",
        url: "https://surveyapiv120181102014558.azurewebsites.net/Api/Questions",
   
    }).then(function (data) {
        
         dataAnalysing(data)
    });

    function dataAnalysing(data){

       var dateStartEnd = $('#dateStart-end').val();
       console.log(dateStartEnd);
       var startDate = dateStartEnd.substring(0,10);
       var endDate = dateStartEnd.substring(13,23);
       var start = Date.parse(startDate);
       var end = Date.parse(endDate);
       console.log(start+' '+end);
       var dataE = 0;
       var dataG = 0;
       var dataF = 0;
       var dataU = 0;

       // build json
  
         var surway = [];
      

       for(var i = 0 ; i<data.length ; i++){

           var dataTime = Date.parse(data[i].Date);

           if(start <= dataTime && dataTime <= end){
            
            dataE = dataE + data[i].Excellent;
            dataG = dataG + data[i].Good;
            dataF = dataF + data[i].Fair;
            dataU = dataU + data[i].Unsatisfy;

            console.log(start+' '+dataTime+' '+end);

            // User comment detail
            dataComment.innerHTML += '\nUser'+i+': ' +data[i].Question1 +'\n';
          

            // Build file json
            var item = {};
            item ["Date"] = data[i].Date;
            item ["Excellent"] = data[i].Excellent;
            item ["Fair"] = data[i].Fair;
            item ["Good"] = data[i].Good;
            item ["Unsatisfy"] = data[i].Unsatisfy;
            item ["Question"] = data[i].Question1;
            item ["Time"] = data[i].Time;
            surway.push(item);

           }
           
       }
   
      // var json = JSON.stringify(surway);
       console.log(surway);
       $("#dvjson").excelexportjs({
        containerid: "dvjson"
           , datatype: 'json'
           , dataset: surway
           , columns: getColumns(surway)     
        });
    


       console.log("Excellent: "+dataE+"\nGood: "+dataG+"\nFail: "+dataF+"\nUnjustify: "+dataU+"\nGood: "+$('#goodC').val()+"\nBad: "+$('#badC').val()+"\nUnknown: "+$('#unknownC').val());

        var goodComment = parseInt($('#goodC').val());
        var badComment = parseInt($('#badC').val());
        var unknown = parseInt($('#unknownC').val());

        var myChart = document.getElementById('BarChart').getContext('2d');

   // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    var massPopChart = new Chart(myChart, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['Excellent', 'Good', 'Fair', 'Unjustisfy'],
        datasets:[{
          label:'Surway',
          data:[
            dataE,
            dataG,
            dataF,
            dataU
          ],
          //backgroundColor:'green',
          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'User opinion by BarChart',
          fontSize:25
        },
        legend:{
          display:true,
          position:'center',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });


 
     var myChart = document.getElementById('LineChart').getContext('2d');

// Global Options
 Chart.defaults.global.defaultFontFamily = 'Lato';
 Chart.defaults.global.defaultFontSize = 18;
 Chart.defaults.global.defaultFontColor = '#777';

 var massPopChart = new Chart(myChart, {
   type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data:{
     labels:['Excellent', 'Good', 'Fair', 'Unjustisfy'],
     datasets:[{
       label:'Surway',
       data:[

         dataE,
         dataG,
         dataF,
         dataU     

       ],
       //backgroundColor:'green',
       backgroundColor:[
         'rgba(255, 99, 132, 0.6)',
         'rgba(54, 162, 235, 0.6)',
         'rgba(255, 206, 86, 0.6)',
         'rgba(75, 192, 192, 0.6)',
         'rgba(153, 102, 255, 0.6)',
         'rgba(255, 159, 64, 0.6)',
         'rgba(255, 99, 132, 0.6)'
       ],
       borderWidth:1,
       borderColor:'#777',
       hoverBorderWidth:3,
       hoverBorderColor:'#000'
     }]
   },
   options:{
     title:{
       display:true,
       text:'User opinion by LineChart',
       fontSize:25
     },
     legend:{
       display:true,
       position:'center',
       labels:{
         fontColor:'#000'
       }
     },
     layout:{
       padding:{
         left:50,
         right:0,
         bottom:0,
         top:0
       }
     },
     tooltips:{
       enabled:true
     }
   }
 });






 var myChart = document.getElementById('PieChart').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

var massPopChart = new Chart(myChart, {
type:'pie', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
data:{
 labels:['Excellent', 'Good', 'Fair', 'Unjustisfy'],
 datasets:[{
   label:'Surway',
   data:[

     dataE,
     dataG,
     dataF,
     dataU

   ],
   //backgroundColor:'green',
   backgroundColor:[
     'rgba(255, 99, 132, 0.6)',
     'rgba(54, 162, 235, 0.6)',
     'rgba(255, 206, 86, 0.6)',
     'rgba(75, 192, 192, 0.6)',
     'rgba(153, 102, 255, 0.6)',
     'rgba(255, 159, 64, 0.6)',
     'rgba(255, 99, 132, 0.6)'
   ],
   borderWidth:1,
   borderColor:'#777',
   hoverBorderWidth:3,
   hoverBorderColor:'#000'
 }]
},
options:{
 title:{
   display:true,
   text:'User opinion by Pie',
   fontSize:25
 },
 legend:{
   display:true,
   position:'center',
   labels:{
     fontColor:'#000'
   }
 },
 layout:{
   padding:{
     left:50,
     right:0,
     bottom:0,
     top:0
   }
 },
 tooltips:{
   enabled:true
 }
}
});



 var myChart = document.getElementById('PolarAreaChart').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

var massPopChart = new Chart(myChart, {
type:'polarArea', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
data:{
 labels:['Excellent', 'Good', 'Fair', 'Unjustisfy'],
 datasets:[{
   label:'Surway',
   data:[

     dataE,
     dataG,
     dataF,
     dataU

   ],
   //backgroundColor:'green',
   backgroundColor:[
     'rgba(255, 99, 132, 0.6)',
     'rgba(54, 162, 235, 0.6)',
     'rgba(255, 206, 86, 0.6)',
     'rgba(75, 192, 192, 0.6)',
     'rgba(153, 102, 255, 0.6)',
     'rgba(255, 159, 64, 0.6)',
     'rgba(255, 99, 132, 0.6)'
   ],
   borderWidth:1,
   borderColor:'#777',
   hoverBorderWidth:3,
   hoverBorderColor:'#000'
 }]
},
options:{
 title:{
   display:true,
   text:'User opinion by PolarArea',
   fontSize:25
 },
 legend:{
   display:true,
   position:'center',
   labels:{
     fontColor:'#000'
   }
 },
 layout:{
   padding:{
     left:50,
     right:0,
     bottom:0,
     top:0
   }
 },
 tooltips:{
   enabled:true
 }
}
});




 var myChart = document.getElementById('horizontalBar').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

var massPopChart = new Chart(myChart, {
type:'horizontalBar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
data:{
 labels:['Excellent', 'Good', 'Fair', 'Unjustisfy'],
 datasets:[{
   label:'Surway',
   data:[
     dataE,
     dataG,
     dataF,
     dataU,

   ],
   //backgroundColor:'green',
   backgroundColor:[
     'rgba(255, 99, 132, 0.6)',
     'rgba(54, 162, 235, 0.6)',
     'rgba(255, 206, 86, 0.6)',
     'rgba(75, 192, 192, 0.6)',
     'rgba(153, 102, 255, 0.6)',
     'rgba(255, 159, 64, 0.6)',
     'rgba(255, 99, 132, 0.6)'
   ],
   borderWidth:1,
   borderColor:'#777',
   hoverBorderWidth:3,
   hoverBorderColor:'#000'
 }]
},
options:{
 title:{
   display:true,
   text:'User opinion by horizontalBar',
   fontSize:25
 },
 legend:{
   display:true,
   position:'center',
   labels:{
     fontColor:'#000'
   }
 },
 layout:{
   padding:{
     left:50,
     right:0,
     bottom:0,
     top:0
   }
 },
 tooltips:{
   enabled:true
 }
}
});




var myChart = document.getElementById('doughnut').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

var massPopChart = new Chart(myChart, {
type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
data:{
labels:['Excellent', 'Good', 'Fair', 'Unjustisfy'],
datasets:[{
  label:'Surway',
  data:[
    dataE,
    dataG,
    dataF,
    dataU

  ],
  //backgroundColor:'green',
  backgroundColor:[
    'rgba(255, 99, 132, 0.6)',
    'rgba(54, 162, 235, 0.6)',
    'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)',
    'rgba(153, 102, 255, 0.6)',
    'rgba(255, 159, 64, 0.6)',
    'rgba(255, 99, 132, 0.6)'
  ],
  borderWidth:1,
  borderColor:'#777',
  hoverBorderWidth:3,
  hoverBorderColor:'#000'
}]
},
options:{
title:{
  display:true,
  text:'User opinion by doughnut',
  fontSize:25
},
legend:{
  display:true,
  position:'center',
  labels:{
    fontColor:'#000'
  }
},
layout:{
  padding:{
    left:50,
    right:0,
    bottom:0,
    top:0
  }
},
tooltips:{
  enabled:true
}
}
});




var myChart = document.getElementById('radar').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

var massPopChart = new Chart(myChart, {
type:'radar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
data:{
labels:['Excellent', 'Good', 'Fair', 'Unjustisfy','GoodComment','BadComment','Unknown'],
datasets:[{
  label:'Surway',
  data:[
    dataE,
    dataG,
    dataF,
    dataU,
    goodComment,
    badComment,
    unknown

  ],
  //backgroundColor:'green',
  backgroundColor:[
    'rgba(255, 99, 132, 0.6)',
    'rgba(54, 162, 235, 0.6)',
    'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)',
    'rgba(153, 102, 255, 0.6)',
    'rgba(255, 159, 64, 0.6)',
    'rgba(255, 99, 132, 0.6)'
  ],
  borderWidth:1,
  borderColor:'#777',
  hoverBorderWidth:3,
  hoverBorderColor:'#000'
}]
},
options:{
title:{
  display:true,
  text:'User opinion by radar',
  fontSize:25
},
legend:{
  display:true,
  position:'center',
  labels:{
    fontColor:'#000'
  }
},
layout:{
  padding:{
    left:50,
    right:0,
    bottom:0,
    top:0
  }
},
tooltips:{
  enabled:true
}
}
});


for(var i = 0 ; i<=6 ; i++){

  var myChart = document.getElementById('PieChartComment'+i).getContext('2d');

  // Global Options
  Chart.defaults.global.defaultFontFamily = 'Lato';
  Chart.defaults.global.defaultFontSize = 18;
  Chart.defaults.global.defaultFontColor = '#777';
  
  var massPopChart = new Chart(myChart, {
  type:'pie', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
  labels:['GoodComment','BadComment','Unknown'],
  datasets:[{
    label:'Surway',
    data:[
  
      goodComment,
      badComment,
      unknown
  
    ],
    //backgroundColor:'green',
    backgroundColor:[
      'rgba(255, 99, 132, 0.6)',
      'rgba(54, 162, 235, 0.6)',
      'rgba(255, 206, 86, 0.6)',
      'rgba(75, 192, 192, 0.6)',
      'rgba(153, 102, 255, 0.6)',
      'rgba(255, 159, 64, 0.6)',
      'rgba(255, 99, 132, 0.6)'
    ],
    borderWidth:1,
    borderColor:'#777',
    hoverBorderWidth:3,
    hoverBorderColor:'#000'
  }]
  },
  options:{
  title:{
    display:true,
    text:'User opinion by pie',
    fontSize:25
  },
  legend:{
    display:true,
    position:'center',
    labels:{
      fontColor:'#000'
    }
  },
  layout:{
    padding:{
      left:50,
      right:0,
      bottom:0,
      top:0
    }
  },
  tooltips:{
    enabled:true
  }
  }
  });
  

}






    }
     
  }







