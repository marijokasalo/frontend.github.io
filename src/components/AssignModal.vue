<template>
  <div class="modal">
    <div class="modal-content">
      <span class="close" @click="$emit('close')">&times;</span>
      <h2>Assign Driver</h2>
      <select v-model="selectedDriver" class="driver-select">
        <option v-for="driver in drivers" :key="driver._id" :value="driver">{{ driver.name }} {{ driver.surname }}</option>
      </select>
      <button class="btn assign" @click="assignDriver">Assign</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AssignModal',
  props: {
    drivers: Array,
    cargo: Object,
  },
  data() {
    return {
      selectedDriver: null,
    };
  },
  methods: {
    assignDriver() {
      this.$emit('assign', this.selectedDriver);
    },
  },
};
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
  max-width: 500px;
  border-radius: 5px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.driver-select {
  width: 100%;
  padding: 10px;
  margin: 20px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
