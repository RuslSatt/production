import { UserSchema } from 'entities/User';
import { CounterScheme } from 'entities/counter';

export interface StateSchema {
	counter: CounterScheme;
	user: UserSchema;
}
