<template>
  <div>
    <h2>Contactez nous</h2>
    <p>Adresse : {{ address }}</p>
    <p>Téléphone : {{ phone }}</p>
    <p>Email : {{ email }}</p>
    <p>Horaires :</p>
    <ul>
      <li>L-V: 08:00 à 19:00</li>
      <li>Samedi: 07:00 à 13:00</li>
      <li>Dimanche: 07:00 à 13:00</li>
    </ul>
  </div>
</template>
<script>
import {mapState} from '../store/index';

export default {
  name: 'Contact',
  computed: {
    ...mapState({
      address: 'address',
      email: 'email',
      phone: 'phone',
    })
  }
}
</script>