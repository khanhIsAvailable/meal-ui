
const services = [
	{
		title : "Quality cuisine",
		desc : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
		src : "001-soup.png"
	},
	{
		title : "Fresh food",
		desc : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
		src : "002-diet.png"
	},
	{ 
		title : "bread & pancake",
		desc : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
		src : "003-pancakes.png"
	},
	{
		title : "Reserve now",
		desc : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
		src : "004-tray.png"
	},
	{
		title : "Fresh vegies salad",
		desc : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
		src : "005-salad.png"
	},
	{
		title : "Whole chicken",
		desc : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
		src : "006-chicken-leg.png"
	}
]

const reviews = [
	{
		figure: "p1.png",
		name: "Peter Green",
		title: "CEO, Founder",
		saying: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	},{
		figure: "p2.png",
		name: "Dennis Roman",
		title: "CEO, Founder",
		saying: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."		
	},
	{
		figure: "p3.png",
		name: "Maxim Smith",
		title: "CEO, Founder",
		saying: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."		
	},
	{
		figure: "p5.png",
		name: "Ironman",
		title: "Special person",
		saying: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."		
	},
	{
		figure: "p4.png",
		name: "Peter Parker",
		title: "Spider man",
		saying: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."		
	}
]


const mealList = [
{
	meal:'breakfast',
	select: true
},
{
	meal:'brunch',
	select: false
},
{
	meal: 'dinner',
	select: false
} 
]

const dishes =[
  {
    name: "Warm spinack dip & chips",
    type: "breakfast",
    desc: "Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.",
    src: "spinack.png",
    price: 10.49
  },
  {
    name: "Crispy onion rings",
    type: "breakfast",
    desc: "A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.",
    src: "onion.png",
    price: 11.99
  },
  {
    name: "Jumbo lump crab stack",
    type: "brunch",
    desc: "Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.",
    src: "jumbo.png",
    price: 10.49
  },
  {
    name: "Lobster & Shrimp Quesadilla",
    type: "breakfast",
    desc: "Lobster and tender shrimp, with onions, sweet peppers, spinach and our three cheese blend. Griddled and served with tomato salsa and sour cream.",
    src: "lobster.png",
    price: 13.99
  },
  {
    name: "Bahamian Seafood Chowder",
    type: "brunch",
    desc: "Crisp tortilla and plantain chips covered with lightly spiced ground beef, melted cheese, pickled jalapeños, guacamole, sour cream and salsa.",
    src: "bahamianSeafood.png",
    price: 12.99
  },
  {
    name: "Jamaican Chicken Wings",
    type: "brunch",
    desc: "Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.",
    src: "jamaicaChickenWings.png",
    price: 12.99
  },
  {
    name: "Grilled Chicken & Tropical Fruit on Mixed Greens",
    type: "brunch",
    desc: "Lobster and tender shrimp, with onions, sweet peppers, spinach and our three cheese blend. Griddled and served with tomato salsa and sour cream.",
    src: "grilledChicken.png",
    price: 12.49
  },
  {
    name: "Grilled top stirlion steak",
    type: "dinner",
    desc: "Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.",
    src: "steak.png",
    price: 18.49
  },
  {
    name: "steak oscar",
    type: "dinner",
    desc: "Crisp tortilla and plantain chips covered with lightly spiced ground beef, melted cheese, pickled jalapeños, guacamole, sour cream and salsa.",
    src: "steakOscar.png",
    price: 23.49
  },
  {
    name: "skirt steak churrasci",
    type: "dinner",
    desc: "A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.",
    src: "steakChurrasco.png",
    price: 20.49
  },
  {
    name: "grilled beef steak",
    type: "dinner",
    desc: "Lobster and tender shrimp, with onions, sweet peppers, spinach and our three cheese blend. Griddled and served with tomato salsa and sour cream.",
    src: "grilledBeefSteak.png",
    price: 20.99
  }
]


const renderDishes=(type)=>{

	let newList=[];
	dishes.forEach(item=>{
		if(item.type === type ){
			newList.push(item)
		}
	})
	return newList
}

const render=(list)=>{
	const items = document.querySelector(".meal-items")


	const item = document.querySelectorAll(".meal-item")
	item.forEach(it=>{
		items.removeChild(it)
	})


	list.forEach(item=>{
		const container = document.createElement('div')
		const img = document.createElement("img")
		const content = document.createElement('div')
		const price = document.createElement('div')
		const h4 =document.createElement('h4')
		const p = document.createElement('p')
		const h5 = document.createElement('h5')

		h4.textContent = item.name
		p.textContent = item.desc
		h5.textContent = `$  ${item.price}`
		img.setAttribute('src',`./images/${item.src}`)
		container.setAttribute('class',"meal-item")
		content.setAttribute('class', 'item-content')
		price.setAttribute('class', 'price')

		price.appendChild(h5)
		content.appendChild(h4)
		content.appendChild(p)

		container.appendChild(img)
		container.appendChild(content)
		container.appendChild(price)

		items.appendChild(container)
	})

}


const menu= ()=>{
	const toggleBtn = document.querySelector(".toggle-btn")
	const header = document.querySelector(".header")
	const item = document.querySelectorAll(".item")
	toggleBtn.addEventListener("click",()=>{
		header.classList.toggle("menuActive")
		item.forEach((link,i) =>{
			if(link.style.animation === ""){
				item
				link.style.animation = `fadeLink 1s forwards ${i/8}s`
			} else {
				link.style.animation =""
			}

			link.addEventListener("click", ()=>{
				header.classList.remove("menuActive")
				item.forEach(i=>{
					i.style.animation =""
				})
			})
		})
	})
}

