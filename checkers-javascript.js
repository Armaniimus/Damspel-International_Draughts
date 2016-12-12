/////////////////////////////////////////////////////////
//creates string variables
//////////////////////////////

//used to write white and black stones to the board
var piece = "O";
var piece_two = "D";
var black = "<center>" + piece.fontcolor("black") + "</center>";
var blackdam = "<center>" + piece_two.fontcolor("black") + "</center>";
var white = "<center>" + piece.fontcolor("white") + "</center>";
var whitedam = "<center>" + piece_two.fontcolor("white") + "</center>";
var clor = ""; //needed to switch between black and white

//etc.
var temp_one = "";
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
//0=empty  1=whitestone  2=whitedam  3=blackstone  //4=blackdam
var stoneid = 0;
var ablemove = 0; //0= no ablemove 1= ablemove
var same_t = 0; // 0= not ownteam 1= ownteam
var approvedmove = 0; //0= not approved move 1= aproved
var ablecapture = 0; //0=not allowed 1=allowed
var direction = 0; // 0=lefttop 1=righttop 2=leftbot 3=rightbot

//etc.
var temp_two = 2;

////////////////////////////////////////////////
//creates arrays
////////////////////

//used to create the names for the arrays.
var numb_array = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

//used for creating the proper id names.
var square_array = [];
var row_array = [];

//becomes 2dimensional and is used to store the values of every brown square on the board
var positionarray = [];

//creates article's inside the arrays.
for (temp_one = 0; temp_one <= 10; temp_one += 1) {
	
	square_array[temp_one] = "_square_" + numb_array[temp_one];
	row_array[temp_one] = "row_" + numb_array[temp_one];
	positionarray[temp_one] = row_array[temp_one];
	
	//changes articles into arrays
	positionarray[temp_one] = [];
}
//resets temp_one variable
temp_one = "";

///////////////////////////////
//testdata gathering functions
///////////////////////////////

//1 and 0 are functional storage
//testdata arrays
var testdata_array = [];
var testdata_temp_array = [];

//testdata temp x and y
var testdata_temp_y_pos = [];
var testdata_temp_x_pos = [];

//testdata x and y
var testdata_y_pos = [];
var testdata_x_pos = [];

//etc
var testdata_stoneid = [];
var testdata_clor = [];
var testdata_printdisplay = [];
var testdata_activefunc = [];

//counters 4 testdata
var testcount = 2; //start runs on 2 4 and 6 //end runs on 3 5 and 7
var s_or_e = 0; // 0 is start 1 is end
var id_sore = ""; //defines where to write to

