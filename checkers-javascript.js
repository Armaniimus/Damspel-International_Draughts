var piece = "O"
var black = "<center>"+piece.fontcolor("black")+"</center>"
var white = "<center>"+piece.fontcolor("white")+"</center>"

var txt = ""
var temp = ""
var temp_two = []
var clor = black
var testdata = ""
var printdisplay = ""

var row = "row_"
var square ="_square_"

var rownumb = ""
var squarenumb = ""

var numb_array =["0","one","two","three","four","five","six","seven","eight","nine","ten"]
var positionarray = [ 'row_zero', 'row_one' ,'row_two', 'row_three','row_four','row_five','row_six','row_seven','row_eight','row_nine','row_ten']
positionarray[0] = []
positionarray[1] = []
positionarray[2] = []
positionarray[3] = []
positionarray[4] = []
positionarray[5] = []
positionarray[6] = []
positionarray[7] = []
positionarray[8] = []
positionarray[9] = []
positionarray[10] = []


var y_pos = 0
var x_pos = 0
var stoneid = 0		//0=empty	1=white		2=black

///////////////////////////////////////////////////////

function singleplayer(){
	reset()
}

function multiplayer(){
	reset_id()
}

function reset(){
	printdisplay = ""
	returntodisplay()
	for(y_pos =1; y_pos < 11; y_pos ++){
		
		switch(y_pos){			
			case 1:
				clor = white
				break
			case 5:
				clor = ""
				break
			case 7:	
				clor = black
				break
		}
			
		for(x_pos = 2; x_pos < 11; x_pos++){
			temp = "row_"+numb_array[y_pos]+"_square_"+numb_array[x_pos]
			document.getElementById(temp).innerHTML = clor
			x_pos ++
		}
		y_pos ++

		for(x_pos = 1; x_pos < 11; x_pos++){
			temp = "row_"+numb_array[y_pos]+"_square_"+numb_array[x_pos]
			document.getElementById(temp).innerHTML = clor
			x_pos ++
		}	
	}
}
function reset_id(){
	
	for(y_pos =1; y_pos < 11; y_pos ++){
		
		switch(y_pos){			
			case 1:
				stoneid = 1	
				break
			case 5:
				stoneid = 0
				break
			case 7:	
				stoneid = 2
				break
		}	

		for(x_pos = 2; x_pos < 11; x_pos ++){
			temp = "row_"+numb_array[y_pos]+"_square_"+numb_array[x_pos]

			positionarray[ y_pos ][ x_pos ] = stoneid
			
			document.getElementById(temp).innerHTML = positionarray[ y_pos ][ x_pos ] = stoneid

			x_pos ++
		}
		y_pos ++

		for(x_pos = 1; x_pos < 11; x_pos++){
			temp = "row_"+numb_array[y_pos]+"_square_"+numb_array[x_pos]
			
			positionarray[ y_pos ][ x_pos ] = stoneid

			document.getElementById(temp).innerHTML = positionarray[ y_pos ][ x_pos ] = stoneid 
			
			x_pos ++
		}
		
	}
}
	

function execute(){
	//temp = "Height = " + y_pos + " Width = " + x_pos
	
	printdisplay = positionarray[ y_pos ][ x_pos ]
	returntodisplay()
	write_piece()
}

function returntodisplay(){
	document.getElementById("display").innerHTML = printdisplay
}

