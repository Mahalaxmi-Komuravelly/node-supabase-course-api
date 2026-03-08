import express from "express"

const app = express();
const PORT = process.env.PORT || 6325
app.use(express.json());

app.listen(PORT, () => {
    console,log(`Server running on http://localhost:${PORT}`)
})