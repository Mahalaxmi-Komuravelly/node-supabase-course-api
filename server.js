import express from "express"
import { checkDBConnection } from "./utils/checkDBConnection.js";

const app = express();
const PORT = process.env.PORT || 6325
app.use(express.json());

app.listen(PORT, async() => {
    await checkDBConnection();
    console,log(`Server running on http://localhost:${PORT}`)
})
