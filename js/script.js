name = prompt('Enter your name: ', 'Player');
document.getElementById('name').textContent = name;

array1 = [
	"img\\diamonds.png",
	"img\\jack-of-diamonds.png",
	"img\\queen-of-diamonds.png",
	"img\\king-of-diamonds.png",
	"img\\diamonds.png",
	"img\\6-of-diamonds.png",
	"img\\7-of-diamonds.png",
	"img\\8-of-diamonds.png",
	"img\\9-of-diamonds.png",
	"img\\10-of-diamonds.png",
	"img\\ace-of-diamonds.png"
]

array2 = [
	"img\\clubs.png",
	"img\\jack-of-clubs.png",
	"img\\queen-of-clubs.png",
	"img\\king-of-clubs.png",
	"img\\clubs.png",
	"img\\6-of-clubs.png",
	"img\\7-of-clubs.png",
	"img\\8-of-clubs.png",
	"img\\9-of-clubs.png",
	"img\\10-of-clubs.png",
	"img\\ace-of-clubs.png"
]

raund = 0;

document.getElementById('img1').src = array1[0];
document.getElementById('img2').src = array2[0];

const button = document.querySelector('#button');
button.addEventListener('click',function()
{
	if(document.getElementById('button').textContent != "Reload")
	{
		while(true)
		{
			var numb1 = Math.floor(Math.random() * array1.length);
			if(numb1 != 0 && numb1 != 4)
				break;
		}
		while(true)
		{
			var numb2 = Math.floor(Math.random() * array2.length);
			if(numb2 != 0 && numb2 != 4)
				break;
		}

		document.getElementById('img1').src = array1[numb1];
		document.getElementById('img2').src = array2[numb2];

		var score1 = Number(document.getElementById('pScore1').textContent);
		var score2 = Number(document.getElementById('pScore2').textContent);

		score1 += numb1 + 1;
		score2 += numb2 + 1;
		
		document.getElementById('pScore1').textContent = score1;
		document.getElementById('pScore2').textContent = score2;
		
		raund++;

		if(raund >= 3)
		{
			if(score1 > score2)
			{
				document.getElementById('pAnswer').textContent = 'Winner: ' + name;
				document.getElementById('button').textContent = "Reload";
			}
			else if(score1 < score2)
			{
				document.getElementById('pAnswer').textContent = 'Winner: Computer';
				document.getElementById('button').textContent = "Reload";
			}
			else if(score1 == score2)
			{
				document.getElementById('pAnswer').textContent = 'Winner: Draw';
				document.getElementById('button').textContent = "Reload";
			}
		}
		
	}
	else
	{
		document.getElementById('button').textContent = "Generate";
		document.getElementById('pScore1').textContent = 0;
		document.getElementById('pScore2').textContent = 0;
		document.getElementById('img1').src = array1[0];
		document.getElementById('img2').src = array2[0];
		raund = 0;
		document.getElementById('pAnswer').textContent = 'Winner: (In round)';
	}
});