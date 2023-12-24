import { UserSchema } from 'entities/User';
import { CounterScheme } from 'entities/counter';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
	counter: CounterScheme;
	user: UserSchema;
	loginForm?: LoginSchema;
}
