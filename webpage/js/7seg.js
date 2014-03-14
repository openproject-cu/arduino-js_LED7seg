var INPUT = false;
var OUTPUT = true;

var HIGH = 1;
var LOW = 0;

var LEFT_TOP = 10;
var LEFT_BOTTOM = 9;
var CENTER_TOP = 3;
var CENTER_MIDDLE = 11;
var CENTER_BOTTOM = 8;
var RIGHT_TOP = 2;
var RIGHT_BOTTOM = 5;
var DOT = 4;


var arduino = document.arduino;

var setup = function(){
  arduino.pinMode(LEFT_TOP, OUTPUT);
  arduino.pinMode(LEFT_BOTTOM, OUTPUT);
  arduino.pinMode(CENTER_TOP, OUTPUT); 
  arduino.pinMode(CENTER_MIDDLE, OUTPUT);
  arduino.pinMode(CENTER_BOTTOM, OUTPUT);
  arduino.pinMode(RIGHT_TOP, OUTPUT);
  arduino.pinMode(RIGHT_BOTTOM, OUTPUT);
  arduino.pinMode(DOT, OUTPUT);

  arduino.digitalWrite(DOT, HIGH);
};

var zero = function() {
  arduino.digitalWrite(LEFT_TOP, HIGH);
  arduino.digitalWrite(LEFT_BOTTOM, HIGH);
  arduino.digitalWrite(CENTER_TOP, HIGH);
  arduino.digitalWrite(CENTER_MIDDLE, LOW);
  arduino.digitalWrite(CENTER_BOTTOM, HIGH);
  arduino.digitalWrite(RIGHT_TOP, HIGH);
  arduino.digitalWrite(RIGHT_BOTTOM, HIGH);
  arduino.digitalWrite(DOT, LOW);
};

var one = function() {
  arduino.digitalWrite(LEFT_TOP, LOW);
  arduino.digitalWrite(LEFT_BOTTOM, LOW);
  arduino.digitalWrite(CENTER_TOP, LOW);
  arduino.digitalWrite(CENTER_MIDDLE, LOW);
  arduino.digitalWrite(CENTER_BOTTOM, LOW);
  arduino.digitalWrite(RIGHT_TOP, HIGH);
  arduino.digitalWrite(RIGHT_BOTTOM, HIGH);
  arduino.digitalWrite(DOT, LOW);
};

var two = function() {
  arduino.digitalWrite(LEFT_TOP, LOW);
  arduino.digitalWrite(LEFT_BOTTOM, HIGH);
  arduino.digitalWrite(CENTER_TOP, HIGH);
  arduino.digitalWrite(CENTER_MIDDLE, HIGH);
  arduino.digitalWrite(CENTER_BOTTOM, HIGH);
  arduino.digitalWrite(RIGHT_TOP, HIGH);
  arduino.digitalWrite(RIGHT_BOTTOM, LOW);
  arduino.digitalWrite(DOT, LOW);
};

var three = function() {
  arduino.digitalWrite(LEFT_TOP, LOW);
  arduino.digitalWrite(LEFT_BOTTOM, LOW);
  arduino.digitalWrite(CENTER_TOP, HIGH);
  arduino.digitalWrite(CENTER_MIDDLE, HIGH);
  arduino.digitalWrite(CENTER_BOTTOM, HIGH);
  arduino.digitalWrite(RIGHT_TOP, HIGH);
  arduino.digitalWrite(RIGHT_BOTTOM, HIGH);
  arduino.digitalWrite(DOT, LOW);
};

var four = function() {
  arduino.digitalWrite(LEFT_TOP, HIGH);
  arduino.digitalWrite(LEFT_BOTTOM, LOW);
  arduino.digitalWrite(CENTER_TOP, LOW);
  arduino.digitalWrite(CENTER_MIDDLE, HIGH);
  arduino.digitalWrite(CENTER_BOTTOM, LOW);
  arduino.digitalWrite(RIGHT_TOP, HIGH);
  arduino.digitalWrite(RIGHT_BOTTOM, HIGH);
  arduino.digitalWrite(DOT, LOW);
};

