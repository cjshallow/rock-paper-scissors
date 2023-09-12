function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    let selection = choices[((Math.floor(Math.random() * choices.length)))];
    return selection;
}


