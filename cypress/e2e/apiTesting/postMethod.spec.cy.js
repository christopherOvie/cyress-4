//var data = require("../apiTesting/../../../fixtures/payload.json");
var data = require("../apiTesting/../../fixtures/payload.json");
describe('POST METHOD', () => {
    it('create new user in DB', async() => {
  await
cy.request({
    method: 'POST',
    url:Cypress.env("host") + Cypress.env("endpoint_list"),
    body:{
        "name": "morpheus",
    "job": "leader"
    }
    }).then(async(res)=>{
     
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('name', 'morpheus')
        expect(res.body).to.have.property('job', 'leader')

        //asserting dynamic data
    assert.isNotNull(res.body.id,"isNotNull");
    assert.isNotNull(res.body.createdAt,"isNotNull");
                const id= res.body.id;
                //cy.log(id)
                cy.log('catch the first id value from first api call', id)
                 return await id;
})
.then((id)=>{
    
    cy.log('fetch the id from previous call:', id)
})
  })

    it('create new user in DB using fixtures', async() => {

        await
        cy.request({
            method: 'post',
            url:Cypress.env("host") + Cypress.env("endpoint_list"),
            body:{
              fixtures:data,
            },
            delay:20,
           //first call back function
            }).then(async(res)=>{
               //first pick the response object quantity
                cy.log('response data are : ', res)

                //convert it to a string 
                cy.log('response data are : ',JSON.stringify(res))
             
                expect(res.status).to.equal(201);
                
        
                //asserting dynamic data
            assert.isNotNull(res.body.id,"isNotNull");
            assert.isNotNull(res.body.createdAt,"isNotNull");
                        const id= res.body.id;
                        //cy.log(id)
                        cy.log('catch the first id value from first api call', id)
                         return await id;
        })
        //second call back function
        //can also catch the token and pass it to next chaining sequence
        .then((id)=>{
            
            cy.log('fetch the id from previous call:', id)
        })
    })

    it('test login unsuccessful -negative scenario', async() => {
        await
        cy.request({
            method: 'post',
            url:Cypress.env("host") + Cypress.env("login_endpoint"),
            form:true,
            body:{
                "email": "peter@klaven"
              },
              failOnStatusCode:false,
            }).then((res)=>{
                expect(res.status).to.eq(400);
                expect(res.body).to.have.property("error" , "Missing password")

            })
    })
})

    
    
    
