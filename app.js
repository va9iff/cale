import {Lit, html} from "./lit.js"
import {dummy, getRandName} from "./dummy.js"
console.log('app.js')
const range = (b = 1, a = 0) => [...Array(b - a).keys()].map(i => i + a)

window.data = {
	currentDay: 29,
}

let h = 30
let w = 150
let wGap = 10

class Cale extends Lit{
	static properties = {
		currentDay: {}
	}
	constructor(){
		super()
		this.currentDay = 28
		document.addEventListener("click",()=>this.deactivateEvents())
	}
	moveTo(day){
		this.currentDay = day
	}
	showNextWeek(e){
		this.moveTo(this.currentDay+7)
	}
 	showPrevWeek(e){
		this.moveTo(this.currentDay-7)
	}
	activateEvent(e){
		e.target.classList.toggle("activeEvent")
		e.stopPropagation()
	}
	deactivateEvents(e){
		[...this.querySelectorAll(".activeEvent")].forEach(div=>div.classList.remove("activeEvent"))
		// e.target.classList.remove("activeEvent")
	}
	deleter(e){
		// e.target.parentElement.remove()
		[...this.querySelectorAll(".activeEvent")].forEach(div=>div.remove())

	}
	render(){
		let week = dummy.slice(this.currentDay, this.currentDay+7)
		console.log(week)
		return html`<h3>day of month ${this.currentDay%31+1} - ${(this.currentDay + 6)%31+1}</h3>
		<button class="navWeekButton" @click=${this.showPrevWeek}>previous week</button>
		<button class="navWeekButton" @click=${this.showNextWeek}>next week</button>
			<div class="hours">
				${range(24).map(hour=>html`
						<button class = "hour" style="top: ${h*hour}px">${hour<=9?"0":""}${hour}:00</button>
					`)}
			</div>
			<div class="events">
			${range(7).map(day=>html`
					<div class= "dayDivider" style = "left: ${day*(w+wGap)}px"></div>
					<div class="dayName"     style = "left: ${day*(w+wGap)-(w+wGap)/2}px">${["I","II","III", 'IV', 'V', 'VI', 'VII'][day]}</div>
				`)}
			<div class="cells">
				${week.map((day, weekNo)=> day.events.map(event=>html`
						<div @click=${this.activateEvent} class="event" style = "left: ${weekNo*(w+wGap)}px; width: ${w}px; top: ${event.start*h}px; height: ${event.duration*h}px">
						<button class="deleter" @click=${this.deleter}>delete</button>
							<div class="details" style="pointer-events: none">
								starts: ${(parseInt(event.start*100)/100+'').replace('.', ':')} <br>
								duration: ${(parseInt(event.duration*100)/100+'')} <br>
							</div>
							${event.teacher} <br>
						</div>
					`)).flat()}
			</div>

			</div>
			
		`
	}
}
Cale.tag = "v-cale"

