//Photo orientation

// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorma = 3;

enum PhotoOrientation {
    landscape,
    portrait,
    square,
    panorma
};

const landscape: PhotoOrientation= PhotoOrientation.landscape;
console.log('landscape', landscape);
const panorama: PhotoOrientation= PhotoOrientation.panorma;
console.log('panorama', panorama);
console.log('landscape', PhotoOrientation[0]);

enum PhotoOrientation2 {
    landscape = 100,
    portrait,
    square,
    panorma
};

console.log('square', PhotoOrientation2.square);

enum Countries {
    Argentina = 'ARG',
    Bolivia = 'BOL',
    Brasil = 'BRA',
    Colombia = 'COL'
};

const country: Countries = Countries.Colombia;
console.log('Colombia', country);

