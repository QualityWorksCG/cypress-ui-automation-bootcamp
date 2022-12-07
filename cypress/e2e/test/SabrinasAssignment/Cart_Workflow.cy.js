/// <reference types="cypress"/>

import CheckOut from '../../page/checkout.page'
import routesData, { checkout } from '../../data/routes.data'
import Auth from '../../page/auth.page'
import Cart from '../../page/cart.page'
import checkoutPage from '../../page/checkout.page'
import productItemData from '../../data/productItem.data'



describe('Add product(s) to the cart and complete checkout process', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Add a single product to cart', () => {
        Auth.login('standard_user','secret_sauce')

        Cart.addToCart('Sauce Labs Backpack')
        Cart.navigateToCart()

        cy.get(Cart.cartNotification).should('have.text', 1)
        cy.get(Cart.cartQuantity).should('have.text', 1)
        cy.get(Cart.removeSauceLabBackPackBtn).should('be.visible')
        cy.get(Cart.cartItemsName).should('have.text', 'Sauce Labs Backpack')
    })

    // Add to cart - single item and multiple items

    it('Add a multiple products to cart', () => {
        Auth.login('standard_user','secret_sauce')

        for (const item of productItemData) {
            Cart.addToCart(item.name)
        }    
        })

        // Cart.addToCart('Sauce Labs Backpack')
        // Cart.navigateToCart()

    // Checkout Info

    it('Enter checkout info', () => {
        Auth.login('standard_user','secret_sauce')

        for (const item of productItemData) {
            Cart.addToCart(item.name)
        }
            Cart.navigateToCart()
            Cart.navigateToCheckout()
            
            CheckOut.enterCheckoutInfo('Sandy', 'Cane', '12033')

            cy.url().should('contain', routesData.checkout)
        })
        


    // Checkout overview - verify data is correct

    it('Verify checkout info', () => {
        Auth.login('standard_user','secret_sauce')

        for (const item of productItemData) {
            Cart.addToCart(item.name)
        }
            Cart.navigateToCart()
            Cart.navigateToCheckout()
            
            CheckOut.enterCheckoutInfo('Sandy', 'Cane', '12033')
            cy.url().should('contain', routesData.checkout)

              
            cy.get(Cart.cartNotification).should('have.text', 6)
            cy.get(checkoutPage.finishBtn).should('be.visible')
            cy.get(checkoutPage.itemTotal).should('include.text', 129.94)


        })
        
    // Checkout complete

    it('Complete checkout process', () => {
        Auth.login('standard_user','secret_sauce')

        for (const item of productItemData) {
            Cart.addToCart(item.name)
        }
            Cart.navigateToCart()
            Cart.navigateToCheckout()
            
            CheckOut.enterCheckoutInfo('Sandy', 'Cane', '12033')
            CheckOut.completeCheckout()

            cy.get(checkoutPage.orderComplete).should('be.visible')
            cy.get(checkoutPage.messageConfirm).should('have.text', 'THANK YOU FOR YOUR ORDER')
            
        })

})