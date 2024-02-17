<script lang="ts" setup>
import { ref } from 'vue'
import Chart from 'vue3-apexcharts'

const chartOptions = {
  chart: {
    id: "vuechart-example",
    toolbar: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      tools: {
        download: true,
        selection: true,
        zoom: true,
        zoomin: true,
        zoomout: true,
        pan: false,
        reset: true,
        customIcons: []
      },
      export: {
        csv: {
          filename: undefined,
          columnDelimiter: ',',
          headerCategory: 'category',
          headerValue: 'value',
          dateFormatter(timestamp) {
            return new Date(timestamp).toDateString()
          }
        },
        svg: {
          filename: undefined,
        },
        png: {
          filename: undefined,
        }
      },
      autoSelected: 'zoom'
    },
    zoom: {
      enabled: true,
      type: 'x',
      autoScaleYaxis: false,
      zoomedArea: {
        fill: {
          color: '#90CAF9',
          opacity: 0.4
        },
        stroke: {
          color: '#0D47A1',
          opacity: 0.4,
          width: 1
        }
      }
    }
  },
  colors: ['#099e0c', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
  xaxis: {
    categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    labels: {
      style: {
        fontSize: '15px'
      }
    }
  },
  // pie / donut
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
}

const series = ref([
  {
    name: "series-1",
    data: Array.from({ length: 12 }, () => Math.round(Math.random() * (100 - 10) + 10)),
  },
])
// pie / donut
const series2 = ref(Array.from({ length: 12 }, () => Math.round(Math.random() * (100 - 10) + 10)))

const addSeries = () => {
  const data = []
  for (let i = 0; i < 12; i++) {
    data.push(Math.round(Math.random() * 100))
  }
  series.value[0] = {
    name: 'teste',
    data
  }
  series2.value = data
}

</script>

<template>
  <div>
    <button @click="addSeries">Random</button>
    <div style="display: flex; flex-wrap: wrap;">
      <Chart width="500" type="area" :options="chartOptions" :series="series" />
      <Chart width="500" type="line" :options="chartOptions" :series="series" />
      <!-- <Chart width="500" type="column" :options="chartOptions" :series="series" /> -->
      <Chart width="500" type="pie" :options="chartOptions" :series="series2" />
      <Chart width="500" type="donut" :options="chartOptions" :series="series2" />
    </div>
  </div>
</template>

<style scoped>

.teste {
  color: #099e0c
}

</style>
