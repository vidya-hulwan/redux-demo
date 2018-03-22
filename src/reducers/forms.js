const forms = (state = "addForm", action) => {

    if (action.type === "addForm") {
        return {
            type: action.type
        }

    }
    if (action.type === "editForm") {

        return {
            type: action.type,
            id: action.id,
            text: action.text
        }
    }

    return {
        type: "addForm"
    };
}

export default forms