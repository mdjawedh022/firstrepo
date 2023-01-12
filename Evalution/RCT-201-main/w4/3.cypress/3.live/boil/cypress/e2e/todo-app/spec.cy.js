const getTodos=[{value:"Abrakadabra", isCompleted: true,id:1}];
const postTodo={id:2,value:"jawed",isCompleted:true}

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.intercept("GET","http://localhost:4004/todos",getTodos).as("getTodos")
  })
})

it("should render all the html elements",()=>{
cy.get("[data-testedid=todo-input]");
cy.get("[data-testid=todo-button]");

});
it("todos from api response should be their in DOM",()=>{
cy.get("@getTodos");
cy.get("[data-testid=todo-item-value]")
  .eq(0)
  .should("contain",getTodos[0].value)

});

it("should allow us to type and add new todo",()=>{
  cy.intercept("POST", "http://localhost:4004/todos",postTodo).as("postTodo")
  cy.get("[data-testid=todo-input]").type("jawed");
  cy.get("[data-tetsid=todo-button]").click();
  cy.wait("@postTodo");
  cy.get("[data-testid=todo-item-value]").eq(-1).should("contain",postTodo.value);
  cy.get("[data-testid=todo-item-checkbox]").eq(-1).should("not.be.checked")
})
