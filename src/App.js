import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import "./styles.css";

const quotes = [
  {
    text: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
    author: "Albert Einstein",
  },
  {
    text: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "Injustice anywhere is a threat to justice everywhere.",
    author: "Martin Luther King Jr.",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou",
  },
  {
    text: "To be, or not to be, that is the question.",
    author: "William Shakespeare",
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  {
    text: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    author: "Marie Curie",
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "The only thing worse than being blind is having sight but no vision.",
    author: "Helen Keller",
  },
  {
    text: "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    author: "Anne Frank",
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
  {
    text: "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
    author: "Marilyn Monroe",
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Don’t wait. The time will never be just right.",
    author: "Napoleon Hill",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Nothing is impossible, the word itself says 'I'm possible'!",
    author: "Audrey Hepburn",
  },
  {
    text: "I am not a product of my circumstances. I am a product of my decisions.",
    author: "Stephen Covey",
  },
  {
    text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
  },
  {
    text: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll",
  },
  {
    text: "The best revenge is massive success.",
    author: "Frank Sinatra",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "If you can dream it, you can achieve it.",
    author: "Zig Ziglar",
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    text: "Your time is limited, don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    text: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
  },
];

function QuoteText({ quote }) {
  return (
    <div>
      <p className="quote" id="text">
        <ChevronIcon /> {quote.text}
      </p>
      <h3 className="author" id="author">
        {quote.author}
      </h3>
    </div>
  );
}

function ChevronIcon() {
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        fill="currentColor"
        class="bi bi-chevron-double-right"
        viewBox="0 0 16 16">
        <path
          fill-rule="evenodd"
          d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
        />
        <path
          fill-rule="evenodd"
          d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </span>
  );
}

function TwitterIcon() {
  return (
    <Button id="twitter-button" class="custom-button">
      <a id="tweet-quote" href="https://www.twitter.com/intent/tweet">
        <svg
          id="twitter-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-twitter"
          viewBox="0 0 16 16">
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15" />
        </svg>
      </a>
    </Button>
  );
}

function QuoteBox() {
  // Define and initialize the state
  const [currentQuote, setCurrentQuote] = useState({});

  useEffect(() => {
    // Initialize with a random quote on component mount
    setCurrentQuote(getRandomQuote());
  }, []);

  // Event handler for the button
  const handleNewQuote = () => {
    setCurrentQuote(getRandomQuote());
    changeFont();
    changeBackground();
  };

  // Random quote function
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  // Random font function
  function changeFont() {
    const fonts = [
      { name: "--font-1", size: "--font-size-1" },
      { name: "--font-2", size: "--font-size-2" },
      { name: "--font-3", size: "--font-size-3" },
      { name: "--font-4", size: "--font-size-4" },
      { name: "--font-5", size: "--font-size-5" },
      { name: "--font-6", size: "--font-size-6" },
      { name: "--font-7", size: "--font-size-7" },
      { name: "--font-8", size: "--font-size-8" },
      { name: "--font-9", size: "--font-size-9" },
      { name: "--font-10", size: "--font-size-10" },
    ];
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    const textElement = document.getElementById("text");
    textElement.style.setProperty("font-family", `var(${randomFont.name})`);
    textElement.style.setProperty("font-size", `var(${randomFont.size})`);
  }

  // Random background color
  function changeBackground() {
    const backgrounds = [
      "--background-1",
      "--background-2",
      "--background-3",
      "--background-4",
      "--background-5",
      "--background-6",
      "--background-7",
    ];
    const randomBackground =
      backgrounds[Math.floor(Math.random() * backgrounds.length)];
    document.body.style.setProperty(
      "background-color",
      `var(${randomBackground})`
    );
  }

  return (
    <Card id="quote-box" class="card border border-5">
      <Card.Body>
        <Card.Text>
          <QuoteText quote={currentQuote} />
        </Card.Text>
        <div id="buttons">
          <TwitterIcon />
          <Button id="new-quote" onClick={handleNewQuote} class="custom-button">
            New Quote
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default function App() {
  return (
    <div>
      <QuoteBox />
    </div>
  );
}
