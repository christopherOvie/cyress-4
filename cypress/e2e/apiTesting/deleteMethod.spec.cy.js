describe('Delete METHOD', () => {
    it('delete user in DB',() => {
  //await
cy.request({
    method: 'DELETE',
    url:Cypress.env("host") + Cypress.env("delete_endpoint"),  
})
.then((res) => {
 expect(res.status).to.eq(204)
 
//
//ui layer
//api layer
//db layer     selenium only ui and db layer
})
})
})