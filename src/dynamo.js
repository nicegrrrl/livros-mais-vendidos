import { config as dotenvConfig } from "dotenv";
import {
  DynamoDBClient,
  BatchWriteItemCommand,
} from "@aws-sdk/client-dynamodb";
import { scrapeProducts } from "./scrape.js";

dotenvConfig();

const productsList = await scrapeProducts();

const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const addProducts = async (list) => {
  if (list.length === 0) {
    return console.log("The list is empty :( Please, try again.");
  }

  const params = {
    RequestItems: {
      [process.env.TABLE_NAME]: list.map((product) => ({
        PutRequest: {
          Item: {
            id: { S: crypto.randomUUID() },
            title: { S: product.title },
            price: { S: product.price },
          },
        },
      })),
    },
  };

  const batchWriteCommad = new BatchWriteItemCommand(params);

  try {
    await client.send(batchWriteCommad);
  } catch (error) {
    console.log(error);
  }
};

addProducts(productsList);