function printer_of_testdata() {
	"use strict";
	if (s_or_e === 0) {
		id_sore = "start_";
	} else {
		id_sore = "end_";
	}
	if (testcount === 11) {
		testcount = 9;
	
		//removes first 2 articles in the array to make room for a 2 new articles at the end
		testdata_array.splice(2, 2);
		testdata_temp_array.splice(2, 2);
		
		//x or y position
		testdata_temp_y_pos.splice(2, 2);
		testdata_temp_x_pos.splice(2, 2);
		testdata_y_pos.splice(2, 2);
		testdata_x_pos.splice(2, 2);
		
		//etc
		testdata_stoneid.splice(2, 2);
		testdata_clor.splice(2, 2);
		testdata_printdisplay.splice(2, 2);
		testdata_activefunc.splice(2, 2);
	}
	//writes to article 10 of each array
	for (temp_two = s_or_e + 2; temp_two <= s_or_e + 9; temp_two += 1) {
		
		testdata_array[s_or_e] += temp_two - 1 + " " + testdata_array[temp_two] + "<br />";//1
		testdata_temp_array[s_or_e] += temp_two - 1 + " " + testdata_temp_array[temp_two] + "<br />";//2
		
		testdata_temp_y_pos[s_or_e] += temp_two - 1 + " " + testdata_temp_y_pos[temp_two] + "<br />";//3
		testdata_temp_x_pos[s_or_e] += temp_two - 1 + " " + testdata_temp_x_pos[temp_two] + "<br />";//4
		
		testdata_y_pos[s_or_e] += temp_two - 1 + " " + testdata_y_pos[temp_two] + "<br />";
		testdata_x_pos[s_or_e] += temp_two - 1 + " " + testdata_x_pos[temp_two] + "<br />";
		
		testdata_stoneid[s_or_e] += temp_two - 1 + " " + testdata_stoneid[temp_two] + "<br />";
		testdata_clor[s_or_e] += temp_two - 1 + " " + testdata_clor[temp_two] + "<br />";
		testdata_printdisplay[s_or_e] += temp_two - 1 + " " + testdata_printdisplay[temp_two] + "<br />";
		testdata_activefunc[s_or_e] += temp_two - 1 + " " + testdata_activefunc[temp_two] + "<br />";
		temp_two += 1;
	}
	
	//print's to test display's
	document.getElementById(id_sore + "array").innerHTML = testdata_array[s_or_e];
	document.getElementById(id_sore + "temp_array").innerHTML = testdata_temp_array[s_or_e];
	
	document.getElementById(id_sore + "temp_y_pos").innerHTML =  testdata_temp_y_pos[s_or_e];
	document.getElementById(id_sore + "temp_x_pos").innerHTML = testdata_temp_x_pos[s_or_e];
	
	document.getElementById(id_sore + "y_pos").innerHTML = testdata_y_pos[s_or_e];
	document.getElementById(id_sore + "x_pos").innerHTML = testdata_x_pos[s_or_e];
	
	document.getElementById(id_sore + "stoneid").innerHTML = testdata_stoneid[s_or_e];
	document.getElementById(id_sore + "clor").innerHTML = testdata_clor[s_or_e];
	document.getElementById(id_sore + "printdisplay").innerHTML = testdata_printdisplay[s_or_e];
	document.getElementById(id_sore + "functionreach").innerHTML = testdata_activefunc[s_or_e];
	
	//removes 10th array article again to prevent adding endless articles
	testdata_array[s_or_e] = "";
	testdata_temp_array[s_or_e] = "";
		
	//x or y position
	testdata_temp_y_pos[s_or_e] = "";
	testdata_temp_x_pos[s_or_e] = "";
	testdata_y_pos[s_or_e] = "";
	testdata_x_pos[s_or_e] = "";
	
	//etc
	testdata_stoneid[s_or_e] = "";
	testdata_clor[s_or_e] = "";
	testdata_printdisplay[s_or_e] = "";
	testdata_activefunc[s_or_e] = "";
	
	//count 1 up
	testcount += 1;
}
///////////////////////////////////////
//test functions
/////////////////////////////////////

function testdata_execute_gathering() {
	"use strict";
	//reached arrays with x and y values
	testdata_array[testcount] = "positionarray[y_pos][x_pos]" +  positionarray[y_pos][x_pos];
	
	testdata_temp_array[testcount] = "positionarray[temp_y_pos][temp_x_pos]=" + positionarray[temp_y_pos][temp_x_pos];
	
	//temp x and y
	testdata_temp_y_pos[testcount] = "temp_y_pos = " + temp_x_pos;
	testdata_temp_x_pos[testcount] = "temp_x_pos = " + temp_y_pos;
	
	//x and y
	testdata_y_pos[testcount] = "y_pos = " + y_pos;
	testdata_x_pos[testcount] = "x_pos = " + x_pos;
	
	//test stoneid
	testdata_stoneid[testcount] = "stoneid = " + stoneid;
	
	//clor
	testdata_clor[testcount] = "clor= " + clor;
	
	//prints temp printdata
	testdata_printdisplay[testcount] = "printdisplay=" + printdisplay;
}

function testdata_reset_switch() {
	"use strict";
	testdata_activefunc[testcount] += "reset_switch = true <br />";
}

//main functions
function testdata_execute() {
	"use strict";
	testdata_activefunc[testcount] += "execute = true" + "<br />";
}

function testdata_clearmove() {
	"use strict";
	testdata_activefunc[testcount] += "clearmove = true" + "<br />";
}

function testdata_returntodisplay() {
	"use strict";
	testdata_activefunc[testcount] += "return to display = true" + "<br />";
}

function testdata_write_piece() {
	"use strict";
	testdata_activefunc[testcount] += "write_piece = true" + "<br />";
}

function testdata_save_moveinfo() {
	"use strict";
	testdata_activefunc[testcount] += "save_moveinfo= true" + "<br />";
}
function testdata_save_movefalse() {
	"use strict";
	testdata_activefunc[testcount] += "save_moveinfo= false" + "<br />";
}
function testdata_translate_stoneid() {
	"use strict";
	testdata_activefunc[testcount] += "translate_stoneid = true" + "<br />";
}

