import {test} from '@playwright/test';

test(
    'demo generic type variables', async() =>{
        let msg: string = "Hello world";
        console.log(msg);
    
        let counter: number = 10;
        console.log(counter);
    
        let isMail: boolean = true;
        console.log(isMail);
    
        const welcomeMsg: string = "Merry Chrismas";
        console.log(welcomeMsg);
    }
);

test(
    'demo variable declaration', async() =>{
        let msg: string = "Hello world";
        console.log(msg);
    
        msg = "Hello boy";
        console.log(msg);
    
        const welcomeMsg: string = "Merry Chrismas";
        console.log(welcomeMsg);
    
        //welcomeMsg = "sdf";
    }
);

test(
    'demo variable array', async () =>{
        let fruits: string[] = ['banana','orange','apple'];
        //let fruits: string[] = ['banana','orange','apple',1];
        console.log(fruits);
        console.log(fruits[0]);
        console.log(fruits[2]);
    
        let grade: number[] = [50,60,70,80];
        console.log(grade);
        console.log(grade[3]);
    
        let anyArray: any[] = ['A',20,'B',50];
        console.log(anyArray);
        console.log(anyArray[1]);
    
        let myMsg: any = 'banana';
        myMsg = 10
    }
);