// final soln: https://github.com/100xdevs-cohort-2/paytm/tree/backend-solution
const express = require("express");
const rootRouter = require("./routes/index");
const cors=require("cors")
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1", rootRouter);

app.listen(3000)