const learnMoreBtn = ()=>{
	const btn = document.querySelectorAll(".learn-more")
	btn.forEach(b=>{
		const p = document.createElement('p')
		p.textContent = "Learn more"
		const i = document.createElement("i")
		i.setAttribute('class',"fa-solid fa-arrow-right" ) 
		b.appendChild(p)
		b.appendChild(i)

	})
}


const scrollLayer = () => {
	const layer = document.querySelector(".white-layer")
	const logo = document.querySelector(".logo")
	const blurLayer = document.querySelector(".blur-layer")

	let lastScrollY=0

	window.addEventListener('scroll', () =>{
		const y = window.pageYOffset
		if(y<800) blurLayer.style.transform = `scale(${1+(y/1000)})`
		else blurLayer.style.transform = `scale(1.8)`

		if(y > lastScrollY && y >350 ){
			layer.style.animation = "layerDown 0.5s forwards"
		} 
		else if(y < lastScrollY && y <= 350 ) {
			layer.style.transition ="all 0.5s ease-out"
			layer.style.animation = "layerUp 1s forwards"			
		} else{

		}

		lastScrollY = y
		logo.classList.toggle('black-logo', y>350)
	}

	)
}


function renderServices(){
	const container = document.querySelector(".services-container")
	services.forEach(service =>{
		const divContainer = document.createElement('div')
		const img = document.createElement('img')
		const div = document.createElement('div')
		const h2 = document.createElement('h2')
		const p = document.createElement('p')


		img.setAttribute('src', `./images/services/${service.src}`)
		div.setAttribute('class', "service-description")
		h2.textContent = service.title
		p.textContent = service.desc
		divContainer.setAttribute('class', "service")

		div.appendChild(h2)
		div.appendChild(p)
		divContainer.appendChild(img)
		divContainer.appendChild(div)

		container.appendChild(divContainer)

	})

}


const mealMenu = () =>{
	const mealMenu = document.querySelector(".nav-meal")

	const clickBtn = (i)=>{
		mealList.forEach(item=>{
			item.select = false

		})
		mealList[i].select =true
	}

	const check = (target,it) =>{
		if(it.select){
			target.classList.add("meal-active")
		} else {
			target.classList.remove("meal-active")
		}

	}


	mealList.forEach((item,i) =>{
		const div = document.createElement('div')
		const h4 = document.createElement("h4")

		div.setAttribute("class", "meal")
		div.setAttribute("data-meal", item.meal)
		h4.textContent = item.meal

		div.appendChild(h4)
		mealMenu.appendChild(div)

		check(div,item)
		div.addEventListener('click', ()=>{

			clickBtn(i)
			mealList.forEach((it,i) =>{
				const target = document.querySelector(`[data-meal="${it.meal}"]`)
				check(target,it)
			})

		})

	})
}


const selectItem = () =>{
	const selections = document.querySelectorAll('.meal')
	selections.forEach(select =>{
		select.addEventListener('click', (e)=>{
			const target = e.target.parentNode.getAttribute('data-meal')
			const list = renderDishes(target)
			render(list)
		})

	})
}



function renderSlide(){

	const container = document.querySelector(".container")
	
	reviews.forEach(review =>{
		const box = document.createElement("div")
		const blockquote = document.createElement("blockquote")
		const p1 = document.createElement("p")
		const div = document.createElement('div')
		const img = document.createElement('img')
		const h2 = document.createElement('h2')
		const p2 = document.createElement('p')

		box.setAttribute('class', 'box')
		div.setAttribute('class', 'image')
		img.setAttribute('src', `./images/author/${review.figure}`)
		p1.textContent = '"'+review.saying + '"'
		h2.textContent = review.name
		p2.textContent = review.title

		blockquote.appendChild(p1)
		box.appendChild(blockquote)
		div.appendChild(img)
		div.appendChild(h2)
		div.appendChild(p2)

		box.appendChild(div)
		container.appendChild(box)
	})

}

function handleClickBtn(box, index,length){
	box.style.left = -length*index + "px"
	const target = document.querySelector(`#radio-${index}`)
	target.checked = true
}


const renderSwitchBtn = () => {
	const container = document.querySelector('.switch')
	const size = reviews.length
	const box = document.querySelector(".container")

	var interval = null

	function start(index){
		interval = setInterval(function (){
			if(index>=size-1) index=0 
			else index ++
			handleClickBtn(box,index, box.childNodes[1].offsetWidth)
		},3000)
	}
	
	function stop(){
		clearInterval(interval)
	}


	for(let i = 0 ; i < size; i++){
		const input = document.createElement('input')
		const label = document.createElement('label')
		input.setAttribute('id', `radio-${i}`)
		input.setAttribute('name', 'slider-item')
		input.setAttribute('type', 'radio')

		label.setAttribute('class', 'mask-radio')
		label.setAttribute('for', `radio-${i}`)


		label.addEventListener('click',()=>{
			handleClickBtn(box,i,box.childNodes[1].offsetWidth)
			stop()
			start(i)
		})

		container.appendChild(input)
		container.appendChild(label)
	}

	handleClickBtn(box,0,box.childNodes[1].offsetWidth)
	start(0)
	
}

const handleSubmitForm = ()=>{
	const form = document.querySelector('.form')
	form.addEventListener('submit',(e)=>{
		e.preventDefault()
	})
}


const app = () =>{
	handleSubmitForm()
	renderSlide()
	renderSwitchBtn()
	menu()
	learnMoreBtn()
	scrollLayer()
	mealMenu()
	render(renderDishes("breakfast"))
	selectItem();
	renderServices()
}

app()
