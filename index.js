const employee = {
    name:"",
    streetAddress:"",
};

function updateEmployeeWithKeyAndValue (obj, key, value) {
    let newObj = {...obj}
    newObj[key] = value;
    console.log(newObj);
    return newObj;
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    console.log(obj);
    return obj;
};

function deleteFromEmployeeByKey(obj, key) {
    let newObj = {...obj}
    delete newObj[key];
    return newObj;
};

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    obj[key] = key;
    delete obj[key];
    return obj;
};