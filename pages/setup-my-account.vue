<template>
  <div
    class="w-full min-h-screen bg-zinc-100 flex justify-center items-center p-5"
  >
    <div
      class="w-full max-w-xl p-8 flex flex-col bg-white rounded-lg shadow-lg opacity-80"
    >
      <h1 class="uppercase text-2xl font-bold text-center">
        Setup Account Account
      </h1>
      <div class="mt-5">
        <div class="text-gray-800">
          <p class="text-lg">
            Hello <span class="font-semibold">Tharindu Nimesh</span>
          </p>
          <p class="mt-2">
            You have set as <span class="font-semibold">Owner</span> in
            <span class="font-semibold">Eversoft IT Solutions</span>. To get
            started, please create your username and password to set up your
            account and gain access to the POS system. These credentials will
            allow you to manage and use the system based on your assigned role
            within this shop.
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-3 mt-5">
        <UFormGroup label="Username">
          <div class="grid grid-cols-4 lg:grid-cols-3">
            <UInput
              :ui="{ rounded: 'rounded-r-none' }"
              class="col-span-2 lg:col-span-1"
              disabled
              model-value="eversoft-"
            />
            <UInput :ui="{ rounded: 'rounded-l-none' }" class="col-span-2" />
          </div>
        </UFormGroup>

        <UFormGroup label="Password">
          <UInput />
        </UFormGroup>

        <UButton class="mt-3" color="black" label="Setup my account" block />
      </div>
    </div>
  </div>
</template>
