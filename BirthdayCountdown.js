function birthdayCountdown(daysUntilMyBirthday){
    while (daysUntilMyBirthday >= 0){
        if (daysUntilMyBirthday === 0){
            console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*");
            console.log("♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪");
            console.log("*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
        } else if (daysUntilMyBirthday === 1){
            console.log(daysUntilMyBirthday+ " DAY UNTIL MY BIRTHDAY!!!");
        } else if (daysUntilMyBirthday < 5){
            console.log(daysUntilMyBirthday+ " DAYS UNTIL MY BIRTHDAY!!!");
        } else if (daysUntilMyBirthday < 30){
            console.log(daysUntilMyBirthday+ " days until my birthday!");
        } else {
            console.log(daysUntilMyBirthday+ " days until my birthday. Such a long time... :(");
        }
        daysUntilMyBirthday--;
    }
}