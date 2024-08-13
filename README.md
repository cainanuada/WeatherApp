# WeatherApp - Aplicação Web de Clima ⛅🌡️🌫️💧

Este projeto consiste em uma aplicação web simples para visualizar o clima atual de uma cidade usando a API OpenWeather. A aplicação permite ao usuário pesquisar uma cidade e exibir informações meteorológicas, como temperatura, descrição do tempo, umidade e velocidade do vento.

## Estrutura HTML

- **`<div class="container">`**: Contém todos os elementos da aplicação.
- **`<div class="search-box">`**: Caixa de pesquisa com um campo de texto e um botão.
- **`<div class="weather-box hidden">`**: Exibe a temperatura e a descrição do tempo, com uma imagem do estado do tempo. Inicialmente oculta.
- **`<div class="weather-details">`**: Mostra detalhes adicionais, como umidade e vento, ambos inicialmente ocultos.

## CSS

- **Estilo Geral**: Define a aparência global da aplicação, com uma abordagem centrada e um tema escuro.
- **`search-box`**: Estilo para a caixa de pesquisa, incluindo um tamanho menor inicialmente e transições para expansão.
- **`weather-box`**: Define o layout e a aparência da seção de clima, incluindo a descrição e a imagem do tempo. Oculta inicialmente com a classe `hidden`.
- **`weather-details`**: Estiliza os detalhes meteorológicos, com visibilidade controlada pela classe `hidden`.

## JavaScript

- **Função `buttonClick`**: Captura o valor da cidade e chama a função `searchCity`.
- **Função `searchCity`**: Faz uma requisição à API OpenWeather e processa a resposta.
- **Função `showValues`**: Atualiza a interface com os dados da resposta da API, mostrando a temperatura, descrição, umidade e vento, e ajusta a visibilidade dos elementos.

## Notas Adicionais

- **Classe `hidden`**: Usada para ocultar elementos até que sejam preenchidos com dados.
- **Evento `keydown`**: Permite a pesquisa da cidade ao pressionar "Enter".

Este código oferece uma interface limpa e funcional para visualizar as condições climáticas atuais e é fácil de expandir com mais funcionalidades se necessário.
