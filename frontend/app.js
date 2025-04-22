const list = document.getElementById('employeeList');
fetch('http://localhost:3000/employee')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((emp) => {
      const item = document.createElement('li');
      item.textContent = `${emp.first_name} ${emp.last_name} - ${emp.job} - R$${emp.salary}`;
      list.appendChild(item);
    });
  })
  .catch((err) => console.error('Erro ao carregar funcionários:', err));
