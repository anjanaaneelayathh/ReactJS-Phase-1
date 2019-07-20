let a={
    fname:"Benedict Timothy Carlton",
    lname:"Cumberbatch",
    age:"43 yrs old",
    profession:"actor",
    spouse:" married to Sophie Hunter",
    yearsOfExp:"20 yrs work experience",
    noOfMovies:"38 films",
    noOfTheatre:"27 theatre",
    noOfRadio:"40 radio",
    noOfTvShows:"27 tvshows",
    noOfNarration:"14 narration",
    noOfVideoGames:"4 vediogames",
    latestMovie:"Avengers:Endgame",
    directorOfMovie:"Anthony and Joe Russo",
    noOfAwards:"23 awards",
    charachterName:"Doctor Stephen Strange",
    aboutCharachter:"Doctor Strange serves as the Sorcerer Supreme" +
                   "the primary protector of Earth against magical"+
                   " and mystical threats.",
    superPower:"Strange becomes a practitioner of both"+
               "the mystical arts and the martial arts."+"He has a suit consisting of two main relics,"+ 
               "the Cloak of Levitation and the Eye of Agamotto, which give him added powers.",
    getfullname:()=>{
        return `${this.fname} ${this.lname}`;

    },
    getBio:()=>{
        return `${this.age}\n ${this.spouse}\n ${this.profession}\n ${this.yearsOfExp}\n`;

    },
    getAbout:()=>{
        return `${this.fname} ${this.lname}\n${this.noOfMovies}\n`+
        ` ${this.noOfTvShows}\n ${this.noOfNarration}\n ${this.noOfVideoGames}\n`+
        `${this.noOfAwards}`;

    },
    getCharachter:()=>{
        return `${this.fname} ${this.lname}`;

    },
    
    
    
    




}
console.log("Fullname:"+a.getfullname());
console.log("Bio:"+a.getBio());
console.log("About:"+a.getAbout());
console.log("Fullname of the charachter:"+a.getCharachter());
console.log("Number of movies and years of experience:"+a.getfullname());
console.log("Fullname:"+a.getfullname());



let newData = { ...a , ...b }

 console.log('new updated data: ',newData)


