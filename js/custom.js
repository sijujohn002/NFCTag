
      $(document).ready(function(){
        $('#payment-success').click(function(){
        $('#without-amount').hide();
       $('#with-amount').hide();
       $('#payment-completed').show();

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
          $('.total-price').text("$ " +unit*price); 

          
 
      }

        var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&');
        var price = +sURLVariables[0].split('=')[1];
       
     
        
if(price<=0){
$('#with-amount').hide();
$('#without-amount').show();
var amt=$('#amount').value();
$('.total-price').text("$ "+ (amt + price)); 

}else{
  $('#with-amount').show();
  $('#without-amount').hide();
  $('.total-price').text("$ "+price); 
  $('#singleItemPrice').text("$"+price);
}

        $('.add-remove').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false
});













      });
  
    