import { Flex, Heading, Stack } from "@chakra-ui/react";
import { CitiesCard } from "../components/CitiesCard";
import { Continent } from "../components/Continent";
import { Header } from "../components/Header";

export default function NorthAmericaContinent (){

    return (

        <>
            <Header/>
            <Continent 
                mainImage='./images/continents/north-america/logo-north-america.jpg' 
                qtdCountry={50} 
                qtdLanguages={24} 
                qtdCities={50}  
                description="A América do Norte é uma das regiões preferidas por turistas de todas as partes do mundo. Apesar de formada por poucos, porém grandes países, dentro deles há várias cidades que são os destinos dos sonhos, especialmente de muitos brasileiros que todos os anos rumam em direção ao outro hemisfério."
                nameContinent="América do Norte"
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
                            cityImg='./images/continents/north-america/cities/new-york.jpg' 
                            cityName="Nova York" 
                            alt="Imagem Nova York" 
                            countryName="Estados Unidos" 
                            iconCountry='./images/continents/north-america/icons/estados-unidos-da-america.png' 
                        />
                                    
                        <CitiesCard 
                            cityImg='./images/continents/north-america/cities/toronto.jpg' 
                            cityName="Toronto" 
                            alt="Imagem Toronto" 
                            countryName="Canadá" 
                            iconCountry='./images/continents/north-america/icons/canada.png'  
                        /> 

                        <CitiesCard 
                            cityImg='./images/continents/north-america/cities/vancouver.jpg' 
                            cityName="Vancouver" 
                            alt="Imagem Vancouver" 
                            countryName="Canadá" 
                            iconCountry='./images/continents/north-america/icons/canada.png'
                        /> 
                                    
                        <CitiesCard
                            cityImg='./images/continents/north-america/cities/vegas.jpg' 
                            cityName="Las Vegas" 
                            alt="Imagem Las Vegas" 
                            countryName="Estados Unidos" 
                            iconCountry='./images/continents/north-america/icons/estados-unidos-da-america.png'
                        /> 
                                    
                        <CitiesCard 
                            cityImg='./images/continents/north-america/cities/washington.jpg' 
                            cityName="Washington" 
                            alt="Imagem Washington" 
                            countryName="Estados Unidos" 
                            iconCountry='./images/continents/north-america/icons/estados-unidos-da-america.png'
                        />

                        
                </Flex>                

            </Continent>
        </>



    )


}