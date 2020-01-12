
document.addEventListener("DOMContentLoaded", function() {
  const soup =[
	['O',	'I',	'N',	'W',	'P',	'R',	'V',	'H',	'E',	'J',	'G',	'N',	'H',	'H',	'O',	'K',	'A',	'W'],
['D',	'E',	'S',	'C',	'A',	'S',	'E',	'Z',	'W',	'N',	'D',	'F',	'P',	'I',	'F',	'B',	'U',	'P'],
['V',	'M',	'V',	'L',	'U',	'Q',	'V',	'D',	'E',	'M',	'A',	'N',	'D',	'A',	'D',	'A',	'R',	'I'],
['S',	'G',	'S',	'W',	'J',	'R',	'B',	'E',	'E',	'H',	'S',	'E',	'Z',	'C',	'N',	'K',	'A',	'V'],
['I',	'O',	'M',	'T',	'K',	'S',	'V',	'M',	'M',	'P',	'M',	'T',	'Z',	'B',	'Y',	'R',	'H',	'F'],
['G',	'U',	'X',	'M',	'A',	'O',	'H',	'A',	'W',	'J',	'X',	'U',	'Z',	'R',	'P',	'R',	'J',	'F'],
['B',	'S',	'D',	'B',	'E',	'B',	'J',	'N',	'D',	'K',	'C',	'O',	'Y',	'E',	'E',	'T',	'P',	'Q'],
['Y',	'G',	'S',	'S',	'K',	'N',	'L',	'D',	'G',	'C',	'O',	'N',	'S',	'T',	'A',	'N',	'T',	'E'],
['Z',	'I',	'V',	'U',	'X',	'Y',	'H',	'A',	'N',	'O',	'O',	'O',	'L',	'I',	'A',	'O',	'C',	'H'],
['L',	'N',	'P',	'R',	'K',	'J',	'N',	'Y',	'F',	'M',	'C',	'S',	'Z',	'P',	'N',	'R',	'A',	'M'],
['Y',	'F',	'S',	'G',	'W',	'J',	'K',	'L',	'X',	'P',	'Q',	'A',	'P',	'R',	'R',	'M',	'K',	'B'],
['T',	'E',	'P',	'O',	'K',	'B',	'S',	'Y',	'D',	'L',	'J',	'U',	'W',	'V',	'S',	'A',	'L',	'X'],
['M',	'R',	'D',	'P',	'E',	'F',	'X',	'F',	'P',	'E',	'C',	'A',	'I',	'C',	'J',	'L',	'C',	'A'],
['S',	'I',	'L',	'N',	'N',	'S',	'H',	'K',	'B',	'M',	'K',	'E',	'A',	'X',	'V',	'E',	'J',	'Z'],
['N',	'O',	'X',	'G',	'P',	'C',	'E',	'U',	'M',	'E',	'Z',	'Q',	'W',	'A',	'H',	'S',	'L',	'J'],
['V',	'R',	'O',	'I',	'A',	'R',	'F',	'D',	'N',	'N',	'N',	'D',	'G',	'U',	'B',	'J',	'Y',	'D'],
['D',	'E',	'G',	'O',	'P',	'C',	'Q',	'H',	'L',	'T',	'H',	'N',	'Z',	'L',	'N',	'Y',	'I',	'J'],
['T',	'S',	'U',	'S',	'T',	'I',	'T',	'U',	'T',	'O',	'T',	'F',	'L',	'O',	'P',	'T',	'O',	'J']

	];

	const words = [
		'DEMANDADA',
		'DEMANDA',
		'DESEOS',
		'CONSTANTE',
		'COMPLEMENTO',
		'ESCASEZ',
		'TABLA',
		'CURVA',
		'NORMALES',
		'SUSTITUTO',
		'INFERIORES'
	];

	console.log(words);

	var style = document.createElement('style');
	style.innerHTML =
		'.wrapper {' +
			'display: grid;' +
			'grid-template-columns: repeat('+soup[0].length+',50px);' +		
			'justify-items: center;'+
  			'align-items: center;'+
		'}';
	//repeat(2, 400px)
	// Get the first script tag
	var ref = document.querySelector('script');

	// Insert our new styles before the first script tag
	ref.parentNode.insertBefore(style, ref);

	var divs = "";
	for (var j = 0; j < soup.length; j++) {
		for (var i = 0; i < soup[j].length; i++) {
			divs=divs+"<div id='letter"+(j<10?"0":"")+ j.toString()+(i<10?"0":"")+i.toString()+"'>"+soup[j][i]+"</div>";
		}
	}

	var grid=document.getElementById("Grid");
	grid.innerHTML = divs;
		


	var soupSolver = new SoupManager(words,soup);
	soupSolver.findWords();
});
