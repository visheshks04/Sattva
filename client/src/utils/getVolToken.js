const endPoint = process.env.REACT_APP_TOKEN_ENDPOINT;
const room_id = process.env.REACT_APP_VOLUNTEER_ROOM_ID;

export default async function getVolToken(role) {
  const response = await fetch(`${endPoint}api/token`, {
    method: 'POST',
    body: JSON.stringify({
      user_id: '5fc62c5872909272bf9995e1', // User ID assigned by you (different from 100ms' assigned id)
      role: role, //speaker , moderator
      room_id,
    }),
  });

  const { token } = await response.json();

  return token;
}
