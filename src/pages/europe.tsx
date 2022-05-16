import { Flex, Heading, Stack } from "@chakra-ui/react";
import { CitiesCard } from "../components/CitiesCard";
import { Continent } from "../components/Continent";
import { Header } from "../components/Header";

export default function EuropeContinent (){

    return (
        <>
            <Header/>
            <Continent 
                mainImage='./images/continents/europe/logo-europe.jpg' 
                qtdCountry={50} 
                qtdLanguages={24} 
                qtdCities={50}  
                description="A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste"
                nameContinent="Europa"
                > 
                    
                    <Flex
                        flex-direction={["column","row"]} 
                        flexWrap="wrap"
                        alignItems="center"
                        width="90%"
                        justify="center"
                        py="5"
                        gap="8"
                        mx="auto"
                    > 
                            


                        <CitiesCard cityImg='./images/continents/europe/cities/amsterda.jpg' cityName="Amsterdã" alt="Imagem Amsterdã" countryName="Holanda" iconCountry='./images/continents/europe/icons/holanda.png' />
                                
                        <CitiesCard cityImg='./images/continents/europe/cities/london.jpg' cityName="Londres" alt="Imagem Londres" countryName="Reino Unido" iconCountry='./images/continents/europe/icons/united-kingdom.png' /> 

                        <CitiesCard cityImg='./images/continents/europe/cities/paris.jpg' cityName="Paris" alt="Imagem Paris" countryName="França" iconCountry='./images/continents/europe/icons/france.png' /> 
                                
                        <CitiesCard cityImg='./images/continents/europe/cities/praga.jpg' cityName="Praga" alt="Imagem Praga" countryName="República Tcheca" iconCountry='./images/continents/europe/icons/tcheco.png' /> 
                                
                        <CitiesCard cityImg='./images/continents/europe/cities/roma.jpg' cityName="Roma" alt="Imagem Roma" countryName="Itália" iconCountry='./images/continents/europe/icons/italy.png' /> 
                                                        
                        
                    </Flex> 

                </Continent>

            </>



    )


}