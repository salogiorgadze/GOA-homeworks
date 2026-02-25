/*
2) შექმენით Posts, Post კომპონენტები components - folder - ში, Posts კომპონენტში მიიღეთ posts მასივი props - ის სახით, შემდეგ კი მოცემულ მასივს გადაუარეთ და თითოეული პოსტისთვის გამოიძახეთ Post კომპონენტი props - ად კი გადაეცით კონკრეტული პოსტის ობიექტი
3) Post კომპონენტმა props - ის სახით უნდა მიიღოს პოსტის ობიექტი, პოსტის ინფორმაცია კი გამოიტანეთ tags - ების გამოყენებით, გამოიყენეთ კუთვნილებები როგორიცაა type, content, tags და ა.შ. ჩაშენებული მასივებისთვისაც ანალოგიურად გამოიყენეთ map - მეთოდი
4) საბოლოოდ შექმენით Title კომპონენტი რომელიც აგრეთვე მიიღებს p - პოსტის ობიექტს, და გამოიტანს შესაბამის სათაურებს, იმ შემთხვევაში თუ პოსტის likes კუთვნილების მნიშვნელობა მეტია 170 - ზე მაშინ გამოიტანეთ სათაური
Post Title: Most popular
იმ შემთხვევაში თუ shares - მეტია 80 - ზე მაშინ გამოიტანეთ სათაური
Post Title: Most shared Post
იმ შემთხვევაში თუ პოსტის comments მასივის სიგრძე მეტია 2 - ზე გამოიტანეთ სათაური
Post Title: Most commented
სხვა შემთხვევაში კი 
Normal Post
მოცემული კომპონენტი კი გამოიძახეთ Post - კომპონენტში და გადაეცით შესაბამისი props */

import Posts from "./components/Posts";
function App() {
  const posts = [
    {
      id: 1,
      type: "tech",
      content: "Boost your productivity with the Pomodoro technique.",
      tags: ["productivity", "focus", "time-management"],
      author: "Alex Johnson",
      date: "2026-02-22",
      likes: 120,
      shares: 45,
      comments: [
        { user: "Sam", text: "I swear by this method!" },
        { user: "Nina", text: "Does anyone use a timer app for this?" },
      ],
    },
    {
      id: 2,
      type: "motivation",
      content: "Progress is progress, no matter how small.",
      tags: ["motivation", "growth", "mindset"],
      author: "Maria Lopez",
      date: "2026-02-21",
      likes: 200,
      shares: 80,
      comments: [
        { user: "Chris", text: "Needed this reminder today 🙌" },
        { user: "Dana", text: "Consistency beats perfection!" },
      ],
    },
    {
      id: 3,
      type: "funfact",
      content: "Did you know honey never spoils?",
      tags: ["funfact", "food", "science"],
      author: "ScienceDaily",
      date: "2026-02-20",
      likes: 95,
      shares: 30,
      comments: [
        { user: "Leo", text: "That’s wild! 3,000 years old honey?!" },
        { user: "Ella", text: "Guess I’ll stock up on honey now 😂" },
      ],
    },
    {
      id: 4,
      type: "engagement",
      content: "Coffee or tea? Share your favorite ritual!",
      tags: ["engagement", "lifestyle", "poll"],
      author: "LifestyleHub",
      date: "2026-02-19",
      likes: 310,
      shares: 120,
      comments: [
        { user: "Mike", text: "Coffee all the way ☕" },
        { user: "Sophie", text: "Tea is life 🍵" },
      ],
    },
    {
      id: 5,
      type: "professional",
      content: "Networking is about building genuine relationships.",
      tags: ["career", "networking", "professional-growth"],
      author: "LinkedIn Insights",
      date: "2026-02-18",
      likes: 150,
      shares: 60,
      comments: [
        { user: "Raj", text: "So true, quality over quantity." },
        { user: "Tina", text: "I’ve met my best mentors this way." },
        { user: "Nino", text: "3iuefhdyu3hefhui3rf" },
      ],
    },
  ];
  return (
    <>
      <Posts posts={posts} />
    </>
  );
}

export default App;
