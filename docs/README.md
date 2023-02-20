# Add to cart info

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)]

Component that will display information when adding a product to the shopping cart.

![image](https://user-images.githubusercontent.com/94373834/220132916-0105538f-b4a8-4b59-aff8-76e114eb5cb7.png)


## Configuration 

1. Import the add-to-cart-info's app to your theme's dependencies in the manifest.json, for example:
```json
  "dependencies": {
    "vendor.add-to-cart-info": "0.x"
  }
 ```
 
 2. Add the add-to-cart-info block to the store-theme. For example:
```json
  "modal-trigger#global__addToCartInfo": {
        "children": [
            "modal-layout#global__addToCartInfo"
        ],
        "props": {
            "customPixelEventName": "addToCart"
        }
    },
    "modal-layout#global__addToCartInfo": {
        "children": [
            "modal-header#global__addToCartInfo",
            "add-to-cart-info"
        ]
    }
   ```

## Customization

| CSS Handles  |
| ----------- | 
|`container`|
|`container__item`|
|`text__totalProducts`|
|`container__buttons` | 
|`container__buttonCart` | 
|`container__itemTwo` | 
|`text__nameProduct` | 
|`image__imageProduct`|
|`text__textProduct`|
|`line__separatorProducts`|


## Contributors

1. [Danilo Ibañez](https://www.linkedin.com/in/danilo-ib%C3%A1%C3%B1ez-519a4023a/)

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