var five = function() {
  arduino.digitalWrite(LEFT_TOP, HIGH);
  arduino.digitalWrite(LEFT_BOTTOM, LOW);
  arduino.digitalWrite(CENTER_TOP, HIGH);
  arduino.digitalWrite(CENTER_MIDDLE, HIGH);
  arduino.digitalWrite(CENTER_BOTTOM, HIGH);
  arduino.digitalWrite(RIGHT_TOP, LOW);
  arduino.digitalWrite(RIGHT_BOTTOM, HIGH);
  arduino.digitalWrite(DOT, LOW);
};

var six = function() {
  arduino.digitalWrite(LEFT_TOP, HIGH);
  arduino.digitalWrite(LEFT_BOTTOM, HIGH);
  arduino.digitalWrite(CENTER_TOP, HIGH);
  arduino.digitalWrite(CENTER_MIDDLE, HIGH);
  arduino.digitalWrite(CENTER_BOTTOM, HIGH);
  arduino.digitalWrite(RIGHT_TOP, LOW);
  arduino.digitalWrite(RIGHT_BOTTOM, HIGH);
  arduino.digitalWrite(DOT, LOW);
};

var seven = function() {
  arduino.digitalWrite(LEFT_TOP, HIGH);
  arduino.digitalWrite(LEFT_BOTTOM, LOW);
  arduino.digitalWrite(CENTER_TOP, HIGH);
  arduino.digitalWrite(CENTER_MIDDLE, LOW);
  arduino.digitalWrite(CENTER_BOTTOM, LOW);
  arduino.digitalWrite(RIGHT_TOP, HIGH);
  arduino.digitalWrite(RIGHT_BOTTOM, HIGH);
  arduino.digitalWrite(DOT, LOW);
};

var eight = function() {
  arduino.digitalWrite(LEFT_TOP, HIGH);
  arduino.digitalWrite(LEFT_BOTTOM, HIGH);
  arduino.digitalWrite(CENTER_TOP, HIGH);
  arduino.digitalWrite(CENTER_MIDDLE, HIGH);
  arduino.digitalWrite(CENTER_BOTTOM, HIGH);
  arduino.digitalWrite(RIGHT_TOP, HIGH);
  arduino.digitalWrite(RIGHT_BOTTOM, HIGH);
  arduino.digitalWrite(DOT, LOW);
};

var night = function() {
  arduino.digitalWrite(LEFT_TOP, HIGH);
  arduino.digitalWrite(LEFT_BOTTOM, LOW);
  arduino.digitalWrite(CENTER_TOP, HIGH);
  arduino.digitalWrite(CENTER_MIDDLE, HIGH);
  arduino.digitalWrite(CENTER_BOTTOM, HIGH);
  arduino.digitalWrite(RIGHT_TOP, HIGH);
  arduino.digitalWrite(RIGHT_BOTTOM, HIGH);
  arduino.digitalWrite(DOT, LOW);
};

var dot = function() {
  arduino.digitalWrite(LEFT_TOP, LOW);
  arduino.digitalWrite(LEFT_BOTTOM, LOW);
  arduino.digitalWrite(CENTER_TOP, LOW);
  arduino.digitalWrite(CENTER_MIDDLE, LOW);
  arduino.digitalWrite(CENTER_BOTTOM, LOW);
  arduino.digitalWrite(RIGHT_TOP, LOW);
  arduino.digitalWrite(RIGHT_BOTTOM, LOW);
  arduino.digitalWrite(DOT, HIGH);
};

// 遊び
var loop = function() {
  zero();
  one();
  two();
  three();
  four();
  five();
  six();
  seven();
  eight();
  night();
};
