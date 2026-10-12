function Greeting() {
    let hour = new Date().getHours()
    let month = new Date().getMonth()
    let day = new Date().getDay()

    let greeting = "Good Evening"
    if (hour < 12) {
        greeting = "Good Morning"
    } else if (hour < 18) {
        greeting = "Good Afternoon"
    }

    let season = "winter"
    if (month >= 2 && month <= 4) {
        season = "spring"
    } else if (month >= 5 && month <= 7) {
        season = "summer"
    } else if (month >= 8 && month <= 10) {
        season = "fall"
    }

    let holiday = ""
    if (month === 11 && day === 25) {
        holiday = "Merry Christmas!🎄 "
    } else if (month === 0 && day === 1) {
        holiday = "Happy New Year! 🎉 "
    } else if (month === 1 && day === 14) {
        holiday = "Happy Valentine's Day! ❤️ "
    } else if (month === 9 && day === 31) {
        holiday = "Happy Halloween!🎃 "
    } else if (month === 1 && day === 14) {
        holiday = "Happy Pi Day! 🥧 "
    } else if (month === 3 && day === 1) {
        holiday = "Happy April Fool's Day! 🤡 "
    } else if (month === 3 && day === 4) {
        holiday = "May The Fourth Be With You! .𖥔 ݁ ˖🪐.𖥔 ݁ ˖ "
    }

    return <p>{greeting}, and welcome to my portfolio. I hope you are having a wonderful {season} day! {}</p>

}

export default Greeting