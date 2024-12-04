var subjects = {
    //SEMESTER 1
    HS6151: [5,"Technical English I"],
    PH6151: [5,"Engineering Physics"],
    MA6151: [5,"Mathematics I"],
    CS6101: [6,"Programming with C"],
    CS6102: [3,"Computational Thinking"],

    //SEMESTER 2
    HS6251: [5,"Technical English II"],
    CY6251: [5,"Engineering Chemistry"],
    MA6251: [5,"Discrete Mathematics"],
    GE6251: [5,"Engineering Graphics"],
    CS6103: [4,"Application Development Practices"],

    //SEMESTER 3
    CS6104: [7,"Data Structures and Algorithms"],
    CS6105: [7,"Digital Fundamentals and Computer Organization"],
    MA6351: [5,"Probability and Statistics"],
    EE6351: [7,"Basics of Electrical and Electronics Engineering"],

    //SEMESTER 3 & 4
    OE6391: [3,"Basic Presentation Skills"],
    OE6392: [3,"Critical Thinking Skills"],
    OE6393: [3,"Interview Skills"],
    OE6394: [3,"Environmental Science and Engineering"],

    //SEMESTER 4
    CS6106: [6,"Database Management Systems"],
    CS6107: [5,"Computer Architecture"],
    CS6108: [6,"Operating Systems"],
    NM6001: [2, "Naan Mudhalvan I"],

    //SEMESTER 4 & 5
    MA6201: [5,"Linear Algebra"],
    CS6201: [5,"Graph Theory"],
    EC6201: [6,"Signals and Systems "],
    CS6202: [5,"Theory of Computation"],

    //SEMESTER 5
    CS6109: [6,"Compiler Design"],
    CS6110: [6,"Object Oriented Analysis and Design"],
    CS6111: [6,"Computer Networks"],
    NM6002: [2,"Naan Mudhalvan II"],

    //SEMESTER 5 & 6
    CS6301: [6,"Machine Learning"],
    CS6302: [4,"Programming Paradigms"],
    CS6303: [4,"Distributed Systems"],
    CS6304: [4,"Software Engineering"],
    CS6305: [6,"Microprocessors"],
    CS6306: [6,"Parallel Programming"],
    CS6307: [6,"Advanced Algorithms"],
    CS6308: [6,"Java Programming"],

    //SEMESTER 6
    CS6611: [3,"Creative and Innovative Project"],
    CS6001: [4,"Data Mining"],
    CS6002: [4,"Soft Computing"],
    CS6003: [4,"Big Data Analytics"],
    CS6004: [4,"Information Visualization"],
    CS6005: [4,"Deep Learning Techniques"],

    //SEMESTER 7
    CS6006: [4,"Cloud Computing"],
    CS6007: [4,"Information Security"],
    CS6008: [4,"Cryptography and Network Security"],
    CS6009: [4,"Mobile Networks"],
    CS6010: [4,"Wireless and Sensor Networks"],
    CS6011: [4,"GPU Computing"],
    CS6012: [4,"Embedded Systems"],
    CS6013: [4,"Unix Internals "],
    CS6014: [4,"IoT and Smart Appliances"],
    CS6015: [4,"Multicore Architectures"],
    CS6016: [4,"Graphics and Multimedia"],
    CS6017: [4,"Human Computer Interaction"],
    CS6018: [4,"Image Processing"],
    CS6019: [4,"Augmented Reality and Virtual Reality"],
    CS6020: [4,"Digital Signal Processing"],
    CS6021: [4,"Software Testing & Quality Assurance"],
    CS6022: [4,"Software Project Management"],
    CS6023: [4,"Software Test Automation"],
    CS6024: [4,"Test Driven Development"],
    CS6025: [4,"Supply Chain Management"],

    //SEMESTER 8
    CS6026: [4,"Game Development"],
    CS6027: [4,"Modeling and Simulation"],
    CS6028: [4,"Queuing Theory and Performance Evaluation of Computer Systems"],
    CS6029: [4,"Social Network Analysis"],
    CS6030: [4,"Natural Language Processing"],
    CS6031: [3,"Database Tuning"],
    CS6032: [3,"Software Defined Networks"],
    CS6033: [3,"Storage Area Networks"],
    CS6034: [3,"Service Oriented Architecture"],
    CS6035: [3,"Entrepreneurship Development"],
    CS6811: [9,"Project Work"]
};

var empty = [];
var semesters = {
    "semester1": ["HS6151","PH6151","MA6151","CS6101","CS6102"],
    "semester2": ["HS6251","CY6251","MA6251","GE6251","CS6103"],
    "semester3": ["CS6104","CS6105","MA6351","EE6351"],
    "semester4": ["CS6106","CS6107","CS6108","NM6001"],
    "semester5": ["CS6109","CS6110","CS6111","NM6002"],
    "semester6": ["CS6611"],
    "semester7": [],
    "semester8": ["CS6811"]
};

var myList = new Set();
var additional = [];
electives = ["OE","MSC","PSC","PE01","PE02","PE03","PE04","PE05","PE06","PE07"];

var OEs = ["OE6391","OE6392","OE6393","OE6394"];
var MSCs = ["MA6201","CS6201","EC6201","CS6202"];
var PSCs = ["CS6301","CS6302","CS6303","CS6304","CS6305","CS6306","CS6307","CS6308"];

var PE01s = ["CS6001","CS6002","CS6003","CS6004","CS6005"];
var PE02s = ["CS6006","CS6007","CS6008","CS6009","CS6010"];
var PE03s = ["CS6011","CS6012","CS6013","CS6014","CS6015"];
var PE04s = ["CS6016","CS6017","CS6018","CS6019","CS6020"];
var PE05s = ["CS6021","CS6022","CS6023","CS6024","CS6025"];
var PE06s = ["CS6026","CS6027","CS6028","CS6029","CS6030"];
var PE07s = ["CS6031","CS6032","CS6033","CS6034","CS6035"];

function getPoint (grade) {
    switch (grade) {
        case 'O': return 10;
        case 'A+': return 9;
        case 'A': return 8;
        case 'B+': return 7;
        case 'B': return 6;
        case 'C': return 5;
        case 'RA': return -1;
    }
}

function calculate() {
    var array = new Array();
    const points = new Array();
    var credPoint = 0;
    var cred = 0;
    var point;
    array = additional;

    for (i=0 ; i<array.length ; i++) {
        point = getPoint(document.getElementById(array[i]).textContent);
        points.push(point);
        if (points[i] != -1) {
            credPoint = credPoint + (points[i] * subjects[array[i]][0]);
            cred += subjects[array[i]][0];
        }
    }
    document.getElementById('final-result').textContent = "You got '" + (credPoint/cred).toFixed(2) + "' points.";
    document.getElementById('final-result').style.display = "block";
}
