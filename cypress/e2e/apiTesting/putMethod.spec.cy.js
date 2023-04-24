describe('Put METHOD', () => {
    it('update user in DB',() => {
  //await
cy.request({
    method: 'put',
    url:Cypress.env("host") + Cypress.env("create_endpoint"),
    body:{
        "name": "john",
    "job": "qa manager"
    }
})
.then((res) => {
 expect(res.status).to.eq(200)
 expect(res.body).to.have.property("name","john")
 expect(res.body).to.have.property("job","qa manager")

 //assert
 assert.isNotNull(res.body.updatedAt,"isNotNull");
 
 

})
})
})