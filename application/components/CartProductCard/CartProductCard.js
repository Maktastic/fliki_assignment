'use client'
import {Avatar, Text, Grid} from "@radix-ui/themes";

export default function CartProductCard({ product }) {
    return (
        <Grid columns={"3"} justify={'between'} align={'center'} className={'product-container'}>
            
            <Avatar
                size="6"
                fallback="A"
                className={'product_image'} src={product.image}
                alt={'p_img'}
            />
            
            <Text as={'span'} className={'p_name'}>{product.name}</Text>
            
            <Text as={'price'} className={'p_price'}>{ product.currency } { product.price }</Text>
            
        </Grid>
    )
    
}