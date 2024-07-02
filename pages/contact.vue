<template>
  <div class="flex items-center min-h-screen">
    <div class="container mx-auto">
      <div class="max-w-md mx-auto my-10 bg-secondary p-5 rounded-md shadow-sm">
        <div class="text-center">
          <h1 class="my-3 text-3xl font-semibold text-accent2">Contact Us</h1>
          <p class="text-accent1">
            Request more info, quotes or current availability.
          </p>
        </div>
        <div class="m-7">
          <form @submit.prevent="submitForm">
            <div class="mb-6">
              <label for="name" class="block mb-2 text-sm text-black"
                >Full Name</label
              >
              <input
                type="text"
                name="name"
                v-model="form.name"
                placeholder="John Doe"
                required
                class="w-full px-3 py-2 bg-white placeholder-gray-300 border border-accent2 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div class="mb-6">
              <label for="email" class="block mb-2 text-sm text-black"
                >Email Address</label
              >
              <input
                type="email"
                name="email"
                v-model="form.email"
                placeholder="your@email.com"
                required
                class="w-full px-3 py-2 bg-white placeholder-gray-300 border border-accent2 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div class="mb-6">
              <label for="phone" class="text-sm text-black">Phone Number</label>
              <input
                type="text"
                name="phone"
                v-model="form.phone"
                placeholder="+1 (555) 1234-567"
                required
                class="w-full px-3 py-2 bg-white placeholder-gray-300 border border-accent2 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div class="mb-6">
              <label for="message" class="block mb-2 text-sm text-black"
                >Your Message</label
              >

              <textarea
                rows="5"
                name="message"
                v-model="form.message"
                placeholder="Your Message"
                class="w-full px-3 py-2 bg-white placeholder-gray-300 border border-accent2 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                required
              ></textarea>
            </div>
            <div class="mb-6">
              <PrimaryButton
                label="Open"
                @click="isOpen = true"
                type="submit"
                class="w-full px-3 text-center text-primeColor bg-accent1 rounded-md focus:bg-secondary focus:outline-none"
              >
                Send Message
              </PrimaryButton>
            </div>
            <p class="text-base text-center text-gray-500" id="result"></p>
          </form>
          <div>
            <UModal v-model="isOpen" prevent-close>
              <UCard
                :ui="{
                  background: 'bg-primeColor dark:bg-primeColor',
                }"
              >
                <div
                  class="flex items-center justify-between text-white font-bodyText"
                >
                  <h3 class="text-base text-black font-semibold leading-6">
                    Your Message has been Sent!
                  </h3>
                  <UButton
                    color="white"
                    variant="ghost"
                    icon="i-heroicons-x-mark-20-solid"
                    class="-my-1 bg-accent2"
                    @click="isClosed"
                  />
                </div>
              </UCard>
            </UModal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const isOpen = ref(false);

const form = ref({
  access_key: "7a7b79ee-dc60-4ded-9191-93af3818b352",
  subject: "New Submission from Web3Forms",
  name: "",
  email: "",
  phone: "",
  message: "",
});

const result = ref("");
const status = ref("");

const submitForm = async () => {
  result.value = "Please wait...";
  try {
    const response = await $fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: form.value,
    });

    result.value = response.message;

    if (response.status === 200) {
      status.value = "success";
    } else {
      status.value = "error";
    }
  } catch (error) {
    status.value = "error";
    result.value = "Something went wrong!";
  } finally {
    form.value.name = "";
    form.value.email = "";
    form.value.phone = "";
    form.value.message = "";

    setTimeout(() => {
      result.value = "";
      status.value = "";
    }, 5000);
  }
};

async function isClosed() {
  router.push("/");
}
</script>
