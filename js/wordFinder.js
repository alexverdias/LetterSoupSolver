class WordStructure{
	constructor(letter)
	{
		this.Next = [];
		this.Previous = "";
		this.Letter = letter;
		this.InitialRow = 0;
		this.InitialCol = 0;
	}

	Add(letter){
		let index = this.Next.findIndex(next=>next.Letter == letter);
		if(index==-1)
		{
			let newLetter=new WordStructure(letter);
			newLetter.Previous = this;
			this.Next.push(newLetter);
			this.Next.sort((a,b)=>a.Letter - b.letter);
			return newLetter;
		}
		return this.Next[index];
	}
}

class SoupManager {
	constructor(words,soup)
	{
		this.WordStructures = [];
		this.Soup = soup;
		this.DirectionEnum = {
			Up:1,
			UpRight:2,
			Right:3,
			DownRight:4,
			Down:5,
			DownLeft:6,
			Left:7,
			UpLeft:8,
			None:9
		}
		words.forEach(word => {
			let index = this.WordStructures.findIndex(w=>w.Letter == word[0]);
			let currentStructure = "";
			if(index > -1)
			{
				currentStructure = this.WordStructures[index];
			}
			else
			{
				currentStructure = new WordStructure(word[0]);
				this.WordStructures.push(currentStructure);
			}
			for (let i = 1; i < word.length; i++) {
				currentStructure = currentStructure.Add(word[i]);
			}
		});
	}

	findWords(){
		for (let j = 0; j < this.Soup.length; j++) {
			for (let i = 0; i < this.Soup[j].length; i++) {
				for (let k = 0; k < this.WordStructures.length; k++) {
					this.check(this.WordStructures[k],j,i,this.DirectionEnum.None);
				}
			}
		}
	}

	check(current,row,column,direction){
		if(row < 0 || column < 0 || row == this.Soup.length || column == this.Soup[0].length)
			return;
		if(this.Soup[row][column] == current.Letter)
		{
			current.InitialCol = column;
			current.InitialRow = row;
			if(current.Next.length)
			{
				for (let i = 0; i < current.Next.length; i++) {
					switch(direction)
					{
						case this.DirectionEnum.None:
							this.check(current.Next[i],row,column+1,this.DirectionEnum.Right);
							this.check(current.Next[i],row+1,column+1,this.DirectionEnum.DownRight);
							this.check(current.Next[i],row+1,column,this.DirectionEnum.Down);
							this.check(current.Next[i],row+1,column-1,this.DirectionEnum.DownLeft);
							this.check(current.Next[i],row,column-1,this.DirectionEnum.Left);
							this.check(current.Next[i],row-1,column-1,this.DirectionEnum.UpLeft);
							this.check(current.Next[i],row-1,column,this.DirectionEnum.Up);
							this.check(current.Next[i],row-1,column+1,this.DirectionEnum.UpRight);
							break;
						case this.DirectionEnum.Right:
							this.check(current.Next[i],row,column+1,this.DirectionEnum.Right);
							break;
						case this.DirectionEnum.DownRight:
							this.check(current.Next[i],row+1,column+1,this.DirectionEnum.DownRight);
							break;
						case this.DirectionEnum.Down:
							this.check(current.Next[i],row+1,column,this.DirectionEnum.Down);
							break;
						case this.DirectionEnum.DownLeft:
							this.check(current.Next[i],row+1,column-1,this.DirectionEnum.DownLeft);
							break;
						case this.DirectionEnum.Left:
							this.check(current.Next[i],row,column-1,this.DirectionEnum.Left);
							break;
						case this.DirectionEnum.UpLeft:
							this.check(current.Next[i],row-1,column-1,this.DirectionEnum.UpLeft);
							break;
						case this.DirectionEnum.Up:
							this.check(current.Next[i],row-1,column,this.DirectionEnum.Up);
							break;
						case this.DirectionEnum.UpRight:
							this.check(current.Next[i],row-1,column+1,this.DirectionEnum.UpRight);
							break;

					}
				}
			}
			else
			{
				this.showWord(current);
			}			
		}
	}

	showWord(current){
		let wordFound = current.Letter;
		let tmp = current;
		this.addHighLight(current);
		while(tmp.Previous){
			wordFound = tmp.Previous.Letter + wordFound;
			this.addHighLight(tmp);
			tmp = tmp.Previous;
		}
		this.addHighLight(tmp);

		console.log(wordFound);
	}

	addHighLight(current){
		let id="letter"+(current.InitialRow<10?"0":"")+current.InitialRow.toString()+(current.InitialCol<10?"0":"")+current.InitialCol.toString();
		document
		.getElementById(id)
		.classList
		.add("highlight");
	}
}