import {replace_gender} from './gender/gender';

export function redact(cv:string, name:string)
{
	let words:string[] = cv.split(" ");

	words.forEach(function (value, index) {
		words[index] = replace_gender(value);
	});

	return (words.join(" "));
}