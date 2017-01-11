#!/usr/bin/perl 
#   Sample perl cgi script.  This script prints a list of the 
#   products in the opatija proj4.products table.
#
#   Code by Alan Riggins
#
   
use DBI;

print <<END_HTML;
Content-type: text/html

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
    <title>Sales report</title>
            <meta http-equiv="content-type"
                        content="text/html;charset=utf-8" />
                <meta http-equiv="Content-Style-Type" content="text/css" />
                
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<link rel="stylesheet" type="text/css" href="/~jadrn032/proj4/css/report.css"/>


</head>

<body>
  <div id="heading">
  <h1> Bertha's Deluxe Chocolates </h1>
  </div>
  
  <div id="menu">
    <ul>
      <li><i class="fa fa-home"></i><a href="/~jadrn032/proj4/index.html">Home</a></li>
        <li><i class="fa fa-codiepie"></i><a href="/~jadrn032/proj4/products.html">Products</a></li>
        <li><i class="fa fa-shopping-bag"></i><a href="/~jadrn032/proj4/orderonline.html">Order Online</a></li>
        <li><i class="fa fa-user"></i><a href="/~jadrn032/proj4/aboutus.html">About Us</a></li>
      <li><i class="fa fa-phone"></i><a href="/~jadrn032/proj4/contactus.html">Contact Us</a></li>
    </ul>
  </div>
  <table>
  <tr><th>SKU</th><th>Product name</th><th>Cost <br />(per Item)</th><th>Retail <br />(per Item)</th><th>Profit <br />(per Item)</th><th>Total Sales</th><th>Total profit</th></tr>
END_HTML


my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database1 = "proj4";
my $username1 = "jadrn000";
my $password1 = "apple";
my $database_source1 = "dbi:mysql:$database1:$host:$port";

    
my $dbh1 = DBI->connect($database_source1, $username1, $password1) 
or die 'Cannot connect to db';


my $database = "jadrn032";
my $username = "jadrn032";
my $password = "pipe";
my $database_source = "dbi:mysql:$database:$host:$port";
my $dbh = DBI->connect($database_source, $username, $password) 
or die 'Cannot connect to db';

my $sth = $dbh->prepare("SELECT sku,SUM(quantity) AS NumberOfOrders FROM Report GROUP BY sku ORDER BY sku;");
$sth->execute();
my $profit=0;
while(my @row=$sth->fetchrow_array()) {

    print "<tr>\n";
    print "<td>$row[0]</td>";

    my $sth1 = $dbh1->prepare("SELECT sku, title, cost, retail FROM products;");
$sth1->execute();

while(my @row1=$sth1->fetchrow_array()) {
    if($row1[0] eq $row[0]) {
        print "<td>$row1[1]</td>\n";
        print "<td>\$$row1[2]</td>\n";
        print "<td>\$$row1[3]</td>\n";
        $profit=$row1[3]-$row1[2];
        print "<td>\$$profit</td>\n";
    }

}
    print "<td>$row[1]</td>";
    $grqtytot=$grqtytot+$row[1];
    $profittot=$profit*$row[1];
    $grprofit=$grprofit+$profittot;
    print "<td>\$$profittot</td>\n";
    print "</tr>\n";
    }
 

$sth->finish();
$dbh->disconnect();

        print "<tr><td></td><td></td><td></td><td></td><td><b>Gross sales<b></td><td><b>\$$grqtytot<b></td><td><b>\$$grprofit</b></td></tr>\n";

print "</table>\n";
print "</div>\n";
print "</body>\n";
print "</html>\n";
