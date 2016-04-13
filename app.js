(function(){
  var app = angular.module("MyApp", []);

  app.controller('AppCtrl',function(){
    this.products = fighters;
  });

  var fighters = [
    {
      name: 'Defender',
      color: 'Black',
      hp: 3500,
      fuel: "Full Tank",
      date: "",
      lat: "33.3936955",
      lng: "-104.5230833",
      description: 'The best fighter',
      img: "resources/img/defender.jpg",
      layout:"defender.html"
    },
    {
      name: 'First Order',
      color: 'grey',
      hp: 2500,
      fuel: "Half Tank",
      date: "",
      lat: "40.4169149",
      lng: "-3.7035676",
      description: 'The modern fighter',
      img: "resources/img/first_order.jpg",
      layout:"first_order.html"
    },
    {
      name: 'OT',
      color: 'white',
      hp: 3000,
      fuel: "Empty Tank",
      date: "",
      lat: "35.6808126",
      lng: "139.7666296",
      description: 'The classic fighter',
      img: "resources/img/ot.jpg",
      layout:"ot.html"
    }
  ];

})();
