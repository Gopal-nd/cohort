

const randomWords = [
    "apple", "banana", "cherry", "dog", "elephant", "flower", "guitar", "house", "ice", "jungle",
    "kite", "lemon", "mountain", "notebook", "ocean", "pencil", "queen", "rain", "sunset", "tree",
    "umbrella", "volcano", "whale", "xylophone", "yellow", "zebra", "airplane", "bridge", "cactus",
    "dolphin", "engine", "fire", "glacier", "horizon", "island", "jacket", "kangaroo", "lantern",
    "mirror", "nebula", "octopus", "parrot", "quartz", "river", "star", "tunnel", "universe",
    "voyage", "window", "x-ray", "yogurt", "zeppelin", "asteroid", "butterfly", "crystal", "diamond",
    "emerald", "feather", "galaxy", "honey", "icicle", "jewel", "koala", "lighthouse", "mystery",
    "nightfall", "obsidian", "planet", "quiver", "ripple", "sapphire", "thunder", "underwater",
    "vortex", "windmill", "xenon", "yacht", "zenith", "aquarium", "breeze", "comet", "drizzle",
    "echo", "fog", "gondola", "harbor", "illusion", "journey", "karma", "lunar", "meadow", "nebula",
    "orbit", "penguin", "quasar", "rainbow", "satellite", "tidal", "uplift", "velocity", "whisper",
    "xylitol", "yonder", "zeppelin", "alchemy", "blizzard", "coral", "desert", "eruption",
    "fireworks", "glow", "harmony", "infinity", "jigsaw", "kaleidoscope", "lullaby", "mosaic",
    "nocturnal", "opal", "phantom", "quintessence", "radiance", "serendipity", "twilight", "utopia",
    "vivid", "wanderlust", "xenophobia", "yearning", "zest", "avalanche", "bamboo", "cascade",
    "dune", "ember", "fossil", "gale", "horizon", "iceberg", "jungle", "karma", "labyrinth",
    "mirage", "nectar", "oasis", "pinnacle", "quagmire", "resonance", "symphony", "tundra", "upland",
    "vortex", "whirlpool", "xylophone", "yonder", "zen", "astronomy", "burrow", "constellation",
    "dew", "eclipse", "fjord", "geyser", "horizon", "isotope", "javelin", "keystone", "lotus",
    "monsoon", "nebula", "overture", "permafrost", "quartzite", "rhapsody", "solstice", "telescope",
    "underworld", "vista", "wavelength", "xenogenesis", "yawn", "zenith", "aether", "brilliance",
    "crater", "dynamo", "essence", "flux", "gargoyle", "haven", "inertia", "juxtapose", "kepler",
    "luminary", "meteor", "neutrino", "omega", "plasma", "quasar", "resurgence", "singularity",
    "terabyte", "umbra", "vanguard", "warp", "xenolith", "yearbook", "zeitgeist"
  ];
  
