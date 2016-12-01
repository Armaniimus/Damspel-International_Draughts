var piece = "O"
var black = "<center>"+piece.fontcolor("black")+"</center>"
var white = "<center>"+piece.fontcolor("white")+"</center>"

var txt = ""
var temp = ""
var clor = black
var testdata = ""
var printdisplay = ""

var row = "row_"
var square ="_square_"

var rownumb = ""
var squarenumb = ""
var h_arraypos = "h_"

var numb_array =["0","one","two","three","four","five","six","seven","eight","nine","ten"]
var positionarray = [h_zero = [],h_one = [],h_two =[],h_three =[],h_four = [],h_five =[],h_six = [],h_seven = [],h_eight =[],h_nine = [],h_ten = []]


var heightpos = 0
var withpos = 0
var i = 0

function reset(){
	clor = white
	printdisplay = ""
	returntodisplay()
	for(heightpos =1; heightpos < 11; heightpos++){
		
		if(heightpos > 5){
			clor=black
		}
		
		if(heightpos < 5 || heightpos > 6 ){
			
			for(withpos = 2; withpos < 11; withpos++){
				temp = "row_"+numb_array[heightpos]+"_square_"+numb_array[withpos]
				document.getElementById(temp).innerHTML = clor
				withpos ++
			}
			heightpos ++
			
			for(withpos = 1; withpos < 11; withpos++){
				temp = "row_"+numb_array[heightpos]+"_square_"+numb_array[withpos]
				document.getElementById(temp).innerHTML = clor
				withpos ++
			}
		}
		else{ 
			for(withpos = 2; withpos < 11; withpos++){
				temp = "row_"+numb_array[heightpos]+"_square_"+numb_array[withpos]
				document.getElementById(temp).innerHTML = ""
				withpos ++
			}
			heightpos ++
			
			for(withpos = 1; withpos < 11; withpos++){
				temp = "row_"+numb_array[heightpos]+"_square_"+numb_array[withpos]
				document.getElementById(temp).innerHTML = ""
				withpos ++
			}
			
			
		}
		
	}
}
function sleep(){
	setTimeout(sleeptwo(), 1000)
}	
function sleeptwo(){
	temp=temp
}
function write_piece(){
		rownumb = "row_"+numb_array[heightpos]
		squarenumb = "_square_"+numb_array[withpos]
		document.getElementById(rownumb+squarenumb).innerHTML = clor
		returntodisplay()
}
function singleplayer(){
	reset()
}
function multiplayer(){
	reset()
}
function returntodisplay(){
	document.getElementById("display").innerHTML = printdisplay
}
function execute(){
	temp = h_arraypos + numb_array [ heightpos ] //defines heightposition
	positionarray[ temp [ withpos ] ] = "Height = " + heightpos + " Width = " + withpos //writes data to array
	
	testdata = positionarray [ temp [ withpos ] ]
	printdisplay = testdata
	returntodisplay()
	write_piece()
}

function row_ten___square_one(){
	heightpos = 10
	withpos = 1
	execute()
}
function row_ten___square_three(){
	heightpos = 10
	withpos = 3
	execute()
}
function row_ten___square_five(){
	heightpos = 10
	withpos = 5
	execute()
}
function row_ten___square_seven(){
	heightpos = 10
	withpos = 7
	execute()
}
function row_ten___square_nine(){
	heightpos = 10
	withpos = 9
	execute()
}
function row_nine___square_two(){
	heightpos = 9
	withpos = 2
	execute()
}
function row_nine___square_four(){
	heightpos = 9
	withpos = 4
	execute()
}
function row_nine___square_six(){
	heightpos = 9
	withpos = 6
	execute()
}
function row_nine___square_eight(){
	heightpos = 9
	withpos = 8
	execute()
}
function row_nine___square_ten(){
	heightpos = 9
	withpos = 10
	execute()
}
function row_eight___square_one(){
	heightpos = 8
	withpos = 1
	execute()
}
function row_eight___square_three(){
	heightpos = 8
	withpos = 3
	execute()
}
function row_eight___square_five(){
	heightpos = 8
	withpos = 5
	execute()
}
function row_eight___square_seven(){
	heightpos = 8
	withpos = 7
	execute()
}
function row_eight___square_nine(){
	heightpos = 8
	withpos = 9
	execute()
}
//row 7
function row_seven___square_two(){
	heightpos = 7
	withpos = 2
	execute()
}
function row_seven___square_four(){
	heightpos = 7
	withpos = 4
	execute()
}
function row_seven___square_six(){
	heightpos = 7
	withpos = 6
	execute()
}
function row_seven___square_eight(){
	heightpos = 7
	withpos = 8
	execute()
}
function row_seven___square_ten(){
	heightpos = 7
	withpos = 10
	execute()
}
//row 6
function row_six___square_one(){
	heightpos = 6
	withpos = 1
	execute()
}
function row_six___square_three(){
	heightpos = 6
	withpos = 3
	execute()
}
function row_six___square_five(){
	heightpos = 6
	withpos = 5
	execute()
}
function row_six___square_seven(){
	heightpos = 6
	withpos = 7
	execute()
}
function row_six___square_nine(){
	heightpos = 6
	withpos = 9
	execute()
}
//row 5
function row_five___square_two(){
	heightpos = 5
	withpos = 2
	execute()
}
function row_five___square_four(){
	heightpos = 5
	withpos = 4
	execute()
}
function row_five___square_six(){
	heightpos = 5
	withpos = 6
	execute()
}
function row_five___square_eight(){
	heightpos = 5
	withpos = 8
	execute()
}
function row_five___square_ten(){
	heightpos = 5
	withpos = 10
	execute()
}
//row 4
function row_four___square_one(){
	heightpos = 4
	withpos = 1
	execute()
}
function row_four___square_three(){
	heightpos = 4
	withpos = 3
	execute()
}
function row_four___square_five(){
	heightpos = 4
	withpos = 5
	execute()
}
function row_four___square_seven(){
	heightpos = 4
	withpos = 7
	execute()
}
function row_four___square_nine(){
	heightpos = 4
	withpos = 9
	execute()
}
//row 3
function row_three___square_two(){
	heightpos = 3
	withpos = 2
	execute()
}
function row_three___square_four(){
	heightpos = 3
	withpos = 4
	execute()
}
function row_three___square_six(){
	heightpos = 3
	withpos = 6
	execute()
}
function row_three___square_eight(){
	heightpos = 3
	withpos = 8
	execute()
}
function row_three___square_ten(){
	heightpos = 3
	withpos = 10
	execute()
}
//row 2
function row_two___square_one(){
	heightpos = 2
	withpos = 1
	execute()
}
function row_two___square_three(){
	heightpos = 2
	withpos = 3
	execute()
}
function row_two___square_five(){
	heightpos = 2
	withpos = 5
	execute()
}
function row_two___square_seven(){
	heightpos = 2
	withpos = 7
	execute()
}
function row_two___square_nine(){
	heightpos = 2
	withpos = 9
	execute()
}
function row_one___square_two(){
	heightpos = 1
	withpos = 2
	execute()
}
//row 1
function row_one___square_four(){
	heightpos = 1
	withpos = 4
	execute()
}
function row_one___square_six(){
	heightpos = 1
	withpos = 6
	execute()
}
function row_one___square_eight(){
	heightpos = 1
	withpos = 8
	execute()
}
function row_one___square_ten(){
	heightpos = 1
	withpos = 10
	execute()
}