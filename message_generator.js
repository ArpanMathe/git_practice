const quotes = ["Success is not final; failure is not fatal: It is the courage to continue that counts.",
"It is better to fail in originality than to succeed in imitation.",
"The road to success and the road to failure are almost exactly the same.",
"Success usually comes to those who are too busy looking for it.",
"Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
"Nothing in the world can take the place of Persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. The slogan 'Press On' has solved and always will solve the problems of the human race.",
"There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.",
"Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.",
"I never dreamed about success. I worked for it.",
"Success is getting what you want, happiness is wanting what you get.",
"When you change your thoughts, remember to also change your world."]

function message_genrator(){
    let ran = (Math.ceil(Math.random()*10)-1)
    // console.log(ran)
    // console.log(quotes.length)
    return quotes[ran]
}


console.log(message_genrator())