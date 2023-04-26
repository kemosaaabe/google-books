export interface Item {
    id: number;
    text: string;
    value: string;
}

export const categories: Item[] = [
    {
        id: 0,
        text: 'Все',
        value: 'all',
    },
    {
        id: 1,
        text: 'Искусство',
        value: 'art',
    },
    {
        id: 2,
        text: 'Биография',
        value: 'biography',
    },
    {
        id: 3,
        text: 'IT',
        value: 'computers',
    },
    {
        id: 4,
        text: 'История',
        value: 'history',
    },
    {
        id: 5,
        text: 'Медицина',
        value: 'medical',
    },
    {
        id: 6,
        text: 'Поэзия',
        value: 'poetry',
    },
];

export const filters: Item[] = [
    {
        id: 0,
        text: 'Актуальные',
        value: 'relevance',
    },
    {
        id: 1,
        text: 'Новейшие',
        value: 'newest',
    },
];
