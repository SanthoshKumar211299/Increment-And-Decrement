export default function ReducerAction(state,action){
    switch (action.type) {
        case 'ADD':
            {
                return state+10;
            }
            case 'SUB':{
                return state-10;
            }
        default:
             return state;
    }

}