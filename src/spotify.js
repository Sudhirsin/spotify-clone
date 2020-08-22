// spotify app documentation
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#


export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "b1165d82b9834b3cb71a038be5f3eac0";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

// during the redirect
// http://localhost:3000/#access_token=BQBiZLphJLNC3gXWxDW-SE_eSiUAOZ2t-MkG3h9IdcJGkMSTXOSruMAnIaHW0a0LT8YPY1UsC_sojEK8gBA9AZIaVSxx4cE8oaPOmzhLSm6Su2XZAlAz7rgbZA0ORDaCGDNU_0pMB72Uw3mp5Td0CygUgsKmEp3YgtmI41bz8rOx9QYrUGZO&token_type=Bearer&expires_in=3600
// extract the access token from url
// window.location.hash -- it will go to url and find the hash
// pulling the accessToken

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((intial, item) => {
            // #access_token=BQBiZLphJLNC3gXWxDW-SE
            let parts = item.split('=')

            intial[parts[0]] = decodeURIComponent(parts[1])

            return intial
        }, {});
}


// ascii space -- '%20'
// will show the prompt
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;


