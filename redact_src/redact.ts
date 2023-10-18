import { replaceGender } from './gender';
import { redactContacts } from './contacts';
import { redactOther } from './other';

export function redact(cv:string, name:string)
{
	cv = redactContacts(cv);
	cv = replaceGender(cv);
	cv = redactOther(cv, name);

	return (cv);
}