import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import users from './users';


/*   
Redux reducer:
  Tai funkcija, kuri kviečiama kiekvieną kartą, kuomet siunčiami pakitimai į Redux'ą
  Siunčiant pakitimus, automatiškai vykdomas reducer'is.
  Reducer'is visuomet į parametrus gauna tokius duomenis:
      1 param - redux aplikacijos esamas state
      2. param siųsto veiksmo (dispatched action) duomenys

  Redux reducer'io tikslas yra gavus esamą būseną (state) ir išsiųstą  veiksmą (action)
  grąžinti VISIŠKAI NAUJAI SUDARYTĄ būseną (state).
*/

const store = configureStore({
  reducer: {
    users,
    auth,
  },
});

export default store;