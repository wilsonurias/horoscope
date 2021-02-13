// TEST


document.querySelector('button').addEventListener('click', tellMeFortune)

function tellMeFortune() {
  let month = document.querySelector('#month').value
  let day = Number(document.querySelector('input').value)
  if ((month === 'march' && day >= 21) || (month === 'april' && day <= 19)) {
    let horoscope = "You're in an awful mood and you don't have anybody to talk about your problems to! You're feeling very sorry for yourself today, my Aries friend. The problem with you is that you're far too shallow for your own good. Nobody is ever good enough for you! You only care about looks, you're not interested in what people are like on the inside...";
    document.querySelector('#result').innerText = horoscope
  }else if ((month === 'april' && day >= 20) || (month === 'may' && day <= 20)) {
    let horoscope = "You've been keeping your options open and there's a high chance that you'll meet someone special today thanks to your easygoing attitude. You've taken the time to get to know that special someone as a friend before deciding whether or not you could be a good match. Your patience has paid off and you'll be as pleased as punch when they ask you out on a date this evening.";
    document.querySelector('#result').innerText = horoscope
  }else if ((month === 'may' && day >= 21) || (month === "june" && day <= 20)) {
    let horoscope = "You're part of a whirlwind and need a break! Take a break, far from everyone!"
    document.querySelector('#result').innerText = horoscope
  }else if ((month === 'june' && day >= 21) || (month === 'july' && day <= 22)) {
    let horoscope = "A project is starting to bear fruit. You're feeling quite gratified, so much so that you feel nearly uncomfortable with your success."
    document.querySelector('#result').innerText = horoscope
  }else if ((month === 'july' && day >= 23) || (month === 'august' && day <= 22)) {
    let horoscope = "Interesting opportunities are finally coming your way! You can see light at the end of the tunnel in the workplace, at last. The planets haven't exactly been on your side so far this year, but all good things come to those who wait, remember!"
    document.querySelector('#result').innerText = horoscope
  }else if ((month === 'august' && day >= 23) || (month === 'september' && day <= 22)) {
    let horoscope = "You're in the mood to put your feet up and relax with a good book today. You deserve some downtime after the busy last few days."
    document.querySelector('#result').innerText = horoscope
  }else if ((month === 'september' && day >= 23) || (month === 'october' && day <= 22)) {
    let horoscope = "Being in shape means taking initiative. Jogging after work may help unwind."
    document.querySelector('#result').innerText = horoscope
  }else if ((month === 'october' && day >= 23) || (month === 'november' && day <= 21)) {
    let horoscope = "Things are moving forward in your life. Perhaps you have a new job in a new town. The stagnation of your love life was getting to you, and you'll make some changes there, too."
    document.querySelector('#result').innerText = horoscope
  }else if ((month === 'november' && day >= 22) || (month === 'december' && day <= 21)) {
    let horoscope = "You're impressively driven and motivated in the workplace. The planets encourage you to push your limits and step out of your professional comfort zone. Start to fulfill your potential! Success is just around the corner."
    document.querySelector('#result').innerText = horoscope
  }else if ((month === 'december' && day >= 22) || (month === 'january' && day <= 19)) {
    let horoscope = "You're a lone ranger and never get bored of your own company. That said, the odd social activity would help to bring you out of your shell."
    document.querySelector('#result').innerText = horoscope
  }else if ((month === 'january' && day >= 20) || (month === 'february' && day <= 18)) {
    let horoscope = "To be in good shape, you need to air out your mind! Get moving after work is finished, this is important!"
    document.querySelector('#result').innerText = horoscope
  }else {
    let horoscope = "Don't push your body too hard. Be reasonable with it and listen to the signals it's sending.'"
    document.querySelector('#result').innerText = horoscope
  }
}
