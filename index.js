const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 class="heading-element">Congratulations</h1>
    <div class="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image-alignments"
      />
      <h1 class="name">Kiran V</h1>
      <p class="institute-heading">
        Vishnu Institute of Computer Education and Technology,Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="image-alignments"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
