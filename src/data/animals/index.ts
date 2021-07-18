import {AnimationObject} from 'src/data/alphabets';

export interface Animal {
    id: number;
    lottie: string | AnimationObject | { uri: string };
    name: string;
    sound?: any
}

export const Animals: Array<Animal> = [
    {
        id: 0,
        lottie: require('src/assets/Animals/Aa/Ant.json'),
        name: 'Ant',
        sound: require('src/assets/mp3/animals/Ant.mp3')
    },
    {
        id: 1,
        lottie: require('src/assets/Animals/Aa/Bat.json'),
        name: 'Bat',
        sound: require('src/assets/mp3/animals/Bat.mp3')
    },
    {
        id: 2,
        lottie: require('src/assets/Animals/Bb/Bear.json'),
        name: 'Bear',
        sound: require('src/assets/mp3/animals/Bear.mp3')
    },
    {
        id: 3,
        lottie: require('src/assets/Animals/Bb/Bird.json'),
        name: 'Bird',
        sound: require('src/assets/mp3/animals/Bird.mp3')
    },
    {
        id: 4,
        lottie: require('src/assets/Animals/Cc/Cat.json'),
        name: 'Cat',
        sound: require('src/assets/mp3/animals/Cat.mp3')
    },
    {
        id: 5,
        lottie: require('src/assets/Animals/Cc/Crab.json'),
        name: 'Carb',
        sound: require('src/assets/mp3/animals/Carb.mp3')
    },
    {
        id: 6,
        lottie: require('src/assets/Animals/Dd/Dog.json'),
        name: 'Dog',
        sound: require('src/assets/mp3/animals/Dog.mp3')
    },
    {
        id: 7,
        lottie: require('src/assets/Animals/Dd/Duck.json'),
        name: 'Duck',
        sound: require('src/assets/mp3/animals/Duck.mp3')
    },
    {
        id: 8,
        lottie: require('src/assets/Animals/Ee/Bee.json'),
        name: 'Bee',
        sound: require('src/assets/mp3/animals/Bee.mp3')
    },
    {
        id: 9,
        lottie: require('src/assets/Animals/Ee/Elephant.json'),
        name: 'Elephant',
        sound: require('src/assets/mp3/animals/Elephant.mp3')
    },
    {
        id: 10,
        lottie: require('src/assets/Animals/Ff/Fish.json'),
        name: 'Fish',
        sound: require('src/assets/mp3/animals/Fish.mp3')
    },
    {
        id: 11,
        lottie: require('src/assets/Animals/Ff/Frog.json'),
        name: 'Frog',
        sound: require('src/assets/mp3/animals/Frog.mp3')
    },
    {
        id: 12,
        lottie: require('src/assets/Animals/Gg/Girabffe.json'),
        name: 'Giraffe',
        sound: require('src/assets/mp3/animals/Giraffe.mp3')
    },
    {
        id: 13,
        lottie: require('src/assets/Animals/Gg/Hedgehog.json'),
        name: 'Hedgehog',
        sound: require('src/assets/mp3/animals/Hedgehog.mp3')
    },
    {
        id: 14,
        lottie: require('src/assets/Animals/Hh/Hamster.json'),
        name: 'Hamster',
        sound: require('src/assets/mp3/animals/Hamster.mp3')
    },
    {
        id: 15,
        lottie: require('src/assets/Animals/Hh/Hippo.json'),
        name: 'Hippo',
        sound: require('src/assets/mp3/animals/Hippo.mp3')
    },
    {
        id: 16,
        lottie: require('src/assets/Animals/Ii/Ostrich.json'),
        name: 'Ostrich',
        sound: require('src/assets/mp3/animals/Ostrich.mp3')
    },
    {
        id: 17,
        lottie: require('src/assets/Animals/Ii/Snail.json'),
        name: 'Snail',
        sound: require('src/assets/mp3/animals/Snail.mp3')
    },
    {
        id: 18,
        lottie: require('src/assets/Animals/Jj/Jaguar.json'),
        name: 'Jaguar',
        sound: require('src/assets/mp3/animals/Jaguar.mp3')
    },
    {
        id: 19,
        lottie: require('src/assets/Animals/Jj/Jellyfish.json'),
        name: 'Jellyfish',
        sound: require('src/assets/mp3/animals/Jellyfish.mp3')
    },
    {
        id: 20,
        lottie: require('src/assets/Animals/Kk/Kangaroo.json'),
        name: 'Kangaroo',
        sound: require('src/assets/mp3/animals/Kangaroo.mp3')
    },
    {
        id: 21,
        lottie: require('src/assets/Animals/Kk/Snake.json'),
        name: 'Snake',
        sound: require('src/assets/mp3/animals/Snake.mp3')
    },
    {
        id: 22,
        lottie: require('src/assets/Animals/Ll/Lion.json'),
        name: 'Lion',
        sound: require('src/assets/mp3/animals/Lion.mp3')
    },
    {
        id: 23,
        lottie: require('src/assets/Animals/Ll/Llama.json'),
        name: 'Llama',
        sound: require('src/assets/mp3/animals/Llama.mp3')
    },
    {
        id: 24,
        lottie: require('src/assets/Animals/Mm/Monkey.json'),
        name: 'Monkey',
        sound: require('src/assets/mp3/animals/Monkey.mp3')
    },
    {
        id: 25,
        lottie: require('src/assets/Animals/Mm/Mouse.json'),
        name: 'Mouse',
        sound: require('src/assets/mp3/animals/Mouse.mp3')
    },
    {
        id: 26,
        lottie: require('src/assets/Animals/Nn/Chicken.json'),
        name: 'Chicken',
        sound: require('src/assets/mp3/animals/Chicken.mp3')
    },
    {
        id: 27,
        lottie: require('src/assets/Animals/Nn/Narwhal.json'),
        name: 'Narwhal',
        sound: require('src/assets/mp3/animals/Narwhal.mp3')
    },
    {
        id: 28,
        lottie: require('src/assets/Animals/Oo/Octopus.json'),
        name: 'Octopus',
        sound: require('src/assets/mp3/animals/Octopus.mp3')
    },
    {
        id: 29,
        lottie: require('src/assets/Animals/Oo/Owl.json'),
        name: 'Owl',
        sound: require('src/assets/mp3/animals/Owl.mp3')
    },
    {
        id: 30,
        lottie: require('src/assets/Animals/Pp/Penguin.json'),
        name: 'Penguin',
        sound: require('src/assets/mp3/animals/Penguin.mp3')
    },
    {
        id: 31,
        lottie: require('src/assets/Animals/Pp/Pig.json'),
        name: 'Pig',
        sound: require('src/assets/mp3/animals/Pig.mp3')
    },
    {
        id: 32,
        lottie: require('src/assets/Animals/Qq/Mosquito.json'),
        name: 'Mosquito',
        sound: require('src/assets/mp3/animals/Mosquito.mp3')
    },
    {
        id: 33,
        lottie: require('src/assets/Animals/Qq/Squirrel.json'),
        name: 'Squirrel',
        sound: require('src/assets/mp3/animals/Squirrel.mp3')
    },
    {
        id: 34,
        lottie: require('src/assets/Animals/Rr/Rabbit.json'),
        name: 'Rabbit',
        sound: require('src/assets/mp3/animals/Rabbit.mp3')
    },
    {
        id: 35,
        lottie: require('src/assets/Animals/Rr/Racoon.json'),
        name: 'Raccoon',
        sound: require('src/assets/mp3/animals/Raccoon.mp3')
    },
    {
        id: 36,
        lottie: require('src/assets/Animals/Ss/Seahouse.json'),
        name: 'Seahorse',
        sound: require('src/assets/mp3/animals/Seahorse.mp3')
    },
    {
        id: 37,
        lottie: require('src/assets/Animals/Ss/Sheep.json'),
        name: 'Sheep',
        sound: require('src/assets/mp3/animals/Seahorse.mp3')
    },
    {
        id: 38,
        lottie: require('src/assets/Animals/Tt/Tiger.json'),
        name: 'Tiger',
        sound: require('src/assets/mp3/animals/Tiger.mp3')
    },
    {
        id: 39,
        lottie: require('src/assets/Animals/Tt/Turtle.json'),
        name: 'Turtle',
        sound: require('src/assets/mp3/animals/Turtle.mp3')
    },
    {
        id: 40,
        lottie: require('src/assets/Animals/Uu/Butterfly.json'),
        name: 'Butterfly',
        sound: require('src/assets/mp3/animals/Butterfly.mp3')
    },
    {
        id: 41,
        lottie: require('src/assets/Animals/Uu/Unicorn.json'),
        name: 'Unicorn',
        sound: require('src/assets/mp3/animals/Unicorn.mp3')
    },
    {
        id: 42,
        lottie: require('src/assets/Animals/Vv/Beaver.json'),
        name: 'Beaver',
        sound: require('src/assets/mp3/animals/Beaver.mp3')
    },
    {
        id: 43,
        lottie: require('src/assets/Animals/Vv/VampireBat.json'),
        name: 'Vampire Bat',
        sound: require('src/assets/mp3/animals/VampireBat.mp3')
    },
    {
        id: 44,
        lottie: require('src/assets/Animals/Ww/Swan.json'),
        name: 'Swan',
        sound: require('src/assets/mp3/animals/Swan.mp3')
    },
    {
        id: 45,
        lottie: require('src/assets/Animals/Ww/Whale.json'),
        name: 'Whale',
        sound: require('src/assets/mp3/animals/Whale.mp3')
    },
    {
        id: 46,
        lottie: require('src/assets/Animals/Xx/Fox.json'),
        name: 'Fox',
        sound: require('src/assets/mp3/animals/Fox.mp3')
    },
    {
        id: 47,
        lottie: require('src/assets/Animals/Xx/XRayfish.json'),
        name: 'X Ray-fish',
        sound: require('src/assets/mp3/animals/XRayfish.mp3')
    },
    {
        id: 48,
        lottie: require('src/assets/Animals/Yy/Oyster.json'),
        name: 'Oyster',
        sound: require('src/assets/mp3/animals/Oyster.mp3')
    },
    {
        id: 49,
        lottie: require('src/assets/Animals/Yy/Stingray.json'),
        name: 'Stingray',
        sound: require('src/assets/mp3/animals/Stingray.mp3')
    },
    {
        id: 50,
        lottie: require('src/assets/Animals/Zz/Zebra.json'),
        name: 'Zebra',
        sound: require('src/assets/mp3/animals/Zebra.mp3')
    },
    {
        id: 51,
        lottie: require('src/assets/Animals/Zz/Zebrafish'),
        name: 'Zebrafish',
        sound: require('src/assets/mp3/animals/Zebrafish.mp3')
    },
];

