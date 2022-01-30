class Form {
    constructor() {
    
      this.title = createElement('h1')
      this.input = createInput("").attribute("placeholder", "Enter your name");
     this.playButton = createButton("Play");
     this.greeting = createElement("h2");
      this.correct= createElement("h3")
      this.question = createElement('h1');
      this.scorelabel=createElement('h1');
      this.trophy = createImg("winner2.jpg");

      this.score=0;
    
      this.option1 = createElement('h1');
     this.option2 = createElement('h1');
      this.option3 = createElement('h1');
      this.option4 = createElement('h1');
      this.question2 = createElement('h1');
   
      
    
      
      this.playButton2= createButton("Next");
      this.answer1= createInput("").attribute("placeholder","Type your answer");
    
      
    }
  
    setElementsStyle() {
    
      this.input.class("customInput");
      this.playButton.class("customButton");
      this.greeting.class("greeting");


      this.playButton2.class("customButton");
      this.answer1.class("customInput");
      this.correct.class("greeting");
      this.trophy.class("gameTitle");
     
    }
  
    hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
      
      
    }
    
    display() {
      this.setElementsStyle();



      this.title.html("Quiz Game");
      this.title.position(580, 20);

     
 
      
      
    
    this.question.html("Question:-What year was the very first model of the iPhone released? " );
    this.question.position(150, 80);
    this.option1.html("1: 2005" );
    this.option1.position(150, 140);
    this.option2.html("2: 2006" );
    this.option2.position(150, 200);
    this.option3.html("3: 2007 " );
    this.option3.position(150, 260);
    this.option4.html("4: 2008" );
    this.option4.position(150, 320);
    
    this.trophy.position(1500, 160);
    

      
     
    this.playButton2.mousePressed(() => {

      var correctAnswer=3;
      if(this.answer1.value()==correctAnswer){
        

        this.score=this.score+1;
        var scoremsg = `
        SCORE: ${this.score}`;
        this.scorelabel.html(scoremsg);
       
        this.correct.html(`Correct Answer!`);

        sound.play();

      
        
        

          this.question.html("Question:-Which Football Club was designated as the FIFA Club of the Century in 2000?" );
          this.question.position(150, 80);
          this.option1.html("1:Manchester United " );
          this.option1.position(150, 160);
          this.option2.html("2:Real Madrid" );
          this.option2.position(150, 240);
          this.option3.html("3:Liverpool " );
          this.option3.position(150, 320);
          this.option4.html("4:Arsenal" );
          this.option4.position(150, 400);
          
  
       
          this.playButton2.mousePressed(() => {
       
             var CorrectAnswer=2;
      if(this.answer1.value()==CorrectAnswer){
       

        this.score=this.score+1;
        var scoremsg = `
        SCORE: ${this.score}`;
        this.scorelabel.html(scoremsg);
        
        this.correct.html(`Correct Answer!`);
        sound.play();

            this.question.html("Question:-Which was the first country to use tanks in combat during World War I?" );
            this.question.position(150, 80);
            this.option1.html("1: France " );
            this.option1.position(150, 160);
            this.option2.html("2:Japan" );
            this.option2.position(150, 240);
            this.option3.html("3:Britain" );
            this.option3.position(150, 320);
            this.option4.html("4:Germany" );
            this.option4.position(150, 400);

      

            this.playButton2.mousePressed(() => {
              var CorrectAnswer=3;
              if(this.answer1.value()==CorrectAnswer){
               

                this.score=this.score+1;
                var scoremsg = `
                SCORE: ${this.score}`;
                this.scorelabel.html(scoremsg);
                
                this.correct.html(`Correct Answer!`);
                sound.play();
        
                    this.question.html("Question:-Who is the father of Biology?" );
                    this.question.position(150, 80);
                    this.option1.html("1: Carl Linnaeus " );
                    this.option1.position(150, 160);
                    this.option2.html("2: Theophrastus" );
                    this.option2.position(150, 240);
                    this.option3.html("3: Charakan  " );
                    this.option3.position(150, 320);
                    this.option4.html("4: Aristotle" );
                    this.option4.position(150, 400);

                    

                    this.playButton2.mousePressed(() => {
               var CorrectAnswer=4;
              if(this.answer1.value()==CorrectAnswer){
               

                this.score=this.score+1;
                var scoremsg = `
                SCORE: ${this.score}`;
                this.scorelabel.html(scoremsg);
                
                this.correct.html(`Correct Answer!`);
                sound.play();
        
                    this.question.html("Question:-Along with NEIL ARMSTRONG and BUZZ ALDRIN which astronaut was on the APOLLO 11 MISSION?" );
                    this.question.position(150, 80);
                    this.option1.html("1: Michael Collins " );
                    this.option1.position(150, 160);
                    this.option2.html("2: James Lovell" );
                    this.option2.position(150, 240);
                    this.option3.html("3: Bill Murray" );
                    this.option3.position(150, 320);
                    this.option4.html("4:Scott Kelly" );
                    this.option4.position(150, 400);

                    
                    
                    this.playButton2.mousePressed(() => {
                      var CorrectAnswer=1;
                      if(this.answer1.value()==CorrectAnswer){
                        
                        this.question.hide();
                        this.option1.hide();
                        this.option2.hide();
                        this.option3.hide();
                        this.option4.hide();
                        this.playButton2.hide();
                        this.answer1.hide();
                        
        
                        this.score=this.score+1;
                        var scoremsg = `
                        SCORE: ${this.score}`;
                        this.scorelabel.html(scoremsg);

                        if(this.score>=3){
                          var scoremsg = `
                          Well Done! ${this.input.value()}</br>
                          
                        SCORE: ${this.score}`;
                        this.scorelabel.html(scoremsg);
                        this.greeting.hide();
                        this.trophy.position(600, 160);
                        this.correct.hide();
                        this.scorelabel.position(width/2-80,height/2+180);
                        sound3.play();
                       
                       


                        }
                        else{
                          var scoremsg = `
                          Sorry, better luck next time! ${this.input.value()}</br>
                          
                        SCORE: ${this.score}`;
                        this.scorelabel.html(scoremsg);
                        this.greeting.hide();

                        }
                      }
                      else{
                        this.correct.html('Sorry,Wrong Answer!');
                        sound2.play();
                        this.greeting.hide();
                        
                        
                                this.question.hide();
                                this.option1.hide();
                                this.option2.hide();
                                this.option3.hide();
                                this.option4.hide();
        
                                this.playButton2.hide();
                                this.answer1.hide();
        
                                var scoremsg = `
                               
                                
                              SCORE: ${this.score}`;
                              this.scorelabel.html(scoremsg);
                     
                      }
                    });
              }
              else{
                this.correct.html('Sorry,Wrong Answer!');
                sound2.play();
                this.greeting.hide();
                
                
                        this.question.hide();
                        this.option1.hide();
                        this.option2.hide();
                        this.option3.hide();
                        this.option4.hide();

                        this.playButton2.hide();
                        this.answer1.hide();

                        var scoremsg = `
                       
                        
                      SCORE: ${this.score}`;
                      this.scorelabel.html(scoremsg);
              
              }

                    });
                    
              }
              else{
                this.correct.html('Sorry,Wrong Answer!');
                sound2.play();
                this.greeting.hide();
                
                
                        this.question.hide();
                        this.option1.hide();
                        this.option2.hide();
                        this.option3.hide();
                        this.option4.hide();

                        this.playButton2.hide();
                        this.answer1.hide();

                        var scoremsg = `
                       
                        
                      SCORE: ${this.score}`;
                      this.scorelabel.html(scoremsg);
             
           
                      }

            });
      }
      else{
        this.correct.html('Sorry,Wrong Answer!');
        sound2.play();
        this.greeting.hide();

        this.question.hide();
                        this.option1.hide();
                        this.option2.hide();
                        this.option3.hide();
                        this.option4.hide();

                        this.playButton2.hide();
                        this.answer1.hide();

                        var scoremsg = `
                       
                        
                      SCORE: ${this.score}`;
                      this.scorelabel.html(scoremsg);
                      


                        


      
      }
      
          });
        
        }
      else{
        this.correct.html('Sorry,Wrong Answer!');
        sound2.play();
        this.greeting.hide();

        this.question.hide();
                        this.option1.hide();
                        this.option2.hide();
                        this.option3.hide();
                        this.option4.hide();
        
                        this.playButton2.hide();
                        this.answer1.hide();

                        var scoremsg = `
                        
                        
                      SCORE: ${this.score}`;
                      this.scorelabel.html(scoremsg);

      
      }
       
    });

      
        

       

 
    

      
     
      
  
     
  
      this.input.position(width / 2 +300, height / 2 - 160);
      this.playButton.position(width / 2 + 300, height / 2 - 110);
      this.greeting.position(width / 2 - 600, height / 2 - -200);
  
      this.playButton2.position(width / 2 +300, height / 2 -1);
      this.answer1.position(width / 2 +300, height / 2 - 50);
      this.correct.position(width/2+300,height/2+ 200);
      this.scorelabel.position(width/2+300,height/2-300);
      
    
      this.playButton.mousePressed(() => {
        this.playButton.hide();
        this.input.hide();

        var message = `
        Hello ${this.input.value()}
        </br>Welcome`;
        this.greeting.html(message);

     });


     
    }
      

       
}