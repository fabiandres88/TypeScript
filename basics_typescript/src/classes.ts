//Classes
export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    //Properties
    id: number;
    title: string;
    orientation: PhotoOrientation;
    //Constructor function
    constructor (id: number, title: string, orientation: PhotoOrientation) {
        //Using parameters and assign them to the class properties
        this.id = id;
        this.title= title;
        this.orientation = orientation;
    }
    //Behavior
    toString () {
        return `[id: ${this.id},
                title: ${this.title},
                orientation: ${this.orientation}]`;
    }
}

class Album {
    id: number;
    title: string;
    pictures: Picture[];

    constructor (id: number, title: string) {
        this.id = id;
        this.title= title;
        this.pictures= [];
    }

    addPicture (picture: Picture) {
        this.pictures.push(picture);
    }
}

const album: Album = new Album(30, 'Holiday');
const picture: Picture = new Picture(40, 'Season', PhotoOrientation.Portrait);
album.addPicture(picture);
console.log(album);
console.log(album.pictures);
