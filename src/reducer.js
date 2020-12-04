export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQCPsMpHFNLChyLVfUh4OGJy7wLsfqwtbkBjMHP-VMmc1tW6ObV7FGhanS8jto_aEi0zCSju5ytUkYny0TXMDnrWPHKhr1GVY_e4Mavtv488ER52C0JZCfEnkACMdlQzCKcVVjr6Iuz2bJUuymvVgpDtzs7ZUm842ImMpnR-8Fg",
};

const reducer = (state, action) => {
  console.log("👽", action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
export default reducer;
