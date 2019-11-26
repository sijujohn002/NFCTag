
      $(document).ready(function(){

        $('.add-card').click(function(){
            $('.add-card-details').toggle();
            });
$('.cancel-btn').click(function(){
    $('.add-card-details').hide();
});


        $('#payment-success').click(function(){
        $('#without-amount').hide();
       $('#with-amount').hide();
       $('#payment-completed').show();

});
$('.box').click(function(){
$(this).children('.card-number').find('.spn').addClass('active');
$(this).siblings('.box').children('.card-number').find('.spn').removeClass('active');
});

$('#back-page').click(function(){
       $('#without-amount').hide();
       $('#with-amount').show();
       $('#payment-completed').hide();
});



$('#amount-added').click(function(){
       $('#without-amount').hide();
       $('#with-amount').hide();
       $('#payment-completed').show();
       
       var amount = $('#amount').val();
          $('.total-price').text("$ "+amount); 
   
});
     
var unit=1
        $('.qty').click(function(){
         
           calculatePrice($(this).text());
      });
      function calculatePrice(Text){
          if(Text === '+')
          unit++
          else
          if(unit>1)
          unit--
          $('#unit').text(unit);
          $('.total-price').text("$ " +unit*priceInt); 

          
 
      }
 var locationUrl = window.location.href
 function PareseUrl(item, text){
     var foundString = text.match(new RegExp("[\?\&]" + item + "=([^\&]*)(\&?)","i"));
     return foundString ? foundString[1] : foundString;
 }
 var data=PareseUrl('info', locationUrl);
 var info = atob(data);
 console.log("info data:"+info);
 var isPrice=false
 if(info){
     var jsondata=JSON.parse(info)
     if(jsondata.MTA){
     var priceInt = parseInt(jsondata.MTA)
     if(priceInt>0)
     isPrice=true
   }  
 } 
       
 if(!isPrice){
  $('#with-amount').hide();
  $('#without-amount').show();
  
  }else{
    $('#with-amount').show();
    $('#without-amount').hide();
    $('.total-price').text("$ "+priceInt); 
    $('#singleItemPrice').text("$"+priceInt);
  } 
        


        $('.add-remove').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false
});


      });
  
    