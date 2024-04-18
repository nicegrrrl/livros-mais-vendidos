import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";
import express from "express";
import serverless from "serverless-http";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();

const app = express();
const TABLE_NAME = process.env.TABLE_NAME;
const client = new DynamoDBClient({});

const dynamo = DynamoDBDocumentClient.from(client);

app.use(express.json());

app.get("/products", async (req, res) => {
  const params = {
    TableName: TABLE_NAME,
  };

  try {
    const scanCommand = new ScanCommand(params);
    const { Items } = await dynamo.send(scanCommand);

    if (Items && Items.length > 0) {
      return res.json(Items);
    } else {
      return res.status(404).json({ error: "No products found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Coudn't get products" });
  }
});

app.use((req, res, next) => {
  return res.status(404).json({ error: "Not found 😅" });
});

export const handler = serverless(app);
