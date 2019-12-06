
      $(document).ready(function(){
		  
		  
		  
		  
        $('.add-card').click(function(){
                  $('.add-card-details').show();
                  $('.spn').removeClass('active');
                  });
      
                  $('.master-card').click(function(){
                      $('.spn').addClass('active');
                      $('.add-card-details').hide();
                      });
      
      
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
             
             var extrawithoutprice = $('#extrawithoutprice').val()||0;
             var amount = $('#amount').val()||0;
             $('.total-price').text("$ "+(parseFloat(amount)+parseFloat(extrawithoutprice))); 
         
      });
           
      $("#extrawithprice").bind('input', function() {
        var extrawithprice = $('#extrawithprice').val()||0;
        var price=parseFloat(extrawithprice)
        $('.total-price').text("$ " +((parseInt(unit)*parseFloat(priceInt))+price));
        });
      
        $("#extrawithoutprice").bind('input', function() {
          var extrawithoutprice = $('#extrawithoutprice').val() || 0;
          var amount = $('#amount').val()||0;
          $('.total-price-not').text("$ "+(parseFloat(amount)+parseFloat(extrawithoutprice))); 
          });
          $("#amount").bind('input', function() {
            var extrawithoutprice = $('#extrawithoutprice').val()||0;
            var amount = $('#amount').val()||0;
            if(parseFloat(extrawithoutprice)>0)
            $('.total-price-not').text("$ "+(parseFloat(amount)+parseFloat(extrawithoutprice))); 
            else
            $('.total-price-not').text("$ "+(parseFloat(amount))); 
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
                var extrawithprice = $('#extrawithprice').val();
                $('.value-price').text("$ " +(unit*priceInt)); 
       var extrawithprice = $('#extrawithprice').val();
       if(parseFloat(extrawithprice)>0)
        $('.total-price').text("$ " +((parseInt(unit)*parseFloat(priceInt))+parseFloat(extrawithprice)));
        else{
          $('.total-price').text("$ " +((parseInt(unit)*parseFloat(priceInt))));
        }
                
       
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
           var priceInt = parseFloat(jsondata.MTA)
           if(priceInt>0)
           isPrice=true
         }  
       } 
       
      
       

       $('.marchent-name').text(jsondata.MN)
       $('.address').text(jsondata.MA)
       $('.address-city').text(jsondata.MCty+","+jsondata.MC+"-"+jsondata.MP)
      
       
      
       if(!isPrice){
        $('#with-amount').hide();
        $('#without-amount').show();
        
        }else{
          $('#with-amount').show();
          $('#without-amount').hide();
          $('.value-price').text("$ "+priceInt); 
          $('.singleItemPrice').text("$"+priceInt);
          $('.total-price').text("$ " +(priceInt))
        } 
              
      
      
              $('.add-remove').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false
      });
      
      
            });
        
          