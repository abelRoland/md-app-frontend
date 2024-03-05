export async function fetchMedias(mediaKind: string) {
  let path = `/medias/?${mediaKind}`
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + path)
  const json = await res.json()
  return json
}

export async function fetchUsers() {
  let path = '/users';
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + path);
  const json = await res.json();
  return json;
}