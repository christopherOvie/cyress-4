///<reference types ="Cypress"> />
describe('my first test suite', () => {
  it('passes  aaa', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get("input.search-keyword").type('ca')
    
    cy.get(".product:visible").should('have.length',4)
   // cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
//has 4 products 
//parent child chaining

cy.get('.products').as('productsLocator')
    cy.get('@productsLocator').find('.product').each(($el, index, $list) => {
     const textveg= $el.find('h4.product-name').text();
     if(textveg.includes('Cashews')){
      cy.wrap($el).find('button').click()
      

       cy.get(".cart-icon img").click();
     
      cy.contains('PROCEED TO CHECKOUT').click();
      cy.contains('Place Order').click();
      cy.get('select').select('Afghanistan').should('have.value','Afghanistan')
     }
   

    })
  })
it('test  rahul shetty ecommerce', () => {
    cy.visit('https://rahulshettyacademy.com/client/')
    cy.get('#userEmail').type('christophodibo@yahoo.com')
     cy.get('#userPassword').type('Father70')
     cy.get('#login').click()
    // cy.get("[class='container']").find("[class*='mb-3 ']").eq(2).contains('Add To Cart').click()
    cy.get("[class='container']").find("[class*='mb-3 ']").each(($el, index, $list) => {
   const productText=  $el.find('h5').text();
   if(productText.includes('zara coat 3')){
    cy.wrap($el).contains('Add To Cart').click();  
   }
  })   
})
it('passes  mno', () => {
     cy.visit("https://practice.automationtesting.in/")
     cy.url().should('include','automationtesting')
    // cy.get("[class*='themify_builder_sub_row clearfix gutter-default   sub_row_1-0-2']")
    // .find(".products").eq(1).contains('Thinking in HTML').click()

     cy.get(".products").each(($ele, index,$list)=>{
    const bookText=  $ele.find('h3').text();
    if (bookText.includes('Thinking in HTML')){
      //$ele.contains('Thinking in HTML').click()
      cy.wrap($ele).contains('Thinking in HTML').click();
    }
     })
       })

       it('passes  ddd', () => {
     cy.visit("https://www.automationexercise.com/")
        cy.url().should('include','automationexercise')
        cy.title().should('eq','Automation Exercise')
        //cy.get("[class='productinfo text-center']").eq(0).contains('Add to cart').click();
        cy.get("[class='productinfo text-center']").each(($el, index,$list)=> {
         const clothsText= $el.find('p').text();
         if(clothsText.includes('Blue Top')){
          cy.wrap($el).contains('Add to cart').click({force: true});
         }
         
        })
       
      })

      it('passes vvvvvvv', () => {
        cy.visit("https://www.demoblaze.com/")
        cy.get('#tbodyid').find("div[class*='card ']").each(($ele,index,$list)=>{
      const itemText= $ele.find("h4 a").text()
      if(itemText.includes('Nokia lumia 1520')){
        cy.wrap($ele).contains('Nokia lumia 1520').click()
      }
        })
      })
})