function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5t8BICGH58T":
        Script1();
        break;
      case "6OsKSi76mwH":
        Script2();
        break;
      case "6D1nqey2tu6":
        Script3();
        break;
      case "5wBBwcvlfO7":
        Script4();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('5oMfGHYqn3E');
const duration = 750;
const easing = 'ease-out';
const id = '6RbRRHmcbQF';
const teeterAmount = 4;
const signs = ['-', '', '-'];

const delay = 7500;
addToTimeline(
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6L3ZIhqilyL');
const duration = 500;
const easing = 'ease-out';
const id = '6H5qc6HV75B';
const teeterAmount = 4;
const signs = ['-', '', '-'];

const delay = 5250;
addToTimeline(
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6AX8p8zIYMh');
const duration = 750;
const easing = 'ease-out';
const id = '6eFF9d2Zsay';
const teeterAmount = 4;
const signs = ['-', '', '-'];

const delay = 10500;
addToTimeline(
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('5cRiO6jSQtW');
const duration = 750;
const easing = 'ease-out';
const id = '6FTragaPbeZ';
const teeterAmount = 4;
const signs = ['-', '', '-'];

const delay = 14000;
addToTimeline(
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
