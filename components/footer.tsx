import { Flex, Text } from '@chakra-ui/react';

export const Footer = () => {
	return (
		<Flex bgColor='#eee' justify='space-evenly' padding={4} mt={20}>
			<Text fontWeight='bold'></Text>Parkway Kitchen
			<Text marginX={2}>670 Highway 7 East</Text>
			<Text marginX={2}>+1 (905) 889 - 1833</Text>
		</Flex>
	);
};
