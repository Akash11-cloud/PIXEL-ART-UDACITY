var table = document.getElementById("pixelCanvas");
var submit = document.getElementById("final");

//adding event on submit value
sizePicker.addEventListener('click', function (e) {
    e.preventDefault();
    makeGrid();
});

// grid function
function makeGrid() {

    table.innerHTML = '';
  //storing height and width of grid
    var height = document.getElementById("inputHeight").value;
	var width = document.getElementById("inputWidth").value;
	//adding color to column
    var color = document.getElementById("colorPicker");
    //when the  col is clicked then it changes color store that value in it
    var addColor = function (col) {
    	
        col.addEventListener('click', function () {
            col.style.backgroundColor = color.value;
        });
    };
	//looping over each row
    for (var i = 0; i < height; i++) {
        var row = table.insertRow(i);
        //looping over each coloumn
        for (var j = 0; j < width; j++) {
            var col = row.insertCell(j);
            addColor(col);
        }
    }
}
