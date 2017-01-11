#!/usr/bin/perl 

use CGI;
use CGI::Cookie;
use POSIX qw(strftime);
use DBI;

$q = new CGI;


#send a blank cookie.  You must insert this into the header before
#printing anything.  Also, using the CGI module makes printing
#content-type: text/html redundant.

my $cookie = $q->cookie(-name=>'jadrn032',-value=>'',-path=>'/');
print $q->header(-cookie=>$cookie);
print <<END_CONTENT;
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
    <title>Order confirmed!</title>
            <meta http-equiv="content-type"
                        content="text/html;charset=utf-8" />
                <meta http-equiv="Content-Style-Type" content="text/css" />
                
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<link rel="stylesheet" type="text/css" href="/~jadrn032/proj4/css/confirmed.css"/>


</head>

<body>
  <div id="heading">
  <h1> Bertha's Deluxe Chocolates </h1>
  </div>
  
  <div id="menu">
    <ul>
      <li><i class="fa fa-home"></i><a href="/~jadrn032/proj4/index.html">Home</a></li>
        <li><i class="fa fa-codiepie"></i><a href="/~jadrn032/proj4/products.html">Products</a></li>
        <li><i class="fa fa-shopping-bag active"></i><a class="active" href="/~jadrn032/proj4/orderonline.html">Order Online</a></li>
        <li><i class="fa fa-user"></i><a href="/~jadrn032/proj4/aboutus.html">About Us</a></li>
      <li><i class="fa fa-phone"></i><a href="/~jadrn032/proj4/contactus.html">Contact Us</a></li>
    </ul>
  </div>
END_CONTENT

my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn032";
my $username = "jadrn032";
my $password = "pipe";
my $database_source = "dbi:mysql:$database:$host:$port";
my $dbh = DBI->connect($database_source, $username, $password) 
or die 'Cannot connect to db';

my %cookies = $ENV{COOKIE};
print "<h2> Thank you for shopping with us! </h2>\n";
print "<h3>Your Order Summary:</h3>\n";
print "<table id='ordered'>\n";
print "<tr><th>Product</th><th>#ProductID</th><th>Quantity</th></tr>\n";
my ($key, $value);
     
%cookies = CGI::Cookie->fetch;

my $v = $q->cookie('jadrn032');

@rows = split('\|\|',$v);
foreach $row (@rows) {
    my $date = strftime "%m/%d/%Y", localtime;
    ($sku, $qty) = split('\|',$row);
    print "<tr><td><img src='/~jadrn000/PROJ4_IMAGES/$sku.jpg' alt='ordered chocolate image' width='120px'/></td><td>$sku</td><td>$qty</td></tr>";
    ($sku, $qty) = split('\|',$row);
my $query = "INSERT INTO Report(sku,quantity,orderdate) VALUES('$sku',$qty,'$date');";
    my $sth = $dbh->prepare($query) or die "Prepare Error";

    $sth->execute() or die "Execute Error";
    $sth->finish();

    } 
   print "</table>\n";  

my ($key, $value);
print "<table>\n";

                
foreach $key ($q->param) {
    print "<tr>\n";
    if(($key eq "mob1") || ($key eq "mob2") || ($key eq "mob3")) {
        if($key eq "mob3") {
            print "<td><b>Contact number</b></td>\n";
        }
    }
    elsif(($key eq "address") || ($key eq "address2") || ($key eq "city") || ($key eq "state") || ($key eq "zipcode")) {
        if($key eq "zipcode") {
            print "<td><b>Billing address</b></td>\n";
        }
    }
elsif(($key eq "address1") || ($key eq "address21") || ($key eq "city1") || ($key eq "state1") || ($key eq "zipcode1")) {
        if($key eq "zipcode1") {
            print "<td><b>Shipping address</b></td>\n";
        }
    }
    elsif($key eq "checksame" || $key eq "cvv") {
        print "<td></td>\n";
    } 
    elsif(($key eq "CCExpiresMonth")||($key eq "CCExpiresYear")) {
        if($key eq "CCExpiresYear") {
            print "<td><b>Card expires</b></td>\n";
        }
    }
    else {
    print "<td><b>$key</b></td>\n";
    }
    foreach $value ($q->param($key)) {
        if(($key eq "mob1") || ($key eq "mob2") || ($key eq "mob3")) {
            $phone=$phone.$value;
            if($key eq "mob3") {
                print "<td>$phone</td></tr>\n";
            }
            last;
        }
        elsif(($key eq "address") || ($key eq "address2") || ($key eq "city") || ($key eq "state") || ($key eq "zipcode")) {
            
            if(($key eq "address") || ($key eq "address2")) {
                $add = $add.$value;
                $add = $add." ";
                if($key eq "address2") { $add = $add."<br />"; }
            }
            elsif(($key eq "city") || ($key eq "state") || ($key eq "zipcode")) {
                $add = $add.$value;
                $add = $add." ";   
            }
            if($key eq "zipcode") {
            print "<td>$add</td></tr>\n";
            }
            last;
        }
    elsif(($key eq "address1") || ($key eq "address21") || ($key eq "city1") || ($key eq "state1") || ($key eq "zipcode1")) {
            
            if(($key eq "address1") || ($key eq "address21")) {
                $add1 = $add1.$value;
                $add1 = $add1." ";
                if($key eq "address21") { $add1 = $add1."<br />"; }
            }
            elsif(($key eq "city1") || ($key eq "state1") || ($key eq "zipcode1")) {
                $add1 = $add1.$value;
                $add1 = $add1." ";   
            }
            if($key eq "zipcode1") {
            print "<td>$add1</td></tr>\n";
            }
            last;
        }
        elsif($key eq "checksame" || $key eq "cvv") { 
            print "<td></td></tr>\n";
            last; }
        elsif($key eq "credit") {
            $newval=substr($value,12,15);
            print "<td>XXXX-XXXX-XXXX-$newval</td></tr>\n";
            last;
        }
            
        elsif(($key eq "CCExpiresMonth")||($key eq "CCExpiresYear")) {
            
            if($key eq "CCExpiresMonth") { $expstr=$value."/"; }
            else { 
                $expstr=$expstr.$value;
                print "<td>$expstr</td></tr>\n"; }
            last; 
        }
    else {
        print "<td>$value</td>\n";
        }
        }
    print "</tr>\n";
}
print "</table>\n";

print "</body>\n";
print "</html>\n";
