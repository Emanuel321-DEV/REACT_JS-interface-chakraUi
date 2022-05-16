import { Flex, Stack, Heading, Text, Image, Box } from "@chakra-ui/react";
import { ReactElement } from "react";
import { CitiesCard } from "./CitiesCard";

interface PageContinentProps {
    mainImage: string; 
    qtdCountry: number;
    qtdLanguages: number;
    qtdCities: number;
    description: string;
    nameContinent: string;
    children: ReactElement;
}


export function Continent ({ mainImage, qtdCountry, qtdLanguages, qtdCities, description, nameContinent, children } : PageContinentProps) {

    return (
        <>
            <Box>
            
                <Image objectFit="cover" width="100%" maxHeight={["150", "500"]} src={mainImage} alt="Imagem de um continente" />
                
                <Heading 
                    position="absolute" 
                    top={["150", "450"]} 
                    color="white"
                    ml={["10", "20"]}
                    >{nameContinent}</Heading>
                    


            </Box>
            
            <Flex 
                m={8} 
                direction={["column", "row"]} 
                width="90%" 
                gap="10" 
                alignItems="center"
                padding={["10","20"]}
            >

                <Text display="block" width="100%">
                    {description}
                </Text>

                

                <Flex w="100%"  justify="center">

                    <Stack spacing="3" direction="row">
                        <Heading fontSize={25}>  <Text color="#FFBA08">{qtdCountry}</Text> Países</Heading>
                   
                        <Heading fontSize={25}><Text color="#FFBA08">{qtdLanguages}</Text> Línguas</Heading>

                        <Heading fontSize={25}><Text color="#FFBA08">{qtdCities}</Text> Cidades</Heading>         
                    </Stack>  
                        
                </Flex>


            
            </Flex>

            {children} 
        
        </>

    )


}