2048-react
==========

This is a clone of [2048](http://gabrielecirulli.github.io/2048/) implemented using React. It's running live [here](http://eliasdearaujo.com).

The game logic is implemented in board.js. It was much cleaner at first, but in order to get movement animations, a lot of state needs to be saved for each of the tiles on the board.

To run, simply start a web server serving the main project directory. For example, using ```node-static```, you can do

    npm install -g node-static
    static -p 8000
    
and the game will be accessible on ```localhost:8000```.

If you change a file which needs to be rebuilt (that is, any file inside the ```src``` dir), you need to run ```gulp```.

    npm install -g gulp
    npm install
    gulp build   # to rebuild the files once, or
    gulp   # to watch the files for changes and rebuild continously.
