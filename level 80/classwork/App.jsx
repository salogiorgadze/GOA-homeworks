import React, { useState } from "react";

function App() {
  // მდგომარეობის (state) შექმნა:
  // useState(0) ქმნის state-ს სახელად 'count', რომელსაც თავდაპირველად მნიშვნელობა 0 აქვს
  // setCount არის ფუნქცია, რომლის საშუალებითაც შეგვიძლია count-ის მნიშვნელობის განახლება
  const [count, setCount] = useState(0);

  // ღილაკზე დაკლიკებისას შევქმნით ფუნქციას, რომელიც გაზრდის count-ს ერთით
  const increment = () => {
    setCount(count + 1); // setCount აბრუნებს ახალ მნიშვნელობას და განახლებს კომპონენტს
  };

  return (
    <div>
      {/* პარაგრაფში ვაჩვენებთ მიმდინარე count-ს */}
      <p>Current count: {count}</p>

      {/* ღილაკი, რომელზეც დაკლიკებისას increment ფუნქცია იძახება */}
      <button onClick={increment}>Increase Count</button>
    </div>
  );
}

export default App;