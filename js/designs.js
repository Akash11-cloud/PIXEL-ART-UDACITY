var table = document.getElementById("pixelCanvas");
var submit = document.getElementById("final");

//SUBMIT BUTTON
submit.addEventListener('click', function (e) {
    e.preventDefault();
    makeGrid();
});

// FUNCTION TO CALL GRID
function makeGrid() {

    table.innerHTML = '';
  
    var height = document.getElementById("inputHeight").value;
	var width = document.getElementById("inputWidth").value;
	
	var color = document.getElementById("colorPicker");
    var addColor = function (col) {
    	
        col.addEventListener('click', function () {
            col.style.backgroundColor = color.value;
        });
    };
	//TABLE
    for (var i = 0; i < height; i++) {
        var row = table.insertRow(i);
        for (var j = 0; j < width; j++) {
            var col = row.insertCell(j);
            col.addEventListener('click', addColor(col));
        }
    }
}
