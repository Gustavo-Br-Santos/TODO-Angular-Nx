import { getAddTodoButton, getTodos } from '../support/app.po';

describe('TodoApps', () => {
  beforeEach(() => cy.visit('""'));

  it('Deve verificar se possui home na url', () => {
    cy.url().should("contain", "home")
  });

  it('Deve verificar se possui texto ToDoList', () => {
    cy.get('#titulo-home').should("contain.text", "ToDo list")
  });

  it('Deve verificar se possui o botão adicionar ToDo', () => {
    cy.get('#botao-adicionar').should("contain.text", "Adicionar ToDo")
  });

  // it('Deve verificar se possui uma lista de todo', () => {
  //   cy.get('#lista-todo').children().should("have.length", "26")
  // });

  it('Deve verificar se ao clicar no botão, irá adicionar um novo todo', () => {
    cy.get('#lista-todo').children().its('length').then(intialLength => {
      cy.get('#botao-adicionar').click()
      cy.get('#lista-todo').children().should("have.length", intialLength + 1);
    })
  });
});
