import {Box, Flex, Avatar, Text, Image } from "@chakra-ui/react";

interface CitiesCardProps {
    cityImg: string;
    cityName: string;
    countryName: string;
    iconCountry: string;
    alt: string;
}

export function CitiesCard ({cityImg, cityName, countryName, iconCountry, alt }: CitiesCardProps) { 


    return (

        <Box  
            width={256} 
            height={279} 
            border="1px solid #D4D4D4" 
            borderRadius="8"
        >
            
            <Image objectFit="cover" width="100%" height="70%" src={cityImg} alt={alt}/>
                                

            <Flex justify="space-between" p="4">
                              
                <Box> 
                    <Text fontWeight="bold">{cityName}</Text>
                    <Text fontWeight="normal">{countryName}</Text>
                </Box>

                <Box>
                    <Avatar src={iconCountry} />
                </Box>
            </Flex>

        </Box>
                   



    )


}