class CheckOut {

get firstNameField() { return ('#first-name') }
get lastNameField() { return ('#last-name') }
get zipCodeField() { return ('#postal-code') }

get itemTotal() {return ('.summary_subtotal_label')}
get continueBtn() {return ('#continue')}
get finishBtn() {return ('#finish')}

get orderComplete() {return ('.title')}
get messageConfirm() {return ('.complete-header')}
get totalPrice() { return ('.summary_total_label')}


enterCheckoutInfo(firstName, lastName, zip){
    cy.get(this.firstNameField).type(firstName)
    cy.get(this.lastNameField).type(lastName)
    cy.get(this.zipCodeField).type(zip)
    cy.get(this.continueBtn).click() 
}

completeCheckout(){
    cy.get(this.finishBtn).click() 
}
}
export default new CheckOut()