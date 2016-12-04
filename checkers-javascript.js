/////////////////////////////////////////////////////////
//creates string variables
//////////////////////////////

//used to write white and black stones to the board
var piece = "O";
var piece_two = "D";
var black = "<center>"+piece.fontcolor("black")+"</center>";
var blackdam = "<center>"+piece_two.fontcolor("black")+"</center>";
var white = "<center>"+piece.fontcolor("white")+"</center>";
var whitedam = "<center>"+piece_two.fontcolor("white")+"</center>";
var clor = ""; //needed to switch between black and white

//etc.
var temp = "";
var temp_two = 2;
var testdata = "";
var printdisplay = ""; //used for writing to UI.

/////////////////////////////////////////////////////////
//creates number variables
///////////////////////////////

//used to reach proper location inside the positionarray.
var y_pos = 0; //translates height to proper subarray.
var x_pos = 0; //translates width to proper article in the array.

//temp_x and temp_y are needed for the movement of stones
var temp_y_pos = 0; 
var temp_x_pos = 0;

//stores what stone is selected   also used in the reset
//0=empty  1=whitestone  2=whitedam  3=blackstone  4=blackdam
var stoneid = 0;

////////////////////////////////////////////////
//creates arrays
////////////////////

//used to create the names for the arrays.
var numb_array =["zero","one","two","three","four","five","six","seven","eight","nine", "ten"];

//used for creating the proper id names.
var square_array = [];
var row_array = [];

//becomes 2dimensional and is used to store the values of every brown square on the board
var positionarray = [];

//creates article's inside the arrays.
for(temp = 0; temp <= 10; temp++){
	
	square_array[temp] = "_square_"+numb_array[temp];
	row_array[temp] = "row_"+numb_array[temp];
	positionarray[temp] = row_array[temp];
	
	//changes articles into arrays
	positionarray[temp] = [];
}
//resets temp variable
temp = "";

///////////////////////////////////////////////////////
//reset functions;
////////////////////
function singleplayer(){
	reset();
}

function multiplayer(){
	reset();
}

//creates the functional data and writes visual stones to UI
function reset(){
	printdisplay = "";
	returntodisplay();
	
	
	for(y_pos =1; y_pos < 11; y_pos ++){
		
		reset_switch();
		
		for(x_pos = temp_two; x_pos < 11; x_pos++){
			temp = row_array[y_pos]+square_array[x_pos];
			positionarray[ y_pos ][ x_pos ] = stoneid;
			
			document.getElementById(temp).innerHTML = clor
			//document.getElementById(temp).innerHTML = stoneid;
			
			x_pos ++;
		}
		//switches temp_between 
		switch(temp_two){
			case 1:
				temp_two=2
				break;
			case 2:
				temp_two=1
				break;
		}	
	}
	stoneid = 0;
	clor = "";
}
//supports the resets
function reset_switch(){
	switch(y_pos){			
			case 1:
				clor = white;
				stoneid = 1;
				break;
			case 5:
				clor = "";
				stoneid = 0;
				break;
			case 7:	
				clor = black;
				stoneid = 3;
				break;
	}	
}

///////////////////////////////////////////////////////////	
//execute core of the program
//////////////////////
function execute(){
	testdata +="<br />execute = true <br />";
	testdata +="temp_x = "+y_pos+"<br />";
	testdata +="temp_x = "+x_pos+"<br />";
	
	//tests if the same button is clicked twice
	if(temp_y_pos == y_pos && temp_x_pos == x_pos){
		clearmove();
	}
	else{
		//tests if a stone was selected.
		if(stoneid > 0){
			write_piece();
			
		}
		else{
			//makes sure you can't select an empty square to move
			if(positionarray[y_pos][x_pos] == 0){
				//if true do nothing
				testdata +="<br />bottom execute= false <br />";
				testdata +="stoneid = "+stoneid+"<br />";
			}
			//save stoneid and position
			else{
				
				save_moveinfo()
				
			}
		}
		printdisplay = positionarray[ y_pos ][ x_pos ];
		returntodisplay();
	}
	document.getElementById("testlog").innerHTML = testdata;
}
//////////////////////////////////////////////////////////////////
//Supporting functions for execute
/////////////////

