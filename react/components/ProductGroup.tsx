import React from "react"
import { generateBlockClass } from "@vtex/css-handles"
import styles from "./styles.css"

const ProductGroup = ({ items }: any, { blockClass }: { blockClass: string }) => {
    const container__itemTwo = generateBlockClass(styles.container__itemTwo, blockClass)
    const text__nameProduct = generateBlockClass(styles.text__nameProduct, blockClass)
    const image__imageProduct = generateBlockClass(styles.image__imageProduct, blockClass)
    const text__textProduct = generateBlockClass(styles.text__textProduct, blockClass)
    const line__separatorProducts = generateBlockClass(styles.line__separatorProducts, blockClass)

    return (
        <div>
            {items.map((item: any, index: number) => {
                console.log("DANILOOOOO: ", item)
                return (
                    <div key={index} className={container__itemTwo}>
                        <div>
                            <p className={text__nameProduct}>{item.name}</p>
                            <img src={item.imageUrls.at1x} className={image__imageProduct} />
                            <p className={text__textProduct}>Cantidad: {item.quantity}</p>
                            <p className={text__textProduct}>Precio unidad: ${item.price / 100}</p>
                        </div>
                        <hr className={line__separatorProducts} />
                    </div>
                )
            })}
        </div>
    )
}

export default ProductGroup;