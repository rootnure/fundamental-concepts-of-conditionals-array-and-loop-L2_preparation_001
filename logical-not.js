/**
 *    shortcut ,    !    and     !!
 */

const isBSC = true;
// if(isBSC === true)
if(isBSC) { // check only if true (shortcut)
    console.log("SU----patro");
}
else {
    console.log("Tata bye bye");
}

const isPassed = false;
// if(isPassed === false)
if(!isPassed) { // check only if false (!) or falsy        [check falsy value]
    console.log("Tore biya diye dibo");
}
else {
    console.log("BSC er preparation ne");
}

const haveCar = "yes";
// if(!haveCar === false)
if(!!haveCar) { // check if truthy (!!)                   [check truthy value]
    console.log("Su---parto");
}
else {
    console.log("tata bye bye");
}