//unselect stone when clicking on it for the second time
function clearmove(){
	temp_y_pos = 0;
	temp_x_pos = 0;
	y_pos = 0;
	x_pos = 0;
	stoneid = 0;
	
	testdata +="<br />clearmove = true <br />";
	testdata +="temp_y = "+temp_x_pos+"<br />";
	testdata +="temp_x = "+temp_y_pos+"<br />";
	testdata +="y_pos = "+y_pos+"<br />";
	testdata +="x_pos = "+x_pos+"<br />";
	testdata +="stoneid = "+stoneid+"<br />";
}

//prints data to display in the UI 
function returntodisplay(){
	
	testdata +="<br /><br />return to display = true <br />";
	testdata +="printdisplay="+printdisplay+"<br />";
	document.getElementById("display").innerHTML = printdisplay;
}

//prints data to board in the UI
function write_piece(){
	
	positionarray[temp_y_pos][temp_x_pos] = 0;
	positionarray[y_pos][x_pos] = stoneid;
	
	testdata +="<br />write_piece = true <br />";
	testdata += "positionarray[tempy][tempx]"+positionarray[temp_y_pos][temp_x_pos]+"<br />";
	testdata +="positionarray[y][x]="+positionarray[y_pos][x_pos]+"<br />";
	
	translate_stoneid();//translates stoneid to clor
	
	//removes stone from the UI
	document.getElementById(row_array[ temp_y_pos ]+square_array[ temp_x_pos ]).innerHTML = "";
	
	//prints moved stone to the UI
	document.getElementById(row_array[y_pos]+square_array[x_pos]).innerHTML = clor;
	stoneid = 0;
}	
function save_moveinfo(){
	stoneid = positionarray[y_pos][x_pos];
	temp_y_pos = y_pos;
	temp_x_pos = x_pos;

	testdata +="<br />save_moveinfo= true<br />";
	testdata +="stoneid = "+stoneid+"<br />";
	testdata +="temp_y_pos = "+temp_y_pos+"<br />";
	testdata +="temp_x_pos = "+temp_x_pos+"<br />";

}


function translate_stoneid(){
	switch(stoneid){
		case 0 :
			clor = "";
			break;
		case 1 :
			clor = white;
			break;
		case 2 :
			clor = whitedam;
			break;
		case 3 :
			clor = black;
			break;
		case 4 :
			clor = blackdam;
			break;
	}
	testdata +="<br />translate_stoneid = true <br />";
	testdata +="clor= "+clor+"<br />";
}
	
//////////////////////////////////////////////////////////////////
//translates onclick created events to height and width positions before //sending them to the core of the program.
///////////////////////////////////////

