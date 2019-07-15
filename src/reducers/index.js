const stateDefault = {
    datas: [
        {
            id: 1,
            name: "Learn HTML",
            status: false,
            content: "HTML",
            date: "2018-12-12 15:20"
        },
        {
            id: 2,
            name: "Learn CSS",
            status: false,
            content: "CSS",
            date: "2018-12-27 18:50"
        },
        {
            id: 3,
            name: "Learn JS",
            status: false,
            content: "JS",
            date: "2019-1-12 18:20"
        },
        {
            id: 4,
            name: "Learn Jquery",
            status: false,
            content: "Jquery",
            date: "2019-2-19 15:20"
        },
        {
            id: 5,
            name: "Learn React",
            status: false,
            content: "React",
            date: "2019-4-1 15:50"
        }
    ],
    search: ""
}

const Reducer = (state = stateDefault, action) => {
    switch(action.type){
        case "DELETE":
            // console.log("dd", action.index);
            // console.log("aaa", state.datas);
            state.datas.splice(action.index, 1);
            return {
                datas: state.datas,
                search: ""
            }
        case "EDIT":
            // console.log("name: ", action.name);
            // console.log("content: ", action.content);
            // console.log("date Update: " , action.date)
            // console.log("item edit: " , state.datas[action.index]);
            state.datas[action.index].name = action.name;
            state.datas[action.index].content = action.content;
            state.datas[action.index].date = action.date;
            return {
                datas: state.datas,
                search: ""
            }
        case "SEARCH":
            return{
                datas: state.datas,
                search: action.name
            }
        case "ADD":
            console.log(action.name , "++" , action.content, "++" , action.date , "+++" , state.datas.length + 1);
            let item = [{
                id: state.datas.length + 1,
                name: action.name,
                content: action.content,
                date: action.date,
                state: false
            }]
            return {
                datas: state.datas.concat(item),
                search: ""
            }
        default:
            return state
    }
}

export default Reducer;