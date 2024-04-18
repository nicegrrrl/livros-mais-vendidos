# os 📚 mais vendidos

Este desafio consiste em criar um sistema que retorne os _três primeiros produtos_ de um e-commerce, disponibilizando essa informação para ser consumida por API.

### 👩🏻‍💻 Tecnologias utilizadas

- [Serverless Framework](https://www.serverless.com)
- [AWS Lambda](https://aws.amazon.com/pt/pm/lambda)
- [AWS API Gateway](https://aws.amazon.com/pt/api-gateway/)
- [AWS DynamoDB](https://aws.amazon.com/pt/pm/dynamodb)
- [Puppeteer](https://pptr.dev)

### 🛒 E-commerce escolhido
Livros mais vendidos da [Amazon](https://www.amazon.com.br/gp/bestsellers/books/) 📚

### ☁️ Nas nuvens

Link da [minha API](https://1d2zt1javj.execute-api.us-east-1.amazonaws.com/products) na nuvem 😶‍🌫️


### 😊 Começando...

1. Clone o repositório em sua máquina.
2. Instale as dependências rodando o seguinte comando:

```shell
npm install
```

3. Crie um arquivo **.env**, seguindo os exemplos de variáveis de ambiente contidas no arquivo **.env.example**.
4. Para popular o banco de dados, rode o comando abaixo. Caso apareça a mensagem "The list is empty :( Please, try again." no console, continue rodando o comando.

```shell
node ./src/dynamo.js
```

5. Configure sua conta AWS.

6. Faça o deploy:

```shell
npx serverless deploy
```

7. Copie o link do endpoint fornecido no terminal.
8. A API está prontinha para ser consumida. 😄🚀

### 💻 Rota

| Método | Endpoint  | Responsabilidade        | Autenticação        |
| ------ | --------- | ----------------------- | ------------------- |
| GET    | /products | Lê os produtos listados | Não necessita token |

### 🧠 Regra de negócio

#### GET /products

Lista todos os clientes cadastrados na aplicação.


###### Exemplo de resposta: status 200 OK

```json
[
	{
		"price": "R$ 8,76",
		"id": "5867831b-1711-48f7-8342-2faaef38b84d",
		"title": "Surpresas com Água: Fazenda"
	},
	{
		"price": "R$ 62,01",
		"id": "3300a0b3-a34b-49bc-9e67-ade651e302d5",
		"title": "Café com Deus Pai 2024: Porções Diárias de paz"
	},
	{
		"price": "R$ 36,81",
		"id": "f0860e20-337e-4708-b61c-8ea94ce7ae33",
		"title": "O livro que você gostaria que seus pais tivessem lido: (e seus filhos ficarão gratos por você ler)"
	}
]

// amostra: 18.04.2024 às 20:13
```


### 💡 Pontos de melhoria
* Executar a função addProducts() periodicamente, para manter o banco de dados atualizado;
* Corrigir o *bug* no scrap dos produtos, tendo em vista que às vezes demora para carregar e sua função retorna um array vazio.