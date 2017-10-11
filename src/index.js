var heading = React.createElement('h1', {}, 'Help Queue');
var ticketLocation = React.createElement('h3', {}, '3A');
var ticketNames = React.createElement('h3', {}, 'Sam and Andrew');
var ticketIssue = React.createElement('h3', {}, 'Firebase won\'t save record!');
var app = React.createElement('div', {}, heading, ticketLocation, ticketNames, ticketIssue);

ReactDOM.render(
  app,
  document.getElementById('react-app-root')
);
