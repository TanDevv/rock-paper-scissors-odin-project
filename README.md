Simple Rock, Paper, Scissors played through the console, courtsey of The Odin Project as part of their road through Javascript. 

My code for this was quite verbose, with if/else statements mixed with logicals such as && and switch statements, I know for readability sake I would use case, object literals to be more consistent but as this was my first ever project in Javascript, I wanted to try everything I have learned so far even if they are a bit of an eye-sore. 

My issue at first was mostly the prompt input, even if you left it empty or put anything in, it would count as a game and you could just spam it 5 times to make a tie... 

I found adding --i to the else statement in playRound() fixed my issue, I am not sure if this is very semantic, I think I would have wanted to do something more neat-looking next time.