const AnimalWithLetter = {
    Aa: [
        {id: 0, lottie: require('src/assets/Animals/Aa/Ant.json'), name: 'Ant'},
        {id: 1, lottie: require('src/assets/Animals/Aa/Bat.json'), name: 'Bat'},
    ],
    Bb: [
        {id: 2, lottie: require('src/assets/Animals/Bb/Bear.json'), name: 'Bear'},
        {id: 3, lottie: require('src/assets/Animals/Bb/Bird.json'), name: 'Bird'},
    ],
    Cc: [
        {id: 4, lottie: require('src/assets/Animals/Cc/Cat.json'), name: 'Cat'},
        {id: 5, lottie: require('src/assets/Animals/Cc/Crab.json'), name: 'Carb'},
    ],
    Dd: [
        {id: 6, lottie: require('src/assets/Animals/Dd/Dog.json'), name: 'Dog'},
        {id: 7, lottie: require('src/assets/Animals/Dd/Duck.json'), name: 'Duck'},
    ],
    Ee: [
        {id: 8, lottie: require('src/assets/Animals/Ee/Bee.json'), name: 'Bee'},
        {id: 9, lottie: require('src/assets/Animals/Ee/Elephant.json'), name: 'Elephant'},
    ],
    Ff: [
        {id: 10, lottie: require('src/assets/Animals/Ff/Fish.json'), name: 'Fish'},
        {id: 11, lottie: require('src/assets/Animals/Ff/Frog.json'), name: 'Frog'},
    ],
    Gg: [
        {id: 12, lottie: require('src/assets/Animals/Gg/Girabffe.json'), name: 'Giraffe'},
        {id: 13, lottie: require('src/assets/Animals/Gg/Hedgehog.json'), name: 'Hedgehog'},
    ],
    Hh: [
        {id: 14, lottie: require('src/assets/Animals/Hh/Hamster.json'), name: 'Hamster'},
        {id: 15, lottie: require('src/assets/Animals/Hh/Hippo.json'), name: 'Hippo'},
    ],
    Ii: [
        {id: 16, lottie: require('src/assets/Animals/Ii/Ostrich.json'), name: 'Ostrich'},
        {id: 17, lottie: require('src/assets/Animals/Ii/Snail.json'), name: 'Snail'},
    ],
    Jj: [
        {id: 18, lottie: require('src/assets/Animals/Jj/Jaguar.json'), name: 'Jaguar'},
        {id: 19, lottie: require('src/assets/Animals/Jj/Jellyfish.json'), name: 'Jellyfish'},
    ],
    Kk: [
        {id: 20, lottie: require('src/assets/Animals/Kk/Kangaroo.json'), name: 'Kangaroo'},
        {id: 21, lottie: require('src/assets/Animals/Kk/Snake.json'), name: 'Snake'},
    ],
    Ll: [
        {id: 22, lottie: require('src/assets/Animals/Ll/Lion.json'), name: 'Lion'},
        {id: 23, lottie: require('src/assets/Animals/Ll/Llama.json'), name: 'Llama'},
    ],
    Mm: [
        {id: 24, lottie: require('src/assets/Animals/Mm/Monkey.json'), name: 'Monkey'},
        {id: 25, lottie: require('src/assets/Animals/Mm/Mouse.json'), name: 'Mouse'},
    ],
    Nn: [
        {id: 26, lottie: require('src/assets/Animals/Nn/Chicken.json'), name: 'Chicken'},
        {id: 27, lottie: require('src/assets/Animals/Nn/Narwhal.json'), name: 'Narwhal'},
    ],
    Oo: [
        {id: 28, lottie: require('src/assets/Animals/Oo/Octopus.json'), name: 'Octopus'},
        {id: 29, lottie: require('src/assets/Animals/Oo/Owl.json'), name: 'Owl'},
    ],
    Pp: [
        {id: 30, lottie: require('src/assets/Animals/Pp/Penguin.json'), name: 'Penguin'},
        {id: 31, lottie: require('src/assets/Animals/Pp/Pig.json'), name: 'Pig'},
    ],
    Qq: [
        {id: 32, lottie: require('src/assets/Animals/Qq/Mosquito.json'), name: 'Mosquito'},
        {id: 33, lottie: require('src/assets/Animals/Qq/Squirrel.json'), name: 'Squirrel'},
    ],
    Rr: [
        {id: 34, lottie: require('src/assets/Animals/Rr/Rabbit.json'), name: 'Rabbit'},
        {id: 35, lottie: require('src/assets/Animals/Rr/Racoon.json'), name: 'Raccoon'},
    ],
    Ss: [
        {id: 36, lottie: require('src/assets/Animals/Ss/Seahouse.json'), name: 'Seahorse'},
        {id: 37, lottie: require('src/assets/Animals/Ss/Sheep.json'), name: 'Sheep'},
    ],
    Tt: [
        {id: 38, lottie: require('src/assets/Animals/Tt/Tiger.json'), name: 'Tiger'},
        {id: 39, lottie: require('src/assets/Animals/Tt/Turtle.json'), name: 'Turtle'},
    ],
    Uu: [
        {id: 40, lottie: require('src/assets/Animals/Uu/Butterfly.json'), name: 'Butterfly'},
        {id: 41, lottie: require('src/assets/Animals/Uu/Unicorn.json'), name: 'Unicorn'},
    ],
    Vv: [
        {id: 42, lottie: require('src/assets/Animals/Vv/Beaver.json'), name: 'Beaver'},
        {id: 43, lottie: require('src/assets/Animals/Vv/VampireBat.json'), name: 'Vampire Bat'},
    ],
    Ww: [
        {id: 44, lottie: require('src/assets/Animals/Ww/Swan.json'), name: 'Swan'},
        {id: 45, lottie: require('src/assets/Animals/Ww/Whale.json'), name: 'Whale'},
    ],
    Xx: [
        {id: 46, lottie: require('src/assets/Animals/Xx/Fox.json'), name: 'Fox'},
        {id: 47, lottie: require('src/assets/Animals/Xx/XRayfish.json'), name: 'X Ray-fish'},
    ],
    Yy: [
        {id: 48, lottie: require('src/assets/Animals/Yy/Oyster.json'), name: 'Oyster'},
        {id: 49, lottie: require('src/assets/Animals/Yy/Stingray.json'), name: 'Stingray'},
    ],
    Zz: [
        {id: 50, lottie: require('src/assets/Animals/Zz/Zebra.json'), name: 'Zebra'},
        {id: 51, lottie: require('src/assets/Animals/Zz/Zebrafish'), name: 'Zebrafish'},
    ],
};


export default AnimalWithLetter;
