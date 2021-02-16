//Function to show a photo
export { };

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
};

interface Picture {
    title: string;
    date: string;
    orientation: PhotoOrientation;
};

//Before to use the interface...
// function showPicture(picture: { title: string, date: string, orientation: PhotoOrientation }) {
//     console.log(`title: ${picture.title},
//                  date: ${picture.date},
//                  orientation: ${picture.orientation}`);
// };

//Using the interface
function showPicture(picture: Picture) {
    console.log(`title: ${picture.title},
                 date: ${picture.date},
                 orientation: ${picture.orientation}`);

};

let myPic = {
    title: 'My picture',
    date: "2021-02-16",
    orientation: PhotoOrientation.Landscape
};

showPicture(myPic);
showPicture({
    title: 'My picture2',
    date: "2021-02-16",
    orientation: PhotoOrientation.Panorama
    //extra: 'test' Error
});

//Optional properties

interface PictureConfig {
    title?: string;
    date?: string;
    orientation?: PhotoOrientation;
};

function generatePicture(config: PictureConfig) {
    const pic = { title: 'Default Title', date: "2021-02-16" };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }

    return pic;
};

let picture = generatePicture({});
console.log(picture);
picture = generatePicture({ title: 'Custom Title' });
console.log(picture);
picture = generatePicture({ title: 'Custom Title', date: "2021-02-17" });
console.log(picture);

//Read only properties

interface User {
    readonly id: number;
    name: string;
    age: number;
    email: string;
    admin: boolean;
};

let user: User;
user = { id: 1988, name: "Fabiancho Vela", age: 32, email: "example@email.com", admin: true };
console.log('User data :', user);
user.name = "Fabiancho Vela Update";
console.log(user);

