import { useRouter } from 'next/router'
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product'

export default function Product() {
    const { query } = useRouter()
    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>
            <ProductDetails>
                <h1>Product {query.id}</h1>
                <span>$99.99</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sit asperiores in illo, magnam sed iusto distinctio velit quam.</p>
                <button>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}