function testdata_execute_start() {
	"use strict";
	s_or_e = 0;
	testdata_execute_gathering();
	printer_of_testdata();
}

function testdata_execute_end() {
	"use strict";
	s_or_e = 1;
	testdata_execute_gathering();
	printer_of_testdata();
}

//////////////////////////////////
//Supporting functions for execute
//////////////////////////////////

//unselect stone when clicking on it for the second time
function clearmove() {
	"use strict";
	//resets all data
	temp_y_pos = 0;
	temp_x_pos = 0;
	y_pos = 0;
	x_pos = 0;
	stoneid = 0;
	
	//testdata gathering
	testdata_clearmove();
}

//prints data to display in the UI 
function returntodisplay() {
	"use strict";
	//testdata gathering
	testdata_returntodisplay();
	
	document.getElementById("display").innerHTML = printdisplay;
}

//prints data to board in the UI
function write_piece() {
	"use strict";
	//removes old stone and prints new stone to positionarray
	positionarray[temp_y_pos][temp_x_pos] = 0;
	positionarray[y_pos][x_pos] = stoneid;
	
	//testdata gathering
	testdata_write_piece();
	
	//translates stoneid to clor
	translate_stoneid();
	
	//removes stone from the UI
	document.getElementById(row_array[temp_y_pos] + square_array[temp_x_pos]).innerHTML = "";
	
	//prints moved stone to the UI
	document.getElementById(row_array[y_pos] + square_array[x_pos]).innerHTML = clor;
	stoneid = 0;
	
}

//save stoneid and position to prepare for movement
function save_moveinfo() {
	"use strict";
	stoneid = positionarray[y_pos][x_pos];
	temp_y_pos = y_pos;
	temp_x_pos = x_pos;

	//testdata gathering
	testdata_save_moveinfo();
}

//translates stoneid to a visualstyle
function translate_stoneid() {
	"use strict";
	switch (stoneid) {
		
	case 0:
		clor = "";
		break;
	case 1:
		clor = white;
		break;
	case 2:
		clor = whitedam;
		break;
	case 3:
		clor = black;
		break;
	case 4:
		clor = blackdam;
		break;
	}
	//gathers testdata
	testdata_translate_stoneid();
}
function unselect_square() {
	//unselects square
	"use strict";
	document.getElementById(row_array[temp_y_pos] + square_array[temp_x_pos]).style.backgroundColor = "saddlebrown";
}
function select_square() {
	//selects square
	"use strict";
	document.getElementById(row_array[temp_y_pos] + square_array[temp_x_pos]).style.backgroundColor = "brown";
}
//Creates dam's when you reach the other side
function check_dam() {
	"use strict";
	if (stoneid === 1 && y_pos === 10) {
		stoneid = 2;
	} else if (stoneid === 3 && y_pos === 1) {
		stoneid = 4;
	}
}
//////////////////////////////
//execute core of the program
//////////////////////////////
function execute() {
	"use strict";
	//gathers start testdata
	testdata_execute();
	testdata_execute_start();
	
	//tests if the same button is clicked twice
	if (temp_y_pos === y_pos && temp_x_pos === x_pos) {
		
		//removes visuals to selected square
		unselect_square();
		
		//removes data used for selection
		clearmove();
	} else {
		
		//tests if a stone was selected.
		if (stoneid > 0) {
			
			//test if you want to place a stone on your own team's square
			allowedmove();
			
			if (ablemove === 1) {
					//Creates dam's a player reaches the other side
				check_dam();
				
					//move stone in selected square
				write_piece();

					//removes visuals to selected square
				unselect_square();
			} else {
				printdisplay = "You cannot do that move";
				returntodisplay();
			}
			
		} else { //if no stone is selected
			
			//makes sure you can't select an empty square to move
			if (positionarray[y_pos][x_pos] === 0) {
				
				//do nothing functional

				//gather testdata
				testdata_save_movefalse();
			
			} else { //save stoneid and position
				
				//saves data and add's visual
				save_moveinfo();

				//adds visuals to selected square
				select_square();

			}
		}
		printdisplay = positionarray[y_pos][x_pos];
		returntodisplay();
	}
	//gathers end testdata
	testdata_execute_end();
}

/////////////////////////////////////////////////
//series of tests to see if a certaint move can be made
/////////////////////////////////////////////////
	
