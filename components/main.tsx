import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Footer } from "./footer";
import { Information } from "./information";
import { Navbar } from "./navbar";

export const Main = () => {
  return (
    <Box bgColor="#fff" color="#000">
      <Box>
        <Navbar />
        <Box margin={8}>
          <Heading textAlign="center">Parkway Kitchen</Heading>
          <Text textAlign="center" fontSize="lg">
            Cantonese & Szechuan Style | 名牌外賣快餐店
          </Text>
        </Box>
        <Flex justify="center">
          <Information />
          <Image h="420px" src="/images/parkway-kitchen.jpeg" alt="front" />
        </Flex>
      </Box>

      <div className="mapouter">
        <iframe
          width="100%"
          height="100%"
          src="https://maps.google.com/maps?q=670%20Highway%207%20East&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>

      <Footer />
    </Box>
  );
};
