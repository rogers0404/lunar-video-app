const newRoomEndpoint =
  `https://api.daily.co/v1/rooms`; // API

/**
 * Create a short-lived room for demo purposes.
 *
 * It uses the redirect proxy as specified in netlify.toml`
 * This will work locally if you following the Netlify specific instructions
 * in README.md
 *
 * See https://docs.daily.co/reference#create-room for more information on how
 * to use the Daily REST API to create rooms and what options are available. 
 */
async function createRoom() {

  const exp = Math.round(Date.now() / 1000) + 60 * 30; //it is just last 30 min the room... we need it last the time the meeting is set
  const options = {
    properties: {
      exp: exp,
    },
  };
  let response = await fetch(newRoomEndpoint, {
    method: "POST",
    body: JSON.stringify(options),
    headers: {
      Authorization: "Bearer 6f137cc133efcb55ef2f00e4e042f76442ae03e2b444c89b5dbbe7376f328b22" // that's my API key
    },
  }),
    room = await response.json();
  return room;

}

export default { createRoom };
