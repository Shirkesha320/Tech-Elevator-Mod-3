<template>
  <form v-on:submit.prevent>
    <div class="field">
      <label for="title">Title</label>
      <input name="title" type="text" v-model="title" />
    </div>
    <div class="field">
      <label for="messageText">Message</label>
      <input name="messageText" type="text" v-model="messageText" />
    </div>
    <div class="actions">
      <button type="submit" v-on:click="updateMessage()">Update Message</button>
    </div>
  </form>
</template>

<script>
import messageService from "../services/MessageService";

export default {
  name: "create-message",
  props: ["topicId", "messageId"],
  data() {
    return {
      title: "",
      messageText: ""
    };
  },
  methods: {
   updateMessage() {
      const message = {
        id: this.messageId,
        topicId: this.topicId,
        title: this.title,
        messageText: this.messageText
      };
      // call update in message service
      messageService.update(message.id, message).then (APIResponse => {
        if (APIResponse.status === 201 || APIResponse.status === 200) {
          this.$router.push({ name: "Messages", params: { id: this.topicId }}); 
        }
      })
      .catch ( APIError => {
        if(APIError.response) {
          this.errorMsg = "Error updating message: " + APIError.response.statusText;        
        } else if (APIError.request) {
          this.errorMsg = "Server could not be reached.";
        } else {
          this.errorMsg = "Error updating message.";
        }
      })
    }
  },
  created() {
    messageService
      .get(this.messageId)
      .then(response => {
        this.$store.commit("SET_ACTIVE_MESSAGE", response.data);
        this.title = response.data.title;
        this.messageText = response.data.messageText;
      })
      .catch(error => {
        if (error.response.status == 404) {
          this.$router.push("/not-found");
        }
      });
  }
};
</script>

<style>
</style>
