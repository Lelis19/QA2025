Feature: Portal da Transparência RN - Funcionalidade de Pesquisa
    Descrição da Funcionalidade: Cenários voltados para verificar o comportamento da busca no portal

Background: Acessar o portal da transparência
    Given que eu acesso o site de Transparência do RN

Scenario: Realizar pesuisa válida
    When clico no icone da aba de navegação
    And preencho o campo de busca com pesquisa válida
    And clico no botão de busca
    Then devo ver resultado relacionado à pesquisa válida

Scenario: Realizar pesquisa inválida
    When clico no icone da aba de navegação
    And preencho o campo de busca com pesquisa inválida
    And clico no botão de busca
    Then devo ver resultado relacionado à pesquisa inválida

Scenario: Realiza pesquisa vazia
    When clico no icone da aba de navegação
    And clico no botão de busca
    Then devo ver mensagem de campo obrigatório