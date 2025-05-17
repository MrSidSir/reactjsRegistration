document.getElementById('labourForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    job: e.target.job.value,
    location: e.target.location.value
  };

  try {
    const res = await fetch('http://localhost:5000/api/labour/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const result = await res.json();
    alert(result.message);
  } catch (error) {
    console.error('Error:', error);
    alert("Something went wrong!");
  }
});
