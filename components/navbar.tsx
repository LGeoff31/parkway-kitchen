import { Flex, Text } from '@chakra-ui/react';

export const Navbar = () => {
	return (
		<Flex justify='space-between' bgColor='#d9effc' padding={4} fontWeight='bold'>
			<Text color='#000' fontSize='xl' ml={6}>
				Parkway Kitchen
			</Text>
			<Flex color='#000' mr={6}>
				<Text marginX={2}>670 Highway 7 East</Text>
				<Text marginX={2}>+1 (905) 889 - 1833</Text>
			</Flex>
		</Flex>
	);
};
