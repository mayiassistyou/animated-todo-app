import React from 'react';
import { useTheme, themeTools, useColorModeValue, Box, HStack, Text } from 'native-base';
import { Pressable } from 'react-native';
import AnimatedCheckbox from 'react-native-checkbox-reanimated';
import AnimatedTaskLabel from './animated-task-label';

type Props = {
    isDone: boolean;
    onToggleCheckbox?: () => void;
}

export default function TaskItem({isDone, onToggleCheckbox}: Props) {
    const theme = useTheme();
    const highlightColor = themeTools.getColor(theme, useColorModeValue(
        'blue.500',
        'blue.400'
    ));

    const boxStroke = themeTools.getColor(theme, useColorModeValue(
        'muted.300',
        'muted.500'
    ));

    const checkmarkColor = themeTools.getColor(theme, useColorModeValue(
        'white',
        'white'
    ));

    const activeTextColor = themeTools.getColor(theme, useColorModeValue(
        'darkText',
        'lightText'
    ));

    const doneTextColor = themeTools.getColor(theme, useColorModeValue(
        'muted.400',
        'muted.600'
    ));

    return(
        <HStack>
            <Box width={30} height={30} mr={2}>
                <Pressable onPress={onToggleCheckbox}>
                    <AnimatedCheckbox 
                        highlightColor={highlightColor} 
                        checkmarkColor={checkmarkColor}
                        boxOutlineColor={boxStroke}
                        checked={isDone}
                    />
                </Pressable>
            </Box>
            <AnimatedTaskLabel textColor={activeTextColor} inactiveTextColor={doneTextColor} strikethrough={isDone} >
                task item
            </AnimatedTaskLabel>
        </HStack>
    )
}