function write_piece(){
	rownumb = "row_"+numb_array[y_pos]
	squarenumb = "_square_"+numb_array[x_pos]
	document.getElementById(rownumb+squarenumb).innerHTML = clor
}
//////////////////////////////////////////////////////////////////
function row_ten___square_one(){
	y_pos = 10
	x_pos = 1
	execute()
}
function row_ten___square_three(){
	y_pos = 10
	x_pos = 3
	execute()
}
function row_ten___square_five(){
	y_pos = 10
	x_pos = 5
	execute()
}
function row_ten___square_seven(){
	y_pos = 10
	x_pos = 7
	execute()
}
function row_ten___square_nine(){
	y_pos = 10
	x_pos = 9
	execute()
}
function row_nine___square_two(){
	y_pos = 9
	x_pos = 2
	execute()
}
function row_nine___square_four(){
	y_pos = 9
	x_pos = 4
	execute()
}
function row_nine___square_six(){
	y_pos = 9
	x_pos = 6
	execute()
}
function row_nine___square_eight(){
	y_pos = 9
	x_pos = 8
	execute()
}
function row_nine___square_ten(){
	y_pos = 9
	x_pos = 10
	execute()
}
function row_eight___square_one(){
	y_pos = 8
	x_pos = 1
	execute()
}
function row_eight___square_three(){
	y_pos = 8
	x_pos = 3
	execute()
}
function row_eight___square_five(){
	y_pos = 8
	x_pos = 5
	execute()
}
function row_eight___square_seven(){
	y_pos = 8
	x_pos = 7
	execute()
}
function row_eight___square_nine(){
	y_pos = 8
	x_pos = 9
	execute()
}
//row 7
function row_seven___square_two(){
	y_pos = 7
	x_pos = 2
	execute()
}
function row_seven___square_four(){
	y_pos = 7
	x_pos = 4
	execute()
}
function row_seven___square_six(){
	y_pos = 7
	x_pos = 6
	execute()
}
function row_seven___square_eight(){
	y_pos = 7
	x_pos = 8
	execute()
}
function row_seven___square_ten(){
	y_pos = 7
	x_pos = 10
	execute()
}
//row 6
function row_six___square_one(){
	y_pos = 6
	x_pos = 1
	execute()
}
function row_six___square_three(){
	y_pos = 6
	x_pos = 3
	execute()
}
function row_six___square_five(){
	y_pos = 6
	x_pos = 5
	execute()
}
function row_six___square_seven(){
	y_pos = 6
	x_pos = 7
	execute()
}
function row_six___square_nine(){
	y_pos = 6
	x_pos = 9
	execute()
}
//row 5
function row_five___square_two(){
	y_pos = 5
	x_pos = 2
	execute()
}
function row_five___square_four(){
	y_pos = 5
	x_pos = 4
	execute()
}
function row_five___square_six(){
	y_pos = 5
	x_pos = 6
	execute()
}
function row_five___square_eight(){
	y_pos = 5
	x_pos = 8
	execute()
}
function row_five___square_ten(){
	y_pos = 5
	x_pos = 10
	execute()
}
//row 4
function row_four___square_one(){
	y_pos = 4
	x_pos = 1
	execute()
}
function row_four___square_three(){
	y_pos = 4
	x_pos = 3
	execute()
}
function row_four___square_five(){
	y_pos = 4
	x_pos = 5
	execute()
}
function row_four___square_seven(){
	y_pos = 4
	x_pos = 7
	execute()
}
function row_four___square_nine(){
	y_pos = 4
	x_pos = 9
	execute()
}
//row 3
function row_three___square_two(){
	y_pos = 3
	x_pos = 2
	execute()
}
function row_three___square_four(){
	y_pos = 3
	x_pos = 4
	execute()
}
function row_three___square_six(){
	y_pos = 3
	x_pos = 6
	execute()
}
function row_three___square_eight(){
	y_pos = 3
	x_pos = 8
	execute()
}
function row_three___square_ten(){
	y_pos = 3
	x_pos = 10
	execute()
}
//row 2
function row_two___square_one(){
	y_pos = 2
	x_pos = 1
	execute()
}
function row_two___square_three(){
	y_pos = 2
	x_pos = 3
	execute()
}
function row_two___square_five(){
	y_pos = 2
	x_pos = 5
	execute()
}
function row_two___square_seven(){
	y_pos = 2
	x_pos = 7
	execute()
}
function row_two___square_nine(){
	y_pos = 2
	x_pos = 9
	execute()
}
function row_one___square_two(){
	y_pos = 1
	x_pos = 2
	execute()
}
//row 1
function row_one___square_four(){
	y_pos = 1
	x_pos = 4
	execute()
}
function row_one___square_six(){
	y_pos = 1
	x_pos = 6
	execute()
}
function row_one___square_eight(){
	y_pos = 1
	x_pos = 8
	execute()
}
function row_one___square_ten(){
	y_pos = 1
	x_pos = 10
	execute()
}