var proj4_data;
$(document).ready( function() {
    var cart = new shopping_cart("jadrn032");
    proj4_data = new Array();
    
    $.get('/perl/jadrn032/proj4/get_products.cgi', storeData);
    
    updateDisplay();
        
    function updateDisplay() {
        var qtytot = 0;
        var total = 0;
        $('#emptymsg').hide();
        var cartArray = cart.getCartArray();
       if (cartArray.length == 0){
            $('#cart').hide();
            $('#check').hide();
            $('#emptymsg').show();
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
                    toWrite += "<td><b>"+proj4_data[j][2]+"</b></td>";
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
        toWrite += "<tr class=\"last\"><td></td><td>Total Quantity:</td><td>"+qtytot+"</td><td>Total:</td><td>$"+total+"</td><td></td></tr>";
        toWrite += "<tr class=\"last\"><td></td><td></td><td></td><td>Shipping:</td><td>$2.00</td><td></td></tr>";
        toWrite += "<tr class=\"last\"><td></td><td></td><td></td><td>Tax(8%):</td><td>$"+ parseFloat(Math.round(tax * 100)/100).toFixed(2) +"</td><td></td></tr>";
        toWrite += "<tr class=\"last\"><td></td><td></td><td></td><td>Grand total:</td><td>$"+ parseFloat(Math.round(grandtot * 100)/100).toFixed(2) +"</td><td></td></tr>";
        toWrite += "</table>"; 
        $('#cart').html(toWrite); 
        
        $('.delProduct').on('click', function() {
        
        cart.delete(this.id);
        updateDisplay();
    
        $('#count').text(cart.size());  
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