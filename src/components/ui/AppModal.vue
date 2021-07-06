<template>
  <div class="modal fade show" >
    <div class="modal-dialog modal-sm modal-dialog-centered"  >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Подтвердите подписку</h5>
          <button
            type="button"
            class="btn-close"
            @click="$emit('closeModal')"
          ></button>
        </div>
        <div class="modal-body">
          <form class="d-flex align-items-center justify-content-between" @submit.prevent="sendSubscription">
              <div class="form-check">
                  <input class="form-check-input" type="checkbox" v-model="acceptInput" id="subscribe">
                  <label for="subscribe" class="form-check-label">
                      Я соглашаюсь на рассылку 
                  </label>
              </div>
              <button class="btn btn-outline-primary" type="submit" :disabled="!acceptInput">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex';
export default {
  emits : ['closeModal'],
    setup(_, { emit }) {
        const store = useStore()
        const acceptInput = ref('')
        const sendSubscription = () => {
          store.dispatch('subscriptionNotifications',acceptInput.value)
          emit('closeModal')
        }
        return {
             acceptInput,
             sendSubscription
        }
    }
};
</script>

<style>
.modal {
  display: block;
}
.modal-sm {
    max-width: 450px !important;
}
.modal-dialog {
    margin: 0 auto;
}
</style>