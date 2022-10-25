<template>
  <v-if v-if="!isAuthenticated">
    <v-button @click="login">Login</v-button>
  </v-if>
  <v-else>
    <v-button @click="logout">Logout</v-button>
  </v-else>
</template>