function row_ten___square_one(){
	y_pos = 10;
	x_pos = 1;
	execute();
}
function row_ten___square_three(){
	y_pos = 10;
	x_pos = 3;
	execute();
}
function row_ten___square_five(){
	y_pos = 10;
	x_pos = 5;
	execute();
}
function row_ten___square_seven(){
	y_pos = 10;
	x_pos = 7;
	execute();
}
function row_ten___square_nine(){
	y_pos = 10;
	x_pos = 9;
	execute();
}
function row_nine___square_two(){
	y_pos = 9;
	x_pos = 2;
	execute();
}
function row_nine___square_four(){
	y_pos = 9;
	x_pos = 4;
	execute();
}
function row_nine___square_six(){
	y_pos = 9;
	x_pos = 6;
	execute();
}
function row_nine___square_eight(){
	y_pos = 9;
	x_pos = 8;
	execute();
}
function row_nine___square_ten(){
	y_pos = 9;
	x_pos = 10;
	execute();
}
function row_eight___square_one(){
	y_pos = 8;
	x_pos = 1;
	execute();
}
function row_eight___square_three(){
	y_pos = 8;
	x_pos = 3;
	execute();
}
function row_eight___square_five(){
	y_pos = 8;
	x_pos = 5;
	execute();
}
function row_eight___square_seven(){
	y_pos = 8;
	x_pos = 7;
	execute();
}
function row_eight___square_nine(){
	y_pos = 8;
	x_pos = 9;
	execute();
}
//row 7
function row_seven___square_two(){
	y_pos = 7;
	x_pos = 2;
	execute();
}
function row_seven___square_four(){
	y_pos = 7;
	x_pos = 4;
	execute();
}
function row_seven___square_six(){
	y_pos = 7;
	x_pos = 6;
	execute();
}
function row_seven___square_eight(){
	y_pos = 7;
	x_pos = 8;
	execute();
}
function row_seven___square_ten(){
	y_pos = 7;
	x_pos = 10;
	execute();
}
//row 6
function row_six___square_one(){
	y_pos = 6;
	x_pos = 1;
	execute();
}
function row_six___square_three(){
	y_pos = 6;
	x_pos = 3;
	execute();
}
function row_six___square_five(){
	y_pos = 6;
	x_pos = 5;
	execute();
}
function row_six___square_seven(){
	y_pos = 6;
	x_pos = 7;
	execute();
}
function row_six___square_nine(){
	y_pos = 6;
	x_pos = 9;
	execute();
}
//row 5
function row_five___square_two(){
	y_pos = 5;
	x_pos = 2;
	execute();
}
function row_five___square_four(){
	y_pos = 5;
	x_pos = 4;
	execute();
}
function row_five___square_six(){
	y_pos = 5;
	x_pos = 6;
	execute();
}
function row_five___square_eight(){
	y_pos = 5;
	x_pos = 8;
	execute();
}
function row_five___square_ten(){
	y_pos = 5;
	x_pos = 10;
	execute();
}
//row 4
function row_four___square_one(){
	y_pos = 4;
	x_pos = 1;
	execute();
}
function row_four___square_three(){
	y_pos = 4;
	x_pos = 3;
	execute();
}
function row_four___square_five(){
	y_pos = 4;
	x_pos = 5;
	execute();
}
function row_four___square_seven(){
	y_pos = 4;
	x_pos = 7;
	execute();
}
function row_four___square_nine(){
	y_pos = 4;
	x_pos = 9;
	execute();
}
//row 3
function row_three___square_two(){
	y_pos = 3;
	x_pos = 2;
	execute();
}
function row_three___square_four(){
	y_pos = 3;
	x_pos = 4;
	execute();
}
function row_three___square_six(){
	y_pos = 3;
	x_pos = 6;
	execute();
}
function row_three___square_eight(){
	y_pos = 3;
	x_pos = 8;
	execute();
}
function row_three___square_ten(){
	y_pos = 3;
	x_pos = 10;
	execute();
}
//row 2
function row_two___square_one(){
	y_pos = 2;
	x_pos = 1;
	execute();
}
function row_two___square_three(){
	y_pos = 2;
	x_pos = 3;
	execute();
}
function row_two___square_five(){
	y_pos = 2;
	x_pos = 5;
	execute();
}
function row_two___square_seven(){
	y_pos = 2;
	x_pos = 7;
	execute();
}
function row_two___square_nine(){
	y_pos = 2;
	x_pos = 9;
	execute();
}
function row_one___square_two(){
	y_pos = 1;
	x_pos = 2;
	execute();
}
//row 1
function row_one___square_four(){
	y_pos = 1;
	x_pos = 4;
	execute();
}
function row_one___square_six(){
	y_pos = 1;
	x_pos = 6;
	execute();
}
function row_one___square_eight(){
	y_pos = 1;
	x_pos = 8;
	execute();
}
function row_one___square_ten(){
	y_pos = 1;
	x_pos = 10;
	execute();
}