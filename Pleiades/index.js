import axios from "axios"
import express from "express"
import bodyParser from "body-parser"
import multer from "multer";
import path from "path";
import session from "express-session";
import dotenv from "dotenv";
dotenv.config();
const app = express()

const port = process.env.PORT;
const SECRET_KEY = process.env.SECRET_KEY;
const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;




const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Make sure 'uploads' directory exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });


app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: `${SECRET_KEY}`,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set true for HTTPS
  })
);

app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("index.ejs")
});

app.get("/chat", (req, res) => {
  if (!req.session.chatHistory) {
    req.session.chatHistory = [];
  }
  res.render("chat", { chatHistory: req.session.chatHistory || [], response: "" });
});

const bh1 = process.env.bh1;
const bh2 = process.env.bh2;
app.post("/submit", upload.single("file"), async (req, res) => {
  if (!req.session.chatHistory) {
    req.session.chatHistory = [];
  }

  const userMessage = req.body.message;
  const uploadedFile = req.file;

  // Add user message to session chat history
  req.session.chatHistory.push({ role: "user", content: userMessage });

  console.log("User message:", userMessage);
  console.log("Uploaded file:", uploadedFile);

  try {
    const systemMessage = {
  role: "system",
  content: `${bh1}`
};

// Include systemMessage as the first message, then spread the chat history
const resp = await axios.post(
  BASE_URL,
  {
    model: "deepseek/deepseek-r1-0528-qwen3-8b:free",
    messages: [systemMessage, ...req.session.chatHistory],
    stream: false,
  },
  {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
  }
);


    const aiMessage = resp.data.choices[0].message.content;

    // Add AI's reply to chat history
    req.session.chatHistory.push({ role: "assistant", content: aiMessage });

    res.render("chat", { chatHistory: req.session.chatHistory });
  } catch (error) {
    console.error(error.message);
    req.session.chatHistory.push({
      role: "assistant",
      content: "Service not available at the moment.",
    });
    res.render("chat", { chatHistory: req.session.chatHistory });
  }
});

app.get("/about",(req,res)=>{
  res.render("about")
});

app.listen(port,()=>{
    console.log(`Server Listening on Port no.${port}`)
});