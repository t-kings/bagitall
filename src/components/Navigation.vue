<template>
  <nav class="web webNavigation">
    <div class="navigationContact">
      <ul>
        <li>
          <a href="#"> <font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
        </li>
        <li>
          <a href="#"> <font-awesome-icon :icon="['fab', 'twitter']" /></a>
        </li>
        <li>
          <a href="#"> <font-awesome-icon :icon="['fab', 'instagram']" /></a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#"><font-awesome-icon :icon="['fas', 'envelope']" /> {{companyEmail}}</a>
        </li>
        <li>
          <a href="#"><font-awesome-icon :icon="['fas', 'phone-alt']" /> {{companyPhoneNumber}}</a>
        </li>
        <li>
          <select name="" id="">
            <option value="USD">NGN</option>
            <option value="USD">USD</option>
          </select>
        </li>
      </ul>
    </div>

    <div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Shop <font-awesome-icon :icon="['fas', 'angle-down']" /></a>
        </li>
        <li>
          <a href="#">Collection <font-awesome-icon :icon="['fas', 'angle-down']" /></a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Pages <font-awesome-icon :icon="['fas', 'angle-down']" /></a>
        </li>
      </ul>
      <div>
        <h1>BagItAll<font-awesome-icon :icon="['fas', 'circle']" /></h1>
      </div>
      <ul>
        <li>
          <a href="#"><font-awesome-icon :icon="['far', 'user']" /> <font-awesome-icon :icon="['fas', 'angle-down']" /></a>
        </li>
        <li>
          <a href="#"><font-awesome-icon :icon="['far', 'heart']" />  <font-awesome-icon :icon="['fas', 'angle-down']" /></a>
        </li>
        <li>
          <a href="#"><font-awesome-icon :icon="['fas', 'shopping-bag']" />  <font-awesome-icon :icon="['fas', 'angle-down']" /></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Navigation',
  props: {
    companyEmail: String,
    companyPhoneNumber: String
  },
  components: {

  }
}
</script>
