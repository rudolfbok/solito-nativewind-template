import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'solito/navigation';

export function TabThreeScreen() {
	const router = useRouter();
	return (
		<View className="flex-1 items-center justify-center gap-4">
			<Text className="font-semibold">This is tab three screen</Text>
			<Pressable onPress={() => router.back()}>
				<Text className="font-semibold text-blue-600">Go home</Text>
			</Pressable>
		</View>
	);
}
