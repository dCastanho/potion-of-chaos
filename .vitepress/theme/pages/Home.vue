<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import CharacterCard from '../components/CharacterCard.vue'
import HomepageCard from '../components/HomepageCard.vue'
import ArrowRight from '../icons/ArrowRight.vue'
import {data as sessions} from '../sessions.data.js'

interface Character {
  image: string,
  name: string,
  ci: number
}

const charactersRef = [
  { image: "/cici.png", name: "Cici", ci: 0, link: '/cici' },
  { image: "/minerva.png", name: "Minerva", ci: 1, link: '/minerva' },
  { image: "/rhya.png", name: "Rhyia", ci: 2, link: '/rhyia' },
  { image: "/valzali.jpg", name: "Valzali", ci: 3, link: '/valzali' }
]

const latestSession = sessions[0]
const cardMoving = ref(false)
const characters = ref(charactersRef.slice())
const cardRef = ref()
const topCard = computed( () => characters.value[characters.value.length - 1]) 
const bottomCard = computed( () => characters.value[0]) 

function zOf(char: Character) {
  return characters.value.findIndex( c => c.image == char.image )
}

function toBack() {
	cardMoving.value = true
	cardRef.value[topCard.value.ci]
		.move()
		.then(  _ => {
			// displacing the last onto first place in an immutable way so that the change is registered
			characters.value = [topCard.value, ...characters.value.slice(0, -1)];
			cardMoving.value = false
		});
}

function toFront() {
	cardMoving.value = true 
	cardRef.value[bottomCard.value.ci]
		.move()
		.then( _ => {
			// displacing the first onto last place in an immutable way so that the change is registered
			characters.value = [...characters.value.slice(1), bottomCard.value]; 
			cardMoving.value = false
		}); 
}

const touchStartX = ref(0)
const swipeThreshold = 50

function handleTouchStart(event) {
      touchStartX.value = event.touches[0].clientX;
}
function handleTouchEnd(event) {	
	const touchEndX = event.changedTouches[0].clientX;
	const delta = touchEndX - touchStartX.value
	

	if(delta > swipeThreshold && !cardMoving.value) {
		toFront()	
	} else if(delta < -swipeThreshold && !cardMoving.value) {
		toBack()
	}
}

</script>

<template>
	<div class="grow w-full lg:flex lg:flex-row overflow-scroll">


		<div class="lg:w-1/2 w-full flex flex-col lg:pl-24 justify-center items-center lg:items-start py-12 lg:py-0 gap-y-8">
			<h1 class="text-5xl font-semibold text-slate-200 font-inkut text-center lg:start"> Threaded Hearts </h1>
			<p class="text-white w-4/5 text-center lg:text-left"> A seemingly random village is attacked by bandits. Always willing to work for coin,
				our band of adventurers is hired to help out. Of course, they had no idea their involvement would put them right
				in the middle of a war between angels and demons... </p>
				<nav class="flex lg:flex-row flex-col justify-start gap-8 items-center">
					<a
					:href="latestSession.url"
					class="font-semibold rounded-md w-44 bg-gradient-to-r flex flex-col justify-center from-[#D9BB52] to-[#B19634] text-white text-center h-12">
					Latest Session
				</a>
				<a class="text-white stroke-white flex flex-row justify-start items-center">
					See Lore
					<ArrowRight class="ml-2 font-bold" />
				</a>
			</nav>
		</div> 
		<div class="overflow-x-clip lg:w-1/2 w-full mt-12 lg:mt-0 lg:h-full h-4/5 flex flex-col gap-y-10 items-center justify-end lg:p-12 relative" @touchstart="handleTouchStart" @touchend="handleTouchEnd"  >
				<template v-for="char, i of charactersRef" :key="char.ci" >
					<HomepageCard :image="char.image" :index="char.ci" :z="zOf(char)" ref="cardRef" :link="char.link" />
				</template>
			<div class="flex-row flex justify-center gap-x-12 mt-64 lg:pt-0 items-center font-inkut lg:text-4xl text-2xl text-[#D9BB52]">
				<button :disabled="cardMoving" @click="() => toFront()" class="text-5xl">
					< </button>
					<h2 class="lg:w-96 w-44 text-center">
						{{ topCard.name }}
					</h2>
					<button :disabled="cardMoving" @click="() => toBack()" class="text-5xl"> > </button>
				</div>
			</div>
		</div>
	</template>