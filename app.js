const copyBtn = document.querySelector(".copy"),
  twitterBtn = document.querySelector(".twitter");

const quotes = [
  {
    quote: "Human strength lies in the ability to change yourself.",
    author: "  ~ Saitama, One Punch Man",
  },
  {
    quote: "You can die anytime, but living takes true courage.",
    author: "  ~ Kenshin Himura, Rurouni Kenshin",
  },
  {
    quote:
      "Fear is not evil. It tells you what weakness is. And once you know your weakness, you can become stronger as well as kinder.",
    author: "  ~ Gildarts Clive, Fairy Tail",
  },
  {
    quote:
      "A person can change, at the moment when the person wishes to change.",
    author: "  ~ Haruhi Fujioka, Ouran Highschool Host Club",
  },
  {
    quote:
      "You will never be able to love anybody else until you love yourself.",
    author: "  ~ Lelouch Lamperouge, Code Geass",
  },
  {
    quote: "If you don't take risks, you can't create a future.",
    author: "  ~ Monkey D. Luffy, One Piece",
  },
  {
    quote: "If you don’t share someone’s pain, you can never understand them.",
    author: "  ~ Nagato, Naruto",
  },
  {
    quote:
      "The world isn’t perfect. But it’s there for us, doing the best it can… that’s what makes it so damn beautiful.",
    author: "  ~ Roy Mustang, Full Metal Alchemist",
  },
  {
    quote:
      "Knowing what it feels like to be in pain, is exactly why we try to be kind to others.",
    author: "  ~ Jiraiya, Naruto",
  },
  {
    quote:
      "Mistakes are not shackles that halt one from stepping forward. Rather, they are that which sustain and grow one's heart.",
    author: "  ~ Mavis Vermillon, Fairy Tail",
  },
  {
    quote: "Helping other people is the best way to make up for your mistakes.",
    author: "  ~ Kenshin Himura, Rurouni Kenshin",
  },
  {
    quote:
      "Whether a fish lives in a clear stream or a water ditch, so long as it continues swimming forward, it will grow up beautifully.",
    author: "  ~ Koro-sensei, Assassination Classroom",
  },
  {
    quote: "Like I always say, can’t find a door? Make your own.",
    author: "  ~ Edward Elric, Fullmetal Alchemist",
  },
  {
    quote:
      "People who continue to put their lives on the line to defend their faith become heroes and continue to exist on in legend.",
    author: "  ~ Naruto Uzumaki, Naruto",
  },
  {
    quote:
      "As the living it is our responsibility to carry out the wishes of the ones who are gone.",
    author: "  ~ Akame, Akame Ga Kill",
  },
  {
    quote:
      "Forgetting is like a wound. The wound may heal, but it has already left a scar.",
    author: "  ~ Monkey D. Luffy, One Piece",
  },
  {
    quote:
      "You need to accept the fact that you’re not the best and have all the will to strive to be better than anyone you face.",
    author: "  ~ Roronoa Zoro, One Piece",
  },
  {
    quote:
      "People who can’t throw something important away can never hope to change anything.",
    author: "  ~ Armin Arlert, Attack on Titan",
  },
  {
    quote: "Fools who don’t respect the past are likely to repeat it.",
    author: "  ~ Nico Robin, One Piece",
  },
  {
    quote:
      "When you fall in love with someone, you start wanting to know lots of things about that person.",
    author: "  ~ Ninako Kinoshita, Strobe Edge",
  },
  {
    quote:
      "Even if I lose this feeling, I’m sure I’ll just fall in love with you all over again.",
    author: "  ~ Syaoran Li, Cardcaptor Sakura",
  },
  {
    quote: "Even if I searched the world over, no one could compare to you.",
    author: "  ~ Hikaru Hitachiin, Ouran Highschool Host Club",
  },
  {
    quote: "Love is simply an electrical bug in the human neural circuit.",
    author: "  ~ Akasaka Ryuunosuke, My Pet Girl Sakurasou",
  },
  {
    quote:
      "Once you fall in love, you really love that person through thick and thin.",
    author: "  ~ Oka Chinami, Golden Time!",
  },
  {
    quote:
      "If it’s possible for one person to be hurt by another, then it’s possible for that person to be healed by another.",
    author: "  ~ Sohma Hatori, Fruits Basket",
  },
  {
    quote:
      "Even If I lose this feeling, I’m sure that I’ll just fall in love with you all over again.",
    author: "  ~ Syaoran Li, Cardcaptor Sakura",
  },
  {
    quote: "When a man learns to love, he must bear the risk of hatred.",
    author: "  ~ Madara Uchiha, Naruto",
  },
  {
    quote: "Love is never as simple as sharing the same path.",
    author: "  ~ Khamsin, Shakugan No Shana",
  },
  {
    quote: "People cannot win against their loneliness.",
    author: "  ~ Gaara, Naruto",
  },
  {
    quote:
      "Never trust anyone too much, remember, the devil was once an angel.",
    author: "  ~ Ken Kaneki, Tokyo Ghoul",
  },
  {
    quote: "No matter how deep the night, it always turns to day, eventually.",
    author: "  ~ Brook, One Piece",
  },
];

let btn = document.querySelector("button");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".author");

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerHTML = quotes[random].quote;

  writer.innerHTML = quotes[random].author;
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quote.innerText + writer.innerText);
  alert("Copied!");
});

twitterBtn.addEventListener("click", () => {
  let tweetUrl = `https://twitter.com/intent/tweet?text=${quote.innerText}+${writer.innerText}`;
  window.open(tweetUrl, "_blank");
});
