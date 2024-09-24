fetch('services.json')
  .then(response => response.json())
  .then(data => {
    const servicesContainer = document.getElementById('servicesContainer');

    // Loop through each service and create HTML elements
    data.services.forEach(service => {
      // Create service card
      const serviceCard = document.createElement('div');
      serviceCard.classList.add('bg-white', 'shadow-md', 'rounded-lg', 'p-6', 'text-center', 'hover:shadow-xl', 'transition', 'duration-300');

      // Add service icon
      const serviceIcon = document.createElement('div');
      serviceIcon.classList.add('text-4xl', 'mb-4');
      serviceIcon.innerText = service.icon;
      serviceCard.appendChild(serviceIcon);

      // Add service title
      const serviceTitle = document.createElement('h3');
      serviceTitle.classList.add('text-2xl', 'font-semibold', 'mb-2');
      serviceTitle.innerText = service.title;
      serviceCard.appendChild(serviceTitle);

      // Add service description
      const serviceDescription = document.createElement('p');
      serviceDescription.classList.add('text-gray-600');
      serviceDescription.innerText = service.description;
      serviceCard.appendChild(serviceDescription);

      // Append the service card to the container
      servicesContainer.appendChild(serviceCard);
    });
  })
  .catch(error => console.error('Error fetching the services:', error));