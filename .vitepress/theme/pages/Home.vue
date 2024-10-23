<script setup lang="ts">
import { computed, ref } from 'vue';
import CharacterCard from '../components/CharacterCard.vue'
import ArrowRight from '../icons/ArrowRight.vue'

interface Character {
  image: string,
  name: string,
  ci: number
}

const characters = [
  { image: "/cici.png", name: "Cici", ci: 0, link: '/cici' },
  { image: "/minerva.png", name: "Minerva", ci: 1, link: '/minerva' },
  { image: "/rhya.png", name: "Rhyia", ci: 2, link: '/rhyia' },
  { image: "/valzali.jpg", name: "Valzali", ci: 3, link: '/valzali' }
]

const selected = ref(0)
const inShift = ref<undefined | number>(undefined)
const inMov = ref(false)

const sorted = computed(() => {
  return characters.slice(selected.value).concat(characters.slice(0, selected.value))
})

function move(index) {
  inMov.value = true
  inShift.value = selected.value
  setTimeout(() => {
    inMov.value = false
    const newIndex = selected.value + index
    if (newIndex < 0)
      selected.value = characters.length - 1
    else if (newIndex >= characters.length)
      selected.value = 0
    else
      selected.value = newIndex
  }, 500)

  setTimeout(() => inShift.value = undefined, 500)
}


const classes = {
  default: `lg:w-[70%] lg:h-[80%] h-4/5 w-[90%] absolute ease-in-out duration-500 transition-all lg:top-1/2 top-0 left-1/2 lg:-translate-y-[60%] -translate-x-1/2 `,
  inMovmement: `lg:w-[70%] lg:h-[80%] h-4/5 w-4/5 absolute ease-in-out duration-500 transition-all top-1/2 -left-1/4 -translate-x-full `
}

const rotations = [
	"rotate-[0deg]",
	"rotate-[6deg]",
	"rotate-[12deg]",
	"rotate-[18deg]"
]

const rotationsMov = [
	"-rotate-[30deg]",
	"-rotate-[36deg]",
	"-rotate-[42deg]",
	"-rotate-[48deg]"
]

const decideClasses = (char: Character, i: number) => {
  if (inShift.value == char.ci)
    return classes.inMovmement + ' ' + rotationsMov[i]
  else
    return classes.default + ' ' + rotations[i]
}

function zOf(char: Character) {
  return sorted.value.indexOf(char)
}

</script>

<template>
	<div class="grow w-full lg:flex lg:flex-row overflow-scroll">


		<div class="lg:w-1/2 w-full flex flex-col lg:pl-24 justify-center items-center lg:items-start py-12 lg:py-0 gap-y-8">
			<h1 class="text-5xl font-semibold text-slate-200 font-inkut text-center lg:start"> Black Mountain </h1>
			<p class="text-white w-4/5"> A seemingly random village is attacked by bandits. Always willing to work for coin,
				our band of adventurers is hired to help out. Of course, they had no idea their involvement would put them right
				in the middle of a war between angels and demons... </p>
				<nav class="flex lg:flex-row flex-col justify-start gap-8 items-center">
					<a
					class="font-semibold rounded-md w-44 bg-gradient-to-r flex flex-col justify-center from-[#D9BB52] to-[#B19634] text-white text-center h-12">
					Latest Session
				</a>
				<a class="text-white stroke-white flex flex-row justify-start items-center">
					See Lore
					<ArrowRight class="ml-2 font-bold" />
				</a>
			</nav>
		</div>
		<div class="lg:w-1/2 w-full mt-12 lg:mt-0 lg:h-full h-4/5 flex flex-col gap-y-10 items-center justify-end lg:p-12 relative">
				<template v-for="char, i of characters">
					<CharacterCard :style="`z-index: ${20 - zOf(char)}`" :class="decideClasses(char, i)"
					 :image="char.image" :link="char.link"/>
				</template>
			<div class="flex-row flex justify-center gap-x-12 mt-64 lg:pt-0 items-center font-inkut lg:text-4xl text-2xl text-[#D9BB52]">
				<button @click="move(-1)" class="text-5xl">
					< </button>
					<h2 class="lg:w-96 w-44 text-center">
						{{ characters[selected].name }}
					</h2>
					<button @click="move(1)" class="text-5xl"> > </button>
				</div>
			</div>
		</div>
	</template>