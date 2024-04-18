# desafio-bgc 🫡

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

### 😊 Rota

| Método | Endpoint  | Responsabilidade        | Autenticação        |
| ------ | --------- | ----------------------- | ------------------- |
| GET    | /products | Lê os produtos listados | Não necessita token |

### 😊 Regra de negócio

#### GET /products

Lista todos os clientes cadastrados na aplicação.


###### Exemplo de resposta: status 200 OK

```json
[
	{
		"price": "R$ 69,71",
		"id": "6e787539-7d68-4825-824f-8e759f2a07b1",
		"title": "Café com Deus Pai 2024: Porções Diárias de paz"
	},
	{
		"price": "R$ 23,27",
		"id": "6013b57e-acff-488b-88f6-5327ea371aef",
		"title": "O homem mais rico da Babilônia"
	},
	{
		"price": "R$ 36,81",
		"id": "008f22d8-a934-4a68-af33-0597463f6935",
		"title": "O livro que você gostaria que seus pais tivessem lido: (e seus filhos ficarão gratos por você ler)"
	}
]
```

