<template>
  <div
    class="w-full min-h-screen bg-zinc-100 flex justify-center items-center p-5"
  >
    <div
      class="w-full max-w-xl p-8 flex flex-col bg-white rounded-lg shadow-lg opacity-80"
    >
      <h1 class="uppercase text-2xl font-bold text-center">Calculate Cost</h1>
      <div class="mt-5">
        <div class="text-gray-800">
          <!-- Add Sample Content -->
        </div>
      </div>
      <div class="flex flex-col gap-3 mt-5">
        <UFormGroup label="Branches">
          <UInput />
        </UFormGroup>

        <UFormGroup label="Employees">
          <UInput />
        </UFormGroup>

        <UButton class="mt-3" color="black" label="Get Estimated Cost" block />
      </div>
    </div>
  </div>
</template>
