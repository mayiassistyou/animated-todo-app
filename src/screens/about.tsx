import React from 'react';
import { Box, Icon, Image, ScrollView, Text, useColorModeValue, VStack } from 'native-base';
import AnimatedColorBox from '../components/animated-color-box';
import Masthead from '../components/masthead';
import Navbar from '../components/navbar';
import LinkButton from '../components/link-button';
import Feather from '@expo/vector-icons/build/Feather';

const AboutScreen = () => {
    return(
        <AnimatedColorBox
            flex={1}
            w="full"
            bg={useColorModeValue('warmGray.50', 'warmGray.900')}
        >
            <Masthead title="About me" image={require('../assets/masthead.png')}>
                <Navbar />
            </Masthead>
            <ScrollView
                bg={useColorModeValue('warmGray.50', 'primary.900')}
                borderTopLeftRadius="20px"
                borderTopRightRadius="20px"
                mt="-20px"
                pt="30px"
                p={4}
            >
                <VStack flex={1} space={4}>
                    <Box alignItems="center">
                        <Image 
                            source={require('../assets/profile-image.png')} 
                            alt="avatar"
                            borderRadius="full"
                            resizeMode="cover"
                            w={120}
                            h={120}
                        />
                    <Text fontSize="lg">Le Nhat Phu</Text>
                    </Box>
                    <LinkButton
                        bg={useColorModeValue('blue.500', 'darkBlue.600')}
                        size="lg"
                        borderRadius="full"
                        href="https://www.facebook.com/yammay198/"
                        leftIcon={
                            <Icon as={Feather} name="facebook" size="sm" opacity={0.5} />
                        }
                    >
                        Facebook
                    </LinkButton>
                    <LinkButton
                        bg={useColorModeValue('blue.300', 'blue.400')}
                        size="lg"
                        borderRadius="full"
                        href="https://twitter.com/yammay1_"
                        leftIcon={
                            <Icon as={Feather} name="twitter" size="sm" opacity={0.5} />
                        }
                    >
                        Twitter
                    </LinkButton>
                    <LinkButton
                        bg={useColorModeValue('blue.900', 'darkBlue.800')}
                        size="lg"
                        borderRadius="full"
                        href="https://github.com/mayiassistyou"
                        leftIcon={
                            <Icon as={Feather} name="github" size="sm" opacity={0.5} />
                        }
                    >
                        Github
                    </LinkButton>
                </VStack>
            </ScrollView>
        </AnimatedColorBox>
    )
}

export default AboutScreen;