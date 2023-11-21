/*
 * The function should return the names of those entries whose date is the current date. The names should be separated by a comma.
 *
 * For example, here's an array of three entries and assume the date now is 2022-04-01.
 *
 * [{ name: "Harry" , date: "2022-04-01T02:53:42+05:30" }, { name: "Hermione" , date: "2022-04-02T02:53:42+05:30" }, { name: "Ron" , date: "2022-04-01T03:53:42+05:30" }]
 *
 * The function should return: ` Harry,Ron `. Please note that the names are separated by a comma without space.
 */

function todaysEntries(entries) {
    let curdate = new Date().toISOString().split('T')[0];
    let todaysEntries = entries.filter(entry => entry.date.split('T')[0] === curdate);
    let names = todaysEntries.map(entry => entry.name);
    let namesjoined = names.join(',');
    return namesjoined;
}

module.exports = todaysEntries;
