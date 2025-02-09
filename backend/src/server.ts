import express from 'express'
const app = express()
const port = process.env.PORT || 5000;

import cors from 'cors';
app.use(cors());

app.get('/', (req,res)=>{
    res.send("Hello from backend with TypeScript");
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello, this is data!' });
  });  

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});