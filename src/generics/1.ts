async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data: T = await response.json();
  return data;
}


interface UserData {
  id: number;
  name: string;
  email: string;
}

const url = "https://api.example.com/user/1";
fetchData<UserData>(url)
  .then((data) => {
    console.log(data.id); 
    console.log(data.name);
    console.log(data.email);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
