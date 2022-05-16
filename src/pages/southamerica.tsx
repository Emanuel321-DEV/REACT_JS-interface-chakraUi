import { Flex, Heading, Stack } from "@chakra-ui/react";
import { CitiesCard } from "../components/CitiesCard";
import { Continent } from "../components/Continent";
import { Header } from "../components/Header";

export default function SouthAmericaContinent (){

    return (

        <>
        <Header/>
        <Continent 
            mainImage='./images/continents/south-america/logo-south-america.jpg' 
            qtdCountry={50} 
            qtdLanguages={24} 
            qtdCities={50}  
            description="A América do Sul apresenta uma vasta riqueza de praias, montanhas, desertos, florestas, atrações históricas, cidades cosmopolitas e belezas naturais de fazer inveja a qualquer outra região do mundo."
            nameContinent="América do Sul"
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


                            <CitiesCard 
                                cityImg='./images/continents/south-america/cities/brasilia.jpg' 
                                cityName="Brasília" 
                                alt="Imagem Brasília" 
                                countryName="Brasil" 
                                iconCountry='./images/continents/south-america/icons/brazil.png' 
                            />
                            
                            <CitiesCard 
                                cityImg='./images/continents/south-america/cities/buenos-aires.jpg' 
                                cityName="Buenos Aires" 
                                alt="Imagem Buenos Aires" 
                                countryName="Argentina" 
                                iconCountry='./images/continents/south-america/icons/argentina.png'  
                            /> 

                            <CitiesCard 
                                cityImg='./images/continents/south-america/cities/rio-de-janeiro.jpg' 
                                cityName="Rio de Janeiro" 
                                alt="Imagem Rio de Janeiro" 
                                countryName="Brasil" 
                                iconCountry='./images/continents/south-america/icons/brazil.png'
                            /> 
                            
                            <CitiesCard
                                cityImg='./images/continents/south-america/cities/santiago.jpg' 
                                cityName="Santiago" 
                                alt="Imagem Santiago" 
                                countryName="Chile" 
                                iconCountry='./images/continents/south-america/icons/chile.png'
                            /> 
                            
                            <CitiesCard 
                                cityImg='./images/continents/south-america/cities/sao-paulo.jpg' 
                                cityName="São Paulo" 
                                alt="Imagem São Paulo" 
                                countryName="Brasil" 
                                iconCountry='./images/continents/south-america/icons/brazil.png'
                            /> 
                        
                    
                    </Flex> 

        </Continent>
        </>



    )


}