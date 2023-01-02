import { Box, Text } from '@chakra-ui/react';

export const Information = () => {
	return (
		<Box bgColor='#fff' color='#000'>
			<Box margin={4} padding={4} bgColor='#eee' borderRadius='8px'>
				<Text fontSize='lg' fontWeight='bold' mb={2}>
					Opening hours
				</Text>
				<Text>
					<Text as='span' fontWeight='semibold'>
						Monday
					</Text>
					: Closed
				</Text>
				<Text>
					<Text as='span' fontWeight='semibold'>
						Tuesday
					</Text>
					: 11am - 8:30pm
				</Text>
				<Text>
					<Text as='span' fontWeight='semibold'>
						Wednesday
					</Text>
					: 11am - 8:30pm
				</Text>
				<Text>
					<Text as='span' fontWeight='semibold'>
						Thursday
					</Text>
					: 11am - 8:30pm
				</Text>
				<Text>
					<Text as='span' fontWeight='semibold'>
						Friday
					</Text>
					: 11am - 8:30pm
				</Text>
				<Text>
					<Text as='span' fontWeight='semibold'>
						Saturday
					</Text>
					: 11am - 8:30pm
				</Text>
				<Text>
					<Text as='span' fontWeight='semibold'>
						Sunday
					</Text>
					: 11am - 8:30pm
				</Text>
			</Box>
			<Box margin={4} padding={4} bgColor='#eee' borderRadius='8px'>
				<Text fontSize='lg' fontWeight='bold' mb={2}>
					Information
				</Text>
				<Text>
					<Text as='span' fontWeight='semibold'>
						Business Number
					</Text>
					: +1 (905) 889 - 1833
				</Text>
				<Text>
					<Text as='span' fontWeight='semibold'>
						Cell Number
					</Text>
					: +1 (416) 669 - 5138
				</Text>
				<Text>
					<Text as='span' fontWeight='semibold'>
						Address
					</Text>
					: 670 highway 7 East, Richmond Hill L4B 3P2
				</Text>
			</Box>
		</Box>
	);
};
