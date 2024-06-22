import { createRouter, createWebHistory } from 'vue-router';
import DashboardPage from '@/components/DashboardPage.vue';
import LoginPage from '@/components/LoginPage.vue';
import RegisterPage from '@/components/RegisterPage.vue';
import DriversList from '@/components/DriversList.vue';
import CargosList from '@/components/CargosList.vue';
import ProfilePage from '@/components/ProfilePage.vue';
import AddCargo from '@/components/AddCargo.vue';
import GuestAddCargo from '@/components/GuestAddCargo.vue';
import HomePage from '@/components/HomePage.vue';
import RegisterTruck from '@/components/RegisterTruck.vue';
import TruckPage from '@/components/TruckPage.vue';
import AboutUs from '@/components/AboutUs.vue';
import EditCargo from '@/components/EditCargo.vue';

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/dashboard', component: DashboardPage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/drivers-list', component: DriversList },
  { path: '/cargos-list', component: CargosList },
  { path: '/profile', component: ProfilePage },
  { path: '/add-cargo', component: AddCargo },
  { path: '/guest-add-cargo', component: GuestAddCargo },
  { path: '/home', component: HomePage },
  { path: '/register-truck', component: RegisterTruck },
  { path: '/truck-page', component: TruckPage },
  { path: '/about-us', component: AboutUs },
  { path: '/edit-cargo/:id', component: EditCargo, name: 'edit-cargo' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('token')) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
