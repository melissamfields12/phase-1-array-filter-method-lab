// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string){
    const result = drivers.filter(drivers => drivers.toLowerCase() === string.toLowerCase());
    return result;
}
function fuzzyMatch(drivers, string){
    const result = drivers.filter(drivers => drivers.startsWith(string));
    return result;    
}
function matchName(drivers, string){
    const result = drivers.filter(drivers => drivers.name === string);
    return result; 
}