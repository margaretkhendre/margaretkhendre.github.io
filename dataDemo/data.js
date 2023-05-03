/*
    JS is Loose-Typed like Python
    python declaration
        num = 1          - num is an integer
        letter = 'A'     - letter is a string/char

    JS declaration
        variables:

        var num = 1; 
        -or-             - num is an integer
        let num = 1;

        var letter = 'A'
        -or-              - letter is a char
        let letter = 'A'

        constants: 

        const NUM2 = 10;        -num2 is an integer that cannot change value
*/

// declare a variable to hold a name 
let name = 'Pac-Man';

// declare the value of name to the console
console.log(`${name} evades ghosts on boards of dots and fruit`);

// JS objects - store values in value / key pairs 
let inky = {
    name: 'Inky',
    color: 'Blue'
};
let pinky = {
    name: 'Pinky',
    color: 'Pink'
};
let blinky = {
    name: 'Blinky',
    color: 'Red'
};
let Clyde = {
    name: 'Clyde',
    color: 'Orange'
};

//display key value from an object 
console.log(`${inky.name} is ${inky.color}`);

// arrays in JS can be made in 2 ways:
// 1. initialization list
// 2. empy array where values are pushed
let values = [1, 2, 3, 4, 5]; 

let group2Teams = [];

// use the .push() command to add data to an array
group2Teams.push('Team Alpha');
group2Teams.push('Team Beta');
group2Teams.push('Team Gamma');
group2Teams.push('Team Delta');
group2Teams.push('Team Epsilon');
group2Teams.push('Team Zeta');
group2Teams.push('Team Eta');
group2Teams.push('Team Theta');

// display the info from the arrays
console.log(values);

console.log(group2Teams);

/*
    // use relational operators to implement decisions such

    > - greater than
    < - less than
    >= - greater than or equal to 
    <= - less than or equal to 
    == - is equal to (loose comparison) 1 = '1' - true 
    === - is equal to (strict comparison does not include the data type)
            1 === '1' = false
    != - is not equal
    ! - logical not (flips the value of the boolean Ex: false becomes true)
    && - logical and (inclusive)
    || -  logical or (optional)
    
    // single alternative
    if (condition)
    {
        statement(s);
    }

    // dual alternative 
    if (condition)
    {
        statement(s);
    }
    else
    {
        statements(s);
    }

    //multiple alternative
    if (condition)
    {
        statment(s);
    }
    else if(condition)
    {
        statment(s);
    }
    else
    {
        statement(s);
    }

    switch(variable)
    {
        case value:
            statement(s);
            break;
        case anotherValue:
            statement(s);
            break;
        default:
            statement(s);
            break;
    }

*/

/*
    // looping

    // preteset and posttest loops

    // while - pretest

    while (condition)
    {
        statement(s);
    }

    // for - pretest

    for (start, condition, amount to change)
    {
        statement(s);
    }

    // do-while - posttest

    do
    {
        statement(s);
    }while(condition);

*/

// use a for loop to access and display the contents of the arrays one-by-one
for (var i = 0; i < group2Teams.length; i++)
{
    console.log(group2Teams[i]);
}