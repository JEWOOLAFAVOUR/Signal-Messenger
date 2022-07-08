/* eslint-disable prettier/prettier */
const chatRoomData = {
    id: 1,
    users: [{
        id: 'u1',
        name: 'Boluatife'
    },{
        id: 'u2',
        name: 'Favour'
    }],
    messages:[{
        id: 'm1',
        content: 'How are you, Favour!',
        createdAt: '7:00AM',
        user:{
            id: 'u1',
            name: 'Boluwatife',
        },
    },{
        id: 'm2',
        content: 'I am good, good Bolu',
        createdAt: '7:01AM',
        user:{
            id: 'u2',
            name: 'Favour',
        },
    },{
        id: 'm3',
        content: 'What about you?',
        createdAt: '7:03AM',
        user:{
            id: 'u2',
            name: 'Favour',
        },
    },{
        id: 'm4',
        content: 'Good as well. Are you coming to Cephas today',
        createdAt: '7:04AM',
        user:{
            id: 'u1',
            name: 'Boluwatife',
        },
    },{
        id: 'm5',
        content: 'Yeah am coming though my system battery is full',
        createdAt: '7:05AM',
        user:{
            id: 'u2',
            name: 'Favour',
        },
    },{
        id: 'm6',
        content: 'How Far about your GUI project',
        createdAt: '7:06AM',
        user:{
            id: 'u2',
            name: 'Favour',
        },
    },{
        id: 'm7',
        content: 'Going well, facing some error though',
        createdAt: '7:07AM',
        user:{
            id: 'u1',
            name: 'Boluwatife',
        },
    },]
};

export default chatRoomData; 