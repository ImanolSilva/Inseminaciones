 // Datos del dashboard en formato JSON
 const datos = {
  "Inseminations": [
      {
          "tipo": "Total inseminaciones",
          "cantidad": 93,
          "porcentaje": ""
      },
      {
          "tipo": "Inseminación sistema",
          "cantidad": 57,
          "porcentaje": "61.29%"
      },
      {
          "tipo": "Inseminación Tiempo fijo",
          "cantidad": 7,
          "porcentaje": "7.53%"
      },
      {
          "tipo": "Ins por decisión inseminador",
          "cantidad": 29,
          "porcentaje": "31.18%"
      }
  ],
  "Alerts": [
      {
          "tipo": "Animales para inseminar",
          "cantidad": 500,
          "porcentaje": ""
      },
      {
          "tipo": "Con inseminación",
          "cantidad": 410,
          "porcentaje": "82.00%"
      },
      {
          "tipo": "Sin inseminación",
          "cantidad": 90,
          "porcentaje": "18.00%"
      },
      {
          "tipo": "Rechazada por inseminación",
          "cantidad": 10,
          "porcentaje": "11.11%"
      }
  ],
  "detalles": [
    {
        "hora": "0",
        "animales": "0"
    },
    {
        "hora": "1",
        "animales": "10"
    },
    {
        "hora": "2",
        "animales": "20"
    },
    {
        "hora": "3",
        "animales": "0"
    },
    {
        "hora": "4",
        "animales": "0"
    },
    {
        "hora": "5",
        "animales": "0"
    },
    {
        "hora": "6",
        "animales": "0"
    },
    {
        "hora": "7",
        "animales": "0"
    },
    {
        "hora": "8",
        "animales": "0"
    },
    {
        "hora": "9",
        "animales": "0"
    },
    {
        "hora": "10",
        "animales": "0"
    },
    {
        "hora": "11",
        "animales": "0"
    },
    {
        "hora": "12",
        "animales": "0"
    },
    {
        "hora": "13",
        "animales": "0"
    },
    {
        "hora": "14",
        "animales": "0"
    },
    {
        "hora": "15",
        "animales": "0"
    },
    {
        "hora": "16",
        "animales": "0"
    },
    {
        "hora": "17",
        "animales": "0"
    },
    {
        "hora": "18",
        "animales": "0"
    },
    {
        "hora": "19",
        "animales": "0"
    },
    {
        "hora": "20",
        "animales": "0"
    },
    {
        "hora": "21",
        "animales": "0"
    },
    {
        "hora": "22",
        "animales": "0"
    },
    {
        "hora": "23",
        "animales": "0"
    },
    {
        "hora": "24",
        "animales": "0"
    }
]

};

// Función para calcular y actualizar los porcentajes en la tabla de Detalles de Inseminaciones por Hora
function calcularYActualizarResultados() {
  datos.detalles.forEach(detalle => {
      const animales = parseInt(detalle.animales);
      const animalesInseminacionSistema = datos.Inseminations[1].cantidad; // Índice 1 para Inseminación sistema
      const porcentaje = animales / animalesInseminacionSistema * 100;
      detalle.porcentaje = porcentaje.toFixed(2); // Almacena el resultado en el campo 'porcentaje' del objeto detalle
  });

  // Llamar a la función para mostrar el resumen de Alertas y el resumen de Inseminaciones
  mostrarResumenAlertas();
  mostrarDetallesInseminacionesPorHora(); // Agregamos esta función
}

// Función para mostrar el resumen de Alertas y el resumen de Inseminaciones
function mostrarResumenAlertas() {
  const alertasTableBody = document.getElementById('alertasTableBody');
  const inseminacionesTableBody = document.getElementById('inseminacionesTableBody');

  datos.Alerts.forEach(alerta => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${alerta.tipo}</td>
          <td>${alerta.cantidad}</td>
          <td>${alerta.porcentaje}</td>
      `;
      alertasTableBody.appendChild(row);
  });

  datos.Inseminations.forEach(inseminacion => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${inseminacion.tipo}</td>
          <td>${inseminacion.cantidad}</td>
          <td>${inseminacion.porcentaje}</td>
      `;
      inseminacionesTableBody.appendChild(row);
  });
}

// Función para mostrar los detalles de Inseminaciones por Hora
function mostrarDetallesInseminacionesPorHora() {
  const detallesTableBody = document.getElementById('detallesTableBody');

  datos.detalles.forEach(detalle => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${detalle.hora}</td>
          <td>${detalle.animales}</td>
          <td>${detalle.porcentaje}</td>
      `;
      detallesTableBody.appendChild(row);
  });
}

// Llamar a la función para calcular y actualizar los resultados antes de mostrar la tabla "Detalles de Inseminaciones por Hora"
calcularYActualizarResultados();

// Llamar a las funciones para crear y mostrar los gráficos
crearActualizarGraficoInseminaciones();
crearActualizarGraficoAlertas();
crearActualizarGraficoDetalles();

// Función para crear y actualizar el gráfico de Inseminaciones
function crearActualizarGraficoInseminaciones() {
  const canvas = document.getElementById('inseminacionesChart');
  const ctx = canvas.getContext('2d');

  const labels = datos.Inseminations.map(item => item.tipo);
  const cantidades = datos.Inseminations.map(item => item.cantidad);

  const colors = [
      'rgba(255, 99, 132, 0.6)',
      'rgba(54, 162, 235, 0.6)',
      'rgba(255, 206, 86, 0.6)',
      'rgba(75, 192, 192, 0.6)'
  ];

  const data = {
      labels: labels,
      datasets: [{
          data: cantidades,
          backgroundColor: colors
      }]
  };

  const config = {
      type: 'pie',
      data: data
  };

  new Chart(ctx, config);
}

// Función para crear y actualizar el gráfico de Alertas
function crearActualizarGraficoAlertas() {
  const canvas = document.getElementById('alertasChart');
  const ctx = canvas.getContext('2d');

  const labels = datos.Alerts.map(item => item.tipo);
  const cantidades = datos.Alerts.map(item => item.cantidad);

  const colors = [
      'rgba(255, 99, 132, 0.6)',
      'rgba(54, 162, 235, 0.6)',
      'rgba(255, 206, 86, 0.6)',
      'rgba(75, 192, 192, 0.6)'
  ];

  const data = {
      labels: labels,
      datasets: [{
          data: cantidades,
          backgroundColor: colors
      }]
  };

  const config = {
      type: 'pie',
      data: data
  };

  new Chart(ctx, config);
}

// Función para crear y actualizar el gráfico de Detalles de Inseminaciones por Hora
function crearActualizarGraficoDetalles() {
  const canvas = document.getElementById('detallesChart');
  const ctx = canvas.getContext('2d');

  const horas = datos.detalles.map(dato => dato.hora);
  const animales = datos.detalles.map(dato => parseInt(dato.animales));
  const resultados = datos.detalles.map(dato => parseFloat(dato.porcentaje)); // Cambiamos parseInt a parseFloat

  const data = {
      labels: horas,
      datasets: [
          {
              label: 'Animales',
              data: animales,
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderWidth: 1,
          },
          {
              label: 'Resultado',
              data: resultados, // Datos de resultados
              backgroundColor: 'rgba(255, 99, 132, 0.6)', // Color para los resultados
              borderWidth: 1,
          },
      ],
  };

  const config = {
      type: 'bar',
      data: data,
      options: {
          scales: {
              y: {
                  beginAtZero: true,
              },
          },
      },
  };

  new Chart(ctx, config);
}