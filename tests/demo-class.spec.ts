import {test} from '@playwright/test';
import {Student} from '../models/student';

test(
    'besic demo class student', async() =>{
        let studentA = new Student('John', 'Doe', 17, 5);
        const fullnameA = studentA.getFullName();
        console.log(fullnameA);
        console.log(studentA.getGrade());
        studentA.setGrade(6);
        console.log(studentA.getGrade());
    }
);