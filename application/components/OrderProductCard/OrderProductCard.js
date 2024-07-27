import {Avatar, Flex, Inset, Text} from "@radix-ui/themes";

export default function OrderProductCard({ product }) {

    console.log(product)

    return (

        <Flex direction={'row'} align={'center'} gap={'2'} className={'o-product-card'}>
            <Avatar size={'6'} src={product.image} />
            <Text>{product.name}</Text>
            <Text className={'product-price'}>{product.currency} {product.price}</Text>
        </Flex>
    )


}