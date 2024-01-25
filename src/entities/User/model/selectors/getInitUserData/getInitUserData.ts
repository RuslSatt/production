import { StateSchema } from 'app/providers/StoreProvider';

export const getInitUserData = (state: StateSchema) => state.user._init;
