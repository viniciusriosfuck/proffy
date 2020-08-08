
const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]


// FUNCTIONS

function getSubject(subjectNumber) {
    const position = + subjectNumber - 1
    return subjects[position]
}



// function is_AMPM(time) {
//     const regex = /^(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)$/i;
//     console.log("teste")
//     return time.toString().match(/^(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)$/)
// } 

function convertTime12to24(time12h) {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') {
      hours = '00';
    }
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
    return `${hours}:${minutes}`;
}

// CONVERT HOUR > MINUTE
function convertHoursToMinutes(time) {
    
    // const is_AMPM = time.toString().match(/^(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)$/)

    // if (is_AMPM === true) {
    //     time = convertTime12to24(time)
    //     console.log(time)
    // }
    const [hours, minutes] = time.split(":")
    // const [hours, minutes_AMPM] = time.split(":")
    // const [minutes, AMPM] = minutes_AMPM.split(" ")

    // const add12 = 0
    // if (AMPM==="PM") {
    //     hours = hours + 12
    // }

    return Number((hours * 60) + minutes)   
}


module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}