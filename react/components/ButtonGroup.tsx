import React from "react"
import { generateBlockClass } from "@vtex/css-handles";
import styles from "./styles.css"

const ButtonGroup = ({ blockClass }: { blockClass: string }) => {
    const container__buttons = generateBlockClass(styles.container__buttons, blockClass)
    const container__buttonCheckout = generateBlockClass(styles.container__buttonCheckout, blockClass)
    const container__buttonCart = generateBlockClass(styles.container__buttonCart, blockClass)

    return (
        <div className={container__buttons}>
            <div className={container__buttonCheckout}>
                <a href="/checkout/#/cart">IR AL CHECK-OUT</a>
            </div>
            <div className={container__buttonCart}>
                <button>VER CARRITO</button>
            </div>
        </div>
    )
}

export default ButtonGroup;