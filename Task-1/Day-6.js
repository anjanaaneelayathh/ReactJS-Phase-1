//this is question 3

class DrStrange{
    name="Benedict Cumberbatch";
    constructor(){
        this.age="43 years old ";
        this.profession="actor";
        this.spouse="  marriedSophie Hunter";
        this.yearsOfExp="20 yrs of exp";
        this.noOfMovies="38 films";
        this.noOfTheatr="27 theatres";
        this.noOfRadio="40 radio";
        this.noOfTvShows="27 tvshows";
        this.noOfNarration="14 narration ";
        this.noOfVideoGames="4 vediogames";
        this.latestMovie="Avengers:Endgame";
        this.directorOfMovie="Anthony and Joe Russo";
        this.noOfAwards="23 awards";
        this.charachterName="Doctor Stephen Strange";
        this.aboutCharachter="Doctor Strange serves as the Sorcerer Supreme" +
                   "the primary protector of Earth against magical"+
                   " and mystical threats.";
        this.superPower="Strange becomes a practitioner of both"+
               "the mystical arts and the martial arts."+"He has a suit consisting of two main relics,"+ 
               "the Cloak of Levitation and the Eye of Agamotto, which give him added powers.";
    


    }
    getfullname=()=>{
        return this.name;
        
    }
    getBio=()=>{
        return `${this.age}\n ${this.spouse}\n ${this.profession}\n ${this.yearsOfExp}\n`;

    }
    getAbout=()=>{
        return `${this.fname} ${this.lname}\n${this.noOfMovies}\n`+
        ` ${this.noOfTvShows}\n ${this.noOfNarration}\n ${this.noOfVideoGames}\n`+
        `${this.noOfAwards}\n`;

    }
    getCharachter=()=>{
        return `${this.charachterName} \n${this.aboutCharachter}\n${this.superPower}\n`;

    }
    getExperience=()=>{
        return `${this.noOfMovies} \n${this.yearsOfExp}\n`;

    }
    
}




let a =new DrStrange()          
console.log("fullname:"+a.getfullname());
console.log("bio"+a.getBio());
console.log("about"+a.getAbout());
console.log("charachter"+a.getCharachter());
console.log("Exp"+a.getExperience());







