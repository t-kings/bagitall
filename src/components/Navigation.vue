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

    <div class="navigationLinks">
      <div>
        <a class="logo" href="#">
          <h1>BagItAll<span><font-awesome-icon :icon="['fas', 'circle']" /></span></h1>
        </a>
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li class="dropdown">
          <a href="#">Shop <font-awesome-icon :icon="['fas', 'angle-down']" /></a>
          <div class="dropdownMenu">
            <ul>
              <li v-for="shop in shops" v-bind:key="shop">
                <a href="#">{{shop}}</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="dropdown">
          <a href="#">Collection <font-awesome-icon :icon="['fas', 'angle-down']" /></a>
          <div class="dropdownMenu">
            <ul>
              <li v-for="category  in categories" v-bind:key="category">
                <a href="#">{{category}}</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li class="dropdown">
          <a href="#">Pages <font-awesome-icon :icon="['fas', 'angle-down']" /></a>
          <div class="dropdownMenu">
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Faq</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>

          </div>
        </li>
      </ul>
      <ul>
        <li class="dropdown">
          <a href="#"><font-awesome-icon :icon="['far', 'user']" /> <font-awesome-icon :icon="['fas', 'angle-down']" /></a>
          <div class="dropdownMenu dropLogin">
            <ul>
              <li>
                <a href="#" class="signin">Sign In</a>
              </li>
              <!-- <li>
                <a href="#" class="signin">Sign Out</a>
              </li> -->
              <li>
                <a href="#" class="signup">Sign Up</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#"><font-awesome-icon :icon="['far', 'user']" /> Account</a>
              </li>
              <li>
                <a href="#"><font-awesome-icon :icon="['fas', 'luggage-cart']" />  Orders</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="dropdown">
          <a href="#"><font-awesome-icon :icon="['far', 'heart']" />  <font-awesome-icon :icon="['fas', 'angle-down']" /></a>
          <div class="dropdownMenu shiftLeft savedItems">
            <div>
              <div class="img"> . </div>
              <div class="item">
                <p>Product Name</p>
                <div>
                  <p class="red">&#8358; 5,000</p>
                  <p class="green">-28%</p>
                </div>
                <a href="#"> <font-awesome-icon :icon="['fas', 'shopping-bag']" />  Add to Cart</a>
              </div>
              <div class="cancel"><font-awesome-icon :icon="['fas', 'times']" />   </div>
            </div>
            <div class="seeMore">
              <a href="#">
                See All
              </a>
            </div>
          </div>
        </li>
        <li class="dropdown">
          <a href="#"><font-awesome-icon :icon="['fas', 'shopping-bag']" />  <font-awesome-icon :icon="['fas', 'angle-down']" /></a>
          <div class="dropdownMenu shiftLeft cart">
            <div class="cartItem">
              <div class="img"> . </div>
              <div class="item">
                <p>Product Name</p>
                <div>
                  <p class="red">&#8358; 5,000</p>
                  <p class="green">-28%</p>
                </div>
              </div>
              <div class="cancel"><font-awesome-icon :icon="['fas', 'times']" />   </div>
            </div>
            <div class="viewCart">
              <div>
                .
              </div>
              <a href="#">View Cart</a>
              <div>
                .
              </div>
            </div>
          </div>
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
    companyPhoneNumber: String,
    categories:Object,
    shops:Object
  },

  components: {

  }
}
</script>
