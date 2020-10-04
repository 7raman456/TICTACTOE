var num=0;
var X=[],O=[];
var i=0,j=0;
var temp,flag=0;
function has(int) 
{

	if(num%2==0)
	{

	if(O.indexOf(int.toString())<0)
		return false;
	else
		return true;
	}

	else
	{
	if(X.indexOf(int.toString())<0)
		return false;
	else
		return true;
	}

}







function win()
{
	$("span").toggleClass("player");
	if(has(1)&&has(2)&&has(3)||has(4)&&has(5)&&has(6)||has(7)&&has(8)&&has(9)||has(1)&&has(4)&&has(7)||has(2)&&has(5)&&has(8)||has(3)&&has(6)&&has(9)||has(1)&&has(5)&&has(9)||has(3)&&has(5)&&has(7))
		{
			$(".container").css("display","none");
			if(num%2==0)
				$(".result").text("O wins");
			else
				$(".result").text("X wins");

			$("span").toggleClass("player");
		//	$("span").removeClass("player");

			flag++;
		}
	else if(i+j===9){
		$(".container").css("display","none");
		$(".result").text("DRAW");
		flag++;
	}	
}


$(".play").on("click",function func() {
	$("th").text("");
	X=[];
	O=[];
	flag=0,i=0,j=0;
	$(".result").text("");
	if(num%2==1)
		$("span").toggleClass("player");

	$(".container").css("display","block");

	num=0;

	// body...
})

$(".play").mouseenter(function () {$(this).addClass("hor");}).mouseleave(function () {$(this).removeClass("hor");})





$("th").on("click",function fuction(argument) 
{
	

	if($(this).text()==""&&flag==0){
		temp=$(this).attr("class");
		if((num%2)===0)
		{$(this).text("O");O[i]=temp;i++;}
	else
		{$(this).text("X");X[j]=temp;j++;}
	win();

	num++;
	}
})





