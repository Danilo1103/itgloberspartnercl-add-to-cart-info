import React from "react"
import { useProduct } from "vtex.product-context"
import { useOrderForm } from "vtex.order-manager/OrderForm"
import ProductGroup from "./ProductGroup"
// import Totalizers from "./Totalizers"
import { generateBlockClass } from "@vtex/css-handles"
import styles from "./styles.css"
import ButtonGroup from "./ButtonGroup"

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
    const container = generateBlockClass(styles.container, blockClass)
    const container__item = generateBlockClass(styles.container__item, blockClass)
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
                {/* <Totalizers totalizers={totalizers[0]?.value} /> */}
                <p>Total: {totalizers[0]?.value / 100}</p>
                <ButtonGroup />
            </div>
        </div>
    )
}

export default AddToCartInfo;