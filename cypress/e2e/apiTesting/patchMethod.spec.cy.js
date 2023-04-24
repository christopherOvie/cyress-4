describe('Patch METHOD', () => {
    it('update user in DB',() => {
  //await
cy.request({
    method: 'PATCH',
    url:Cypress.env("host") + Cypress.env("create_endpoint"),
    body:{
       
    "job": "Director"
    }
})
.then((res) => {
 expect(res.status).to.eq(200)
 expect(res.body).to.have.property("job","Director")
 

 //assert
 assert.isNotNull(res.body.updatedAt,"isNotNull");
 
 

})
})
})