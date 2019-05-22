# Sistify

Amazing app to consumes spotify data. [Demo](https://sistify.netlify.com)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Aplicação

A aplicação está internacionalizada.  

Rodar `npm run pt` para português.

Rodar `npm run en` para inglês.

## Testes

Run `ng test` para executar os testes criados para o parser.

## Arquitetura 

Utilizado arquitetura clean(Hexagonal)  para o modulo de usuário.

Contendo três camadas:

Presentation(Camada mais externa de UI da app).

Domain(Aqui fica toda regra de domínio(negocios) e a camada mais isolada e mais importante).

Data(Toda parte de comunicação externa com dados, base e serviços REST).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
