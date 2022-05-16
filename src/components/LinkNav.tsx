import Link, { LinkProps } from "next/link";
import { ReactElement } from "react";


interface LinkNavProps extends LinkProps {
    children: ReactElement;
}

export function LinkNav ( { children,  ...rest }: LinkNavProps) {

    return (
        
        <Link 
              {...rest}
        >
            {children}            
        </Link>

    )

}