function allowedmove() {
	"use strict";
	sameteam();
	stonemovetest();
	if (same_t === 0 && approvedmove === 1) {
		ablemove = 1;
	} else {
		ablemove = 0;
	}
}
function stonemovetest() {
	"use strict";
	approvedmove = 0;
	if (positionarray[y_pos][x_pos] === 0) {
		
		switch (stoneid) {
		   
		case 1:
			//tests if a regular white stone can move the way the user wants
			if ((y_pos - 1 === temp_y_pos) && ((x_pos - 1 === temp_x_pos) || (x_pos + 1 === temp_x_pos))) {

				approvedmove = 1;
			} else { //tests if a black stone can be taken backwards
				capture_forward();

				if (ablecapture === 0) {
					capture_backward();
				}

				if (ablecapture === 1) {
					approvedmove = 1;
					removecapturedstone();
				}
			}
			break;

		case 2:

			approvedmove = 1;
			break;

		case 3:
			//tests if a regular black stone can move the way the user wants
			if ((y_pos + 1 === temp_y_pos)  && ((x_pos - 1 ===  temp_x_pos) || (x_pos + 1 === temp_x_pos))) {

				approvedmove = 1;
			} else {//tests if a white stone can be taken backwards
				capture_forward();

				if (ablecapture === 0) {
					capture_backward();
				}

				if (ablecapture === 1) {
					approvedmove = 1;
					removecapturedstone();
				}
			}
			break;

		case 4:

			approvedmove = 1;
			break;

		}
	}
}

//checks if your old selected square hold the same color stone as target square
function sameteam() {
	"use strict";
	if ((stoneid > 0 && stoneid < 3) && (positionarray[y_pos][x_pos] > 0 && positionarray[y_pos][x_pos] < 3)) {
		same_t = 1;
	} else if (stoneid > 2 && positionarray[y_pos][x_pos] > 2) {
		same_t = 1;
	} else {
		same_t = 0;
	}
}

function capture_forward() {
	"use strict";
	ablecapture = 0;
	switch (stoneid) {
			
	case 1:

		//looks if capture is to the lefttop and enemystone is black
		if (y_pos - 2 === temp_y_pos && x_pos + 2 === temp_x_pos) {

			if (positionarray[y_pos - 1][x_pos + 1] === 3 || positionarray[y_pos - 1][x_pos + 1] === 4) {
				ablecapture = 1;
				direction = 0;
			}
		}

		//looks if capture is to the righttop and enemystone is black
		if (y_pos - 2 === temp_y_pos && x_pos - 2 === temp_x_pos) {

			if (positionarray[y_pos - 1][x_pos - 1] === 3 || positionarray[y_pos - 1][x_pos - 1] === 4) {
				ablecapture = 1;
				direction = 1;
			}
		}

		break;

	case 3:

		//looks if capture is to the leftbot and enemystone is white
		if (y_pos + 2 === temp_y_pos && x_pos + 2 ===  temp_x_pos) {

			if (positionarray[y_pos + 1][x_pos + 1] === 1 || positionarray[y_pos + 1][x_pos + 1] === 2) {
				ablecapture = 1;
				direction = 2;

			}
		}

		//looks if capture is to the rightbot and enemystone is white
		if (y_pos + 2 === temp_y_pos && x_pos - 2 === temp_x_pos) {

			if (positionarray[y_pos + 1][x_pos - 1] === 1 || positionarray[y_pos + 1][x_pos - 1] === 2) {
				ablecapture = 1;
				direction = 3;
			}
		}

		break;
			
	}
	
}

function capture_backward() {
	"use strict";
	ablecapture = 0;
	switch (stoneid) {
		
	case 1:

		//looks if capture is to the leftbot and enemystone is black
		if (y_pos + 2 === temp_y_pos && x_pos + 2 ===  temp_x_pos) {

			if (positionarray[y_pos + 1][x_pos + 1] === 3 || positionarray[y_pos + 1][x_pos + 1] === 4) {
				ablecapture = 1;
				direction = 2;

			}
		}

		//looks if capture is to the rightbot and enemystone is black
		if (y_pos + 2 === temp_y_pos && x_pos - 2 === temp_x_pos) {

			if (positionarray[y_pos + 1][x_pos - 1] === 3 || positionarray[y_pos + 1][x_pos - 1] === 4) {
				ablecapture = 1;
				direction = 3;
			}
		}

		break;

	case 3:

		//looks if capture is to the lefttop and enemystone is white
		if (y_pos - 2 === temp_y_pos && x_pos + 2 === temp_x_pos) {

			if (positionarray[y_pos - 1][x_pos + 1] === 1 || positionarray[y_pos - 1][x_pos + 1] === 2) {
				ablecapture = 1;
				direction = 0;
			}
		}

		//looks if capture is to the righttop and enemystone is white
		if (y_pos - 2 === temp_y_pos && x_pos - 2 === temp_x_pos) {

			if (positionarray[y_pos - 1][x_pos - 1] === 1 || positionarray[y_pos - 1][x_pos - 1] === 2) {
				ablecapture = 1;
				direction = 1;
			}
		}

		break;
			
	}
	
}

