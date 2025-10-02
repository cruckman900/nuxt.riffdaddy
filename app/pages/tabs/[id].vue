<!-- app/pages/tabs/[id].vue -->
<template>
    <div class="p-6 text-white">
        <h2 class="text-xl font-bold">🎼 Tab ID: {{ id }}</h2>
        <p>This is where tab preview will go.</p>
    </div>
</template>

<script setup>
const route = useRoute()
const id = route.params.id
</script>