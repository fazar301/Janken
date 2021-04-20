const btnRule = document.querySelector('.rules > span')

const hl = document.querySelector('.hl')
const ruleClose = document.querySelector('.rule nav .close')
const rule = document.querySelector('.rule')
btnRule.addEventListener('click',function(){
    hl.classList.add('muncul')
    rule.classList.add('muncul')
})

ruleClose.addEventListener('click', function(){
    hl.classList.remove('muncul')
    rule.classList.remove('muncul')
})

const btnPlay = document.querySelector('.play-again')
btnPlay.addEventListener('click', function(e){
    e.preventDefault();
    
    const sectionP = document.querySelector('.section-picked')
    const sectionC = document.querySelector('.choose')
    const r = document.querySelectorAll('.removeTl')
    const j = document.querySelectorAll('.section-picked .janken-value')
    imgKomputer.parentElement.classList.add('flex')
    j.forEach(e => e.remove())
    r.forEach(e => e.classList.remove('removeTl'))
    sectionP.classList.remove('muncul')
    sectionC.classList.add('muncul')
})



let p,c;

const jankenElement = document.querySelectorAll('.choose .janken-value')


jankenElement.forEach(e => {
    e.addEventListener('click', function(event){
        let ep
        if(event.target.children.length != 0){
            p = event.target.children['0'].alt
             ep = event.target
            console.log(ep.outerHTML)
        }else{
           p = event.target.alt
            ep = event.target.parentElement
           console.log(ep.outerHTML)
        }

                
        const random = Math.floor(Math.random() * 10 + 1);

        if(random <= 2){
            c = 'rock'
        }else if(random <= 4){
            c = 'paper'
        }else if(random <= 6){
            c = 'scissors'
        }else if(random <= 4){
            c = 'spock'
        }else{
            c = 'lizard'
        }

        let hasil = rules(p,c)
        const cap = document.querySelector('.scor-cap')
        const ce = document.querySelector('.comp-pick')
        const elc = check(c,jankenElement)
        cap.innerHTML = hasil
        ce.innerHTML = elc
        ce.children[0].classList.add('ani')

        const pe = document.querySelector('.player-pick')
        pe.innerHTML = ep .outerHTML
        giveWinner(hasil)
        const sc = document.querySelector('.choose')
        const sp = document.querySelector('.section-picked')
        sc.classList.remove('muncul')
        sp.classList.add('muncul')
        
        setTimeout(putar,500)
        setTimeout(function(){
            ce.parentElement.classList.add('removeTl')
            pe.parentElement.classList.add('removeTl')
            return ce.children[0].classList.remove('ani')
        },2500)
        setTimeout(function(){
            imgKomputer.parentElement.classList.remove('flex')
        },2500)
      const winner = document.querySelector('.winner')
      const cek = document.querySelectorAll('.pwin')
      if(cek.length > 0){
          cek.forEach(e => e.classList.remove('pwin'))
      }

      winner.parentElement.classList.add('pwin')
    })
})

let hasil = ''
let skor = 0
function rules(a,b){
    if(a === b){
        hasil = 'TIE'
    }else if(a === 'scissors'){ 
        if(b === 'paper' || b === 'lizard'){
        hasil = 'YOU WIN'
        }else{
            hasil = 'YOU LOSE'
        }
    }else if(a === 'paper'){ 
        if(b === 'spock' || b === 'rock'){
        hasil = 'YOU WIN'
        }else{
            hasil = 'YOU LOSE'
        }
    }else if(a === 'rock'){ 
        if(b === 'lizard' || b === 'scissors'){
        hasil = 'YOU WIN'
        }else{
            hasil = 'YOU LOSE'
        }
    }else if(a === 'lizard'){ 
        if(b === 'spock' || b === 'paper'){
        hasil = 'YOU WIN'
        }else{
            hasil = 'YOU LOSE'
        }
    }else if(a === 'spock'){ 
        if(b === 'rock' || b === 'scissors'){
        hasil = 'YOU WIN'
        }else{
            hasil = 'YOU LOSE'
        }
    }
    
    const scors = document.querySelector('.value')
    if(skor === 0 && hasil === 'YOU LOSE'){
        skor = 0
        scors.innerHTML = 0
    }else{
        if(hasil === 'YOU WIN'){
            skor += 1
        }else if(hasil === 'YOU LOSE'){
            skor -= 1
        }
        setTimeout(function(){
            scors.innerHTML = skor
        },3000)
    }
   
    return hasil
}

console.log(p)
console.log(c)


function check(e,arr){
    let ec = '';
    arr.forEach(el => {
        if(el.children[0].alt === e){
            ec = el.outerHTML
        }
    })
    return ec
}


function giveWinner(val){
    const pp = document.querySelector('.player-pick')
    const cc = document.querySelector('.comp-pick')
    const cek = document.querySelectorAll('.winner')
    if(cek.length > 0){
        cek.forEach(e => e.classList.remove('winner'))
    }else{
        if(val === 'YOU WIN'){
            pp.children[0].classList.add('winner')
        }else if(val === 'TIE'){
            return
        }
        else{
            cc.children[0].classList.add('winner')
        }

    }
}
const imgKomputer = document.querySelector('.img-komputer')
function putar(){
    
    const gambar = ['rock','paper','scissors','lizard','spock']

    let i = 0;
    const waktuMulai = new Date().getTime();

    setInterval(function(){
        if(new Date().getTime()- waktuMulai > 2000){
            clearInterval
            return
        }
        imgKomputer.setAttribute('src',`images/icon-${gambar[i++]}.svg`);
        if(i == gambar.length){
            i = 0
        }
    },110)
}


// setInterval(function(){

// },300)