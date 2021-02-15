//Void
//Explicit

function showInfo(user: any): any {
    console.log('User info: ', user.id, user.userName, user.firstName);
};

showInfo({ id: 109876790, userName: 'Fabiancho Carrancho', firstName: 'Fabiancho' });

//Inflicted

function showFormatedInfo(user: any) {
    console.log('Userinfo :', `
        id: ${user.id}
        userName: ${user.userName}
        firstName: ${user.userName}
    `);
};

showFormatedInfo({ id: 109876790, userName: 'Fabiancho Carrancho', firstName: 'Fabiancho' });

//Void as a type

let unusable: void;
unusable = null;
unusable = undefined;

//Never

function handleError(code: number, message: string): never {
    //Process your code here
    //Generate message
    throw new Error(`${message}. Code: ${code}`);
};

try {
    handleError(123345, 'New error generated');
} catch (error) {
    console.log('Error managed');

};

function sumNumbers(limit: number): never {
    let sum = 0;
    while (true) {
        sum++;
    }
};

sumNumbers(10);
//Infinite lopp


