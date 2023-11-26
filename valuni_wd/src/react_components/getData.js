// Function to fetch data from the server
export async function getData() {
    try {
      const response = await fetch('http://localhost:3005/getCourses');
      const data = await response.json();
        console.log('Data fetched successfully');
        console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }