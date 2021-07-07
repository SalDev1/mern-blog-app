import * as api from "../api/index";

export const signIn = (userData) => async (dispatch) => {
  try {
    const { data } = await api.signIn(userData);
    console.log(data);

    dispatch({ type: "AUTH", data: data });
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (userData) => async (dispatch) => {
  try {
    const { data } = await api.signUp(userData);

    dispatch({ type: "AUTH", data: data });
  } catch (error) {
    console.log(error);
  }
};
