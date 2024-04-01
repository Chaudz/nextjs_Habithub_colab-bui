function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function Dashbroad() {
  const n = getRandomInt(2);

  if (n === 1) {
    throw new Error("Errow loading view");
  }

  return <div>Dashbroad</div>;
}
