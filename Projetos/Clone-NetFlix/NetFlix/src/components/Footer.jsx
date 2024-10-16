import { useState } from "react";
import styled from 'styled-components'

const Fundo = styled.div`
    background-color: black;

`

function Footer(){

    
    return(
        <Fundo>
            <div class="itensFooter">
                <div >
                    <ul>
                        <li><h3 class="texto leve">Dúvidas? Ligue 0800 591 2876</h3></li>
                        <li><a href="#">Perguntas frequentes</a></li>
                        <li><a href="#">Preferência de cookies</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="#">Central de Ajuda</a></li>
                        <li><a href="#">Informações corporativas</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="#">Termos de Uso</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="#">Privacidade</a>  </li>
                    </ul>
                </div>
            
            
            </div>
            <select name="idioma" id="idioma">
                <option value="pt">Português</option>
                <option value="en">Inglês</option>
            </select>
            
        </Fundo>
    )
}

export default Footer