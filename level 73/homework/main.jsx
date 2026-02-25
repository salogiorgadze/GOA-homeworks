// DOM არის ბრაუზერის მიერ შექმნილი პროგრამული წარმოდგენა HTML დოკუმენტის შესახებ
// DOM	                                                          Virtual DOM
// რეალური ბრაუზერის DOM	                               მეხსიერებაში არსებული JS ობიექტი
// ცვლილება პირდაპირ ახდენს გავლენას UI-ზე	               ჯერ ვირტუალურ დონეზე ხდება ცვლილება
// ხშირად იწვევს reflow/repaint	                           ამცირებს რეალურ DOM ოპერაციებს
// ნელია დიდი აპლიკაციებისთვის	                           ოპტიმიზებულია performance-სთვის
// პირდაპირი მანიპულაცია	                               შედარება (diffing) და batch განახლება

import React from "react";

function AboutMe() {
  function handleClick() {
    alert("hello");
  }

  return (
    <div>
      <h1>About Me</h1>

      <img 
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
        alt="profile"
      />

      <p>hello</p>
      <p>hello</p>
      <p>hello</p>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default AboutMe;