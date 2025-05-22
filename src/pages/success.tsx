import Link from 'next/link';
import { ImageContainer, SuccessContainer } from '../styles/pages/success';

export default function Success() {
    return (
        <SuccessContainer>
            <h1>Compra efetuada</h1>

            <ImageContainer>

            </ImageContainer>

            <p>
                Uhuuul <strong>Fernando Moura</strong>, sua <strong>Camiseta beyond the limite</strong> já está a caminho da sua casa.
            </p>

            <Link href="/">
                Voltar ao catálogo
            </Link>
        </SuccessContainer>
    )
}