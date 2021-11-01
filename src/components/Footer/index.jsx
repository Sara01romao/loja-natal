import {IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp} from "react-icons/io5"
import { DivFooter } from "./styles"

export default function Footer() {
    return(
        <DivFooter>
            <div className="footerContainer">
                <div>
                    <IoLogoFacebook/>
                    <IoLogoInstagram/>
                    <IoLogoWhatsapp/>
                </div>
               
            </div>
            <p>Observação: site apenas para estudo prático de Front-end</p>
            
        </DivFooter>
    )
 }