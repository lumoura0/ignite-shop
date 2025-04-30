import { useRouter } from 'next/router'
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product'
import { GetStaticProps } from 'next'

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

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params.id;


    return {
        props: {},
        revalidate: 60 * 60 * 1, // 1 hours
    }
}