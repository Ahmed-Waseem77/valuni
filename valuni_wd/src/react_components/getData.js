// Function to fetch data from the server

export async function getData(email) {
  try {
    // Include the email in the URL
    const url = `http://localhost:3005/getCourses?email=${encodeURIComponent(email)}`;
    const response = await fetch(url);
    const data = await response.json();
    
    console.log('Data fetched successfully');
    console.log(data);
    
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}
