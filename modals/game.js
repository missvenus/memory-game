var memory_array = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8','9','9','10','10','11','11','12','12'];
Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}


exports.generateBoard = function(callback)
{
var memory_array = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8','9','9','10','10','11','11','12','12'];
var tiles_flipped = 0;
    var output = '';
    memory_array.memory_tile_shuffle();
    for(var i = 0; i < memory_array.length; i++){
        output += '<div class="tile" id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
    }
callback(null,output);
}