// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі


// function goodMorning() {
//     return new Promise((resolve) => {
//             setTimeout(() => {
//                 // console.log('good morning')
//                 resolve('good morning')
//             }, 3000)
//         }
//     )
// }
//
// function wash() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             // console.log('wash')
//             resolve('wash')
//         }, 2000)
//     })
// }
//
// function breakfast() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log('breakfast')
//             resolve('breakfast')
//         }, 2000)
//     })
//
// }
//
// function goTojob() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log('go to job')
//             resolve('go to job')
//         }, 2000)
//     })
// }
//
// function lunch() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log('lunch')
//             resolve('lunch')
//         }, 1000)
//     })
//
// }
//
// function goToHome() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log('go to home')
//             resolve('go to home')
//         }, 1000)
//     })
// }
//
// function dinner() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log('dinner')
//             resolve('dinner')
//         }, 2000)
//     })
// }
//
// function playStation() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log('play station')
//             resolve('play station')
//         }, 900)
//     })
// }
//
// function sleep() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('sleep')
//         }, 900)
//     })
// }

//
// goodMorning()
//     .then(result => {
//         console.log(result)
//         return wash()
//     })
//     .then(result => {
//         console.log(result)
//         return breakfast()
//     })
//     .then(result => {
//         console.log(result)
//         return goTojob()
//     })
//     .then(result => {
//         console.log(result)
//         return lunch()
//     })
//     .then(result => {
//         console.log(result)
//         return goToHome()
//     })
//     .then(result => {
//         console.log(result)
//         return dinner()
//     })
//     .then(result => {
//         console.log(result)
//         return playStation()
//     })
//     .then(result => {
//         console.log(result)
//        return sleep()
//     })


//---------------------------------------------------
function goodMorning() {
    return new Promise((resolve) => {
            setTimeout(() => {
                //
                resolve(console.log('good morning'))
            }, 3000)
        }
    )
}

function wash() {
    return new Promise((resolve) => {
        setTimeout(() => {
            //
            resolve(console.log('wash'))
        }, 2000)
    })
}

function breakfast() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //
            resolve(console.log('breakfast'))
        }, 2000)
    })

}

function goTojob() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //
            resolve(console.log('go to job'))
        }, 2000)
    })
}

function lunch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //
            resolve(console.log('lunch'))
        }, 1000)
    })

}

function goToHome() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //
            resolve(console.log('go to home'))
        }, 1000)
    })
}

function dinner() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //
            resolve(console.log('dinner'))
        }, 2000)
    })
}

function playStation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //
            resolve(console.log('play station'))
        }, 900)
    })
}

function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('sleep')
        }, 900)
    })
}
async function myDay() {
    try {
        const getGoodMorning = await goodMorning()
        const getWash = await wash()
        const getBreakfas = await breakfast()
        const getGoTojob = await goTojob()
        const getLunch = await lunch()
        const getGoToHome = await goToHome()
        const getDinner = await dinner()
        const getPlayStation = await playStation()
        const getSleep = await sleep()

        console.log(getGoodMorning)
        console.log(getWash)
        console.log(getBreakfas)
        console.log(getGoTojob)
        console.log(getLunch)
        console.log(getGoToHome)
        console.log(getDinner)
        console.log(getPlayStation)
        console.log(getSleep)
    } catch (e) {
        console.log(e)
    }
}
myDay()