<script setup lang="ts">
import { useData } from 'vitepress';
import CharacterProperty from '../components/CharacterProperty.vue';
import CharacterCard from '../components/CharacterCard.vue';
import { computed, onMounted } from 'vue';
import { Chart } from 'chart.js/auto';
import AxeSwing from '../../gameicons/lorc/axe-swing.svg'
import BearFace from '../../gameicons/sparker/bear-face.svg'
import FlatPaw from '../../gameicons/lorc/flat-paw-print.svg'
import BullHorns from '../../gameicons/lorc/bull-horns.svg'
import Traits from './Traits.vue';

const { frontmatter } = useData()

const labels = computed( () => Object.keys(frontmatter.value.stats))
const scores = computed( () => Object.values(frontmatter.value.stats))

const data = {
  labels: labels.value,
  datasets: [{
    label: 'Stats',
    data: scores.value,
    min: 0,
    fill: true,
    backgroundColor: 'rgb(217, 187, 82, 0.3)',
    borderColor: '#f2ca3f',
    pointBackgroundColor: '#D9BB52',
    pointBorderColor: '#D9BB52',
    pointHoverBackgroundColor: '#D9BB52',
    pointHoverBorderColor: '#D9BB52'
  }]
}

const config = {
  type: 'radar',
  data: data,
  options: {
    scales: {
      r: {
        beginAtZero: true,
        grid: {
          color: '#b8992e' // Change the color of the grid lines
        },
        ticks: {
          display: false // This will hide the labels on the radar chart axes
        },
        pointLabels: {
          font: {
            size: 12,        // Makes the labels bigger
          },
          padding: 6,        // Adds more margin around the labels
          color: 'rgb(217, 187, 82, 0.6)',   // Changes the color of the labels (oran
          //display: false // This will hide the point labels around the radar chart
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
    ,
    elements: {
      line: {
        borderWidth: 3
      }
    }
  },
};

onMounted(() =>
  new Chart(document.getElementById("stats"), config)
)



</script>

<template>
    <div class=" grow w-full grid lg:grid-cols-3 lg:grid-rows-6 grid-cols-1 lg:gap-12 lg:p-12 p-4 gap-8 pt-6 overflow-auto ">
      <div class="row-span-1 col-span-1  font-inkut text-[#D9BB52] ">
        <h1 class=" text-3xl text-left block">{{ frontmatter.name }} </h1>
        <h2 class=" text-base my-2 text-[#b89e44]"> {{ frontmatter.class }} </h2>
        <CharacterProperty v-for="prop in frontmatter.properties"> {{ prop }} </CharacterProperty>
        <div class="float-right flex flex-row items-center gap-2">
        </div>
      </div>
      <div class="lg:row-span-6 col-span-1 ">
        <Content class="character-text text-slate-200 mt-2 text-sm text-justify" />
      </div>
      
      <div class="lg:row-span-3 col-span-1 flex-col px-12 lg:p-0 flex items-center justify-center drop-shadow-2xl">
        
        <canvas class="h-full" id="stats"></canvas>
      </div>
      <CharacterCard :image="frontmatter.image" link=""  class=" row-start-2 col-start-1 lg:row-span-5 col-span-1 h-96 lg:h-full" />
      
      <div class="lg:row-span-3 row-span-1 col-span-1">
        <Traits :traits="frontmatter.traits" />
      </div>
    </div>
</template>
