function liveTime() {
  var greeting = React.createElement('h1', {}, 'Salut le monde');
  var question = React.createElement('h3', {}, 'Quelle heure est-il?');
  var clock = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()}`);
  var app = React.createElement('div', {}, greeting, question, clock);


  ReactDOM.render(
    app,
    document.getElementById('react-app-root')
  );
}

setInterval(liveTime, 1000);
