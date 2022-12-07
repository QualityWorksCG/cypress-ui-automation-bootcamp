import Auth from '../../page/auth.page'
import Cart from '../../page/cart.page'
import productItemData from '../../data/productItem.data'


describe('Remove Product', () => {

    beforeEach(() => {
        cy.visit('/')
      })

    it('Remove an item from cart', () => {
        Auth.login('standard_user','secret_sauce')
     
        for (const item of productItemData) {
            Cart.addToCart(item.name)
        }
            Cart.navigateToCart() 

           // Assert that there is 1 item in the cart then remove the item
         cy.get(Cart.cartNotification).should('have.text', 6)
         cy.get(Cart.cartItemsName).should('include.text', 'Sauce Labs Bolt T-Shirt')
         cy.get(Cart.removeSauceLabBackPackBtn).click()
         cy.get(Cart.cartNotification).should('have.text', 5)
         cy.get(Cart.cartItemsName).should('not.contain.text','Sauce Labs Backpack')

    })

    it('Remove item from product page', () => {
        Auth.login('standard_user','secret_sauce')
        
       
         Cart.addToCart('Sauce Labs Onesie')
    
        cy.get(Cart.cartNotification).should('have.text', 1)
        cy.get(Cart.removeSauceLabsOnesie).should('be.visible')
        cy.get(Cart.removeSauceLabsOnesie).click()
        cy.get(Cart.cartNotification).should('not.exist')
        
    })

})