import { Box } from '@chakra-ui/react'
import  {Image}  from "@chakra-ui/react";

export function Header(){

    return (
        <Box bg="color.headings_and_text" w="100%" h="12"  p="3" align="center" >
                <Image
                    src="./images/logo.svg"
                    height={30}
                    alt="sdasdad"
                /> 
        </Box>
    )

}