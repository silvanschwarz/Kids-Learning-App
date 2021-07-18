import {AnimationObject} from 'src/data/alphabets';
import {Animal} from 'src/data/animals';

export interface InterfaceNumber {
    id: number;
    text: string;
    colorActive: string;
    isActive: boolean;
    textEng: string;
    lottie1?: string | AnimationObject | { uri: string };
    lottie2?: string | AnimationObject | { uri: string };
    animals?: Array<Animal>;
    sound?: any,
    gif1?: any
}

export const Numbers: Array<InterfaceNumber> = [
    {
        id: 0,
        text: '0',
        colorActive: 'DD0000',
        isActive: false,
        textEng: 'Zero',
        lottie1: require('src/assets/Numbers/0.json'),
        sound: require('src/assets/mp3/number/0.mp3'),
        gif1: require('src/assets/gif/numbers/0.gif'),
    },
    {
        id: 1,
        text: '1',
        colorActive: 'DD0000',
        isActive: false,
        textEng: 'One',
        lottie1: require('src/assets/Numbers/1.json'),
        sound: require('src/assets/mp3/number/1.mp3'),
        gif1: require('src/assets/gif/numbers/1.gif'),
    },
    {
        id: 2,
        text: '2',
        colorActive: 'DD0000',
        isActive: false,
        textEng: 'Two',
        lottie1: require('src/assets/Numbers/2.json'),
        sound: require('src/assets/mp3/number/2.mp3'),
        gif1: require('src/assets/gif/numbers/2.gif'),
    },
    {
        id: 3,
        text: '3',
        colorActive: 'DD0000',
        isActive: false,
        textEng: 'Three',
        lottie1: require('src/assets/Numbers/3.json'),
        sound: require('src/assets/mp3/number/3.mp3'),
        gif1: require('src/assets/gif/numbers/3.gif'),
    },
    {
        id: 4,
        text: '4',
        colorActive: 'DD0000',
        isActive: false,
        textEng: 'Four',
        lottie1: require('src/assets/Numbers/4.json'),
        sound: require('src/assets/mp3/number/4.mp3'),
        gif1: require('src/assets/gif/numbers/4.gif'),
    },
    {
        id: 5,
        text: '5',
        colorActive: 'DD0000',
        isActive: false,
        textEng: 'Five',
        lottie1: require('src/assets/Numbers/5.json'),
        sound: require('src/assets/mp3/number/5.mp3'),
        gif1: require('src/assets/gif/numbers/5.gif'),
    },
    {
        id: 6,
        text: '6',
        colorActive: 'DD0000',
        isActive: false,
        textEng: 'Six',
        lottie1: require('src/assets/Numbers/6.json'),
        sound: require('src/assets/mp3/number/6.mp3'),
        gif1: require('src/assets/gif/numbers/6.gif'),
    },
    {
        id: 7,
        text: '7',
        colorActive: 'DD0000',
        isActive: false,
        textEng: 'Seven',
        lottie1: require('src/assets/Numbers/7.json'),
        sound: require('src/assets/mp3/number/7.mp3'),
        gif1: require('src/assets/gif/numbers/7.gif'),
    },
    {
        id: 8,
        text: '8',
        colorActive: 'DD0000',
        isActive: false,
        textEng: 'Eight',
        lottie1: require('src/assets/Numbers/8.json'),
        sound: require('src/assets/mp3/number/8.mp3'),
        gif1: require('src/assets/gif/numbers/8.gif'),
    },
    {
        id: 9,
        text: '9',
        colorActive: 'DD0000',
        isActive: false,
        textEng: 'Nine',
        lottie1: require('src/assets/Numbers/9.json'),
        sound: require('src/assets/mp3/number/9.mp3'),
        gif1: require('src/assets/gif/numbers/9.gif'),
    },
];

const DefaultNumbers: Array<Array<InterfaceNumber>> = [
    //for screen learn number
    [
        {
            id: 0,
            text: '0',
            colorActive: 'DD0000',
            isActive: false,
            textEng: 'Zero',
        },
        {
            id: 1,
            text: '1',
            colorActive: 'DD0000',
            isActive: false,
            textEng: 'One',
        },
    ],
    [
        {
            id: 2,
            text: '2',
            colorActive: 'DD0000',
            isActive: false,
            textEng: 'Two',
        },
        {
            id: 3,
            text: '3',
            colorActive: 'DD0000',
            isActive: false,
            textEng: 'Three',
        },
    ],
    [
        {
            id: 4,
            text: '4',
            colorActive: 'DD0000',
            isActive: false,
            textEng: 'Four',
        },
        {
            id: 5,
            text: '5',
            colorActive: 'DD0000',
            isActive: false,
            textEng: 'Five',
        },
    ],

    [
        {
            id: 6,
            text: '6',
            colorActive: 'DD0000',
            isActive: false,
            textEng: 'Six',
        },
        {
            id: 7,
            text: '7',
            colorActive: 'DD0000',
            isActive: false,
            textEng: 'Seven',
        },
    ],
    [
        {
            id: 8,
            text: '8',
            colorActive: 'DD0000',
            isActive: false,
            textEng: 'Eight',
        },
        {
            id: 9,
            text: '9',
            colorActive: 'DD0000',
            isActive: false,
            textEng: 'Nine',
        },
    ],
];
export default DefaultNumbers;
