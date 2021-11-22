import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./modules/rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./modules/reducer";
import { routerMiddleware } from "connected-react-router";
import history from "../history";
import TokenService from "../services/TokenService";

const create = () => {
  const token = TokenService.get();
  // console.log(history);
  const sagaMiddleware = createSagaMiddleware();
  // console.log(sagaMiddleware);
  const store = createStore(
    reducer(history),
    {
      auth: {
        token,
        loading: false,
        error: null,
      },
    },
    composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
  );

  sagaMiddleware.run(rootSaga);
  return store;
};

export default create;
