const { fifaData } = require('./fifa.js')

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
fifaData.filter(function(item){
    return item.Year === 2014;
})

//(a) Home Team name for 2014 world cup final
const fifaData2014 = fifaData.filter( function(item){ return item.Year === 2014;}) 

const finalGame2014 = fifaData2014.filter( x => {return x.Stage === 'Final';} ); // returned as an array w. 1 element, an object
// console.log('HOME TEAM: ', finalGame2014[0]['Home Team Name']);

//(b) Away Team name for 2014 world cup final
// console.log('AWAY TEAM: ', finalGame2014[0]['Away Team Name']);

//(c) Home Team goals for 2014 world cup final
// console.log('HOME TEAM GOALS: ', finalGame2014[0]['Home Team Goals']);

//(d) Away Team goals for 2014 world cup final
// console.log('AWAY TEAM GOALS: ', finalGame2014[0]['Away Team Goals']);

//(e) Winner of 2014 world cup final */
// console.log('WINNER: ', finalGame2014[0]['Win conditions']);



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

// LONG VERSION
// function getFinals(arr) {
//     const final = arr.filter( function(x){
//         return x.Stage === 'Final';
//     });
//     return final;
//  }

// SHORT VERSION
function getFinals(arr) {
   return arr.filter( x => x.Stage === 'Final' );
}
// console.log('\n----------------');
// console.log('Task 2: ', getFinals(fifaData));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

// LONG VERSION
// function getYears(arr, getFinalsCB) {
//     const finals = getFinalsCB(arr)
//     const years = finals.map( function(x) {
//         return x.Year;
//     });
//     return years;
// }

// SHORT VERSION
function getYears(arr, getFinalsCB) {
    return getFinalsCB(arr).map( x => x.Year); 
}
// console.log('\n----------------');
// console.log(getYears('Task 3: ', fifaData, getFinals));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

// LONG
function getWinners(arr, getFinalsCB) {
    let allFinals = getFinalsCB(arr); // all final games

    let winners = allFinals.map( game => {

        if (game['Home Team Goals'] > game['Away Team Goals']){
            return game['Home Team Name'];
        } else {
            return game['Away Team Name'];
        }
    });

    return winners;
}

// SHORT
function getWinners(arr, getFinalsCB) {
    return getFinalsCB(arr).map( game => game['Home Team Goals'] > game['Away Team Goals'] ? game['Home Team Name'] : game['Away Team Name']);
}
// console.log('\n----------------');
console.log('Task 4: ', getWinners(fifaData, getFinals));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

// HELP: map with item and index

function getWinnersByYear(arr, getYearsCB, getWinnersCB) {
    
    const winStringArr = getYearsCB(arr).map( function(x, index) {
        return `In ${x}, ${getWinnersCB(arr)[index]} won the world cup!`
    });

    return winStringArr;
}
// console.log('\n----------------');
// console.log('Task 5: ', getWinnersByYear(fifaData, getYears, getWinners));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(arr, getFinalsCB) {
    const finals = getFinalsCB(arr);
    // console.log('Task 6: ', finals);
    const totalGoals = finals.reduce((total, game) => { return total + game['Home Team Goals'] + game['Away Team Goals']},0);
    return ( ( Math.round (totalGoals/getFinalsCB(arr).length) ) / 100 );
}

// console.log('Task 6: ', getAverageGoals(fifaData, getFinals));

/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
