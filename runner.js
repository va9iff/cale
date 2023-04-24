// from wikipedia
let randtext = `
The cat (Felis catus) is a domestic species of small carnivorous mammal.[1][2] I
t is the only domesticated species in the family Felidae and is commonly referre
d to as the domestic cat or house cat to distinguish it from the wild members of
 the family.[4] Cats are commonly kept as house pets but can also be farm cats o
r feral cats; the feral cat ranges freely and avoids human contact.[5] Domestic 
cats are valued by humans for companionship and their ability to kill rodents. A
bout 60 cat breeds are recognized by various cat registries.[6] The cat is simil
ar in anatomy to the other felid species: it has a strong flexible body, quick r
eflexes, sharp teeth, and retractable claws adapted to killing small prey like m
ice and rats. Its night vision and sense of smell are well developed. Cat commun
ication includes vocalizations like meowing, purring, trilling, hissing, growlin
g, and grunting as well as cat-specific body language. Although the cat is a soc
ial species, it is a solitary hunter. As a predator, it is crepuscular, i.e. mos
t active at dawn and dusk. It can hear sounds too faint or too high in frequency
 for human ears, such as those made by mice and other small mammals.[7] It also 
secretes and perceives pheromones.[8] Female domestic cats can have kittens from
 spring to late autumn, with litter sizes often ranging from two to five kittens
.[9] Domestic cats are bred and shown at events as registered pedigreed cats, a 
hobby known as cat fancy. Population control of cats may be achieved by spaying 
and neutering, but their proliferation and the abandonment of pets has resulted 
in large numbers of feral cats worldwide, contributing to the extinction of enti
re bird, mammal, and reptile species.[10] It was long thought that cat domestica
tion began in ancient Egypt, where cats were venerated from around 3100 BC,[11][
12] but recent advances in archaeology and genetics have shown that their domest
ication occurred in Western Asia around 7500 BC.[13] As of 2021, there were an e
stimated 220 million owned and 480 million stray cats in the world.[14][15] As o
f 2017, the domestic cat was the second most popular pet in the United States, w
ith 95.6 million cats owned[16][17][18] and around 42 million households owning 
at least one cat.[19] In the United Kingdom, 26% of adults have a cat, with an e
stimated population of 10.9 million pet cats as of 2020.[20]`
let someText = ()=> {
	let k= r()*randtext.length
	// return randtext.slice(k, k+parseInt(30*r()))
	return randtext.slice(k, k+30)

}

const r = Math.random
const range = (b = 1, a = 0) => [...Array(b - a).keys()].map(i => i + a)
const drange = (b = 1) => {
	let result = range(b)
	let reslen = parseInt(r()*result.length)
	return result.slice(0, reslen)
}

let names = [
	"Olivia",
	"Liam",
	"Emma",
	"Noah",
	"Amelia",
	"Oliver",
	"Ava",
	"Elijah",
	"Sophia",
	"Mateo",
	"Isabella",
	"Lucas",
	"Luna",
	"Levi",
	"Mia",
	"Asher",
	"Charlotte",
	"James",
	"Evelyn",
	"Leo",
	"Harper",
	"Grayson",
	"Scarlett",
	"Ezra",
	"Nova",
	"Luca",
	"Aurora",
	"Ethan",
	"Ella",
	"Aiden",
	"Mila",
	"Wyatt",
	"Aria",
	"Sebastian",
	"Ellie",
	"Benjamin",
	"Gianna",
	"Mason",
	"Sofia",
	"Henry",
	"Violet",
	"Hudson",
	"Layla",
	"Jack",
	"Willow",
	"Jackson",
	"Lily",
	"Owen",
	"Hazel",
	"Daniel",
	"Camila",
	"Alexander",
	"Avery",
	"Maverick",
	"Chloe",
	"Kai",
	"Elena",
	"Gabriel",
	"Paisley",
	"Carter",
	"Eliana",
	"William",
	"Penelope",
	"Logan",
	"Eleanor",
	"Michael",
	"Ivy",
	"Samuel",
	"Elizabeth",
	"Muhammad",
	"Riley",
	"Waylon",
	"Isla",
	"Ezekiel",
	"Abigail",
	"Jayden",
	"Nora",
	"Luke",
	"Stella",
	"Lincoln",
	"Grace",
	"Theo",
	"Zoey",
	"Jacob",
	"Emily",
	"Josiah",
	"Emilia",
	"David",
	"Leilani",
	"Jaxon",
	]

const getRandName = ()=> names[parseInt(names.length*Math.random())]




let result =
	range(400).map(day=>{
		start = 0
		return {
			events: drange(4).map(event=>{
				dur = r()*3+1
				start = start + dur + 4
				return {
					text: someText(),
					start: start,
					duration: dur,
					teacher: getRandName() + ' ' + getRandName()
				}})
		}})

console.log(JSON.stringify(result, null, 2))