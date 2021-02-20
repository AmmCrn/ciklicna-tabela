let Spiral = {
  calculateTable: function(width,height){
  	let table = [];

    // turn table into matrix
  	for(let i = 0; i < height; i++) table[i] = [];

    // variables for moving through table with while loop
  	let x = width-1; let y = height-1; let num = 1; let path = 'left';
  	let maxX = width-1; let minX = 0; let maxY = height-2; let minY = 0;
    // if the table is entirely one column
  	if (x <= minX) {path = 'up'; minX++;}

  	while(num != width*height+1){

      // set table value at current position to current while loop cycle
  		table[y][x] = num;

      // movement
  		switch(path){
  			case 'left':
  				x--;
  				if (x <= minX) {path = 'up'; minX++;}
  				break;
  			case 'right':
  				x++;
  				if (x >= maxX) {path = 'down'; maxX--}
  				break;
  			case 'up':
  				y--;
  				if (y <= minY) {path = 'right'; minY++}
  				break;
  			case 'down':
  				y++;
  				if (y >= maxY) {path = 'left';maxY--}
  				break;
  		}

  		num++;
  	}

    return table;
  },
};

export default Spiral;