let done = document.querySelector('#done')
let newstart = document.getElementById('newstart')
let history = document.querySelector('#history')
let clear = document.getElementById('clear')
 // initial loading screen 
 window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
    document.body.style.backgroundColor='black'

        setTimeout(() => {
            loader.style.display = "none";
             document.body.style.removeProperty('background-color')
            content.classList.remove("hidden");
            listAllHistory()
        },3000); 
    });

    // Random words generator
    let wordsLength;
    let words =''
    let typedIndex =0;
    let totalTyped =0;
    let correctTyped = 0;
    let startTime = null;
    let timerInterval;
    let elapsedTime;
    let wpm
    let accuracy;
    const rangeValue = document.getElementById('rangeValue')
    const rangeSelect = document.getElementById('rangeSelect')
    let textToType = document.querySelector('#textToType')
    generatorRandomWords(10)
    // taking user input on number of words
    rangeSelect.addEventListener('input',(e)=>{
        e.preventDefault()
         wordsLength = Number(e.target.value)
        rangeValue.innerHTML = wordsLength
        words = ''
        generatorRandomWords(wordsLength)
    
      
    })

    clear.addEventListener('click',(e)=>{
        e.preventDefault()
        let historyData = localStorage.getItem('history')
        let historyArry = historyData? JSON.parse(historyData) :[]
        if(!historyArry.length){
            return
        }
        let conformation = confirm('Are you sure to remove the History')
        if(conformation){
            localStorage.clear('history')
            history.innerHTML=null
        }

    })

    function updateStats(){
         elapsedTime =startTime? (Date.now()-startTime)/1000 :0
        document.getElementById('time').textContent = elapsedTime.toFixed(1)
        
        wpm = ((correctTyped/5)/(elapsedTime/60)).toFixed(2)
        document.getElementById('wpm').textContent = wpm > 0 ? wpm : 0;

        accuracy = ((correctTyped / totalTyped) * 100).toFixed(2);
        document.getElementById('accuracy').textContent = accuracy > 0 ? accuracy : 0;
     
    }

    // generating that many random of words
    function generatorRandomWords(wordsLength){
        done.classList.add('hidden')
        for(let i =0;i<wordsLength;i++){
            words+=randomWords[Math.floor(Math.random()*208)];
            words+=' '
        }
        textToType.innerHTML = `<span>${words[0]}</span>`+words.slice(1)
        wrapLetters()
        typedIndex =0;
        totalTyped =0;
         correctTyped = 0;
        startTime = null;
        document.getElementById('time').textContent =0
        document.getElementById('wpm').textContent = 0
        document.getElementById('accuracy').textContent = 0
 
        

    }

    // wrapping each letter with span 
    function wrapLetters(){
        textToType.innerHTML = words.split('').map((char,i)=> `<span ${i===0?'class="cursor"':''}>${char}</span>`).join('')
    }
    wrapLetters()




    window.addEventListener('keydown',(e)=>{
        e.preventDefault()

        if (!startTime) {
                startTime = Date.now();
                timerInterval = setInterval(updateStats, 100);
            }
        let spans = textToType.querySelectorAll("span")
        let correctChar = words[typedIndex]

        // handle backspace
        if(e.key === "Backspace" && typedIndex >0){
            spans[typedIndex -1].classList.remove('typed','wrong');
            spans[typedIndex -1].classList.add('cursor')
            spans[typedIndex]?.classList.remove('cursor')
            typedIndex--;
            totalTyped--;
            updateStats()
            return;
        }

        //ignore non-character keys
        if(e.key.length>1 )return;

        totalTyped++;

        //typed incorect char
         // Prevent typing if incorrect character is entered
         if (e.key !== correctChar) {
                spans[typedIndex].classList.add("wrong");
                updateStats()
                return;
        }

        //typed corect one
        spans[typedIndex].classList.remove("cursor", "wrong");
        spans[typedIndex].classList.add("typed");
        typedIndex++;
        correctTyped++;
        //move cursor to next letter
            console.log(typedIndex,words.length)
        if (typedIndex < words.length-1) {
            spans[typedIndex].classList.add("cursor");
       
                
            updateStats()
            } else {
                done.classList.remove('hidden')
                initConfetti();
                drawConfetti();
                clearInterval(timerInterval); // Stop timer
                updateStats()
                AddToHistory(elapsedTime,wpm,accuracy,wordsLength)
                textToType.innerHTML = ''
                setTimeout(() => {
                done.classList.add('hidden')
                generatorRandomWords(10)
                }, 5000);

            }

    })

    newstart.addEventListener('click',(e)=>{
        e.preventDefault()
        textToType.innerHTML =''
        generatorRandomWords(10)
    })

    function AddToHistory(time,speed,accuracy,wordsLength){
        let historyData = localStorage.getItem('history')
        let historyArry = historyData? JSON.parse(historyData) :[]
        let now = new Date()
        let DateAndTime = now.toLocaleString()
        let currentData=  {DateAndTime:DateAndTime,wordsLength:wordsLength,time:time,speed:speed,accuracy:accuracy}
        historyArry.unshift(currentData)
        localStorage.setItem("history",JSON.stringify(historyArry))
        history.innerHTML+=`  <tr>
         <td class="border px-4 py-2">${DateAndTime}</td>
        <td class="border px-4 py-2">${wordsLength}</td>
        <td class="border px-4 py-2">${time}</td>
        <td class="border px-4 py-2">${speed}</td>
        <td class="border px-4 py-2">${accuracy}</td>
        </tr>`
        // localStorage.setItem("history",[{wordsLength:wordsLength,time:time,speed:speed,accuracy:accuracy}])

    }

    function listAllHistory(){
        let historyData = localStorage.getItem('history')
        let historyArry = historyData? JSON.parse(historyData) :[]
        let final = historyArry.map((data)=>`<tr>
            <td class="border px-4 py-2">${DateAndTime}</td>
        <td class="border px-4 py-2">${data.wordsLength}</td>
        <td class="border px-4 py-2">${data.time}</td>
        <td class="border px-4 py-2">${data.speed}</td>
        <td class="border px-4 py-2">${data.accuracy}</td>
        </tr>`).join('')

        history.innerHTML=final
    }
  

    const canvas = document.getElementById("confettiCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let confetti = [];

    function createConfetti() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            size: Math.random() * 8 + 2,
            speedY: Math.random() * 3 + 1,
            speedX: Math.random() * 2 - 1,
            angle: Math.random() * 360,
        };
    }

    function initConfetti() {
        for (let i = 0; i < 200; i++) {
            confetti.push(createConfetti());
        }
    }

    function drawConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach((c) => {
            ctx.fillStyle = c.color;
            ctx.beginPath();
            ctx.arc(c.x, c.y, c.size, 0, Math.PI * 2);
            ctx.fill();

            // Update position
            c.y += c.speedY;
            c.x += c.speedX;

            // Reset when confetti falls off
            if (c.y > canvas.height) {
                c.y = -10;
                c.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(drawConfetti);
    }

    
