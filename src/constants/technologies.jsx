import React from 'react';
import { DiFirebase, DiPhotoshop, DiReact, DiZend } from 'react-icons/di';

export const TechnologiesData = [
    {
        id: 0,
        icon: <DiReact size="3rem"/>,
        title: 'Front-End',
        tags: ['html', 'js', 'scss', 'react'],
    },
    {
        id: 1,
        icon: <DiFirebase size="3rem"/>,
        title: 'Back-End',
        tags: ['Java', 'C#', 'C++', 'MySQL'],
    },
    {
        id: 2,
        icon: <DiPhotoshop size="3rem"/>,
        title: 'UI/UX',
        tags: ['Adobe', 'Figma'],
    },
    {
        id: 3,
        icon: <DiZend size="3rem"/>,
        title: '3D',
        tags: ['Blender', '3D-Printing'],
    },
];
