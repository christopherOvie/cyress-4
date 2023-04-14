
//import {add, multiply} from './math.js'
describe('test Get methods', () => {
    it('check endpoints response', () => {
        //api test
//
        cy.request({
            method: 'GET',
            url:"https://randomuser.me/api",
            qs:"results=1",
            headers:{
                'Content-Type': 'application/json',  
            },
            }).then((response)=>{
expect(response.status).to.eq(200)
expect(response.body).to.have.property("results")
            })
})

it('check endpoints response with properties key/value', () => {

    cy.request({
        method: 'GET',
        url:"https://randomuser.me/api",
        qs:"results=1",
        }).then((response)=>{
            expect(response.status).to.eq(200)
            cy.log("response, " + JSON.stringify(response.body.results[0]))
            assert.isNotNull(response.body.results[0],"gender is not available")

            expect(response.body.results[0]).to.match(/^ */);
           expect(response.body.info).to.have.property("version","1.4")
           expect(response.body.info).to.have.property("results",1)
           expect(response.body.info).to.have.property("page",1)

        })

})

it('get list of users to verify dynamic data', () => {

cy.request({
    method: "GET",
    url:Cypress.env("host") + Cypress.env("endpoint_list"),
    qs:"?page=3"
 })
 .then((response)=>{
    //assert static data
    expect (response.status).to.eq(200)
    expect(response.body).to.have.property("page",2);
    expect(response.body).to.have.property("total_pages",2)
    expect(response.body.data[0]).to.have.property("email","michael.lawson@reqres.in"),
    expect(response.body.data[0]).to.has.property("first_name","Michael")
    expect(response.body.data[0]).to.has.property("last_name","Lawson")
    expect(response.body.data[0]).to.has.property("avatar","https://reqres.in/img/faces/7-image.jpg")

    //asserting dynamic data
    assert.isNotNull(response.body.data[0].email,"isNotNull");
    assert.isNotNull(response.body.data[0].first_name,"isNotNul");
    assert.isNotNull(response.body.data[1].last_name,"isNotNull");
})

})

it('check endpoints delayed responses using asyn/await', async() => {

await cy
.request({
    method: "GET",
    url:"https://reqres.in/api/users?delay=3",
    delay: 60000,
})
.then((response)=>{
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property("page")
})

})
it.only('check response header', async() => {

cy.request(Cypress.env("host") + Cypress.env("endpoint_list"))
.its("headers")
.its('content-type')
.should('eq','application/json; charset=utf-8');

cy.request(Cypress.env("host") + Cypress.env("endpoint_list"))
.its("headers")
.its('content-encoding')
.should('eq',"gzip");

cy.request(Cypress.env("host") + Cypress.env("endpoint_list"))
.its("headers")
.then((headers)=>{
    cy.log("headers", JSON.stringify(headers));
})

// cy.request(Cypress.env("host") + Cypress.env("endpoint_list"))
// .its("headers")
// .then((actual)=>{  
//     cy.log("header ",JSON.stringify(actual));
//     expect(actual).to.include(expected);


// })

})
})