function removecapturedstone() {
	"use strict";
	switch (direction) {
			
	case 0:
		positionarray[y_pos - 1][x_pos + 1] = 0;
		document.getElementById(row_array[y_pos - 1] + square_array[x_pos + 1]).innerHTML = "";


		break;

	case 1:
		positionarray[y_pos - 1][x_pos - 1] = 0;
		document.getElementById(row_array[y_pos - 1] + square_array[x_pos - 1]).innerHTML = "";

		break;

	case 2:
		positionarray[y_pos + 1][x_pos + 1] = 0;
		document.getElementById(row_array[y_pos + 1] + square_array[x_pos + 1]).innerHTML = "";

		break;

	case 3:
		positionarray[y_pos + 1][x_pos - 1] = 0;
		document.getElementById(row_array[y_pos + 1] + square_array[x_pos - 1]).innerHTML = "";

		break;
				
	}

}


///////////////////////////////////////////////////////////
//translates onclick created events to height and width positions before //sending them to the core of the program.
///////////////////////////////////////

function row_ten___square_one() {
	"use strict";
	y_pos = 10;
	x_pos = 1;
	execute();
}
function row_ten___square_three() {
	"use strict";
	y_pos = 10;
	x_pos = 3;
	execute();
}
function row_ten___square_five() {
	"use strict";
	y_pos = 10;
	x_pos = 5;
	execute();
}
function row_ten___square_seven() {
	"use strict";
	y_pos = 10;
	x_pos = 7;
	execute();
}
function row_ten___square_nine() {
	"use strict";
	y_pos = 10;
	x_pos = 9;
	execute();
}
function row_nine___square_two() {
	"use strict";
	y_pos = 9;
	x_pos = 2;
	execute();
}
function row_nine___square_four() {
	"use strict";
	y_pos = 9;
	x_pos = 4;
	execute();
}
function row_nine___square_six() {
	"use strict";
	y_pos = 9;
	x_pos = 6;
	execute();
}
function row_nine___square_eight() {
	"use strict";
	y_pos = 9;
	x_pos = 8;
	execute();
}
function row_nine___square_ten() {
	"use strict";
	y_pos = 9;
	x_pos = 10;
	execute();
}
function row_eight___square_one() {
	"use strict";
	y_pos = 8;
	x_pos = 1;
	execute();
}
function row_eight___square_three() {
	"use strict";
	y_pos = 8;
	x_pos = 3;
	execute();
}
function row_eight___square_five() {
	"use strict";
	y_pos = 8;
	x_pos = 5;
	execute();
}
function row_eight___square_seven() {
	"use strict";
	y_pos = 8;
	x_pos = 7;
	execute();
}
function row_eight___square_nine() {
	"use strict";
	y_pos = 8;
	x_pos = 9;
	execute();
}
//row 7
function row_seven___square_two() {
	"use strict";
	y_pos = 7;
	x_pos = 2;
	execute();
}
function row_seven___square_four() {
	"use strict";
	y_pos = 7;
	x_pos = 4;
	execute();
}
function row_seven___square_six() {
	"use strict";
	y_pos = 7;
	x_pos = 6;
	execute();
}
function row_seven___square_eight() {
	"use strict";
	y_pos = 7;
	x_pos = 8;
	execute();
}
function row_seven___square_ten() {
	"use strict";
	y_pos = 7;
	x_pos = 10;
	execute();
}
//row 6
function row_six___square_one() {
	"use strict";
	y_pos = 6;
	x_pos = 1;
	execute();
}
function row_six___square_three() {
	"use strict";
	y_pos = 6;
	x_pos = 3;
	execute();
}
function row_six___square_five() {
	"use strict";
	y_pos = 6;
	x_pos = 5;
	execute();
}
function row_six___square_seven() {
	"use strict";
	y_pos = 6;
	x_pos = 7;
	execute();
}
function row_six___square_nine() {
	"use strict";
	y_pos = 6;
	x_pos = 9;
	execute();
}
//row 5
function row_five___square_two() {
	"use strict";
	y_pos = 5;
	x_pos = 2;
	execute();
}
function row_five___square_four() {
	"use strict";
	y_pos = 5;
	x_pos = 4;
	execute();
}
function row_five___square_six() {
	"use strict";
	y_pos = 5;
	x_pos = 6;
	execute();
}
function row_five___square_eight() {
	"use strict";
	y_pos = 5;
	x_pos = 8;
	execute();
}
function row_five___square_ten() {
	"use strict";
	y_pos = 5;
	x_pos = 10;
	execute();
}
//row 4
function row_four___square_one() {
	"use strict";
	y_pos = 4;
	x_pos = 1;
	execute();
}
function row_four___square_three() {
	"use strict";
	y_pos = 4;
	x_pos = 3;
	execute();
}
function row_four___square_five() {
	"use strict";
	y_pos = 4;
	x_pos = 5;
	execute();
}
function row_four___square_seven() {
	"use strict";
	y_pos = 4;
	x_pos = 7;
	execute();
}
function row_four___square_nine() {
	"use strict";
	y_pos = 4;
	x_pos = 9;
	execute();
}
//row 3
function row_three___square_two() {
	"use strict";
	y_pos = 3;
	x_pos = 2;
	execute();
}
function row_three___square_four() {
	"use strict";
	y_pos = 3;
	x_pos = 4;
	execute();
}
function row_three___square_six() {
	"use strict";
	y_pos = 3;
	x_pos = 6;
	execute();
}
function row_three___square_eight() {
	"use strict";
	y_pos = 3;
	x_pos = 8;
	execute();
}
function row_three___square_ten() {
	"use strict";
	y_pos = 3;
	x_pos = 10;
	execute();
}
//row 2
function row_two___square_one() {
	"use strict";
	y_pos = 2;
	x_pos = 1;
	execute();
}
function row_two___square_three() {
	"use strict";
	y_pos = 2;
	x_pos = 3;
	execute();
}
function row_two___square_five() {
	"use strict";
	y_pos = 2;
	x_pos = 5;
	execute();
}
function row_two___square_seven() {
	"use strict";
	y_pos = 2;
	x_pos = 7;
	execute();
}
function row_two___square_nine() {
	"use strict";
	y_pos = 2;
	x_pos = 9;
	execute();
}
function row_one___square_two() {
	"use strict";
	y_pos = 1;
	x_pos = 2;
	execute();
}
//row 1
function row_one___square_four() {
	"use strict";
	y_pos = 1;
	x_pos = 4;
	execute();
}
function row_one___square_six() {
	"use strict";
	y_pos = 1;
	x_pos = 6;
	execute();
}
function row_one___square_eight() {
	"use strict";
	y_pos = 1;
	x_pos = 8;
	execute();
}
function row_one___square_ten() {
	"use strict";
	y_pos = 1;
	x_pos = 10;
	execute();
}
//////////////////////////////
//reset functions
////////////////////////////

//supports the resets
function reset_switch() {
	"use strict";
	switch (y_pos) {
			
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


function reset() {
	"use strict";
	if (stoneid > 0) {
		unselect_square();
	}
	printdisplay = "";
	returntodisplay();
	temp_two = 2;
	clearmove();
	
	
	for (y_pos = 1; y_pos < 11; y_pos += 1) {
		
		reset_switch();
		
		for (x_pos = temp_two; x_pos < 11; x_pos += 1) {
			temp_one = row_array[y_pos] + square_array[x_pos];
			positionarray[y_pos][x_pos] = stoneid;
			
			document.getElementById(temp_one).innerHTML = clor;
			//document.getElementById(temp_one).innerHTML = stoneid;
			
			x_pos += 1;
		}
		//switches temp_two between 1 and 2
		switch (temp_two) {
		
		case 1:
			temp_two = 2;
			break;
		case 2:
			temp_two = 1;
			break;
		}
	}
	stoneid = 0;
	clor = "";
}
function singleplayer() {
	"use strict";
	reset();
}

function multiplayer() {
	"use strict";
	reset();
}