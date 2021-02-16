export {};

//Inheritance

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Entity {
    id: number;
    title: string;
}

interface Album extends Entity {
    description: string;
}

interface Picture extends Entity {
    orientation: PhotoOrientation;
}

const album: Album = {
    id: 1991,
    title: 'Birthday',
    description: 'Familiar events on birthday'
}

const picture: Picture = {
    id: 2012,
    title: 'Birthday 30',
    orientation: PhotoOrientation.Portrait
}

let newPicture = {} as Picture;
newPicture.id = 1959;
newPicture.title = "Vacation Trip";
newPicture.orientation = PhotoOrientation.Landscape;

console.log('album data: ', album);
console.log('picture data: ', picture);
console.log('newPicture data: ', newPicture);

