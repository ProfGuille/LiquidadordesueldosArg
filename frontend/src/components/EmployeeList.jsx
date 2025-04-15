import React, { useEffect, useState } from "react";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/empleados")
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error("Error al obtener empleados:", error));
  }, []);

  return (
    <div>
      <h2>Lista de Empleados</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.nombre} {employee.apellido} - ${employee.salario}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
