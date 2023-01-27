import amod from '../assets/image/amod.jpeg'
import conjuring from '../assets/image/conjuring.jpeg'
import belowHerMouth from '../assets/image/below-her-mouth.jpeg'
import favoritePerson from '../assets/image/favorite-person.jpeg'
import legendSeeker from '../assets/image/legend-seeker.jpeg'
import letBeCops from '../assets/image/lets-be-cops.jpeg'
import doraemon from '../assets/image/doraemon.jpeg'
import onepiece from '../assets/image/onepiece.jpeg'
import pokemon from '../assets/image/pokemon.jpeg'
import avatar from '../assets/image/avatar.jpeg'
import avengers from '../assets/image/avengers.jpeg'

export const Movies = [
    {
        name: 'Army Of The Dead',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptates debitis est impedit consequuntur ipsum praesentium inventore quisquam fugit. Nemo?',
        titleImage: 'amod',
        image: `${amod}`,
        category: 'Western',
        language: 'English',
        year: '2022',
        time: '3hr',
        video: '',
        rate: 3.4,
        reviews: 23
    },
    {
        name: 'The Conjuring',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptates debitis est impedit consequuntur ipsum praesentium inventore quisquam fugit. Nemo?',
        titleImage: 'conjuring',
        image: `${conjuring}`,
        category: 'Thriller',
        language: 'Chinese',
        year: '1999',
        time: '4hr',
        video: '',
        rate: 5,
        reviews: 100
    },
    {
        name: 'My Favorite Person',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptates debitis est impedit consequuntur ipsum praesentium inventore quisquam fugit. Nemo?',
        titleImage: 'favoritePerson',
        image: `${favoritePerson}`,
        category: 'Adventure',
        language: 'Korean',
        year: '2000',
        time: '11hr',
        video: '',
        rate: 2.5,
        reviews: 2
    },
    {
        name: 'Lets Be a cops',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptates debitis est impedit consequuntur ipsum praesentium inventore quisquam fugit. Nemo?',
        titleImage: 'letBeCops',
        image: `${letBeCops}`,
        category: 'Musicals',
        language: 'English',
        year: '2022',
        time: '5hr',
        video: '',
        rate: 1.5,
        reviews: 6
    },
    {
        name: 'Below her mouth',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptates debitis est impedit consequuntur ipsum praesentium inventore quisquam fugit. Nemo?',
        titleImage: 'belowHerMouth',
        image: `${belowHerMouth}`,
        category: 'Romantic',
        language: 'English',
        year: '1989',
        time: '1hr',
        video: '',
        rate: 5,
        reviews: 56
    },
    {
        name: 'Legend of the seeker',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptates debitis est impedit consequuntur ipsum praesentium inventore quisquam fugit. Nemo?',
        titleImage: 'legendSeeker',
        image: `${legendSeeker}`,
        category: 'Horror',
        language: 'Swahili',
        year: '2012',
        time: '19hr',
        video: '',
        rate: 4.5,
        reviews: 34
    },
    {
        name: 'One Piece',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptates debitis est impedit consequuntur ipsum praesentium inventore quisquam fugit. Nemo?',
        titleImage: 'onepiece',
        image: `${onepiece}`,
        category: 'Adventure',
        language: 'English',
        year: '2022',
        time: '5hr',
        video: '',
        rate: 1.5,
        reviews: 6
    },
    {
        name: 'Pokemon',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptates debitis est impedit consequuntur ipsum praesentium inventore quisquam fugit. Nemo?',
        titleImage: 'pokemon',
        image: `${pokemon}`,
        category: 'Adventure',
        language: 'English',
        year: '1989',
        time: '1hr',
        video: '',
        rate: 5,
        reviews: 56
    },
    {
        name: 'Doraemon',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptates debitis est impedit consequuntur ipsum praesentium inventore quisquam fugit. Nemo?',
        titleImage: 'doraemon',
        image: `${doraemon}`,
        category: 'Comedy',
        language: 'Span',
        year: '2012',
        time: '19hr',
        video: '',
        rate: 4.5,
        reviews: 34
    },
    {
        name: 'Avatar',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptates debitis est impedit consequuntur ipsum praesentium inventore quisquam fugit. Nemo?',
        titleImage: 'avatar',
        image: `${avatar}`,
        category: 'Action',
        language: 'Swahili',
        year: '2012',
        time: '19hr',
        video: '',
        rate: 4.5,
        reviews: 34
    },
    {
        name: 'Avengers',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptates debitis est impedit consequuntur ipsum praesentium inventore quisquam fugit. Nemo?',
        titleImage: 'avengers',
        image: `${avengers}`,
        category: 'Action',
        language: 'Swahili',
        year: '2012',
        time: '19hr',
        video: '',
        rate: 4.5,
        reviews: 34
    },
]

export const YearData = [
    {title: 'Sort By Year'},
    {title: '1700 - 1800'},
    {title: '1800 - 1900'},
    {title: '1900 - 2000'},
    {title: '2000 - 2010'},
    {title: '2010 - 2030'},
]

export const TimesData = [
    {title: 'Sort By Hours'},
    {title: '1 - 5 Hours'},
    {title: '5 - 10 Hours'},
    {title: '10 - 15 Hours'},
    {title: '15 - 20 Hours'},
]

export const RatesData = [
    {title: 'Sort By Rates'},
    {title: '1 Star'},
    {title: '2 Star'},
    {title: '3 Star'},
    {title: '4 Star'},
    {title: '5 Star'},

]

export const Ratings = [
    {
        title: '0 - Poor',
        value: 0
    },
    {
        title: '1 - Fair',
        value: 1
    },
    {
        title: '2 - Good',
        value: 2
    },
    {
        title: '3 - Very Good',
        value: 3
    },
    {
        title: '4 - Excellent',
        value: 4
    },
    {
        title: '5 - Masterpiece',
        value: 5
    },
]