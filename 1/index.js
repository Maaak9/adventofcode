/*
--- Day 1: The Tyranny of the Rocket Equation ---
Santa has become stranded at the edge of the Solar System while delivering presents to other planets! To accurately calculate his position in space, safely align his warp drive, and return to Earth in time to save Christmas, he needs you to bring him measurements from fifty stars.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

The Elves quickly load you into a spacecraft and prepare to launch.

At the first Go / No Go poll, every Elf is Go until the Fuel Counter-Upper. They haven't determined the amount of fuel required yet.

Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

For example:

For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
For a mass of 1969, the fuel required is 654.
For a mass of 100756, the fuel required is 33583.
The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

What is the sum of the fuel requirements for all of the modules on your spacecraft?
 */


const modulesWeight = ["126360", "61158", "149929", "88405", "87526", "51688", "75356", "116265", "134986", "111581", "135675", "69679", "74035", "144951", "86157", "68946", "76761", "114768", "70694", "84768", "147379", "78755", "109688", "118595", "54608", "77033", "54654", "61473", "69644", "81744", "97148", "106473", "61541", "98898", "70394", "117635", "128388", "140622", "108691", "126962", "137756", "125904", "75675", "127051", "126388", "85591", "51583", "101392", "62959", "135077", "90916", "127119", "112427", "79703", "54739", "50092", "92505", "53719", "60887", "62642", "76382", "85763", "125799", "67285", "147992", "80713", "133619", "131433", "141765", "109553", "122534", "88734", "115622", "82195", "130771", "121649", "89355", "121364", "71664", "130412", "88936", "63234", "80274", "108251", "136663", "139149", "85052", "67973", "116461", "75070", "144261", "106539", "79712", "116112", "55755", "121428", "79362", "103489", "103157", "64403"];


let fuelNeeded = 0;

modulesWeight.forEach((modulewWeight) => {
  fuelNeeded += (Math.floor(parseInt(modulewWeight, 10) / 3) - 2);
})

console.warn(`The fuel needed : ${fuelNeeded}`);