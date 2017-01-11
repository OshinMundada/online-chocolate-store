var proj4_data;
var toggle = 0;

 function checkValidState(stateName) {
     var states = new Array("AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
         "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
         "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
         "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
         "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
         "AS", "DC", "FM", "GU", "MH", "MP", "PR", "PW", "VI");
     for (var i = 0; i < states.length; i++) {
         if (states[i] == $.trim(stateName))
             return true;
     }
     return false;
 }
 
  function isValidEmail(email) {
     var regex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
     return regex.test(email);
 }


$(document).ready( function() {
    
    function billing(checked) {  
          if (checked) {  
                    $('#address1').val($('#address').val()) ; 
                   $('#address21').val($('#address2').val()) ;    
                    $('#city1').val($('#city').val()) ;  
                    $('#state1').val($('#state').val()) ;  
                    $('#zipcode1').val($('#zipcode').val()) ;  
          } else {  
                    $('#address11').val("") ; 
                   $('#address12').val("") ;    
                    $('#city1').val("") ;  
                    $('#state1').val("") ;  
                    $('#zipcode1').val("") ;  
          }        
        }    
     function validateData() {
         var name = $('#name').val(),
             email = $('#email').val(),
             phone = $('#mobi1').val()+$('#mobi2').val()+$('#mobi3').val(),
             address = $('#address').val(),
             city = $('#city').val(),
             state = $('#state').val(),
             zipcode = $('#zipcode').val(),
             address1 = $('#address1').val(),
             city1 = $('#city1').val(),
             state1 = $('#state1').val(),
             zipcode1 = $('#zipcode1').val(),
             cardnum = $('#credit').val(),
             cardname = $('#cardname').val(),
             cvv = $('#cvv').val(),
             expmonth = $('#expmonth').val(),
             expyear = $('#expyear').val();


         var errorMessage = $('#error_message');

         if ($.trim(name).length == 0) {
             $('#error_message').text("Please enter your name");
             $('#name').focus();
             return false;
         } else if ($.trim(email).length == 0) {
             errorMessage.text("Please enter email ID");
             $('#email').focus();
             return false;
         } else if (!isValidEmail(email)) {
             errorMessage.text("Please enter valid email ID");
             $('#email').focus();
             return false;
         }  else if ($.trim(phone).length == 0) {
             errorMessage.text("Please enter phone number");
             $('#phone').focus();
             return false;
         } else if (!$.isNumeric(phone)) {
            alert(phone);
             errorMessage.text("Please enter numeric phone number");
             $('#phone').focus();
             return false;
         } else if (phone.length != 10) {
             errorMessage.text("Please enter 10 digit phone number");
             $('#phone').focus();
             return false;
         } else if ($.trim(address).length == 0) {
             errorMessage.text("Please enter address");
             $('#address').focus();
             return false;
         } else if ($.trim(city).length == 0) {
             errorMessage.text("Please enter city");
             $('#city').focus();
             return false;
         } else if ($.trim(state).length == 0) {
             errorMessage.text("Please enter state");
             $('#state').focus();
             return false;
         } else if (!checkValidState($('#state').val().toUpperCase())) {
             errorMessage.text("Please enter valid state");
             $('#state').focus();
             return false;
         } else if ($.trim(zipcode).length == 0) {
             errorMessage.text("Please enter zipcode");
             $('#zipcode').focus();
             return false;
         } else if (!$.isNumeric(zipcode)) {
             errorMessage.text("Zipcode should be numeric");
             $('#zipcode').focus();
             return false;
         } else if (zipcode.length != 5) {
             errorMessage.text("Please enter valid zipcode");
             $('#zipcode').focus();
             return false;
         } else if ($.trim(address1).length == 0) {
             errorMessage.text("Please enter address");
             $('#address').focus();
             return false;
         } else if ($.trim(city1).length == 0) {
             errorMessage.text("Please enter city");
             $('#city').focus();
             return false;
         } else if ($.trim(state1).length == 0) {
             errorMessage.text("Please enter state");
             $('#state').focus();
             return false;
         } else if (!checkValidState($('#state').val().toUpperCase())) {
             errorMessage.text("Please enter valid state");
             $('#state').focus();
             return false;
         } else if ($.trim(zipcode1).length == 0) {
             errorMessage.text("Please enter zipcode");
             $('#zipcode').focus();
             return false;
         } else if (!$.isNumeric(zipcode1)) {
             errorMessage.text("Zipcode should be numeric");
             $('#zipcode').focus();
             return false;
         } else if (zipcode1.length != 5) {
             errorMessage.text("Please enter valid zipcode");
             $('#zipcode').focus();
             return false;
         } else if ($('input[type=radio]:checked').length == 0) {
            errorMessage.text("Please select the card type");
         } else if ($.trim(cardnum).length == 0) {
             errorMessage.text("Please enter the card number");
             $('#cardname').focus();
             return false;
         } else if ($.trim(cardnum).length != 16) {
             errorMessage.text("The card number is not valid");
             $('#cardname').focus();
             return false;
         }  else if ($.trim(cardname).length == 0) {
             errorMessage.text("Please enter name on card");
             $('#cardname').focus();
             return false;
         } else if ($.trim(cvv).length == 0) {
             errorMessage.text("Please enter cvv");
             $('#cvv').focus();
             return false;
         } else if ($.trim(cvv).length != 3) {
             errorMessage.text("CVV must be of 3 digits");
             $('#cvv').focus();
             return false;
         } else {
             return true;
         }

     }

     $('#subbut').on('click', function(e) {
            var isValid = validateData();
            if(isValid == false){
                e.preventDefault();
            }
        });

     $('#shipeqbill').on('click', function(e){   
            billing(this.checked);
        });
    
        

    var cart = new shopping_cart("jadrn032");
    
    

    proj4_data = new Array();
    
    $.get('/perl/jadrn032/proj4/get_products.cgi', storeData);
    
    updateDisplay();
    
    /*$('input.delProduct').on('click', function() {
        alert("sdhfj");
        cart.delete(this.id);
        updateDisplay();
        alert(this.id);
        $('#count').text(cart.size());  
    });
    
    $('#checkout').on('click', function() {
        if (toggle == 0){
                $('#ordernow').hide();
                $('#cart').show()
                toggle = 1;
        }else{
                $('#cart').hide();
                $('#ordernow').show();
                toggle = 0;
        }
    });
        */
        
    function updateDisplay() {
        var qtytot = 0;
        var total = 0;
        $('#emptymsg').hide();
        var cartArray = cart.getCartArray();
       if (cartArray.length == 0){
            $('#cart').hide();
            $('#check').hide();
            $('#emptymsg').show();
            $('#ordernow').hide();
           return;
       }
        var toWrite = "<table>";
        toWrite += "<tr><th>Image</th><th>Title</th><th>Quantity</th><th>Price per item</th><th>Total price</th><th>Update cart</th></tr>";
        for(var i=0; i < cartArray.length; i++) {
            toWrite += "<tr>";
            for(var j=0;j < proj4_data.length ; j++) {
                if(cartArray[i][0] == proj4_data[j][0]){
                    toWrite += "<td><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[j][0]+".jpg\" alt=\""+proj4_data[j][2]+"\""+
                " width=\"100px\"  /></td>";
                    toWrite += "<td>"+proj4_data[j][2]+"</td>";
                    var loctot=parseFloat(proj4_data[j][6]*cartArray[i][1]).toFixed(2);
            toWrite += "<td>"+cartArray[i][1]+"</td><td>$"+proj4_data[j][6] +"</td><td>$"+ loctot +"</td>"; 
            toWrite += "<td>" +" <input type='button' class='delProduct' id='" +cartArray[i][0] + "' value='Remove' /></td>";
            toWrite += "</tr>";
            qtytot += parseInt(cartArray[i][1]);
            total += proj4_data[j][6]*cartArray[i][1];
                }   
            }
        }
        var tax=0.08*total;
        var grandtot=total+tax+2;
        toWrite += "<tr class=\"last\"><td></td><td><b>Total Quantity:</b></td><td><b>"+qtytot+"</b></td><td>Total:</td><td>$"+parseFloat(Math.round(total * 100)/100).toFixed(2)+"</td><td></td></tr>";
        toWrite += "<tr class=\"last\"><td></td><td></td><td></td><td>Shipping:</td><td>$2.00</td><td></td></tr>";
        toWrite += "<tr class=\"last\"><td></td><td></td><td></td><td>Tax(8%):</td><td>$"+ parseFloat(Math.round(tax * 100)/100).toFixed(2) +"</td><td></td></tr>";
        toWrite += "<tr class=\"last\"><td></td><td></td><td></td><td><b>Grand total:</b></td><td><b>$"+ parseFloat(Math.round(grandtot * 100)/100).toFixed(2) +"</b></td><td></td></tr>";
        toWrite += "</table>"; 
        $('#cart').html(toWrite); 
        $('#count').text(cart.size());
        $('#ordernow').hide();
        
        $('.delProduct').on('click', function() {
        
        cart.delete(this.id);
        updateDisplay();
    
        $('#count').text(cart.size());  
    });
    
    $('#ordernow').hide();
    $('#checkout').on('click', function() {
        $('#cart').hide();
        $('#checkout').hide();
        $('#ordernow').show();
        
    });
        
    } 
        
    function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        var innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }
        updateDisplay();
    } 
    
    function explodeArray(item,delimiter) {
        var tempArray=new Array(1);
        var Count=0;
        var tempString=new String(item);

        while (tempString.indexOf(delimiter)>0) {
            tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
            tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
            Count=Count+1
        }

        tempArray[Count]=tempString;
        return tempArray;
    } 
});