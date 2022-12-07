/// <reference types="cypress"/>
 import Authentication from '../../page/auth.page'
import routesData from '../../data/routes.data'
// var authenticationpage = new Authentication()
import usersdata from "../../data/usersdata"

// const Authentication = require("../../page/auth.page");

describe('Authentication', () => {
    // beforeEach(() => {
    //     cy.data(users).then((valid) => {
    //         this.key

    for (const record of usersdata) {

        it(`Login with a ${record.username} user`, () => {
            cy.visit("/");
            
            Authentication.login(record.username, record.password);
            if (record.username == "locked_out_user") {
                 cy.get(Authentication.errorMssg).should('include.text', record.errorMsg) 
            }
            
             else {
                cy.url().should('contain', routesData.product)
             }

            
        })
    }
})