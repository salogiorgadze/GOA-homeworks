const form = document.getElementById("noteForm");
const input = document.getElementById("noteInput");
const notes = document.getElementById("notes");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (input.value === "") return;

  notes.innerHTML += `
    <div class="note">
      <span>${input.value}</span>
      <button onclick="this.parentElement.remove()">Delete</button>
    </div>
  `;

  form.reset();
});
