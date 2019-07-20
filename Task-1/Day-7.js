//this is question 4
class Animal{
    constructor(legs){
        this.legs=legs;

    };
    getlegs(){
        return this.legs;
    };

}
class Dog extends Animal{   //extends keword is used  to inherit a property from
    constructor(legs)       //parent class to child class,here the property inherited is legs.
    {
        super(legs)
        this.voice="bowbow";
    }
    getVoice(){
        return this.voice;
    }
}
a=new Dog(4,"abc","xyz");
console.log(a.getVoice()+"\n");
