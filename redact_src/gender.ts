import mfn from './mfn.json';

export function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function findAndReplace(word:string)
{
	let find:string = word.toLocaleLowerCase();
	let returnValue:string = find;

	mfn.forEach(function (value){
		if (find == value.m || find == value.f)
			returnValue = value.n;
	});

	if (word == capitalizeFirstLetter(word))
		returnValue = capitalizeFirstLetter(returnValue);
	return(returnValue);
}

export function replaceGender(cv:string)
{
	let i = 0;
	while (i < cv.length && !cv.charAt(i).match(/[a-z]/i))
		i++;
	let word = cv[i++];
	while (i < cv.length)
	{
		if (cv.charAt(i).match(/[a-z]/i))
			word += cv.charAt(i);
		else
		{
			let replaceWord = findAndReplace(word);
			if (word != replaceWord)
			{
				let fix = 0;
				if (i > 3 && cv.charAt(i - word.length - 1) == "n"
					&& !(replaceWord.charAt(0).match(/aeiou/i)))
					fix = 3;
				let edit = cv.substring(0, i - word.length - fix);
				if (fix)
					cv = edit + " " + replaceWord + cv.substring(i);
				else
					cv = edit + replaceWord + cv.substring(i);
				i += replaceWord.length + 1;
			}
			while (i < cv.length && !cv.charAt(i).match(/[a-z]/i))
				i++;
			word = cv.charAt(i);
		}
		i++;
	}
	
	return(cv);
}
