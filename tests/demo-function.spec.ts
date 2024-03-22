import {test} from '@playwright/test';

test(
    'basic hello world function', async() =>{
        helloWorld();
        hellWorld2('Aomnchp');
    }
);

test(
    'function with return value', async() =>{
        const result = multipyByTwo(4);
        console.log(result);
    }
);

function helloWorld(){
    console.log("Hello world");
}

function hellWorld2(username: string){
    console.log('Hello world: ' + username);
}

function multipyByTwo(input: number){
    return input*2;
}