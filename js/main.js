//Ice Cream Flavors

var icecream = ['Cookie Dough', 'Neapolitan', 'Mint Chocolate Chip'];
icecream.push('Caramel Crunch');

//Presidential Array

var presidents = [
    {firstName: 'Donald', lastName: 'Trump', termLength: '4 Years', yearsOfPresidency: '2017'},
    {firstName: 'Barack', lastName: 'Obama', termLength: '8 Years', yearsOfPresidency: '2009-2017'},
    {firstName: 'George W.', lastName: 'Bush', termLength: '8 Years', yearsOfPresidency: '2001-2009'},
    {firstName: 'Bill', lastName: 'Clinton', termLength: '8 Years', yearsOfPresidency: '1993-2001'},
    {firstName: 'George H. W.', lastName: 'Bush', termLength: '4 Years', yearsOfPresidency: '1989-1993'},
];

console.log(presidents[2].firstName, presidents[2].lastName);

//Function Declaration

function howdy(name, message) {
    console.log(name + ' says ' + message);
}

howdy('Kyle Maxey', 'Welcome to my site!');

//Function Expression

var numba = function (string) {
    if (string.length < 7) {
        console.log('What a short little word!');
    } else if (string.length > 7) {
        console.log("I'm sorry, but that's too many to count.");
    } else {
        console.log('7, what a perfect choice!');
    }
};

numba('7');
numba('seventy');
numba('university');

//Movie

function inception(display, favMovie) {
    display(favMovie);
}

function frustrated(favMovie) {
    console.log(favMovie + ' ' + 'is a fantastic movie.');
}

inception(frustrated, 'Pulp Fiction');
