const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 3001;

app.use(express.json());

app.post("/data", async (req, res) => {
  res.json({ a: "response.data.choices" });
});
app.post("/data2", async (req, res) => {
  console.log(req.body);
});
app.post("/data3", async (req, res) => {
  const { name, company } = req.body;
  res.json({
    name: name,
    company: company,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
