interface Review {
    id: number;
    name: string;
    email: string;
    rating: number;
    comment: string;
    date: string;
}

export const Reviews: Review[] = [
    {
        id: 1,
        name: 'Martin',
        email: 'Martin@icefire.ee',
        rating: 5,
        comment: 'I was looking for a product like this for a very long time. I have tried multiple other alternatives before, but none of them come even close.',
        date: '18.04.2020',
    },
    {
        id: 2,
        name: 'Karl',
        email: 'Karl@viimsi.ee',
        rating: 4,
        comment: 'Not too shabby, I was hesitant at first, but all my scepticism faded after my first try! ',
        date: '11.02.2020',
    },
    {
        id: 3,
        name: 'John Doe',
        email: 'John@checkout.com',
        rating: 3,
        comment: 'It was just OK',
        date: '01.01.2020',
    },
    {
        id: 4,
        name: 'Sally',
        email: 'Sally@mail.com',
        rating: 2,
        comment: 'Meh..',
        date: '22.06.2009',
    },
    {
        id: 5,
        name: 'Peeter Rebane',
        email: 'Peeter.Rebane@net.ee',
        rating: 1,
        comment: 'Not my cup of tea',
        date: '19.09.2020',
    },
    {
        id: 6,
        name: 'Don Juan',
        email: 'Don@Juan.se',
        rating: 5,
        comment: 'I like it, a lot',
        date: '01.01.2021',
    },
];