module.exports = function showHelphText() {
    console.log(`
************************************

Please use this Node app as follows:
node . help: Shows this help Text
node . x: Performs query [x] and prints the results, where [x] is a number between 1 and 6 (see below)

Available queries:
==================
1: Find out how many todo items are on the list
2: Find all the todo items that are marked as done
3: Find all the todo items that are not marked as done
4: Get all the todo items, sorted with the most recent first
5: Get the single most recently added todo item
6: Get all todo items about 'databases'

************************************`);
}