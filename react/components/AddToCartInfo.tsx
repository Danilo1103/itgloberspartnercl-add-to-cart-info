import React from "react"
import { useProduct } from "vtex.product-context"
import { useOrderForm } from "vtex.order-manager/OrderForm"
import ProductGroup from "./ProductGroup"
import { generateBlockClass } from "@vtex/css-handles"
import styles from "./styles.css"
import ButtonGroup from "./ButtonGroup"

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
    const container = generateBlockClass(styles.container, blockClass)
    const container__item = generateBlockClass(styles.container__item, blockClass)
    const text__totalProducts = generateBlockClass(styles.text__totalProducts, blockClass)

    const productInfo = useProduct()
    const { orderForm: {
        items,
        totalizers
    } } = useOrderForm()
    console.log("Este producto tiene esta info: ", productInfo)
    console.log("Esta es la info de la orden: MNase", totalizers)
    return (
        <div className={container}>
            <div className={container__item}>
                <ProductGroup items={items} />
                <p className={text__totalProducts}>Total: ${totalizers[0]?.value / 100}</p>
                <ButtonGroup blockClass={blockClass} />
            </div>
        </div>
    )
}

export default AddToCartInfo;