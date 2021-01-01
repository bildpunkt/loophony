<template>
  <div class="h-full w-full flex justify-center items-center divide-x divide-gray-300">
    <div class="w-96 p-6 text-center">
      <h2 class="text-3xl font-semibold mb-2">Without Login</h2>
      <p class="mb-4">
        Use loophony without logging in to Bandcamp! 
        You won't be able to see your collections and will be subject
        to stream limitations on any album that has them set!
      </p>
      <p>
        <router-link class="inline-block mx-auto py-2 px-4 text-green-600 border-green-600 hover:bg-green-400 hover:bg-opacity-20 border rounded" to="/album">
          Search
        </router-link>
      </p>  
    </div>
    <div class="w-96 p-6 text-center">
      <h2 class="text-3xl font-semibold mb-2">With Login</h2>
      <p class="mb-4">
        Login to Bandcamp to easily access your personal collection!
        Stream limitations will be removed for owned albums and listened
        tracks can be cached locally!
      </p>
      <p>
        <router-link class="inline-block mx-auto py-2 px-4 text-white bg-green-400 hover:bg-green-600 rounded" to="/album">
          Login
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>