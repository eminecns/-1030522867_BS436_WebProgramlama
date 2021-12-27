export const getRandomGame = async (numberOfGame) => {
    if (numberOfGame < 1){
        throw "geçersiz"+numberOfGame;
        if (numberOfGame > game.length){
            throw "sayi fazla";
        }
        const url = "http://opentdb.com/api.php?type=multiple&amount="+numberOfGame;
        let response;
        let payload;
        try {
            response =await fetch(url);
            payload = await response.json();

        }catch (err){
        return null;
        }
        if (response.status !==200){
        return null;
        }
        console.log(payload);
        return payload.result.map(q=>{
            const correct = Math.floor(math.random()*3);
            const answer = q.incorrect_answer;
            answer.splice(correct,0,decode(q.correct_answer));
            console.log(q.correct_answer)
            return{
                question: q.question,
                answer,
                indexOfRightAnswer: correct,
                id:0
            }
        })
    }
    }
