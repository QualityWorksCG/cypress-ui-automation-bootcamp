class Cart{
    //#region Selectors
    get cartIcon() { return ('.shopping_cart_link') }
    get cartNotification() { return ('.shopping_cart_badge') }

    get cartItems() { return ('.cart_item') }
    get cartItemsName() { return ('.inventory_item_name') }
    get cartQuantity() { return ('.cart_quantity') }

    get addToCartBtns() { return ('//button[text()="Add to cart"]') }
    // get addToCartBtns() { return ('.btn_inventory') }

    get removeItemBtns() { return ('//button[text()="Remove"]') }
    // get removeItemBtn() { return ('.cart_button') }
    
    get removeSauceLabBackPackBtn() { return ('#remove-sauce-labs-backpack') }
    get removedCartItem() { return ('.removed_cart_item') }

    get removeSauceLabsOnesie() { return ('#remove-sauce-labs-onesie') }

    get checkOutBtn() { return ('#checkout') }
    //#endregion

    //#region Methods
    addToCart(itemName){
        let addToCartBtn = `#add-to-cart-${this.applySelectorFormat(itemName)}`

        cy.get(addToCartBtn).should('be.visible')
        cy.get(addToCartBtn).click()
    }

    removeFromCart(itemName){
        let removeFromCartBtn = `#remove-${this.applySelectorFormat(itemName)}`

        cy.get(removeFromCartBtn).should('be.visible')
        cy.get(removeFromCartBtn).click()
    }

    navigateToCart(){
        cy.get(this.cartIcon).click()
    }

    navigateToCheckout(){
        cy.get(this.checkOutBtn).click()
    }

    applySelectorFormat(itemName){
        return itemName.toLowerCase().replaceAll(' ', '-')
    }
    //#endregion
}
export default new Cart()