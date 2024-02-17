<script lang="ts" setup>
import { Link } from '@inertiajs/vue3'
</script>

<template>
  <div style="padding: 30px;">
    <h1>Pagina 1</h1>
    <br>
    <br>
    <Link href="/1"><button>Link 1</button></Link>
    <br>
    <br>
    <Link href="/2"><button>Link 2</button></Link>
    <br>
    <br>
    <button id="btn">click page 1</button>
  </div>
</template>
