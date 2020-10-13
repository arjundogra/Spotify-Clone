export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000";

const clientId = "333d3a3f1b26425eb89b4e33df82e06e";

const scopes = ["user-read-currently-playing", "user-read-playback-state"];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      if (item) {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
