//Factory Pattern

function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "tester";
}

function Details() {
  console.log(`My name is ${this.name} and I am a ${this.type}`);
}

function employeefactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
        break;
      case 2:
        return new Tester(name);
        break;
    }
  };
}

const empfact = new employeefactory();
const employees = [];

employees.push(empfact.create("Himanshu", 1));
employees.push(empfact.create("Roy", 1));
employees.push(empfact.create("Ram", 2));

employees.map((emp) => {
  Details.call(emp);
});

//Singleton Pattern

const signelton = (() => {
  let instance = null;
  function creatInstance() {
    return {
      name: "HImanshu",
      age: 55,
      checkCorrect: Math.floor(Math.random() * 100),
    };
  }
  function getInstance() {
    if (!instance) {
      instance = creatInstance();
    }
    return instance;
  }
  return {
    getInstance,
  };
})();

console.log(signelton.getInstance());
console.log(signelton.getInstance());
console.log(signelton.getInstance());
console.log(signelton.getInstance());


//subscriber Pattern

class YoutubeChannel {
   
    subscriberList = [];
    
    addSubscriber(subscriber){
        this.subscriberList.push(subscriber)
    }
  
    unSubscribe(id){
        this.subscriberList = this.subscriberList.filter(sub =>sub.id!==id)
    }
    publish(message){
        this.subscriberList.map((sub)=>{
            return sub.notify(message)
        })
    }
}

class Subscriber{
    constructor(name,id){
        this.name=name;
        this.id=id
       
    }
    notify(message){
            console.log(`Hey ${this.name}, - ${message}`)  
    }
}

const sub1 = new Subscriber("Himanshu",1)
const sub2 = new Subscriber("Rohit",2)
const sub3 = new Subscriber("Umesh",3)



const TechnicalHimanshu = new YoutubeChannel();
TechnicalHimanshu.addSubscriber(sub1);
TechnicalHimanshu.addSubscriber(sub2);
TechnicalHimanshu.addSubscriber(sub3);



TechnicalHimanshu.publish("Video is out now. Please watch");


