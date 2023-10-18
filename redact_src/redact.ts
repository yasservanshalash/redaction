import { replaceGender } from './gender';
import { redactContacts } from './contacts';
import { redactOther } from './other';
import { redactMaritalStatus } from '../src/maritalStatus';
import { redactNationality } from '../src/nationality';

export function redact(cv:string, name:string)
{
	cv = redactContacts(cv);
	cv = replaceGender(cv);
	cv = redactOther(cv, name);
	cv = redactMaritalStatus(cv);
	cv = redactNationality(cv);

	return (cv);
}
