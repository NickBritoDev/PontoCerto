import fs from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFilePath = path.join(__dirname, "data.json");

export const loadData = async () => {
  try {
    const data = await fs.readFile(dataFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

export const saveData = async (data) => {
  await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), "utf-8");
};