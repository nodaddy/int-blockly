const initialState = {
    studentsData: [
        {
            "firstName": "Rohit",
            "lastName": "Sharma",
            "otherData": {}
        },
        {
            "firstName": "Tanmay",
            "lastName": "Joshi",
            "otherData": {}
        },
        {
            "firstName": "Mukul",
            "lastName": "Bhatt",
            "otherData": {}
        }
]
}

export function reducer(state = initialState, action) {
    switch(action.type){
        default:
            return state;
    }
}