const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["A faithful friend is a strong defense", 
          "A fresh start will put you on your way",
        "You will pass this assessment",
      "A friend is a present you give yourself",
    "A pleasant surprise is waiting for you",
  ];
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);

});
let nameArry = []
app.post("/api/nameForm", (req, res) => {
  const { name, email} = req.body
  nameArry.push(req.body)
  console.log(req.body)
  res.sendStatus(200)
})

let users = [
  { name: "Mike", email: "mike@gmail.com" },
  { name: "David", email: "david@gmail.com" },
];

let changedUser = []
app.put("/api/userArray/:name1",(req,res) => {
  const {name1, newEmail} = req.body

  
  for (let i =0; i< users.length; i++) {
      let currentUser = users[i];
      if (currentUser.name === name1) {
          currentUser.email = newEmail
      }
      if (currentUser.name !== name1) {
          users.push({name: name1, email: newEmail})
      }
  }
  // changedUser.push(req.body)  
  // console.log(req.body)
  res.sendStatus(200)
})

app.get("/api/horoscope", (req,res) => {
  const horoscopes = ['Power down for a minute and reassess your strategy.',
  'Does your overall plan of attack need a serious revamp?',
  'Just keep an eye on that work/life balance during this busy month.',
  'Have your big swings resulted in some big misses recently?',
  'Would new software and apps increase your productivity?'
  ];

  let randomIndex = Math.floor(Math.random() * horoscopes.length);
  let randomHoroscope = horoscopes[randomIndex];

  res.status(200).send(randomHoroscope);
})




app.listen(4000, () => console.log("Server running on 4000"));