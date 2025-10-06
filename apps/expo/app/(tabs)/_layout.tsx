import { Tabs } from 'expo-router';
import { Home, Search, User } from 'lucide-react-native';

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={
				{
					// tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				}
			}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					tabBarIcon: () => <Home />,
				}}
			/>
			<Tabs.Screen
				name="two"
				options={{
					title: 'Tab Two',
					tabBarIcon: () => <Search />,
				}}
			/>
			<Tabs.Screen
				name="three"
				options={{
					title: 'Tab Three',
					tabBarIcon: () => <User />,
				}}
			/>
		</Tabs>
	);
}
