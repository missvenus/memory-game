var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
var count = 0;

function memoryFlipTile(tile,val){
	
	if(tile.innerHTML == ""){
        count += 1;
	if  (memory_values.length < 2){
		
		tile.style.background = '#FFF';
		tile.innerHTML = "<img src='images/"+val+".jpg' alt='Smileyface' height='70' width='70'>";
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} 
		else if(memory_values.length == 1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if(memory_values[0] == memory_values[1]){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            	memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == 24){

					var result = count < 40 ? 'Well Done' : 'Try harder';
					document.getElementById('result').innerHTML= result;
					document.getElementById('memory_board').innerHTML = "<a class='button turquoise' href='/'>New Game</a>";
				}
			} else {
				function flip2Back(){
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
				    tile_1.style.background = '#85ADFF';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = '#85ADFF';
            	    tile_2.innerHTML = "";
				    // Clear both arrays
				    memory_values = [];
            	    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 700);
		      }
	    }
	}
  }
	document.getElementById('count').innerHTML= count;
}


//window.location=href