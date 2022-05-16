import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme( {
    colors: {

        yellow: {
            900: "FFBA08"
        },
        heading_and_text: {
            100: "#47585B"
        },
        blue: {
            100: "#0D99FF"
        }

    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    styles: {
        global: {
            body: {
                color: 'heading_and_text.100',
                backgroundColor: '#F5F8FA' 
            }
        }
    }
    

})