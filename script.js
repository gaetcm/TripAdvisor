const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const bouttonHeader = document.getElementById("button");

bouttonHeader.addEventListener("click"),
  () => {
    document.querySelector("body").classList.add(".sectionform");
  };
