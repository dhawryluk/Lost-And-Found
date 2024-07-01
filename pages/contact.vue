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
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit="submit"
          >
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
                class="w-full px-3 py-2 placeholder-gray-300 border border-accent2 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
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
                class="w-full px-3 py-2 placeholder-gray-300 border border-accent2 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
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
                class="w-full px-3 py-2 placeholder-gray-300 border border-accent2 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
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
                class="w-full px-3 py-2 placeholder-gray-300 border border-accent2 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                required
              ></textarea>
            </div>
            <div class="mb-6">
              <button
                type="submit"
                class="w-full px-3 py-4 text-primeColor bg-accent1 rounded-md focus:bg-secondary focus:outline-none"
              >
                Send Message
              </button>
            </div>
            <p class="text-base text-center text-gray-500" id="result"></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// const router = useRouter();

// const form = ref({
//   access_key: "7a7b79ee-dc60-4ded-9191-93af3818b352",
//   subject: "New Submission from Web3Forms",
//   name: "",
//   email: "",
//   phone: "",
//   message: "",
// });

// const result = ref("");
// const status = ref("");

// const submitForm = async () => {
//   result.value = "Please wait...";
//   try {
//     const response = await $fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: form.value,
//     });

//     console.log(response); // You can remove this line if you don't need it

//     result.value = response.message;

//     if (response.status === 200) {
//       status.value = "success";
//       router.push("/index");
//     } else {
//       console.log(response); // Log for debugging, can be removed
//       status.value = "error";
//     }
//   } catch (error) {
//     console.log(error); // Log for debugging, can be removed
//     status.value = "error";
//     result.value = "Something went wrong!";
//   } finally {
//     // Reset form after submission
//     form.value.name = "";
//     form.value.email = "";
//     form.value.phone = "";
//     form.value.message = "";

//     // Clear result and status after 5 seconds
//     setTimeout(() => {
//       result.value = "";
//       status.value = "";
//     }, 5000);
//   }
// };
</script>
