const Config = {
    availablePlans: [
        {
            id: 0,
            name: 'Basic',
            features: []
        },
        {
            id: 1,
            name: 'Pro',
            features: ['scheduledPost']
        },
        {
            id: 2,
            name: 'Ultimate',
            features: ['scheduledPost', 'multiplePublishers']
        }
    ]
};

export default Config;