export{};
//Functions
//create a photo
function createPicture (title, date, size, ){
    //title 
};

type squareSize = '100x100' | '500x500' | '1000x1000';

// We use TS and define type of parameters
function  createPicture2 (title: string, date: string, size: squareSize ) {
    //The photo is created
     console.log('Create picture using: ', title, date, size); 
};

//Optional parameters

createPicture2("My birthday", "2021-02-16", '100x100');

function  createPicture3 (title: string, date?: string, size?: squareSize ) {
    //The photo is created
     console.log('Create picture using: ', title, date, size); 
};

createPicture3("My birthday", '100x100');

//Flat Array function

let createPicture4 = (title: string, date?: string, size?: squareSize ): object => {
    // return {
    //   title: title  //Before,
    //   date: date,
    //   size: size
    //   }
    return { title, date, size }; //New way
};

const picture = createPicture4("Working hard", "2021-02-16", "500x500");
console.log(picture);

//type of return with TS

function handleError (code: number, message: string): never | string {
    //Proccessing the code andmessage
    try {
        if(message === 'error'){
            throw new Error(`${message}. Code error ${code}`);
        } else {
            return 'An error has ocurred'
        }    
    } catch (error) {
        
    }    
};

let result = handleError(200, 'OK'); //string
console.log('result', result);

result = handleError(400, 'error'); //never
console.log('result', result);