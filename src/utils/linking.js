export const linking = {
    prefixes: ["app.open://nativeapp", "https://nativeapp.com", "http://nativeapp.com"],
    config: {
        // screens: {
        //     signin: {
        //         screens: {
        //             signin: 'signin',
        //         },
        //     },
        //     signup: {
        //         screens: {
        //             signup: 'signup/:id',
        //         },
        //     },
        //     ["signup/verify"]: {
        //         screens: {
        //             ["signup/verify"]: 'signup/verify',
        //         },
        //     },
        //     ["user/verify"]: {
        //         screens: {
        //             ["user/verify"]: 'user/verify',
        //         },
        //     },
        //     ["forgot/password"]: {
        //         screens: {
        //             ["forgot/password"]: 'forgot/password',
        //         },
        //     },
        // },

        screens: {
            signin: {
                path: 'signin',
            },
            signup: {
                path: 'signup',
            },
            ["signup/verify"]: {
                path: 'signup/verify',
            },
            ["user/verify"]: {
                path: 'user/verify/:id',
                parse: {
                    id: (id) => `${id}`,
                },
                // stringify: {
                    // id: (id) => id.replace(/^user-/, ''),
                // },
            },
            ["forgot/password"]: {
                path: 'forgot/password/:id',
            },
        },
    }
}