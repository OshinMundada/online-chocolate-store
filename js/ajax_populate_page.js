/*  We load the global array proj4_data once, then use it as needed
    to retrieve product information.
*/    

var proj4_data;
	  
$(document).ready(function() {
    proj4_data = new Array();
    $.get('/perl/jadrn032/proj4/get_products.cgi', storeData);

    var cart = new shopping_cart("jadrn032");
	$('#count').text(cart.size());     
    
	 $('#milk').on('click', function() {
        tmpString = "";
    for(var i=0; i < proj4_data.length; i++) {
        if(proj4_data[i][1] == "Milk chocolate") {

            tmpString += "<div class=\"product\"><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"150px\" height=\"150px\" />";
            
                tmpString += "<h2>" + proj4_data[i][2] + "</h2><p> <b>Category: </b>";
                tmpString += proj4_data[i][1] + "<br /> <b>Description: </b>";
                tmpString += proj4_data[i][3] + "<br />";
                tmpString += proj4_data[i][4] + "<br /> <b>Price: </b>";
                tmpString += proj4_data[i][6] + "<br /><b>Quantity:</b><input type='number' class='quantip' id='"+proj4_data[i][0]+"qty' min=0 value=1>";
       tmpString += "<input class=\"addtocartbut buy\" type='button' value='Add To Cart'"+
                "id='" + proj4_data[i][0]+"' />";
            tmpString += "<span>Added to Cart</span><br /></div>";
            }
        }
    var handle = document.getElementById('content');
    handle.innerHTML = tmpString;
        })
	
	
    $('#dark').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Dark chocolate") {
            tmpString += "<div class=\"product\"><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"150px\" height=\"150px\" />";
            
                tmpString += "<h2>" + proj4_data[i][2] + "</h2><p> <b>Category: </b>";
                tmpString += proj4_data[i][1] + "<br /> <b>Description: </b>";
                tmpString += proj4_data[i][3] + "<br />";
                tmpString += proj4_data[i][4] + "<br /> <b>Price: </b>";
                tmpString += proj4_data[i][6] + "<br /><b>Quantity:</b><input type='number' class='quantip' id='"+proj4_data[i][0]+"qty' min=0 value=1>";
       tmpString += "<input class=\"addtocartbut buy\" type='button' value='Add To Cart'"+
                "id='" + proj4_data[i][0]+"' />";
            tmpString += "<span>Added to Cart</span><br /></div>";
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
        
    $('#nuts').on('click', function() {   
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Nuts and chews") {  
            tmpString += "<div class=\"product\"><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"150px\" height=\"150px\" />";
            
                tmpString += "<h2>" + proj4_data[i][2] + "</h2><p> <b>Category: </b>";
                tmpString += proj4_data[i][1] + "<br /> <b>Description: </b>";
                tmpString += proj4_data[i][3] + "<br />";
                tmpString += proj4_data[i][4] + "<br /> <b>Price: </b>";
                tmpString += proj4_data[i][6] + "<br /><b>Quantity:</b><input type='number' class='quantip' id='"+proj4_data[i][0]+"qty' min=0 value=1>";
       tmpString += "<input class=\"addtocartbut buy\" type='button' value='Add To Cart'"+
                "id='" + proj4_data[i][0]+"' />";
            tmpString += "<span>Added to Cart</span><br /></div>";
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        }) 
        
    $('#brittle').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Brittles and toffies") {
            tmpString += "<div class=\"product\"><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"150px\" height=\"150px\" />";
            
                tmpString += "<h2>" + proj4_data[i][2] + "</h2><p> <b>Category: </b>";
                tmpString += proj4_data[i][1] + "<br /> <b>Description: </b>";
                tmpString += proj4_data[i][3] + "<br />";
                tmpString += proj4_data[i][4] + "<br /> <b>Price: </b>";
                tmpString += proj4_data[i][6] + "<br /><b>Quantity:</b><input type='number' class='quantip' id='"+proj4_data[i][0]+"qty' min=0 value=1>";
       tmpString += "<input class=\"addtocartbut buy\" type='button' value='Add To Cart'"+
                "id='" + proj4_data[i][0]+"' />";
            tmpString += "<span>Added to Cart</span><br /></div>";
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })  

	$('#truffle').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Truffles") {
            tmpString += "<div class=\"product\"><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"150px\" height=\"150px\" />";
            
                tmpString += "<h2>" + proj4_data[i][2] + "</h2><p> <b>Category: </b>";
                tmpString += proj4_data[i][1] + "<br /> <b>Description: </b>";
                tmpString += proj4_data[i][3] + "<br />";
                tmpString += proj4_data[i][4] + "<br /> <b>Price: </b>";
                tmpString += proj4_data[i][6] + "<br /><b>Quantity:</b><input type='number' class='quantip' id='"+proj4_data[i][0]+"qty' min=0 value=1>";
       tmpString += "<input class=\"addtocartbut buy\" type='button' value='Add To Cart'"+
                "id='" + proj4_data[i][0]+"' />";
            tmpString += "<span>Added to Cart</span><br /></div>";
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })  	

	$('#gift').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Gifts") {
            tmpString += "<div class=\"product\"><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"150px\" height=\"150px\" />";
            
                tmpString += "<h2>" + proj4_data[i][2] + "</h2><p> <b>Category: </b>";
                tmpString += proj4_data[i][1] + "<br /> <b>Description: </b>";
                tmpString += proj4_data[i][3] + "<br />";
                tmpString += proj4_data[i][4] + "<br /> <b>Price: </b>";
                tmpString += proj4_data[i][6] + "<br /><b>Quantity:</b><input type='number' class='quantip' id='"+proj4_data[i][0]+"qty' min=0 value=1>";
       tmpString += "<input class=\"addtocartbut buy\" type='button' value='Add To Cart'"+
                "id='" + proj4_data[i][0]+"' />";
            tmpString += "<span>Added to Cart</span><br /></div>";
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        }) 

	$('#holiday').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Holiday assortments") {
            tmpString += "<div class=\"product\"><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"150px\" height=\"150px\" />";
            
                tmpString += "<h2>" + proj4_data[i][2] + "</h2><p> <b>Category: </b>";
                tmpString += proj4_data[i][1] + "<br /> <b>Description: </b>";
                tmpString += proj4_data[i][3] + "<br />";
                tmpString += proj4_data[i][4] + "<br /> <b>Price: </b>";
                tmpString += proj4_data[i][6] + "<br /><b>Quantity:</b><input type='number' class='quantip' id='"+proj4_data[i][0]+"qty' min=0 value=1>";
       tmpString += "<input class=\"addtocartbut buy\" type='button' value='Add To Cart'"+
                "id='" + proj4_data[i][0]+"' />";
            tmpString += "<span>Added to Cart</span><br /></div>";
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        }) 	
        
    $(document).on('click', ".buy", function() {  
        var sku = this.id;
        var qtyid = this.id+"qty";
        var qty = document.getElementById(qtyid).value;
        //alert(qty);
        
        cart.add(sku,parseInt(qty));
        
        $(this).next().fadeIn(50).fadeOut(2000);
        //alert(parseInt(cart.size())+3);
         $('#count').text(cart.size());     
        });      

        
   function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        var innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }
		displayProducts();
    }    
	
	function displayProducts(){
	var tmpString = "";
    for(var i=0; i < proj4_data.length-1; i++) {
		
            tmpString += "<div class=\"product\"><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"150px\" height=\"150px\" />";
            
                tmpString += "<h2>" + proj4_data[i][2] + "</h2><p> <b>Category: </b>";
                tmpString += proj4_data[i][1] + "<br /> <b>Description: </b>";
                tmpString += proj4_data[i][3] + "<br />";
                tmpString += proj4_data[i][4] + "<br /> <b>Price: </b>";
                tmpString += proj4_data[i][6] + "<br /><b>Quantity:</b><input type='number' class='quantip' id='"+proj4_data[i][0]+"qty' min=0 value=1>";
       tmpString += "<input class=\"addtocartbut buy\" type='button' value='Add To Cart'"+
                "id='" + proj4_data[i][0]+"' />";
            tmpString += "<span>Added to Cart</span><br /></div>";
        }
		 var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
	}   	   
    });    
   
    
// from http://www.webmasterworld.com/forum91/3262.htm            
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
