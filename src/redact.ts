import { replaceGender } from './gender/gender';
import { capitalizeFirstLetter } from './gender/gender';

export function redact(cv:string, name:string)
{
	let words:string[] = cv.split(" ");

	words.forEach(function (value, index) {
		//checks and replaces gendered words
		words[index] = replaceGender(value);
		if (index > 0 && words[index - 1].toLocaleLowerCase() == "an" && words[index].charAt(0).match(/[aeiou]/) == null)
		{
			words[index - 1] == capitalizeFirstLetter(words[index - 1]) ?
				words[index - 1] = "A" : words[index - 1] = "a";
		}
	});

	return (words.join(" "));
}