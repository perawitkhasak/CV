var y = Math.floor(Math.random()*100)+1; 
    let img1='img/loseface.jpg';
    var guess = 0; 
    
    let guessed;
    document.addEventListener('keydown',function(event){
        console.log(event.key);
        if(key='r'){
           window.onreset;
        }
    })
    document.getElementById("submitguess").onclick = function(){ 
           
        var x = document.getElementById("guessField").value; 
 
        if(guess<=10){
            if(x > 100 || x < 1){
                document.querySelector('.result').textContent = "Please Enter Number Between 0 and 100"; 
            }else{
                document.querySelector('.turn').textContent = 10 - guess + " left";
                if(x == y){     
                    document.querySelector('.result').textContent = "CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " TIME ! "; 
                    document.querySelector('.picgame').setAttribute('src','http://www.linese.com/wp-content/uploads/2019/09/scottish-fold-cat.jpg');                  
                    guess = 12;
                }else if(x > y){     
                        guess++;
                        document.querySelector('.result').textContent = "Too High"; 
                    }else{ 
                        guess++; 
                        document.querySelector('.result').textContent = "Too Low"; 
                        
                    } 
                    if(guess == 2){
                        guessed = x;
                    }else{
                        guessed += ", "+x;
                    }
                    document.querySelector('.history').textContent = guessed; 
            }                
        }

        if(guess == 11){
                document.querySelector('.result').textContent = "YOU LOSE! THE NUMBER IS " + y + "."; 
                document.querySelector('.picgame').setAttribute('src','img/loseface.jpg');
               
        }
    
    }