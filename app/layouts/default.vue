<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen bg-black text-white font-sans">
    <header class="p-4 border-b border-gray-700">
      <h1 class="text-2xl font-bold tracking-wide">🎸 fanTABulous</h1>
    </header>

    <main class="p-6">
      <slot />
    </main>

    <footer class="p-4 border-t border-gray-700 text-sm text-gray-400">
      &copy; 2005 fanTABulous &mdash; riff-ready tab parsing
    </footer>
  </div>
</template>

<style scoped>
/* Off-the-cuff styling freedom */
h1 {
  letter-spacing: 0.05em;
}
</style>
