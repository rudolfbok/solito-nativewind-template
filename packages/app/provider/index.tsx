import { SafeArea } from 'app/provider/safe-area';

export function Provider({ children }: { children: any }) {
	return <SafeArea>{children}</SafeArea>;
}
