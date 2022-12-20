const components = () => {
  const element = document.createElement('div');
  element.setAttribute('id', 'main-body');
  element.innerHTML = `
      <h1>Leaderboard</h1>
<div id="outline">
    <div id="score-section">
        <span id="actions">
            <h2>Recent scores</h2>
            <button type="">Refresh</button>
        </span>
        <div id="display-section">
            <li>Name: 100</li>
            <li>Name: 20</li>
            <li>Name: 50</li>
            <li>Name: 78</li>
            <li>Name: 125</li>
            <li>Name: 77</li>
            <li>Name: 42</li>
        </div>
    </div>
    <div class="adding-scores">
        <h2>Add your scores</h2>
        <form action="" id="form">
            <ul>
                <input type="text" name="name" placeholder="Your name">
            </ul>
            <ul>
                <input type="text" name="scores" placeholder="Your score">
            </ul>
            <ul>
                <button type="submit">Submit</button>
            </ul>
        </form>
    </div>
</div>
         `;
  return element;
};

document.body.appendChild(components());