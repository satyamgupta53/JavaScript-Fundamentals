/* Function expression */
const initialised_empty_array = function (arr_size) {
    let initialised_arr = [];
    for (let counter = 0; counter < arr_size; counter++)
        initialised_arr[counter] = -1;
    return initialised_arr;
}
console.log(initialised_empty_array);
console.log(initialised_empty_array(10));

/* Callback function & Anonymous function*/
const username = "satyamgupta53";
const dbConnection = (statusFlag, memberAccess, adminAccess) => {
    if (statusFlag) memberAccess(username);
    else adminAccess(username);
};
const memberAccess = (user) => console.log("Member access approved for username: ", user);
const adminAccess = (user) => console.log("Admin access approved for username: ", user);
dbConnection(true, memberAccess, adminAccess);
dbConnection(false, memberAccess, adminAccess);

/* Callback Hell */
const getCheese = (callback) => {
    setTimeout(() => {
        const cheese = '🧀';
        console.log("Here is my cheese ", cheese);
        callback(cheese);
    }, 1000)
};

const getDough = (cheese, callback) => {
    setTimeout(() => {
        const dough = '🌾' + cheese;
        console.log("Here is my dough ", dough);
        callback(dough);
    }, 1000)
};

const getPizza = (dough, callback) => {
    setTimeout(() => {
        const pizza = '🍕' + dough;
        console.log("Here is my dough ", pizza);
        callback(dough);
    }, 1000)
};

getCheese((cheese) => {
    getDough(cheese, (dough) => {
        getPizza(dough, (pizza) => {
            console.log("Pizza is ready guys !");
        });
    });
});

/* Promise Function */
const flightTicket = new Promise((resolve, reject) => {
    const isBoarded = true;
    if(isBoarded) resolve("Your ticket is here . Thank you for boarding .");
    else reject("You will be fined for not boarding .");
});

flightTicket
    .then(data => {
        console.log("Success !", data);
    })
    .catch(data => {
        console.log("Failed !", data);
    })
    .finally(() => {
        console.log("Thank you for visiting !");
    });

/* using promise function example */
const makeBrick = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const concreate = '⌛' + '🧱';
            resolve(concreate);
        }, 2000)
    });
}

const makeHome = (brick) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const home = brick + '🏠';
            resolve(home);
        }, 2000)
    });
};

makeBrick()
    .then((brick) => {
        console.log("Here is your brick " + brick);
        return makeHome(brick);
    })
    .then((home) => {
        console.log("Here is your home : ", home);
    });

/* -------------------------------------------------------------------------------- */