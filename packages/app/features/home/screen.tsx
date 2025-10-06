import { Text, View } from 'react-native';
import { Link } from 'solito/link';

export function HomeScreen() {
	return (
		<View className="flex-1 items-center justify-center p-5">
			<Text className="mb-3 text-center text-2xl font-bold">
				Welcome to Solito + Nativewind monorepo! 🚀
			</Text>
			<Text className="mb-6 text-center text-base text-gray-600">
				This component works on web and on native!
			</Text>
			<Link href="/two">
				<Text className="text-lg font-semibold text-blue-600">
					Solito link example
				</Text>
			</Link>
		</View>
	);
}
