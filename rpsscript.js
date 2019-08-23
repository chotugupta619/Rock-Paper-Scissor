$(document).ready(function(){
var i;
var c=0;
var u=0;

var max=prompt("How many matches you want to play");
for(i=0; i<max;i++)
{
	var usr=prompt("Enter your choice:1,2 or 3");
	if(!usr){
		document.write("Please enter your choice");
	}
	else if(usr==1)
	{
		document.write("<p>Player :Rock"+"</p>");
	}
	else if(usr==2)
	{
		document.write("<p>Player :Paper"+"</p>");
	}
	else if(usr==3)
	{
		document.write("<p>Player :Scissor"+"</p>");
	}
	else
	{
		document.write("<p>Invalid Choice"+"</p>");
	}
	var com=Math.random();
	if(com<0.34)
	{
		document.write("<p>Computer : Rock"+"</p>");
	}
	else if(com<0.67)
	{
		document.write("<p>Computer : Paper"+"</p>");
	}
	else
	{
		document.write("<p>Computer : Scissor"+"</p>");
	}
	if(usr==1 && com<0.34)
	{
		document.write("<p>It's a tie"+"</p>")
		document.write("<br><hr>");

	}
	else if(usr==1 && (com>0.34 && com<0.67))
	{
		document.write("<p>Computer Won"+"</p>");
		document.write("<br><hr>");
        c=c+1;
	}
	else if(usr==1 && com>0.67)
	{
		document.write("<p>Player Won"+"</p>");
		document.write("<br><hr>");
        u=u+1;
	}
	else if(usr==2 && com<0.34)
	{
		document.write("<p>Player Won"+"</p>");
		document.write("<br><hr>");
        u=u+1;
	}
	else if(usr==2 && (com>0.34 && com<0.67))
	{
		document.write("<p>It's a tie"+"</p>");
		document.write("<br><hr>");
	}
	else if(usr==2 && com>0.67)
	{
		document.write("<p>Computer Won"+"</p>");
		document.write("<br><hr>");
        c=c+1;
	}
	else if(usr==3 && com<0.34)
	{
		document.write("<p>Computer Won"+"</p>");
		document.write("<br><hr>");
        c=c+1;
	}
	else if(usr==3 && (com>0.34 && com<0.67))
	{
		document.write("<p>Player Won"+"</p>");
		document.write("<br><hr>");
		u=u+1;
	}
	else if(usr==3 && com>0.67)
	{
		document.write("<p>It's a tie"+"</p>");
		document.write("<br><hr>");
	}
}
if(c>u)
{
	document.write("Final Result: Computer Won with score: "+c);
}
else if(u>c)
{
	document.write("Final Result: Player Won with score: "+u);
}
else if(u==c)
{
	document.write("Final Result: It's a tie");
}
$("body").css("color","red");
$("body").css("background-color","#00FFFF");
});
